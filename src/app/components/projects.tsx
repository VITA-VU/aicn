"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { ExternalLink, Calendar, Users, DollarSign, X, Presentation, Video } from "lucide-react"
import StudyQuest from "../../images/Study_quest.png"
import ServiceBot from "../../images/service_bot.png"
import CampaignStudio from "../../images/Campaign_Studio.png"
import Kabu from "../../images/Kabu.png"
import ResearchCupid from "../../images/research-cupid.png"


// To add slide PDF: put it in src/slides/ and import it the way the images are imported. Then set slides to the imported value. That way it gets the right path under the /aicn/ base the site is served from.

const projects = [
  {
    id: 1,
    title: "Student Service Bot",
    description: "Virtual Assistant for Student Desk Inquiries",
    image: ServiceBot,
    tags: ["SOZ", "Chatbot", "RAG"],
    status: "In Progress",
    problem: "The Student Desk is often overwhelmed with student questions regarding application and enrollment. Repetitive questions take up a lot of time, leaving less time for answering specific student concerns.",
    solution: "A chatbot based on RAG (Retrieval-Augmented Generation) was developed to answer student questions using data from the VU website. The bot can handle a wide range of questions, freeing up the Student Desk to focus on more complex inquiries.",
    link: "",
    slides: "",
    video: "",
    results: [
      "Chatbot prototype developed and tested",
      "Now in development with IT and Student Desk for production development"
    ]
  },
  {
    id: 2,
    title: "VU Study Quest",
    description: "Matching Students to Bachelor Programs",
    image: StudyQuest,
    tags: ["Recruitment", "Interactive", "Matching"],
    status: "Completed",
    problem: "First year students are dropping out at increasing rates due to a lack of understanding of the program they are enrolled in. Students often choose programs based on limited information, leading to mismatches between their interests and the program content.",
    solution: "We developed an interactive web application that uses AI generated questions based on course data from the VU website. The tool learns from their answers in order to make recommendations based on their preferences.",
    link: "",
    slides: "",
    video: "",
    results: [
      "AI Question Generation based on course materials",
      "Engaging tool to boost recruitment and retention",
    ]
  },
  {
    id: 3,
    title: "Research Cupid",
    description: "Connecting Researchers Intelligently",
    image: ResearchCupid,
    tags: ["Research", "Collaboration", "PURE"],
    status: "Completed",
    problem: "In alignment with the strategic policy of the VU for 2026-2030, the AICN Strategy and Innovation team developed a tool to promote multi-disciplinary research within the university. ",
    solution: "The tool develops a profile for each researcher based on their body of work, allowing users can semantically search the database of researchers and find potential collaborators that are catered to their profile.",
    link: "",
    slides: "",
    video: "",
    results: [
      "Integration with PURE database for researcher profiles",
      "Embeddings based matching for semantic search and recommendations",
    ]
  },
  {
    id: 4,
    title: "Kabu",
    description: "Translating Organizational Goals into Employee Futures",
    image: Kabu,
    tags: ["HR", "Employee Development", "Agent Assisted"],
    status: "Completed",
    problem: "Part of the strategic policy of the VU for 2026-2030 is to further develop employee development and career growth. ",
    solution: "Kabu (short for kabouter) is an organizational planning tool for employees, managers, and institutional leaders to take control of their futures at the university. Using the strategic goals defined by the university, career plans are mapped and projects can be appropriately scoped. With Kabu, all members of the VU have the ability to set goals and keep up to date with the changing landscape of university development. ",
    link: "",
    slides: "",
    video: "",
    results: [
      "AI assisted suggestions ",
      "Agent guided research on global market trends and best practices",
    ]
  },
  {
    id: 5,
    title: "VU Campaign Studio",
    description: "Content Management and Ideation for Marketing Campaigns",
    image: CampaignStudio,
    tags: ["Marketing", "Recruitment", "Agent Assisted"],
    status: "Completed",
    problem: "VU Social Team is responsible for creating and managing marketing campaigns for the university. Management of campaigns, student ambassadors, and user generated content is time consuming and decentralized.",
    solution: "The campaign studio allows for content planning in addition to event oversight, idea generation, and ambassador management",
    link: "https://campaign-studio.vita.labs.vu.nl",
    slides: "",
    video: "",
    results: [
      "Centralization of campaign management and content creation",
      "Agentic Event Planning and Ideation for Campaigns",
    ]
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-md">Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Ideas into Reality
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of successful projects that demonstrate my ability to deliver complex technical solutions 
            on time and within budget.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card 
                className="h-full cursor-pointer group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className="bg-background/90 text-foreground"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    {/* <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.duration}
                    </div> */}
                    {/* <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.teamSize}
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="relative">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  {/* Project Stats */}
                  {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">{selectedProject.duration}</p>
                      <p className="text-sm text-muted-foreground">Duration</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">{selectedProject.teamSize}</p>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <DollarSign className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="font-semibold">{selectedProject.budget}</p>
                      <p className="text-sm text-muted-foreground">Budget</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Badge 
                        variant={selectedProject.status === 'Completed' ? 'default' : 'secondary'}
                        className="mb-2"
                      >
                        {selectedProject.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground">Status</p>
                    </div>
                  </div> */}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  {(selectedProject.link || selectedProject.slides || selectedProject.video) && (
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.link && (
                        <Button asChild>
                          <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            View Project
                          </a>
                        </Button>
                      )}
                      {selectedProject.slides && (
                        <Button asChild variant="outline">
                          <a href={selectedProject.slides} target="_blank" rel="noopener noreferrer">
                            <Presentation className="h-4 w-4" />
                            Slide Deck
                          </a>
                        </Button>
                      )}
                      {selectedProject.video && (
                        <Button asChild variant="outline">
                          <a href={selectedProject.video} target="_blank" rel="noopener noreferrer">
                            <Video className="h-4 w-4" />
                            Watch Video
                          </a>
                        </Button>
                      )}
                    </div>
                  )}

                  {/* Problem, Solution, Results */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Problem</h4>
                      <p className="text-muted-foreground">{selectedProject.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Solution</h4>
                      <p className="text-muted-foreground">{selectedProject.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Results</h4>
                      <ul className="space-y-2">
                        {selectedProject.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}