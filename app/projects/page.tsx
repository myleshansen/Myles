import Breadcrumb from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Eco Tracker",
      description:
        "A web application that helps users track their carbon footprint and provides personalized recommendations for reducing environmental impact.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Dungeon Crawler",
      description:
        "A procedurally generated roguelike game with pixel art graphics and challenging gameplay mechanics.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Unity", "C#", "Pixel Art"],
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Weather App",
      description:
        "A weather application that provides real-time weather data and forecasts for locations around the world.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "OpenWeather API", "CSS"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b p-4 bg-background z-10">
        <Breadcrumb />
      </div>
      <div className="flex-1 p-8 max-w-6xl mx-auto w-full z-10">
        <div className="bg-background p-8 rounded-lg border">
          <h1 className="text-3xl font-bold mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-muted-foreground my-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
