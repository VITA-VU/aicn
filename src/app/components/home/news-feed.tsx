"use client"

import { motion } from "motion/react"
import { format, parseISO } from "date-fns"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { ArrowRight } from "lucide-react"
import { news } from "../../data/news"

export function NewsFeed() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-md">
            News
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest from the Network
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {sorted.map((item, index) => (
            <motion.div
              key={`${item.date}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <time dateTime={item.date} className="text-sm text-muted-foreground">
                      {format(parseISO(item.date), "d MMMM yyyy")}
                    </time>
                    <Badge variant="secondary">{item.team}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.summary}</p>
                  {item.href && (
                    <a
                      href={item.href}
                      className="group inline-flex items-center mt-4 font-medium"
                    >
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
