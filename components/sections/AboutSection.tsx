"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const expandedTextVariants = {
  initial: { opacity: 0, height: 0, marginTop: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    marginTop: "1rem",
    transition: { 
      duration: 0.5,
      opacity: { delay: 0.1, duration: 0.3 }
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.4, height: { delay: 0.1 } },
  },
}

const btnVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap:   { scale: 0.95, transition: { duration: 0.1 } },
}

export function AboutSection() {
  const [showMore, setShowMore] = useState(false)

  return (
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
  )
}
