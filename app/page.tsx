"use client"

import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  Award,
  Code2,
  FolderGit2,
  FileText,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react"
import { projects } from "@/lib/projects"
import { skills } from "@/lib/skills"
import Image from "next/image"
import { useState, useRef } from "react"

/* ─── motion variants ──────────────────────────────────── */
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const expandedTextVariants = {
  initial: { opacity: 0, height: 0, marginTop: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    marginTop: "1rem",
    transition: { duration: 0.5, ease: easeInOut, opacity: { delay: 0.1, duration: 0.3 } },
  },
  exit: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.4, ease: easeInOut, height: { delay: 0.1 } },
  },
}

const btnVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2, ease: easeInOut } },
  tap:   { scale: 0.95, transition: { duration: 0.1, ease: easeInOut } },
}

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

/* ─── cinematic card sizes ─────────────────────────────── */
type CardSize = "lg" | "md" | "sm"

function ProjectCard({
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
    <motion.a
      href={`https://${project.link}`}
      target="_blank"
      rel="noreferrer"
      className="group relative block rounded-2xl overflow-hidden shadow-md dark:shadow-neutral-800 bg-muted w-full"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
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
    </motion.a>
  )
}

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

function buildLayout(list: (typeof projects)[]): LayoutRow[] {
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

/* ─── main page ─────────────────────────────────────────── */
export default function Portfolio() {
  const [showMore, setShowMore] = useState(false)
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
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 max-w-4xl pt-6 sm:pt-32">

        {/* ── ABOUT ── */}
        <div id="about" className="absolute top-0" />
        <motion.section className="text-center mb-16 sm:mb-20" initial="initial" animate="animate">
          <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 0.5 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Michael Hosamani
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 px-2"
              variants={fadeInUp}
            >
              Full Stack Developer & Open Source Contributor
            </motion.p>
            <motion.div
              className="text-base sm:text-lg md:text-xl text-muted-foreground text-justify max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
              variants={fadeInUp}
            >
              <p>
                I&apos;m a Full Stack Developer with a passion for crafting accessible, pixel-perfect user
                interfaces that seamlessly blend thoughtful design with robust engineering. I specialize in
                building modern, scalable web applications using Next.js, MERN Stack, TypeScript, and
                Tailwind CSS.
              </p>
              <AnimatePresence mode="wait">
                {showMore && (
                  <motion.div
                    variants={expandedTextVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <p>
                      My expertise spans from building intuitive frontends to architecting performant
                      backends with REST APIs and WebSockets. I&apos;m especially drawn to projects at
                      the intersection of design, development, and AI, where user experience meets
                      technical excellence.
                    </p>
                    <p className="mt-4">
                      I thrive in environments that challenge me to learn, push boundaries, and build
                      meaningful digital products that make an impact.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.button
                onClick={() => setShowMore(!showMore)}
                className="text-sm opacity-60 cursor-pointer underline underline-offset-4 font-medium mt-4 block transition-all duration-300 hover:opacity-80"
                whileHover="hover"
                whileTap="tap"
                variants={btnVariants}
              >
                {showMore ? "See less" : "See more"}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-2"
            variants={fadeInUp}
          >
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:michaelhosamani26@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="hidden xs:inline">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/michael-020" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span className="hidden xs:inline">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com/in/michael-hosamani0206/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span className="hidden xs:inline">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://x.com/MichaelHosamani" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="hidden xs:inline">X</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://drive.google.com/file/d/1VKa07n8xvyZ7CX3439G_VDlBWz4nhF70/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden xs:inline">Resume</span>
              </a>
            </Button>
          </motion.div>
        </motion.section>

        {/* ── EXPERIENCE ── */}
        <div id="experience" className="relative -top-20 sm:-top-40" />
        <motion.section className="mb-16 sm:mb-20" initial="initial" whileInView="animate" viewport={{ once: true }}>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
            variants={fadeInUp}
          >
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Experience
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Keploy Open Source Contributor</h3>
                    <Badge variant="secondary" className="mt-2 w-fit">
                      <Award className="w-3 h-3 mr-1" />
                      Top 3 Contributor - March 2025
                    </Badge>
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li>
                    • Contributed merged PR implementing paginated blog listings for Community and Technology
                    sections using Next.js, GraphQL, and TailwindCSS.
                  </li>
                  <li>
                    • Enhanced blog website performance and user experience through efficient pagination system.
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="mt-4 bg-transparent" asChild>
                  <a
                    href="https://github.com/keploy/blog-website/pull/98"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View PR
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* ── PROJECTS ── */}
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
            <FolderGit2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
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
                  transition={{ duration: 0.3, ease: easeInOut }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </motion.section>

        {/* ── SKILLS ── */}
        <div id="skills" className="relative -top-20 sm:-top-40" />
        <motion.section className="mb-16 sm:mb-20" initial="initial" whileInView="animate" viewport={{ once: true }}>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
            variants={fadeInUp}
          >
            <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Skills
          </motion.h2>
          <motion.div className="grid gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillList.map((skill, si) => (
                        <motion.div key={si} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="outline" className="text-xs sm:text-sm">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── CONTACT ── */}
        <div id="contact" className="relative -top-20 sm:-top-40" />
        <motion.section className="mb-16 sm:mb-20" initial="initial" whileInView="animate" viewport={{ once: true }}>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
            variants={fadeInUp}
          >
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            Contact Me
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Let&apos;s Connect!</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
                  I&apos;m always open to discussing new opportunities, collaborations, or just having a
                  chat about technology.
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  <Button asChild>
                    <a href="mailto:michaelhosamani26@gmail.com" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* ── FOOTER ── */}
        <motion.footer
          className="text-center py-6 sm:py-8 pb-0 border-t text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © Michael Hosamani - 2025
        </motion.footer>
      </div>
    </div>
  )
}