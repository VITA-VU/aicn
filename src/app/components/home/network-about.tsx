"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { ShieldCheck, Network, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: Network,
    title: "Interdisciplinary",
    description: "Members from IT, HR, the University Library, education, marketing and research."
  },
  {
    icon: ShieldCheck,
    title: "Responsible",
    description: "A focus on sovereign, secure and ethical use of AI that fits university values."
  },
  {
    icon: Sparkles,
    title: "Practical",
    description: "From policy advice to working prototypes, we turn ideas about AI into real results."
  }
]

export function NetworkAbout() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-md">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            One Network, Three Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The AI Competence Network is a VU Amsterdam community of staff who share knowledge and work together on AI.
            Through our Innovation & Consultancy, Policy and Community Engagement teams, we help the university
            explore new possibilities, set clear guidelines and build AI skills across campus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
