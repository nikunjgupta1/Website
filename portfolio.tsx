"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon, Brain, Dice5, Globe } from 'lucide-react'

const projects = [
  {
    title: "Sentiment Analyzer",
    description: "A machine learning model that analyzes the sentiment of text inputs, providing insights into emotional tone.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VudGltZW50JTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D",
    github: "https://github.com/nikunjgupta1/Sentiment-Analyzer",
    demo: "#",
    icon: "Brain",
  },
  {
    title: "Yahtzee Game",
    description: "An interactive implementation of the classic Yahtzee dice game, showcasing frontend development skills.",
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGljZSUyMGdhbWV8ZW58MHx8MHx8fDA%3D",
    github: "https://github.com/nikunjgupta1/Yahtzee",
    demo: "#",
    icon: "Dice5",
  },
  {
    title: "Personal Website",
    description: "My personal portfolio website built with Next.js and React, showcasing my projects and skills.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYWwlMjB3ZWJzaXRlfGVufDB8fDB8fHww",
    github: "https://github.com/nikunjgupta1/nikunjgupta.net",
    demo: "https://nikunjgupta.net",
    icon: "Globe",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold">Portfolio</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {React.createElement(project.icon, { className: "w-6 h-6 mr-2" })}
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-2 p-6 pt-0">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
