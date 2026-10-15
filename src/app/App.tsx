import { Toaster } from "./components/ui/sonner"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { Resume } from "./components/resume"
// import { Testimonials } from "./components/testimonials"
import { Contact } from "./components/contact"
import { NetworkFooter } from "./components/home/network-footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <NetworkFooter />
      <Toaster />
    </div>
  )
}