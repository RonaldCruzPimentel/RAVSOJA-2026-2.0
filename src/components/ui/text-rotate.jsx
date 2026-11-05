"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import { cn } from "@/lib/utils";

const TextRotate = forwardRef(
  (
    {
      texts,
      rotationInterval = 2500,
      staggerDuration = 0.03,
      staggerFrom = "first",
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      loop = true,
      auto = true,
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const splitIntoCharacters = (text) => {
      return Array.from(text);
    };

    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex];

      const text = currentText.split(" ");

      return text.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== text.length - 1,
      }));
    }, [texts, currentTextIndex]);

    const getStaggerDelay = useCallback(
      (index, totalChars) => {
        if (staggerFrom === "first")
          return index * staggerDuration;

        if (staggerFrom === "last")
          return (totalChars - 1 - index) *
            staggerDuration;

        return index * staggerDuration;
      },
      [staggerFrom, staggerDuration]
    );

    const next = useCallback(() => {
      setCurrentTextIndex((prev) => {
        if (prev === texts.length - 1) {
          return loop ? 0 : prev;
        }

        return prev + 1;
      });
    }, [texts.length, loop]);

    useImperativeHandle(ref, () => ({
      next,
    }));

    useEffect(() => {
      if (!auto) return;

      const interval = setInterval(
        next,
        rotationInterval
      );

      return () => clearInterval(interval);
    }, [next, rotationInterval, auto]);

    return (
      <motion.span
        layout
        className={cn(
          "flex flex-wrap whitespace-pre-wrap",
          mainClassName
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            className="flex flex-wrap"
            layout
          >
            {elements.map(
              (wordObj, wordIndex, array) => {
                const previousCharsCount = array
                  .slice(0, wordIndex)
                  .reduce(
                    (sum, word) =>
                      sum + word.characters.length,
                    0
                  );

                return (
                  <span
                    key={wordIndex}
                    className={cn(
                      "inline-flex",
                      splitLevelClassName
                    )}
                  >
                    {wordObj.characters.map(
                      (char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          initial={{
                            y: 40,
                            opacity: 0,
                          }}
                          animate={{
                            y: 0,
                            opacity: 1,
                          }}
                          exit={{
                            y: -40,
                            opacity: 0,
                          }}
                          transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                            delay: getStaggerDelay(
                              previousCharsCount +
                                charIndex,
                              array.reduce(
                                (sum, word) =>
                                  sum +
                                  word.characters
                                    .length,
                                0
                              )
                            ),
                          }}
                          className={cn(
                            "inline-block",
                            elementLevelClassName
                          )}
                        >
                          {char}
                        </motion.span>
                      )
                    )}

                    {wordObj.needsSpace && (
                      <span className="whitespace-pre">
                        {" "}
                      </span>
                    )}
                  </span>
                );
              }
            )}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    );
  }
);

TextRotate.displayName = "TextRotate";

export { TextRotate };