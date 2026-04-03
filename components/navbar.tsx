"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Search } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "Home",     href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "More",     href: "#connect" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [active, setActive] = useState("Home")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollTo = (href: string, label: string) => {
    setActive(label)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Same 3-column grid as the page body */}
      <div
        className="grid w-full"
        style={{ gridTemplateColumns: "1fr minmax(0, 720px) 1fr" }}
      >
        {/* Left rail spacer */}
        <div className="border-r border-border" />

        {/* Nav inner */}
        <div className="flex h-10 items-center justify-between px-6">
          {/* Logo */}
          <span className="text-sm font-semibold tracking-wide text-foreground">
            MH
          </span>

          {/* Centre links */}
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href, link.label)}
                className={[
                  "text-xs transition-colors",
                  active === link.label
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {link.label}
                {link.label === "More" && (
                  <span className="ml-0.5 text-muted-foreground">∨</span>
                )}
              </button>
            ))}
          </nav>

          {/* Right: search pill + theme toggle */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-1.5 rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground hover:border-foreground/30 transition-colors">
              <Search className="h-2.5 w-2.5" />
              <span>⌘ K</span>
            </button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="h-3 w-3" />
                ) : (
                  <Moon className="h-3 w-3" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Right rail spacer */}
        <div className="border-l border-border" />
      </div>
    </motion.header>
  )
}