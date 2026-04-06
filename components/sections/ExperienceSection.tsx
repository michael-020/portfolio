"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "../ui/button"

interface ExperienceItem {
  company: string
  role: string
  type: string
  period: string
  tags: string[]
  bullets?: string[]
  prUrl?: string
}

const experiences: ExperienceItem[] = [
  {
    company: "Keploy",
    role: "Top 3 Open Source Contributor in March 2025",
    type: "Contribution",
    period: "February - March 2025",
    tags: ["Next.js", "GraphQL", "TailwindCSS"],
    bullets: [
      "Contributed merged PR implementing paginated blog listings for Community and Technology sections using Next.js, GraphQL, and TailwindCSS.",
      "Enhanced blog website performance and user experience through efficient pagination system.",
    ],
    prUrl: "https://github.com/keploy/blog-website/pull/98",
  },
  // Add more experience items here following the same shape
]

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex gap-3">
      {/* Left: dot + vertical company label */}
      <div className="flex flex-col items-center gap-1 pt-1">
        <span
          className="text-sm sm:text-xs tracking-widest text-muted-foreground uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {item.company}
        </span>
      </div>

      {/* Right: card */}
      <div className="flex-1 pb-4">
        {/* Role row */}
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-3 rounded-lg border border-border p-3 text-left transition-colors hover:bg-muted/40"
        >
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md border border-border text-[11px] text-muted-foreground">
            {"</>"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-foreground">{item.role}</p>
            <p className="text-[10px] sm:text-[11px] text-muted-foreground">
              {item.type} &nbsp;·&nbsp; {item.period}
            </p>
          </div>
          {open ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          )}
        </button>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2 py-0.5 text-[10px] sm:text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable bullets */}
        <AnimatePresence>
          {open && item.bullets && (
            <motion.ul
              className="mt-3 space-y-1.5 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                  {b}
                </li>
              ))}
              {item.prUrl && (
                <li className="pt-2">
                  <Button variant="ghost" size="sm">
                    <a
                      href={item.prUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View PR
                    </a>
                  </Button>
                </li>
              )}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <>
      {/* Title row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />
        <div className="flex items-center px-2 sm:px-6 h-12">
          <h2 className="section-heading font-vt323">Experience</h2>
        </div>
        <div className="border-l border-border" />
      </div>

      {/* Content row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />

        <div className="relative px-2 sm:px-6 py-4 sm:py-10">
          <div id="experience" className="absolute -top-10" />

          <div className="flex flex-col">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.role} item={exp} />
            ))}
          </div>
        </div>

        <div className="border-l border-border" />
      </div>
    </>
  )
}