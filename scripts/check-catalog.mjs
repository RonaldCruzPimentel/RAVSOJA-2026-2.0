import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const data = await server.ssrLoadModule('/src/data/catalogo/model.js')
  const { listings, programs, institutions, filterListings, makeListings, monthKey, dateLabel } = data
  assert.equal(institutions.length, 4)
  assert.equal(new Set(programs.map(p => p.id)).size, programs.length)
  assert.equal(new Set(listings.map(p => p.id)).size, listings.length)
  assert.equal(listings.filter(p => p.institutionId === 'cuetmx' && p.startDate).length, 13)
  assert.equal(filterListings(listings, { institution:'cuetmx', month:'2026-09', query:'podologia' }).length, 1)
  assert.equal(filterListings(listings, { institution:'inafam', month:'2026-09', query:'podologia' }).length, 0)
  assert.ok(filterListings(listings, { query:'PODOLOGÍA' }).length)
  assert.ok(listings.filter(p => p.status === 'referencia').every(p => p.startDate === null && p.month === 'pendiente'))
  const ordered = filterListings(listings, { order:'az' })
  assert.ok(ordered.every((p, i) => !i || ordered[i-1].title.localeCompare(p.title, 'es') <= 0))
  const academic = programs[0]
  const generations = makeListings([academic], [
    { id:'edition-2027', programId:academic.id, startDate:'2027-01-01', calendar:[] },
    { id:'edition-2030', programId:academic.id, startDate:'2030-12-31', calendar:[] },
  ])
  assert.equal(generations.length, 2)
  assert.equal(generations[0].curriculum, generations[1].curriculum)
  assert.equal(filterListings(generations, { month:'2030-12' }).length, 1)
  assert.equal(monthKey('2027-01-01'), '2027-01')
  assert.match(dateLabel('2027-01-01'), /1 de enero de 2027/)
  let assets = new Set()
  for (const item of listings) {
    assert.equal(new URL(item.whatsappUrl).hostname, 'wa.me')
    assert.ok(new URL(item.whatsappUrl).searchParams.get('text').includes(item.institution.nombre))
    for (const resource of [item.image,item.modalImage,item.fallbackImage,item.programPdf,item.calendarPdf,item.calendarImage,...item.teachers.map(t => t.foto)]) if(resource) assets.add(resource)
  }
  for (const asset of assets) {
    const clean = decodeURIComponent(asset.split('?')[0])
    const file = clean.startsWith('/src/') ? path.resolve(clean.slice(1)) : path.resolve('public', clean.slice(1))
    assert.ok(fs.existsSync(file), 'Missing asset: '+asset)
    if(file.endsWith('.pdf')) assert.equal(fs.readFileSync(file).subarray(0,5).toString(), '%PDF-')
  }
  console.log(JSON.stringify({ programs:programs.length, listings:listings.length, assets:assets.size,
    institutes:institutions.map(i=>({ name:i.nombre, count:programs.filter(p=>p.institutionId===i.id).length })),
    completeAcademic:listings.filter(p=>p.description&&p.curriculum.length&&p.teachers.length&&p.calendar?.length&&p.programPdf).map(p=>p.title),
    calendarPDF:listings.filter(p=>p.calendarPdf).length, calendarImage:listings.filter(p=>p.calendarImage).length,
    pending:programs.filter(p=>!p.description).length, result:'PASS' },null,2))
} finally { await server.close() }
