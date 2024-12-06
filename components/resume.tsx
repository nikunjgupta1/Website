"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl font-bold mr-4">Resume</h2>
          <Button asChild>
            <a href="https://drive.google.com/file/d/19UKk_3HHY3N8nOl1ITNmEBDYTd-B5hp_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              View PDF
            </a>
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://drive.google.com/file/d/19UKk_3HHY3N8nOl1ITNmEBDYTd-B5hp_/preview"
            width="100%"
            height="800px"
            allow="autoplay"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
