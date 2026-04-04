"use client"

import { useModeAnimation, ThemeAnimationType } from 'react-theme-switch-animation'
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState, useCallback } from "react"

function playClickSound(isDark: boolean) {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()
  
  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)
  
  // Different tones for light vs dark mode
  oscillator.frequency.value = isDark ? 440 : 660 // A4 for dark, E5 for light
  oscillator.type = "sine"
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)
  
  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 0.15)
}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDarkMode = resolvedTheme === "dark"
  
  const handleToggle = useCallback(() => {
    playClickSound(!isDarkMode)
    toggleSwitchTheme()
  }, [isDarkMode])
  
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