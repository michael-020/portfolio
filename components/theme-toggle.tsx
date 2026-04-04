"use client"

import { useModeAnimation, ThemeAnimationType } from 'react-theme-switch-animation'
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState, useCallback, useRef } from "react"

function playShutterSound() {
  const audio = new Audio('/sounds/shutter.wav')
  audio.volume = 1
  audio.play().catch(() => {
    // Ignore autoplay restrictions
  })
}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDarkMode = resolvedTheme === "dark"
  const isDarkModeRef = useRef(isDarkMode)
  
  // Keep ref in sync with state
  useEffect(() => {
    isDarkModeRef.current = isDarkMode
  }, [isDarkMode])
  
  const handleToggle = useCallback(() => {
    playShutterSound()
    toggleSwitchTheme()
  }, [])
  
  const { ref, toggleSwitchTheme } = useModeAnimation({
    animationType: ThemeAnimationType.QR_SCAN,
    duration: 500,
    onDarkModeChange: () => {
      setTheme(isDarkModeRef.current ? "light" : "dark")
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
        <div className="size-5" />
      </Button>
    )
  }

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      onClick={handleToggle}
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

{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link> */}


//  <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=VT323&display=swap" rel="stylesheet"></link> 