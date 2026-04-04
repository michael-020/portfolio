"use client"

import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/Footer"
import { HeroGrid } from "@/components/sections/HeroGrid"
import { SectionSeparator } from "@/components/sections/SectionSeparator"

export default function ProjectsPage() {
  return (
    <div className="h-screen bg-background">
      <main className="custom-scrollbar h-full overflow-y-auto">
        <Navbar />
        <SectionSeparator />
        <ProjectsSection />
        <SectionSeparator />
        <Footer />
        <HeroGrid />
      </main>
    </div>
  )
}
