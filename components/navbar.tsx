"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "./ui/button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false)
  }, [pathname])

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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div
        className="grid w-full pt-3"
        style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 780px) minmax(16px, 1fr)" }}
      >
        {/* Left rail spacer */}
        <div className="border-r border-border border-t" />

        {/* Nav inner */}
        <div className="flex h-[3.2rem] items-center justify-between px-2 sm:px-6 border-t relative">
          {/* Logo */}
          <Link href="/" className="text-[2rem] font-semibold tracking-wide text-foreground hover:opacity-80 transition-opacity font-vt323">
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
                    "text-base transition-colors font-vt323",
                    pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Mobile menu button - shown only on small screens */}
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-background/50 transition-colors"
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
                    <X className="size-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="size-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

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
                            "block px-4 py-2 text-base transition-colors hover:bg-muted font-vt323",
                            pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                              ? "text-foreground"
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