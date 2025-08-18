"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Home, Briefcase, Mail, FolderGit2 } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact", href: "#contact", icon: Mail },
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
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto w-full px-6 py-4">
        <div className="flex items-center justify-center gap-5">
          <div className="hidden border px-5 py-2 rounded-lg md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>

        <motion.div
          className="md:hidden mt-4 flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {navItems.map((item, index) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.href)}
              className="flex items-center gap-1 text-xs"
            >
              <item.icon className="w-3 h-3" />
              {item.name}
            </Button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}
