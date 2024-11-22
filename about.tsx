"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="mb-8 text-3xl font-bold">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hello! I'm Nikunj Gupta, an ambitious and dedicated Computer Science student at the Georgia Institute of Technology. With a passion for innovative technology and a track record of academic excellence, I've immersed myself in cutting-edge areas of computer science, including machine learning, web development, and software engineering. My projects demonstrate not only my technical proficiency but also my ability to apply theoretical knowledge to real-world problems. I'm constantly pushing the boundaries of what's possible in code, whether it's developing sophisticated algorithms, creating intuitive user interfaces, or optimizing system performance. My goal is to leverage my skills and creativity to make meaningful contributions to the tech industry and shape the future of digital innovation.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
