"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { format, isSameDay, isSameMonth, parseISO, startOfDay } from "date-fns"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { CalendarDays, Clock, MapPin } from "lucide-react"
import { events } from "../../data/events"

const datedEvents = events
  .map((event) => ({ ...event, day: parseISO(event.date) }))
  .sort((a, b) => a.day.getTime() - b.day.getTime())

export function EventsCalendar() {
  const today = startOfDay(new Date())
  const [month, setMonth] = useState(today)
  const [selected, setSelected] = useState<Date | undefined>()

  const visible = selected
    ? datedEvents.filter((event) => isSameDay(event.day, selected))
    : datedEvents.filter((event) => isSameMonth(event.day, month))

  const heading = selected
    ? format(selected, "EEEE d MMMM")
    : format(month, "MMMM yyyy")

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-md">
            Events
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Events Calendar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us at meetups, workshops and showcases. Highlighted dates have events, select one to see its details.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="w-fit mx-auto lg:mx-0 h-fit">
            <CardContent className="p-2">
              <Calendar
                mode="single"
                month={month}
                onMonthChange={(m) => {
                  setMonth(m)
                  setSelected(undefined)
                }}
                selected={selected}
                onSelect={setSelected}
                modifiers={{ event: datedEvents.map((event) => event.day) }}
                modifiersClassNames={{
                  event: "font-bold underline decoration-primary decoration-2 underline-offset-4",
                }}
              />
            </CardContent>
          </Card>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{heading}</h3>
              {selected && (
                <Button variant="ghost" size="sm" onClick={() => setSelected(undefined)}>
                  Show whole month
                </Button>
              )}
            </div>

            {visible.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-muted-foreground flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 shrink-0" />
                  No events {selected ? "on this day" : "this month"}.
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {visible.map((event) => (
                  <Card
                    key={`${event.date}-${event.title}`}
                    className={`hover:shadow-lg transition-shadow ${event.day < today ? "opacity-60" : ""}`}
                  >
                    <CardContent className="p-6 flex gap-5">
                      <div className="shrink-0 w-14 text-center">
                        <div className="text-xs uppercase text-muted-foreground">
                          {format(event.day, "MMM")}
                        </div>
                        <div className="text-3xl font-bold">{format(event.day, "d")}</div>
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className="font-semibold">
                            {event.href ? <a href={event.href} className="hover:underline">{event.title}</a> : event.title}
                          </h4>
                          <Badge variant="secondary">{event.team}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{event.description}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          {event.time && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-4 w-4" /> {event.time}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {event.location}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
