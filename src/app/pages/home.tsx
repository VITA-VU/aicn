import { NetworkHeader } from "../components/home/network-header"
import { NetworkHero } from "../components/home/network-hero"
import { NetworkAbout } from "../components/home/network-about"
import { Subteams } from "../components/home/subteams"
import { NewsFeed } from "../components/home/news-feed"
import { EventsCalendar } from "../components/home/events-calendar"
import { MailingList } from "../components/home/mailing-list"
import { NetworkFooter } from "../components/home/network-footer"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Teams", href: "#teams" },
  { name: "News", href: "#news" },
  { name: "Events", href: "#events" },
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NetworkHeader navItems={navItems} />
      <main>
        <NetworkHero />
        <NetworkAbout />
        <Subteams />
        <NewsFeed />
        <EventsCalendar />
        <MailingList />
      </main>
      <NetworkFooter />
    </div>
  )
}
