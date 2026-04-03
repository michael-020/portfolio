"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects"

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      className="flex flex-col rounded-xl border border-border overflow-hidden bg-background"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-36 flex-shrink-0 overflow-hidden"
        style={{ background: project.gradient ?? "hsl(var(--muted))" }}
      >
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top opacity-90"
          />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-3">
        <div className="mb-1.5 flex items-baseline justify-between gap-1">
          <span className="text-sm font-medium text-foreground truncate">{project.title}</span>
          <span className="flex-shrink-0 text-[11px] text-muted-foreground">{project.date}</span>
        </div>

        <p className="mb-2.5 flex-1 text-[12px] leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="-mx-3 -mb-3 mt-auto grid grid-cols-[1fr_1px_1fr] border-t border-border">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 text-[11px] text-muted-foreground hover:bg-muted transition-colors"
          >
            <ExternalLink className="h-3 w-3" />
            Live link
          </a>
          <div className="bg-border" />
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 text-[11px] text-muted-foreground hover:bg-muted transition-colors"
          >
            <Github className="h-3 w-3" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const DEFAULT_VISIBLE = 4

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, DEFAULT_VISIBLE)

  return (
    <div className="grid border-b border-border" style={{ gridTemplateColumns: "1fr minmax(0, 720px) 1fr" }}>
      {/* Left rail */}
      <div className="border-r border-border" />

      {/* Center content */}
      <div className="relative px-6 py-10">
        <div id="projects" className="absolute -top-10" />
        <h2 className="section-heading">Projects</h2>

        <AnimatePresence>
          <div className="grid grid-cols-2 gap-3">
            {visible.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </AnimatePresence>

        {projects.length > DEFAULT_VISIBLE && (
          <div className="mt-6 flex justify-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-1.5 text-xs text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {showAll ? "Show less" : "View more projects"}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>

      {/* Right rail */}
      <div className="border-l border-border" />
    </div>
  )
}