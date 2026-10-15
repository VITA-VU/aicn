import { Lightbulb, Scale, Users, School } from "lucide-react"

export const teams = [
  {
    slug: "innovation-consultancy",
    name: "Innovation & Consultancy",
    icon: Lightbulb,
    tagline: "Rapid prototyping of AI enabled solutions",
    description:
      "We build prototypes with departments across VU Amsterdam, including research, HR, IT and student affairs, to show what AI can do in practice.",
  },
  {
    slug: "policy",
    name: "Policy",
    icon: Scale,
    tagline: "Responsible and sovereign AI at VU",
    description:
      "We shape guidelines, governance and policy advice so that AI is used safely, ethically and in line with university values.",
  },
  {
    slug: "community-engagement",
    name: "Community Engagement",
    icon: Users,
    tagline: "Connecting people around AI",
    description:
      "We bring together staff, students and researchers through workshops, meetups and knowledge sharing to build AI literacy across campus.",
  },
  {
    slug: "literacy",
    name: "AI Literacy",
    icon: School,
    tagline: "Building AI knowledge across campus",
    description:
      "We provide training and resources to help staff, students and researchers develop their AI skills and understanding.",
  },
]

export type Team = (typeof teams)[number]
