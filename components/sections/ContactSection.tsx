"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function ContactSection() {
  return (
    <>
      <div id="contact" className="relative -top-20 sm:-top-40" />
      <motion.section className="mb-16 sm:mb-20" initial="initial" whileInView="animate" viewport={{ once: true }}>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
          variants={fadeInUp}
        >
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          Contact Me
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Let&apos;s Connect!</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
                I&apos;m always open to discussing new opportunities, collaborations, or just having a
                chat about technology.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Button asChild>
                  <a href="mailto:michaelhosamani26@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </>
  )
}
