"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container max-w-2xl">
        <h2 className="mb-8 text-3xl font-bold">Contact Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <form 
                className="grid gap-4" 
                action="mailto:champnikunj@gmail.com" 
                method="post" 
                encType="text/plain"
              >
                <div className="grid gap-2">
                  <label htmlFor="name">Name</label>
                  <Input id="name" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message">Message</label>
                  <Textarea id="message" required />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
