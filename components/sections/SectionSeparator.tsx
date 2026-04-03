"use client"

export function SectionSeparator() {
  return (
    <div className="grid border-b relative h-5" style={{ gridTemplateColumns: "1fr minmax(0, 720px) 1fr" }}>
      {/* Full-width diagonal lines background */}
      <div 
        className="absolute inset-0 w-full h-5 separator-diagonals" 
      />

      {/* Left rail */}
      <div className="border-r border-border h-5 relative z-10" />

      {/* Center content - transparent to show diagonal lines */}
      <div className="h-5 relative z-0" />

      {/* Right rail */}
      <div className="border-l border-border h-5 relative z-10" />
    </div>
  )
}
