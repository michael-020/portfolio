"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"

export function ExperienceSection() {
  return (
    <div>
      <h2 className="text-sm font-bold mb-6 uppercase tracking-wider">Experience</h2>
      
      <div className="space-y-6">
        <div className="border border-border rounded-lg p-4 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold">Keploy Open Source Contributor</h3>
              <Badge variant="secondary" className="mt-2 text-[10px]">
                <Award className="w-3 h-3 mr-1" />
                Top 3 Contributor - March 2025
              </Badge>
            </div>
          </div>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>
              • Contributed merged PR implementing paginated blog listings for Community and Technology sections using Next.js, GraphQL, and TailwindCSS.
            </li>
            <li>
              • Enhanced blog website performance and user experience through efficient pagination system.
            </li>
          </ul>
          <Button variant="outline" size="sm" className="mt-2 h-7 text-[10px] bg-transparent" asChild>
            <a
              href="https://github.com/keploy/blog-website/pull/98"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-3 h-3" />
              View PR
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
