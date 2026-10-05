"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Badge } from "./ui/badge"
import { toast } from "sonner"
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Send,
  Clock,
  Globe
} from "lucide-react"

const contactInfo = [
  {
    icon: Send,
    label: "Intake Form",
    value: "Tell us about your project",
    href: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=nJwqRqYt-0uzGA-DBD_km5-JD8Qi_1xDjaZNtYa9UvFUMEs5SThGT0s3SUdTV1Q2S0NIRU5PMEpXTC4u&origin=c2a&route=shorturl"
  },
  {
    icon: Mail,
    label: "Email",
    value: "ai.support@vu.nl",
    href: "mailto:ai.support@vu.nl"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "VU StartHub, Amsterdam, Netherlands",
    href: "#"
  },
  {
    icon: ExternalLink,
    label: "More About the AICN",
    value: "vu.nl/aicn",
    href: "https://vu.nl/en/about-vu/project/ai-competence-network"
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success("Message sent successfully! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-2 text-md">Contact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring you ideas to reality? Fill in our intake form below and we can discuss how we can achieve your goals.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto grid grid-cols-1 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    {...(item.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}