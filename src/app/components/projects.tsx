"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { ExternalLink, Calendar, Users, DollarSign, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Enterprise Cloud Migration",
    description: "Led the migration of legacy systems to AWS cloud infrastructure for a Fortune 500 company.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tags: ["AWS", "Agile", "Migration", "Enterprise"],
    duration: "18 months",
    teamSize: "15 members",
    budget: "$2.5M",
    status: "Completed",
    problem: "The client's legacy infrastructure was becoming increasingly expensive to maintain and lacked scalability for future growth.",
    solution: "Implemented a phased cloud migration strategy using AWS services, ensuring zero downtime and improved performance.",
    results: [
      "Reduced infrastructure costs by 35%",
      "Improved system performance by 60%",
      "Achieved 99.9% uptime",
      "Completed 2 months ahead of schedule"
    ]
  },
  {
    id: 2,
    title: "Digital Banking Platform",
    description: "Managed the development of a modern digital banking platform with mobile-first approach.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["FinTech", "Mobile", "Scrum", "Security"],
    duration: "12 months",
    teamSize: "20 members",
    budget: "$3.2M",
    status: "Completed",
    problem: "Traditional banking processes were slow and customer satisfaction was declining due to outdated digital interfaces.",
    solution: "Developed a comprehensive digital banking platform with advanced security features and intuitive user experience.",
    results: [
      "Increased customer satisfaction by 45%",
      "Reduced transaction processing time by 70%",
      "Enhanced security with zero breaches",
      "Won 'Best Digital Banking App' award"
    ]
  },
  {
    id: 3,
    title: "ERP System Implementation",
    description: "Orchestrated the implementation of SAP ERP system across multiple departments and locations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["SAP", "ERP", "Integration", "Training"],
    duration: "24 months",
    teamSize: "25 members",
    budget: "$4.1M",
    status: "Completed",
    problem: "Disconnected systems across departments led to data silos and inefficient business processes.",
    solution: "Implemented SAP ERP with custom modules, comprehensive training programs, and phased rollout strategy.",
    results: [
      "Integrated 15 departments seamlessly",
      "Improved data accuracy by 90%",
      "Reduced manual processes by 80%",
      "Achieved ROI within 18 months"
    ]
  },
  {
    id: 4,
    title: "IoT Analytics Platform",
    description: "Delivered an IoT data analytics platform for smart manufacturing operations.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
    tags: ["IoT", "Analytics", "Manufacturing", "Real-time"],
    duration: "15 months",
    teamSize: "12 members",
    budget: "$1.8M",
    status: "In Progress",
    problem: "Manufacturing operations lacked real-time visibility into equipment performance and predictive maintenance capabilities.",
    solution: "Built an IoT platform that collects, processes, and analyzes data from manufacturing equipment in real-time.",
    results: [
      "Connected 500+ IoT devices",
      "Reduced equipment downtime by 40%",
      "Improved operational efficiency by 25%",
      "Enabled predictive maintenance"
    ]
  },
  {
    id: 5,
    title: "Cybersecurity Framework",
    description: "Established comprehensive cybersecurity framework and incident response procedures.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop",
    tags: ["Security", "Compliance", "Risk Management", "GDPR"],
    duration: "9 months",
    teamSize: "8 members",
    budget: "$950K",
    status: "Completed",
    problem: "Increasing cyber threats and regulatory requirements demanded a robust security framework.",
    solution: "Implemented multi-layered security architecture with continuous monitoring and compliance automation.",
    results: [
      "Achieved 100% GDPR compliance",
      "Reduced security incidents by 85%",
      "Implemented 24/7 monitoring",
      "Passed all security audits"
    ]
  },
  {
    id: 6,
    title: "AI-Powered CRM System",
    description: "Deployed machine learning-enhanced CRM system to improve customer relationship management.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    tags: ["AI/ML", "CRM", "Automation", "Analytics"],
    duration: "10 months",
    teamSize: "14 members",
    budget: "$1.2M",
    status: "Completed",
    problem: "Sales team struggled with lead qualification and customer insights were limited by manual processes.",
    solution: "Integrated AI algorithms for lead scoring, customer behavior prediction, and automated workflow optimization.",
    results: [
      "Improved lead conversion by 55%",
      "Automated 70% of routine tasks",
      "Enhanced customer insights",
      "Increased sales productivity by 40%"
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
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {project.teamSize}
                    </div>
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
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

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