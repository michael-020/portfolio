"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Home", href: "/", isPage: true },
  { label: "Projects", href: "/projects", isPage: true },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [active, setActive] = useState("Home")
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollTo = (href: string, label: string) => {
    setActive(label)
    const el = document.querySelector(href.replace("/", ""))
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      {/* Same 3-column grid as the page body */}
      <div
        className="grid w-full pt-3"
        style={{ gridTemplateColumns: "minmax(16px, 1fr) minmax(0, 720px) minmax(16px, 1fr)" }}
      >
        {/* Left rail spacer */}
        <div className="border-r border-border border-t " />

        {/* Nav inner */}
        <div className="flex h-[3.2rem] items-center justify-between px-6 border-t">
          {/* Logo */}
          <Link href="/" className="text-sm font-semibold tracking-wide text-foreground hover:opacity-80 transition-opacity">
            MH
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              link.isPage ? (
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
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href, link.label)}
                  className={[
                    "text-sm transition-colors",
                    active === link.label && pathname === "/"
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>

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
        <div className="border-l border-t border-border" />
      </div>
    </header>
  )
}