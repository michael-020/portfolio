"use client"

import { motion } from "framer-motion"
import { Eye, BadgeCheck } from "lucide-react"

export function ProfileCard() {
  return (
    <>
      <div className=" grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />

        <div className="relative py-5 px-6">
          <div id="about" className="absolute -top-10" />

          <motion.div
            className="relative flex items-start gap-4 rounded-xl border border-border bg-background p-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Avatar */}
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-2xl font-semibold text-muted-foreground">
              MH
            </div>

            {/* Meta */}
            <div className="min-w-0 flex-1">
              <h1 className="flex items-center gap-1.5 text-xl font-semibold text-foreground">
                Michael Hosamani
                <BadgeCheck className="h-4 w-4 fill-blue-500 text-white" />
              </h1>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Full Stack Developer &amp; Open Source Contributor
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                Idle · Available for work
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-l border-border" />
      </div>
    </>
  )
}