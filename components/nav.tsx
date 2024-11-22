"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { HomeIcon, FolderIcon, FileTextIcon, MailIcon } from 'lucide-react'

const navItems = [
  { href: "#home", icon: HomeIcon, label: "Home" },
  { href: "#portfolio", icon: FolderIcon, label: "Portfolio" },
  { href: "#resume", icon: FileTextIcon, label: "Resume" },
  { href: "#contact", icon: MailIcon, label: "Contact" },
]

export function Nav() {
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed left-0 top-0 flex h-screen w-16 flex-col items-center justify-center gap-8 border-r bg-background/50 backdrop-blur">
      {navItems.map(({ href, icon: Icon, label }) => (
        <Link key={href} href={href}>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "relative",
              activeSection === href.slice(1) && "text-primary"
            )}
          >
            {activeSection === href.slice(1) && (
              <motion.span
                layoutId="activeSection"
                className="absolute inset-0 rounded-md bg-primary/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon className="h-5 w-5" />
            <span className="sr-only">{label}</span>
          </Button>
        </Link>
      ))}
    </nav>
  )
}

