"use client"

import { Github, Linkedin, Mail, FileText } from "lucide-react"

const XIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const MediumIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

const links = [
  {
    label: "GitHub",
    href: "https://github.com/michael-020",
    icon: <Github className="h-3.5 w-3.5" />,
  },
  {
    label: "Twitter",
    href: "https://x.com/MichaelHosamani",
    icon: <XIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/michael-hosamani0206/",
    icon: <Linkedin className="h-3.5 w-3.5" />,
  },
  {
    label: "Mail",
    href: "mailto:michaelhosamani26@gmail.com",
    icon: <Mail className="h-3.5 w-3.5" />,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1VKa07n8xvyZ7CX3439G_VDlBWz4nhF70/view?usp=sharing",
    icon: <FileText className="h-3.5 w-3.5" />,
  },
]

export function ConnectSection() {
  return (
    <>
      {/* Title row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />
        <div className="flex items-center px-6 h-12">
          <h2 className="section-heading font-vt323">Connect</h2>
        </div>
        <div className="border-l border-border" />
      </div>

      {/* Content row */}
      <div className="grid border-b border-border" style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}>
        <div className="border-r border-border" />

        <div className="relative px-6 py-10">
          <div id="connect" className="absolute -top-10" />

          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground transition-colors hover:border-foreground/30 hover:bg-muted"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-l border-border" />
      </div>
    </>
  )
}