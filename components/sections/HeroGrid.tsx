"use client"

/**
 * Dot-grid decorative hero row — sits between the navbar and profile card,
 * identical to the reference design.  No content, just atmosphere.
 */
export function HeroGrid() {
  return (
    <div className="grid border-b relative" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}>

      {/* Left rail */}
      <div className="border-r border-border relative z-10" />

      {/* Center content with dot grid */}
      <div className="h-full relative z-0 p-5" >
        <DotGrid />
      </div>

      {/* Right rail */}
      <div className="border-l border-border  relative z-10" />
    </div>
  )
}

const DotGrid = () => {
  return (
    <div 
      className="hero-dot-grid w-full h-24"
    />
  );
};