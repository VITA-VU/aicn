import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "./components/ui/sonner"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { Resume } from "./components/resume"
// import { Testimonials } from "./components/testimonials"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
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
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}