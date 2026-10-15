import { Link } from "react-router"
import { ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { NetworkHeader } from "../components/home/network-header"
import { NetworkFooter } from "../components/home/network-footer"
import type { Team } from "../data/teams"

// Temporary page for teams that don't have their own page yet.
export function SubteamPlaceholder({ team }: { team: Team }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NetworkHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full">
            <team.icon className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{team.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{team.tagline}</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">{team.description}</p>
          <p className="text-muted-foreground mb-8">This page is coming soon.</p>
          <Button size="lg" variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to AICN home
            </Link>
          </Button>
        </div>
      </main>
      <NetworkFooter />
    </div>
  )
}
