"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { projects } from "@/lib/projects"

type CardSize = "lg" | "md" | "sm"

/* ─── pulsing live dot ─────────────────────────────────── */
function LiveDot() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <motion.span
        className="block w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
        animate={{ opacity: [1, 0.25, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-[10px] font-semibold tracking-widest uppercase text-white/55">
        Live
      </span>
    </span>
  )
}

/* ─── frosted ghost button (overlaid on image) ─────────── */
function GhostBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-semibold
        bg-white/10 border border-white/25 text-white backdrop-blur-sm
        hover:bg-white/26 hover:border-white/50 transition-all duration-200 whitespace-nowrap"
    >
      {children}
    </a>
  )
}

export function ProjectCard({
  project,
  size,
  delay = 0,
}: {
  project: (typeof projects)[0]
  size: CardSize
  delay?: number
}) {
  const heightClass =
    size === "lg" ? "h-[240px] sm:h-[280px]"
    : size === "md" ? "h-[180px] sm:h-[200px]"
    : "h-[160px] sm:h-[180px]"

  const titleSize =
    size === "lg" ? "text-[clamp(18px,3vw,24px)]"
    : size === "md" ? "text-[clamp(14px,2.5vw,18px)]"
    : "text-[14px]"

  const maxTags = size === "lg" ? 4 : size === "md" ? 3 : 2

  return (
    <motion.div
      className="group relative block rounded-lg overflow-hidden shadow-sm dark:shadow-neutral-800 bg-muted w-full cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -2 }}
      onClick={() => window.open(`https://${project.liveUrl}`, '_blank')}
    >
      {/* full-bleed image */}
      <div className={`relative w-full overflow-hidden ${heightClass}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 ease-out
            brightness-[0.72] group-hover:brightness-[0.88] group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, 50vw"
          priority={size === "lg"}
        />

        {/* gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-transparent pointer-events-none" />

        {/* overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end px-3 pb-3 gap-2">

          {/* title + action buttons */}
          <div className="flex items-end justify-between gap-2">
            <h3
              className={`font-bold text-white leading-tight drop-shadow tracking-tight ${titleSize}`}
              style={{ letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h3>
            <div className="flex gap-1.5 flex-shrink-0">
              <GhostBtn href={`https://${project.liveUrl}`}>
                <ArrowUpRight className="w-2.5 h-2.5" />
                Live
              </GhostBtn>
              <GhostBtn href={project.githubUrl}>
                <Github className="w-2.5 h-2.5" />
                Code
              </GhostBtn>
            </div>
          </div>

          {/* description — only lg + md */}
          {size !== "sm" && (
            <p className="text-[11px] text-white/70 leading-relaxed max-w-[92%] line-clamp-1">
              {project.description}
            </p>
          )}

          {/* tags + live */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex gap-1 flex-wrap">
              {project.tags.slice(0, maxTags).map((t, i) => (
                <span
                  key={i}
                  className="text-[9px] font-medium px-1.5 py-0.5 rounded-full
                    bg-white/10 border border-white/20 text-white/75"
                >
                  {t}
                </span>
              ))}
              {project.tags.length > maxTags && (
                <span className="text-[9px] text-white/40 self-center">
                  +{project.tags.length - maxTags}
                </span>
              )}
            </div>
            <LiveDot />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
