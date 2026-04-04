"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects"

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      className="flex flex-col rounded-xl border border-dashed border-border overflow-hidden bg-background p-2"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-48 flex-shrink-0 overflow-hidden rounded-md"
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

        <p className="mb-2.5 flex-1 text-[12px] leading-relaxed text-muted-foreground">
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
        <div className="-mx-3 -mb-3 mt-auto grid grid-cols-[1fr_1px_1fr] border-t border-dashed border-border">
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

export function ProjectsSection() {
  return (
    <>
      {/* Title row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />
        <div className="flex items-center px-2 sm:px-6 h-12">
          <h2 className="section-heading font-vt323">Projects</h2>
        </div>
        <div className="border-l border-border" />
      </div>

      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />
        <div className="flex items-center px-2 sm:px-6 h-24 sm:py-2 sm:h-20">
          <p className="font-vt323 text-neutral-400 dark:text-neutral-400 text-base">
            Projects I’ve built along the way, driven by curiosity and a focus on creating things that actually work and have real impact.
          </p>
        </div>
        <div className="border-l border-border" />
      </div>

      {/* Content row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />

        <div className="relative px-2 sm:px-3 py-4 sm:py-8">
          <div id="projects" className="absolute -top-10" />

          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </AnimatePresence>
        </div>

        <div className="border-l border-border" />
      </div>
    </>
  )
}