"use client"

import { AnimatePresence, motion } from "framer-motion"

const bullets = [
  "I'm a Full Stack Developer who enjoys building real-world products, especially at the intersection of AI and modern web technologies. I work with Next.js, MERN stack, TypeScript, and Tailwind to turn ideas into scalable applications.",
  "I like figuring things out by building. Whether it's experimenting with LLMs or solving practical problems, I prefer learning through creating and understanding how systems work in real scenarios.",
  "I focus on steady growth, not just improving technical skills, but becoming more disciplined, thoughtful, and aligned with the kind of work I want to do."
]

export function AboutSection() {

  return (
    <>
      {/* Title row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />
        <div className="flex items-center px-6 h-10">
          <h2 className="section-heading">About</h2>
        </div>
        <div className="border-l border-border" />
      </div>

      {/* Content row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />

        <div className="relative px-6 py-10">
          <ul className="space-y-3">
            {bullets.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2.5 size-1 flex-shrink-0 rounded-full border border-neutral-400 dark:border-neutral-600" />
                <p className="text-sm leading-relaxed text-foreground">{text}</p>
              </li>
            ))}
          </ul>

        </div>

        <div className="border-l border-border" />
      </div>
    </>
  )
}