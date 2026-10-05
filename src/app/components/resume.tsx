"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Download, FileText, Eye } from "lucide-react"

export function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-md">Engagement</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What You Bring
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Working with the innovation team requires a collaborative approach. We value your input and expertise, and we encourage you to share your ideas, feedback, and requirements throughout the project lifecycle. Your engagement is crucial to the success of our projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-dashed border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-40 bg-background rounded-lg shadow-lg flex items-center justify-center border">
                      <div className="text-center">
                        <FileText className="h-12 w-12 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Onboarding Guide</p>
                        <p className="text-sm font-medium text-muted-foreground">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4">
                      Working with the Innovation Team
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Here, we entail details about how the innovation process work, what is expected from the client, and how to get started. This guide will help you understand the steps involved in collaborating with our team and ensure a smooth engagement.
                    </p>       
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}