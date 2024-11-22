import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Resume } from "@/components/resume"

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main className="pl-16">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}