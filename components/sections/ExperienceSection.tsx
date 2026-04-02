"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Award, ExternalLink } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function ExperienceSection() {
  return (
    <>
      <div id="experience" className="relative -top-20 sm:-top-40" />
      <motion.section className="mb-16 sm:mb-20" initial="initial" whileInView="animate" viewport={{ once: true }}>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
          variants={fadeInUp}
        >
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          Experience
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Keploy Open Source Contributor</h3>
                  <Badge variant="secondary" className="mt-2 w-fit">
                    <Award className="w-3 h-3 mr-1" />
                    Top 3 Contributor - March 2025
                  </Badge>
                </div>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li>
                  • Contributed merged PR implementing paginated blog listings for Community and Technology
                  sections using Next.js, GraphQL, and TailwindCSS.
                </li>
                <li>
                  • Enhanced blog website performance and user experience through efficient pagination system.
                </li>
              </ul>
              <Button variant="outline" size="sm" className="mt-4 bg-transparent" asChild>
                <a
                  href="https://github.com/keploy/blog-website/pull/98"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-3 h-3" />
                  View PR
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </>
  )
}
