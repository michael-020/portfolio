"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function ConnectSection() {
  return (
    <div>
      <h2 className="text-sm font-bold mb-4 uppercase tracking-wider">Connect</h2>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
          <a href="https://github.com/michael-020" target="_blank" rel="noreferrer" className="flex items-center gap-1.5">
            <Github className="w-3 h-3" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
          <a href="https://x.com/MichaelHosamani" target="_blank" rel="noreferrer" className="flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Twitter
          </a>
        </Button>
        <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
          <a href="https://linkedin.com/in/michael-hosamani0206/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5">
            <Linkedin className="w-3 h-3" />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
          <a href="mailto:michaelhosamani26@gmail.com" className="flex items-center gap-1.5">
            <Mail className="w-3 h-3" />
            Mail
          </a>
        </Button>
        <Button variant="outline" size="sm" className="h-7 text-xs" asChild>
          <a
            href="https://drive.google.com/file/d/1VKa07n8xvyZ7CX3439G_VDlBWz4nhF70/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5"
          >
            <FileText className="w-3 h-3" />
            Resume
          </a>
        </Button>
      </div>
    </div>
  )
}
