"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="text-center py-6 sm:py-8 pb-0 border-t text-sm sm:text-base"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      © Michael Hosamani - 2025
    </motion.footer>
  )
}
