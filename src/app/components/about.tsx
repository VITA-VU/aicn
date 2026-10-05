"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Presentation, BookCopy, Computer, GraduationCap, PersonStanding, Microscope } from "lucide-react"

const achievements = [
  {
    icon: PersonStanding,
    title: "HR",
    description: ""
  },
  {
    icon: Computer,
    title: "IT",
    description: "Both technical implementers and architects"
  },
  {
    icon: BookCopy,
    title: "UB",
    description: "Innovators from the university library"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Faculty and student engagement"
  },
  {
    icon: Presentation,
    title: "Marketing",
    description: ""
  },
  {
    icon: Microscope,
    title: "Research",
    description: "Researchers on the cutting edge of AI and its applications"
  }
]

const timeline = [
  {
    year: "2024 - Present",
    role: "Senior IT Project Manager",
    company: "TechCorp Solutions",
    description: "Leading digital transformation initiatives and managing enterprise-level projects"
  },
  {
    year: "2021 - 2024",
    role: "IT Project Manager",
    company: "Innovation Labs",
    description: "Managed agile development teams and delivered cloud migration projects"
  },
  {
    year: "2019 - 2021",
    role: "Project Coordinator",
    company: "Digital Systems Inc",
    description: "Coordinated cross-functional teams and implemented project management best practices"
  },
  {
    year: "2016 - 2019",
    role: "Business Analyst",
    company: "StartupTech",
    description: "Analyzed business requirements and facilitated stakeholder communication"
  }
]

export function About() {
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
            An Interdisciplinary Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With members across domains, we bring together diverse expertise to deliver innovative solutions. 
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Career Timeline */}

      </div>
    </section>
  )
}