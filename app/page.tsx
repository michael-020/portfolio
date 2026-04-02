"use client"

import { Navbar } from "@/components/navbar"
import { ProfileCard } from "@/components/sections/ProfileCard"
import { AboutSection } from "@/components/sections/AboutSection"
import { ConnectSection } from "@/components/sections/ConnectSection"
import { GitHubActivity } from "@/components/sections/GitHubActivity"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { Footer } from "@/components/sections/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Dot Grid Hero */}
      <div className="w-full h-40 bg-[radial-gradient(circle,hsl(var(--border))_1px,transparent_1px)] bg-[length:20px_20px] border-b border-border" />

      {/* Three Column Grid Layout */}
      <div className="grid grid-cols-[1fr_minmax(0,720px)_1fr] min-h-screen relative">
        {/* Left Rail */}
        <div className="border-r border-border relative">
          {/* Corner crosses */}
          <div className="absolute top-0 -right-px w-4 h-4 border-t border-r border-border" />
        </div>

        {/* Center Column - Content */}
        <div className="divide-y divide-border">
          {/* Profile Card */}
          <div className="border-b border-border">
            <ProfileCard />
          </div>

          {/* About Section */}
          <div className="border-b border-border">
            <div className="p-8">
              <AboutSection />
            </div>
          </div>

          {/* Connect Section */}
          <div className="border-b border-border">
            <div className="p-8">
              <ConnectSection />
            </div>
          </div>

          {/* GitHub Activity */}
          <div className="border-b border-border">
            <div className="p-8">
              <GitHubActivity />
            </div>
          </div>

          {/* Experience Section */}
          <div className="border-b border-border">
            <div className="p-8">
              <ExperienceSection />
            </div>
          </div>

          {/* Projects Section */}
          <div className="border-b border-border">
            <div className="p-8">
              <ProjectsSection />
            </div>
          </div>

          {/* Footer */}
          <div className="p-8">
            <Footer />
          </div>
        </div>

        {/* Right Rail */}
        <div className="border-l border-border relative">
          {/* Corner crosses */}
          <div className="absolute top-0 -left-px w-4 h-4 border-t border-l border-border" />
        </div>
      </div>
    </div>
  )
}

