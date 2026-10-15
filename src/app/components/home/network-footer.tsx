"use client"

import { Link } from "react-router"
import { teams } from "../../data/teams"
import { Button } from "../ui/button"

export function NetworkFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-15 h-15 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">AICN</span>
              </div>
              <span className="font-semibold text-lg">AI Competence Network</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              A VU Amsterdam network working on responsible, sovereign and practical use of AI across the university.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Teams</h4>
            <ul className="space-y-2">
              {teams.map((team) => (
                <li key={team.slug}>
                  <Link
                    to={`/${team.slug}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {team.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 ai.support@vu.nl</p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t text-muted-foreground">
            <span>© 2024 <a href="https://www.figma.com/community/file/1537012604602069110/it-project-manager-portfolio" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Rohit Sharma</a>, licensed under CC BY-SA 4.0. Modified from the original.</span>
        </div>
            
      </div>
      
    </footer>
  )
}
