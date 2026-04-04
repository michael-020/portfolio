"use client"

import { HeroGrid } from "./HeroGrid"

export function Footer() {
  return (
    <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}>
      {/* Left rail */}
      <div className="border-r border-border" />

      {/* Center content */}
      <div className="relative py-6 px-6">
        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Michael Hosamani · {new Date().getFullYear()}</span>
          <span>Built with Love, Passion & Coffee</span>
        </div>
      </div>

      {/* Right rail */}
      <div className="border-l border-border" />
    </div>
  )
}