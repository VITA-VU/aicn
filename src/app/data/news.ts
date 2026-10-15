// Placeholder items: replace with real AICN news.
// Newest first. `team` should match a team name in teams.ts, or "AICN" for network-wide news.

export type NewsItem = {
  date: string // ISO date, e.g. "2026-10-01"
  title: string
  summary: string
  team: string
  href?: string
}

export const news: NewsItem[] = [
  {
    date: "2026-10-08",
    title: "VU Campaign Studio prototype launched",
    summary:
      "Innovation & Consultancy delivered a prototype that helps communication teams draft and review campaign material with AI support.",
    team: "Innovation & Consultancy",
  },
  {
    date: "2026-09-24",
    title: "Draft guidance on generative AI in teaching",
    summary:
      "The Policy team shared a first draft of practical guidance for lecturers using generative AI tools in their courses.",
    team: "Policy",
  },
  {
    date: "2026-09-10",
    title: "AI community meetup returns for the new academic year",
    summary:
      "Over the coming months we will host monthly meetups for anyone at VU curious about AI. Everyone is welcome, no experience needed.",
    team: "Community Engagement",
  },
  {
    date: "2026-08-28",
    title: "The AI Competence Network welcomes new members",
    summary:
      "Colleagues from the University Library, IT and Research Support have joined the network, bringing new expertise to all three teams.",
    team: "AICN",
  },
]
