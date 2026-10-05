"use client"

import { motion } from "motion/react"
import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"
import { Moon, Sun, Heart, ArrowUp } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "How We Work", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Engagement", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/rohit-sharma", icon: "💼" },
  { name: "GitHub", href: "https://github.com/rohit-sharma", icon: "🐱" },
  { name: "Email", href: "mailto:rohit.sharma@email.com", icon: "📧" },
  { name: "Twitter", href: "https://twitter.com/rohit_sharma", icon: "🐦" },
]

export function Footer() {
  const { theme, setTheme } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
            <div className="w-15 h-15 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold">AICN</span>
            </div>
            <span className="font-semibold text-lg">AI Competence Network: Innovation & Consultancy </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Interdisciplinary team specializing in delivering rapid prototypes and innovative solutions using sovereign and secure AI technologies.
            </p>
            <div className="flex items-center gap-4">
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 ai.support@vu.nl</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Rohit Sharma. Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and React</span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}