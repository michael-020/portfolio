"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"
import { skills } from "@/lib/skills"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function SkillsSection() {
  return (
    <>
      <div id="skills" className="relative -top-20 sm:-top-40" />
      <motion.section className="mb-16 sm:mb-20" initial="initial" whileInView="animate" viewport={{ once: true }}>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
          variants={fadeInUp}
        >
          <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          Skills
        </motion.h2>
        <motion.div className="grid gap-4 sm:gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skillList.map((skill, si) => (
                      <motion.div key={si} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Badge variant="outline" className="text-xs sm:text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  )
}
