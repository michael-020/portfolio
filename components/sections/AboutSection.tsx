"use client"

import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function AboutSection() {
  return (
    <div>
      <h2 className="text-sm font-bold mb-4 uppercase tracking-wider">About</h2>
      
      <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
        <div>
          • I&apos;m a Full Stack Developer with a passion for crafting accessible, pixel-perfect user
          interfaces that seamlessly blend thoughtful design with robust engineering. I specialize in
          building modern, scalable web applications using Next.js, MERN Stack, TypeScript, and Tailwind
          CSS.
        </div>
        
        <div>
          • My expertise spans from building intuitive frontends to architecting performant backends with
          REST APIs and WebSockets. I&apos;m especially drawn to projects at the intersection of design,
          development, and AI, where user experience meets technical excellence.
        </div>
        
        <div>
          • I thrive in environments that challenge me to learn, push boundaries, and build meaningful
          digital products that make an impact.
        </div>
      </div>
    </div>
  )
}
