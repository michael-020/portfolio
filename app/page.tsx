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
import { SectionSeparator } from "@/components/sections/SectionSeparator"

export default function Portfolio() {
  return (
    <div className="h-screen bg-background">
      <main className="custom-scrollbar h-full overflow-y-auto">
        <Navbar />
    
        <HeroGrid />
        <ProfileCard />
        <SectionSeparator />
        <AboutSection />
        <SectionSeparator />
        <ConnectSection />
        <SectionSeparator />
        <GitHubActivity />
        <SectionSeparator />
        <ExperienceSection />
        <SectionSeparator />
        <ProjectsSection />
        <SectionSeparator />
        <Footer />
      </main>
    </div>
  )
}