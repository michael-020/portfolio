import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Michael Hosamani - Full Stack Developer",
  description: "Portfolio of Michael Hosamani - Full Stack Developer specializing in TypeScript, Next.js, MERN Stack, and Node.js",
  icons: {
    icon: "/letter-m.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <style>{`
          html {
            font-family: system-ui, -apple-system, sans-serif;
          }
          .font-vt323 {
            font-family: "VT323", monospace;
            font-weight: 400;
            font-style: normal;
          }
        `}</style>
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={true}>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
