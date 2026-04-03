"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionRowProps {
  children: ReactNode
  className?: string
  /** pass true for the hero dot-grid row (no padding, full-bleed rails) */
  bare?: boolean
  /** extra classes for the centre content column */
  contentClassName?: string
}

/**
 * Renders the 3-column section row:
 *   [left rail] [content] [right rail]
 *
 * Each row spans all 3 columns of the parent grid, then creates its own
 * nested 3-column grid so the rails line up perfectly.
 *
 * Cross markers are rendered on the left-rail / right-rail elements via
 * ::before / ::after pseudo-elements defined in globals.css.
 */
export function SectionRow({
  children,
  className,
  bare = false,
  contentClassName,
}: SectionRowProps) {
  return (
    // Span all 3 parent columns, then create own nested grid
    <div
      className={cn(
        "col-span-full grid border-b border-border",
        className
      )}
      style={{ gridTemplateColumns: "1fr minmax(0, 720px) 1fr" }}
    >
      {/* Left rail */}
      <div className="rail rail-left" />

      {/* Centre content */}
      <div
        className={cn(
          "relative",
          !bare && "px-6 py-10",
          contentClassName
        )}
      >
        {children}
      </div>

      {/* Right rail */}
      <div className="rail rail-right" />
    </div>
  )
}