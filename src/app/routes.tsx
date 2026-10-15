import { useEffect } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router"
import { ThemeProvider } from "./components/theme-provider"
import App from "./App"
import { HomePage } from "./pages/home"
import { SubteamPlaceholder } from "./pages/subteam-placeholder"
import { teams } from "./data/teams"

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

const teamBySlug = (slug: string) => teams.find((team) => team.slug === slug)!

export function AppRoutes() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/innovation-consultancy" element={<App />} />
        <Route path="/policy" element={<SubteamPlaceholder team={teamBySlug("policy")} />} />
        <Route
          path="/community-engagement"
          element={<SubteamPlaceholder team={teamBySlug("community-engagement")} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  )
}
