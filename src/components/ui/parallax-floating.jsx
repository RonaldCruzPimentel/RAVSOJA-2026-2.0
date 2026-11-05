"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
} from "react";

import { useAnimationFrame } from "motion/react";
import { cn } from "@/lib/utils";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";

const FloatingContext = createContext(null);

const Floating = ({
  children,
  className,
  sensitivity = 1,
  easingFactor = 0.05,
}) => {
  const containerRef = useRef(null);

  const elementsMap = useRef(new Map());

  const mousePositionRef = useMousePositionRef(containerRef);

  const registerElement = useCallback((id, element, depth) => {
    elementsMap.current.set(id, {
      element,
      depth,
      currentPosition: { x: 0, y: 0 },
    });
  }, []);

  const unregisterElement = useCallback((id) => {
    elementsMap.current.delete(id);
  }, []);

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    elementsMap.current.forEach((data) => {
      const strength = (data.depth * sensitivity) / 20;

      const targetX = mousePositionRef.current.x * strength;
      const targetY = mousePositionRef.current.y * strength;

      const dx = targetX - data.currentPosition.x;
      const dy = targetY - data.currentPosition.y;

      data.currentPosition.x += dx * easingFactor;
      data.currentPosition.y += dy * easingFactor;

      data.element.style.transform = `
        translate3d(
          ${data.currentPosition.x}px,
          ${data.currentPosition.y}px,
          0
        )
      `;
    });
  });

  return (
    <FloatingContext.Provider
      value={{
        registerElement,
        unregisterElement,
      }}
    >
      <div
        ref={containerRef}
        className={cn(
          "absolute inset-0 w-full h-full",
          className
        )}
      >
        {children}
      </div>
    </FloatingContext.Provider>
  );
};

export default Floating;

export const FloatingElement = ({
  children,
  className,
  depth = 1,
}) => {
  const elementRef = useRef(null);

  const elementId = useId();

  const context = useContext(FloatingContext);

  useEffect(() => {
    if (!elementRef.current || !context) return;

    context.registerElement(
      elementId,
      elementRef.current,
      depth
    );

    return () => {
      context.unregisterElement(elementId);
    };
  }, [context, depth, elementId]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "absolute will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
};
