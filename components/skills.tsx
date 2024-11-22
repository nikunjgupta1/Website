"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { PiIcon as Python, FileCode2, Coffee, Globe, Database, GitGraphIcon as Git, Terminal, Server } from 'lucide-react'

const skills = [
  { name: "Python", icon: Python },
  { name: "Java", icon: Coffee },
  { name: "HTML/CSS", icon: Globe },
  { name: "JavaScript", icon: FileCode2 },
  { name: "SQL", icon: Database },
  { name: "Git", icon: Git },
  { name: "Linux", icon: Terminal },
  { name: "Node.js", icon: Server },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:border-primary">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <skill.icon className="mb-4 h-8 w-8 transition-transform group-hover:scale-110" />
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

