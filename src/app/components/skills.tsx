"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { 
  Settings, 
  Code, 
  Users, 
  Lightbulb, 
  Calendar,
  BarChart3,
  Shield,
  Group,
  Package,
  MessageCircleQuestion,
  Zap
} from "lucide-react"
import sprintImage from "../../images/Picture1.png"

const principles = [
  {
    name: "Open Source and Sovereign",
    description: "We use open source and sovereign AI technologies to ensure transparency, security, and control over our solutions.",
    icon: Award
  },
  {
    name: "GDPR Compliant",
    description: "We ensure all our solutions are compliant with GDPR regulations.",
    icon: Zap
  },
  {
    name: "Discovery Process",
    description: "We invest time in understanding the problem and the stakeholders first, rather than jumping straight into a solution.",
    icon: Shield
  }
]

const sprintSteps = [
  {
    icon: MessageCircleQuestion,
    title: "Define",
    description: "Identify the problem and set clear objectives",
    details: "Our team receives your problem statement and begins investigating the issue. We explore data, research existing solutions, and identify potential challenges. This phase ensures that we have a clear understanding of the problem before moving forward."
  },
  {
    icon: Users,
    title: "Communicate with Stakeholders",
    description: "Interview stakeholders to understand their needs",
    details: "Our team engages with stakeholders to gather insights and requirements. We conduct interviews to ensure we fully understand the problem and whether the question being asked is the correct one."
  },
  {
    icon: Settings,
    title: "Iterate",
    description: "Develop and refine the solution based on feedback",
    details: "We begin developing a prototype based on the defined problem and stakeholder input. Our team iterates on the solution, incorporating feedback and making improvements to ensure the final product solves a distinct problem."
  },
  {
    icon: Package,
    title: "Deliver",
    description: "Deliver the prototype to stakeholders",
    details: "We deliver the finalized prototype to the stakeholders for review and feedback."
  },
  {
    icon: Calendar,
    title: "Demo",
    description: "Present the solution to the university",
    details: "The finalized prototype is presented to a broad audience, including university stakeholders, to highlight the solution and its potential impact. This demo allows for further feedback and discussion on the next steps for implementation."
  }
]

function Award({ className }: { className?: string }) {
  return <BarChart3 className={className} />
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-md">How We Work</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We rapidly develop prototypes in short sprints, allowing for quick iterations and feedback. Our approach ensures that we deliver innovative solutions that meet your needs efficiently.
          </p>
          <img src={sprintImage} alt="The Stages of the Innovation Sprint" className="mx-auto rounded-lg" width={900} height={500} />
        </motion.div>

        {/* The Sprint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">The Innovation Sprint</h3>
            <p className="text-muted-foreground">A structured approach to rapid prototyping and solution development.</p>
          </div>

          <ol className="max-w-4xl mx-auto">
            {sprintSteps.map((step, index) => (
              <motion.li
                key={step.title}
                className="relative flex gap-6 pb-10 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                {/* Connector line to the next step */}
                {index < sprintSteps.length - 1 && (
                  <span aria-hidden className="absolute left-7 top-16 bottom-0 w-px -translate-x-1/2 bg-primary/20" />
                )}

                <div className="relative shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>

                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-primary mb-1">Step {index + 1}</p>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <p className="text-foreground/80">{step.details}</p>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* Our Principles */}
        <div className="container mx-auto px-4 py-25">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Our Development Principles</h3>
            <p className="text-muted-foreground">Our approach is grounded in innovation, collaboration, and continuous improvement.</p>
          </div>
                  <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{principle.name}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}