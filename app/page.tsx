"use client"

import { AboutSection } from "@/components/sections/AboutSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/sections/Footer"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 max-w-4xl pt-6 sm:pt-32">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}