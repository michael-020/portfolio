"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const taglines = [
  "Building things that actually work",
  "Learning by doing, not just watching",
  "Making things a little better each day",
  "From idea to working product",
  "Still learning, still shipping",
]

/**
 * Renders a tagline as individual word spans.
 * Each word enters with a blur+upward slide (staggered),
 * and exits with a blur+downward fade (reverse stagger).
 */
function AnimatedTagline({ text }: { text: string }) {
  const words = text.split(" ")

  return (
    <motion.p
      key={text}
      className="flex flex-wrap gap-x-[0.3em] text-base text-muted-foreground"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.05 },
        },
        exit: {
          transition: { staggerChildren: 0.03, staggerDirection: -1 },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: {
              opacity: 0,
              y: 16,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              },
            },
            exit: {
              opacity: 0,
              y: -10,
              filter: "blur(6px)",
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}

export function ProfileCard() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      className="grid border-b border-border"
      style={{
        gridTemplateColumns:
          "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)",
      }}
    >
      {/* Left rail */}
      <div className="border-r border-border" />

      <div className="relative py-5 px-6">
        <div id="about" className="absolute -top-10" />

        <motion.div
          className="relative flex items-start gap-4 rounded-xl border border-border bg-background p-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Avatar */}
          <div className="flex size-24 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-2xl font-semibold text-muted-foreground">
            MH
          </div>

          {/* Meta */}
          <div className="min-w-0 flex-1">
            <h1 className="flex items-center gap-1.5 text-2xl font-semibold text-foreground">
              Michael Hosamani
            </h1>

            {/* Fixed-height tagline container — no layout shift */}
            <div className="mt-1 h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <AnimatedTagline key={taglines[index]} text={taglines[index]} />
              </AnimatePresence>
            </div>

            <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
              Idle · Currently pretending to rest
            </p>
          </div>

          {/* Progress dots — click to jump to a tagline */}
          <div className="absolute bottom-3.5 right-4 flex items-center gap-1">
            {taglines.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Tagline ${i + 1}`}
              >
                <span
                  className={[
                    "block rounded-full transition-all duration-300",
                    i === index
                      ? "w-4 h-1.5 bg-foreground/40"
                      : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground/30",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right rail */}
      <div className="border-l border-border" />
    </div>
  )
}