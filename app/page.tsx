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
        <div className="max-w-4xl mx-auto px-4">
          <About />
          <Skills />
          <Portfolio />
          <Resume />
          <Contact />
        </div>
      </main>
    </div>
  )
}