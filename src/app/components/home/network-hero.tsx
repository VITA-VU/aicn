"use client"

import { Button } from "../ui/button"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export function NetworkHero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(600px circle at 0% 0%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(600px circle at 100% 100%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(600px circle at 0% 100%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(600px circle at 100% 0%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI Competence Network
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bringing together expertise from across VU Amsterdam to use AI responsibly, creatively and effectively.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="group" asChild>
            <a href="#teams">
              Explore Our Teams
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#events">Upcoming Events</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
