// Placeholder items: replace with real AICN events.

export type EventItem = {
  date: string // ISO date, e.g. "2026-10-21"
  time?: string
  title: string
  location: string
  description: string
  team: string
  href?: string
}

export const events: EventItem[] = [
  {
    date: "2026-10-21",
    time: "15:00 – 17:00",
    title: "AI Community Meetup",
    location: "VU Main Building",
    description: "Monthly meetup with short talks and open discussion about AI at VU.",
    team: "Community Engagement",
  },
  {
    date: "2026-10-29",
    time: "12:00 – 13:00",
    title: "Lunch & Learn: Prototyping with AI",
    location: "Online",
    description: "See how Innovation & Consultancy takes an idea from intake to working prototype.",
    team: "Innovation & Consultancy",
  },
  {
    date: "2026-11-12",
    time: "14:00 – 16:00",
    title: "Policy consultation: AI in education",
    location: "NU Building",
    description: "Share your input on the draft guidance for generative AI in teaching.",
    team: "Policy",
  },
  {
    date: "2026-11-18",
    time: "15:00 – 17:00",
    title: "AI Community Meetup",
    location: "VU Main Building",
    description: "Monthly meetup with short talks and open discussion about AI at VU.",
    team: "Community Engagement",
  },
  {
    date: "2026-12-09",
    time: "13:00 – 17:00",
    title: "AICN Showcase",
    location: "VU Main Building",
    description: "All three teams present their work from the past semester.",
    team: "AICN",
  },
]
