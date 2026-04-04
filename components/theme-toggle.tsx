"use client"

import { useModeAnimation, ThemeAnimationType } from 'react-theme-switch-animation'
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDarkMode = resolvedTheme === "dark"
  
  const { ref, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.QR_SCAN,
    duration: 500,
    onDarkModeChange: () => {
      setTheme(isDarkMode ? "light" : "dark")
    }
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by showing placeholder until mounted
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="cursor-pointer"
        disabled
      >
        <div className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      onClick={toggleSwitchTheme}
      className="cursor-pointer"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}