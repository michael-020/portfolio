"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ThemeAnimationType, useModeAnimation } from 'react-theme-switch-animation'

export function ThemeToggle() {
  const { resolvedTheme } = useTheme()
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.BLUR_CIRCLE,
    blurAmount: 2, 
    duration: 1000,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (resolvedTheme === 'dark' && !isDarkMode) {
      toggleSwitchTheme()
    }
  }, [resolvedTheme])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Moon className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button ref={ref} variant="ghost" size="icon" onClick={toggleSwitchTheme} className="cursor-pointer">
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}
