"use client"

/**
 * Dot-grid decorative hero row — sits between the navbar and profile card,
 * identical to the reference design.  No content, just atmosphere.
 */
export function HeroGrid() {
  return (
    <div
      className="col-span-full grid border-b border-border"
      style={{ gridTemplateColumns: "1fr minmax(0, 720px) 1fr" }}
    >
      <div className="dot-grid h-28 border-r border-border" />
      <div className="dot-grid h-28" />
      <div className="dot-grid h-28 border-l border-border" />
    </div>
  )
}