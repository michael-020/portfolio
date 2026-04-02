"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Home", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "More", href: "#contact" },
]

export function Navbar() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm h-10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-full flex items-center px-6">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold"
          >
            MH
          </motion.div>

          {/* Center Navigation */}
          <div className="hidden sm:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Search and Theme */}
          <div className="flex items-center gap-3">
            {/* Search Pill */}
            <div className="hidden sm:flex items-center gap-2 border border-border rounded-full px-3 py-1 bg-background/50 text-muted-foreground text-xs">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>⌘K</span>
            </div>
            
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}