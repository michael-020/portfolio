"use client"

import { motion } from "framer-motion"

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="border border-border rounded-lg p-4 flex gap-4 items-start">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-lg border border-border bg-muted flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold">MH</span>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <div className="flex items-center gap-1.5 mb-0.5">
            <h1 className="text-sm font-bold">Michael Hosamani</h1>
            <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <p className="text-[11px] text-muted-foreground mb-1">
            Full Stack Developer & Open Source Contributor
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
            Idle · Available for work
          </div>
        </div>

        {/* View Count */}
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground flex-shrink-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          2.8K
        </div>
      </div>
    </motion.div>
  )
}
