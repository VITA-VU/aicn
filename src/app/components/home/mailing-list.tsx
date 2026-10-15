"use client"

import { useState, type FormEvent } from "react"
import { motion } from "motion/react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Mail, CheckCircle2 } from "lucide-react"

// Set this to a signup endpoint (e.g. a Mailchimp or Microsoft Forms URL) to collect
// subscriptions directly. While empty, submitting opens a pre-filled email instead.
const SIGNUP_URL = ""
const CONTACT_EMAIL = "ai.support@vu.nl"

export function MailingList() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (SIGNUP_URL) {
      window.open(`${SIGNUP_URL}${SIGNUP_URL.includes("?") ? "&" : "?"}email=${encodeURIComponent(email)}`, "_blank")
    } else {
      const subject = encodeURIComponent("Subscribe to the AICN mailing list")
      const body = encodeURIComponent(`Please add ${email} to the AI Competence Network mailing list.`)
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    }

    setSubmitted(true)
  }

  return (
    <section id="mailing-list" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-primary/5">
            <CardContent className="p-8 md:p-10 text-center">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Join Our Mailing List</h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Get news and event invitations from the AI Competence Network straight to your inbox.
              </p>

              {submitted ? (
                <p className="inline-flex items-center gap-2 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {SIGNUP_URL
                    ? "Thanks! Complete the signup form to finish subscribing."
                    : "Thanks! Send the email that just opened to finish subscribing."}
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <label htmlFor="mailing-list-email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    id="mailing-list-email"
                    type="email"
                    required
                    placeholder="you@vu.nl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 bg-background"
                  />
                  <Button type="submit" size="lg">
                    Subscribe
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
