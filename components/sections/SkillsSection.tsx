"use client"

import { motion } from "framer-motion"

const skills = {
  Languages: ["JavaScript", "TypeScript", "C/C++"],
  "Frameworks & Libraries": [
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "Framer Motion",
    "Zustand",
    "Tailwind CSS",
  ],
  "Databases & Tools": ["PostgreSQL", "Prisma", "MongoDB", "Docker"],
  "Concepts & Development Skills": [
    "WebSockets",
    "Data Structures & Algorithms",
    "API Development",
    "RESTful Services",
  ],
}

export function SkillsSection() {
  return (
    <>
      {/* Title row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />
        <div className="flex items-center px-2 sm:px-6 h-12">
          <h2 className="section-heading font-vt323">Skills</h2>
        </div>
        <div className="border-l border-border" />
      </div>

      {/* Content row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />

        <div className="relative px-2 sm:px-6 py-4 sm:py-10">
          <div id="skills" className="absolute -top-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs text-foreground bg-background hover:border-foreground/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-l border-border" />
      </div>
    </>
  )
}
