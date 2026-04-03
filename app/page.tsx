"use client"

import { ProfileCard } from "@/components/sections/ProfileCard"
import { AboutSection } from "@/components/sections/AboutSection"
import { ConnectSection } from "@/components/sections/ConnectSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { Footer } from "@/components/sections/Footer"
import { Navbar } from "@/components/navbar"
import { HeroGrid } from "@/components/sections/HeroGrid"
import { GitHubActivity } from "@/components/sections/GitHubActivity"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Sections are stacked vertically, each with its own 3-col layout */}
      <main>

        <HeroGrid />
        <ProfileCard />
        <AboutSection />
        <ConnectSection />
        <GitHubActivity />
        <ExperienceSection />
        <ProjectsSection />
        <Footer />

      </main>
    </div>
  )
}