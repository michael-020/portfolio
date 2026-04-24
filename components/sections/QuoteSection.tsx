"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function QuoteSection() {
  return (
    <>
      {/* Title row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />
        
        <div className="border-l border-border" />
      </div>

      {/* Content row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />

        <div className="relative px-2 sm:px-6 py-12 sm:py-16 flex flex-col items-center justify-center gap-8">
          {/* Quote Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-6xl sm:text-7xl text-muted-foreground/0"
          >
            <Quote className="size-12 fill-muted-foreground/60" />
          </motion.div>

          {/* Quote Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center max-w-2xl"
          >
            <p className="text-lg sm:text-2xl italic text-foreground leading-relaxed font-light">
              “It’s not about whether I can or not. I’m gonna do it because I want to.”
            </p>
          </motion.div>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-64 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
          >
            <div className="flex-1 h-px bg-foreground/40" />
            <span className="font-semibold tracking-wider whitespace-nowrap text-foreground">
                {("monkey d luffy").toUpperCase()}
            </span>
            <div className="flex-1 h-px bg-foreground/40" />
          </motion.div>
        </div>

        <div className="border-l border-border" />
      </div>
    </>
  )
}
