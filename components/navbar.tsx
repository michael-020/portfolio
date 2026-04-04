"use client"

import { useState, useEffect, useRef } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div
        className="grid w-full pt-3"
        style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}
      >
        {/* Left rail spacer */}
        <div className="border-r border-border border-t" />

        {/* Nav inner */}
        <div className="flex h-[3.2rem] items-center justify-between px-6 border-t relative">
          {/* Logo */}
          <Link href="/" className="text-sm font-semibold tracking-wide text-foreground hover:opacity-80 transition-opacity">
            MH
          </Link>

          <div className="flex items-center justify-center gap-1 sm:gap-4" ref={menuRef}>
            {/* Desktop nav - hidden on small screens */}
            <nav className="hidden sm:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={[
                    "text-sm transition-colors",
                    pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex size-8 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
              >
                {theme === "dark" ? (
                  <Sun />
                ) : (
                  <Moon />
                )}
              </button>
            )}

            {/* Mobile menu button - shown only on small screens */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute top-full right-0 mt-2 mr-6 w-40 rounded-lg border border-border bg-background shadow-lg overflow-hidden sm:hidden"
                >
                  <nav className="flex flex-col">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={[
                            "block px-4 py-3 text-sm transition-colors hover:bg-muted",
                            pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                              ? "font-medium text-foreground"
                              : "text-muted-foreground/60",
                          ].join(" ")}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right rail spacer */}
        <div className="border-l border-t border-border" />
      </div>
    </header>
  )
}