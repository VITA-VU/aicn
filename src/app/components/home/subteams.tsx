"use client"

import { Link } from "react-router"
import { motion } from "motion/react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { ArrowRight } from "lucide-react"
import { teams } from "../../data/teams"

export function Subteams() {
  return (
    <section id="teams" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-md">
            Our Teams
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find the Right Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each team focuses on a different part of AI at VU. Choose a team to learn more about their work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Link to={`/${team.slug}`} className="group block h-full">
                <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6 inline-block w-fit p-4 bg-primary/10 rounded-full">
                      <team.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{team.name}</h3>
                    <p className="text-primary/80 font-medium mb-4">{team.tagline}</p>
                    <p className="text-muted-foreground mb-6 flex-1">{team.description}</p>
                    <span className="inline-flex items-center font-medium">
                      Visit team page
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
