"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (isAnimating || !mounted) return

    setIsAnimating(true)

    // Get button position for animation origin
    const button = buttonRef.current
    if (button) {
      const rect = button.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      // Create expanding circle animation
      const circle = document.createElement("div")
      circle.style.position = "fixed"
      circle.style.left = `${x}px`
      circle.style.top = `${y}px`
      circle.style.width = "0px"
      circle.style.height = "0px"
      circle.style.borderRadius = "50%"
      circle.style.backgroundColor = resolvedTheme === "light" ? "#0f0f0f" : "#ffffff"
      circle.style.transform = "translate(-50%, -50%)"
      circle.style.pointerEvents = "none"
      circle.style.zIndex = "9999"
      circle.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"

      document.body.appendChild(circle)

      // Trigger animation
      requestAnimationFrame(() => {
        const maxDimension = Math.max(window.innerWidth, window.innerHeight)
        circle.style.width = `${maxDimension * 2}px`
        circle.style.height = `${maxDimension * 2}px`
      })

      setTheme(resolvedTheme === "light" ? "dark" : "light")

      // Clean up
      setTimeout(() => {
        if (document.body.contains(circle)) {
          document.body.removeChild(circle)
        }
        setIsAnimating(false)
      }, 800)
    }
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden"
      disabled={isAnimating}
    >
      <AnimatePresence mode="wait">
        {resolvedTheme === "light" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}
