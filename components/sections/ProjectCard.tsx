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
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold
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
    size === "lg" ? "h-[360px] sm:h-[420px]"
    : size === "md" ? "h-[260px] sm:h-[310px]"
    : "h-[200px] sm:h-[230px]"

  const titleSize =
    size === "lg" ? "text-[clamp(22px,4vw,30px)]"
    : size === "md" ? "text-[clamp(18px,3vw,24px)]"
    : "text-[18px]"

  const maxTags = size === "lg" ? 6 : size === "md" ? 5 : 3

  return (
    <motion.div
      className="group relative block rounded-2xl overflow-hidden shadow-md dark:shadow-neutral-800 bg-muted w-full cursor-pointer"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
      onClick={() => window.open(`https://${project.link}`, '_blank')}
    >
      {/* full-bleed image */}
      <div className={`relative w-full overflow-hidden ${heightClass}`}>
        <Image
          src={project.image}
          alt={project.imageAlt || project.title}
          fill
          className="object-cover transition-all duration-700 ease-out
            brightness-[0.72] group-hover:brightness-[0.88] group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, 50vw"
          priority={size === "lg"}
        />

        {/* gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-transparent pointer-events-none" />

        {/* overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-5 gap-2.5">

          {/* title + action buttons */}
          <div className="flex items-end justify-between gap-3">
            <h3
              className={`font-bold text-white leading-tight drop-shadow tracking-tight ${titleSize}`}
              style={{ letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h3>
            <div className="flex gap-2 flex-shrink-0">
              <GhostBtn href={`https://${project.link}`}>
                <ArrowUpRight className="w-3 h-3" />
                Live
              </GhostBtn>
              <GhostBtn href={project.github}>
                <Github className="w-3 h-3" />
                Code
              </GhostBtn>
            </div>
          </div>

          {/* description — only lg + md */}
          {size !== "sm" && (
            <p className="text-[12.5px] text-white/70 leading-relaxed max-w-[92%] line-clamp-2">
              {project.description}
            </p>
          )}

          {/* tags + live */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex gap-1.5 flex-wrap">
              {project.tech.slice(0, maxTags).map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full
                    bg-white/10 border border-white/20 text-white/75"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > maxTags && (
                <span className="text-[10px] text-white/40 self-center">
                  +{project.tech.length - maxTags}
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
