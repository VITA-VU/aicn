"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP of Technology",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1494790108775-b2643a795f92?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Rohit's leadership on our cloud migration project was exceptional. His attention to detail and ability to coordinate multiple teams resulted in a seamless transition that exceeded all our expectations."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Innovation Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Working with Rohit was a game-changer for our organization. His expertise in Agile methodologies and risk management helped us deliver complex projects on time and within budget consistently."
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Digital Transformation",
    company: "Digital Systems Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Rohit brings a perfect blend of technical knowledge and leadership skills. His communication style and problem-solving abilities make him an invaluable asset to any project team."
  },
  {
    name: "David Park",
    role: "Senior Developer",
    company: "StartupTech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Rohit's approach to project management is both strategic and hands-on. He understands the technical challenges developers face and provides the support needed to overcome them effectively."
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-md">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Colleagues Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Feedback from team members, stakeholders, and clients I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="h-8 w-8 text-primary/30 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                    
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}