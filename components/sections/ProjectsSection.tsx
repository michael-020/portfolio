"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { projects } from "@/lib/projects"
import { ProjectCard } from "./ProjectCard"
import { useState, useRef } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

type CardSize = "lg" | "md" | "sm"

/* ─── derive layout rows from project list ─────────────────
   Pattern repeats every 4 projects:
     row A: 1 large  (full width)
     row B: 1 medium (full width)
     row C: 2 small  (2-col)
   Leftover after full cycles:
     1 remaining → lg
     2 remaining → lg + md
     3 remaining → lg + 2-col (sm, sm)
──────────────────────────────────────────────────────────── */
type LayoutRow =
  | { type: "single"; project: (typeof projects)[0]; size: CardSize }
  | { type: "pair"; projects: [(typeof projects)[0], (typeof projects)[0]] }

function buildLayout(list: typeof projects): LayoutRow[] {
  const rows: LayoutRow[] = []
  let i = 0
  const sizes: CardSize[] = ["lg", "md"]

  while (i < list.length) {
    const remaining = list.length - i
    const cyclePos = rows.length % 3 // 0=lg, 1=md, 2=pair

    if (cyclePos < 2) {
      // single card (lg or md alternating)
      rows.push({ type: "single", project: list[i], size: sizes[cyclePos] })
      i++
    } else {
      // pair (sm 2-col)
      if (remaining >= 2) {
        rows.push({ type: "pair", projects: [list[i], list[i + 1]] })
        i += 2
      } else {
        // only 1 left at pair slot — make it md
        rows.push({ type: "single", project: list[i], size: "md" })
        i++
      }
    }
  }
  return rows
}

export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  // first 3 layout rows shown by default (covers ~4 projects)
  const DEFAULT_ROWS = 3
  const allRows = buildLayout(projects)
  const visibleRows = showAllProjects ? allRows : allRows.slice(0, DEFAULT_ROWS)
  const hasMore = allRows.length > DEFAULT_ROWS

  const handleToggle = () => {
    if (showAllProjects) {
      setShowAllProjects(false)
      setTimeout(() => {
        listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    } else {
      setShowAllProjects(true)
    }
  }

  return (
    <>
      <div id="projects" className="relative -top-20 sm:-top-40" />
      <motion.section
        className="mb-16 sm:mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2 sm:gap-3"
          variants={fadeInUp}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 21H3V3h9V1H3a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-9h-2v9z" />
            <path d="M3 3h8v8H3z" />
            <path d="M13 13h8v8h-8z" />
            <path d="M17 1v4m-2-2h4" />
          </svg>
          Projects
        </motion.h2>

        {/* dynamic layout grid */}
        <div ref={listRef} className="flex flex-col gap-3.5">
          <AnimatePresence>
            {visibleRows.map((row, rowIdx) => {
              const baseDelay = rowIdx * 0.06

              if (row.type === "single") {
                return (
                  <ProjectCard
                    key={row.project.title}
                    project={row.project}
                    size={row.size}
                    delay={baseDelay}
                  />
                )
              }

              // pair row
              return (
                <motion.div
                  key={`pair-${row.projects[0].title}`}
                  className="grid grid-cols-2 gap-3.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: baseDelay }}
                >
                  <ProjectCard project={row.projects[0]} size="sm" delay={baseDelay} />
                  <ProjectCard project={row.projects[1]} size="sm" delay={baseDelay + 0.04} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* show more / less */}
        {hasMore && (
          <motion.div className="flex justify-center mt-7" variants={fadeInUp}>
            <motion.button
              onClick={handleToggle}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background
                px-5 py-2 text-sm font-medium text-muted-foreground
                hover:border-foreground/25 hover:text-foreground hover:bg-accent
                transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {showAllProjects ? "Show less" : "View more projects"}
              <motion.div
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </motion.section>
    </>
  )
}
