"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const bullets = [
  "I'm a Full Stack Developer with a passion for crafting accessible, pixel-perfect user interfaces that seamlessly blend thoughtful design with robust engineering. I specialize in building modern, scalable web applications using Next.js, MERN Stack, TypeScript, and Tailwind CSS.",
  "At my core, I'm curious — not just about technology, but about how it shapes the way people think, act, and grow. That curiosity pushes me beyond just coding, into exploring meaning and purpose.",
  "I don't see growth as just skills or achievements, but as becoming more aware, disciplined, and aligned with what I'm doing — and that's something I'm continuously working on.",
]

const extraBullets = [
  "My expertise spans from building intuitive frontends to architecting performant backends with REST APIs and WebSockets. I'm especially drawn to projects at the intersection of design, development, and AI.",
  "I thrive in environments that challenge me to learn, push boundaries, and build meaningful digital products that make an impact.",
]

export function AboutSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {/* Title row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "1fr minmax(0, 720px) 1fr" }}>
        <div className="border-r border-border" />
        <div className="relative px-6 translate-y-2.5">
          <h2 className="section-heading">About</h2>
        </div>
        <div className="border-l border-border" />
      </div>

      {/* Content row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "1fr minmax(0, 720px) 1fr" }}>
        <div className="border-r border-border" />

        <div className="relative px-6 py-10">
          <ul className="space-y-3">
            {bullets.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full border border-border" />
                <p className="text-sm leading-relaxed text-foreground">{text}</p>
              </li>
            ))}

            <AnimatePresence>
              {expanded &&
                extraBullets.map((text, i) => (
                  <motion.li
                    key={`extra-${i}`}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full border border-border" />
                    <p className="text-sm leading-relaxed text-foreground">{text}</p>
                  </motion.li>
                ))}
            </AnimatePresence>
          </ul>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {expanded ? "See less" : "See more"}
          </button>
        </div>

        <div className="border-l border-border" />
      </div>
    </>
  )
}