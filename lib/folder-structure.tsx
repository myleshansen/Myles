import React from "react"
import type { ReactNode } from "react"
import WorkContent from "../components/content/work-content"
import AboutContent from "../components/content/about-content"
import ContactContent from "../components/content/contact-content"
import ResumeContent from "../components/content/resume-content"
import BlogPostsList from "../components/content/blog-posts-list"

type FolderItem = {
  name: string
  type: "folder" | "file"
  description?: string
  children?: FolderItem[]
  content?: ReactNode
}

export const folderStructure: FolderItem[] = [
  {
    name: "Work",
    type: "folder",
    description: "Professional experience and work history",
    children: [
      {
        name: "Experience",
        type: "file",
        description: "My professional work experience",
        content: <WorkContent />,
      },
      {
        name: "Projects",
        type: "folder",
        description: "Personal and professional projects",
        children: [
          {
            name: "Eco Tracker",
            type: "file",
            description: "A web application for tracking carbon footprint",
            content: (
              <div>
                <h1 className="text-3xl font-bold mb-6">Eco Tracker</h1>
                <div className="aspect-video w-full max-w-2xl mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Eco Tracker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mb-4">
                  A web application that helps users track their carbon footprint and provides personalized
                  recommendations for reducing environmental impact.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">React</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">Node.js</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">MongoDB</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Project Overview</h2>
                <p className="mb-4">
                  Eco Tracker is a comprehensive web application designed to help individuals and organizations monitor
                  and reduce their carbon footprint. The application provides personalized recommendations based on user
                  behavior and preferences.
                </p>
                <h2 className="text-xl font-bold mb-2">Key Features</h2>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Carbon footprint calculator</li>
                  <li>Personalized recommendations</li>
                  <li>Progress tracking and analytics</li>
                  <li>Community challenges and leaderboards</li>
                </ul>
              </div>
            ),
          },
          {
            name: "Dungeon Crawler",
            type: "file",
            description: "A procedurally generated roguelike game",
            content: (
              <div>
                <h1 className="text-3xl font-bold mb-6">Dungeon Crawler</h1>
                <div className="aspect-video w-full max-w-2xl mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Dungeon Crawler"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mb-4">
                  A procedurally generated roguelike game with pixel art graphics and challenging gameplay mechanics.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">Unity</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">C#</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">Pixel Art</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Project Overview</h2>
                <p className="mb-4">
                  Dungeon Crawler is a challenging roguelike game featuring procedurally generated levels, pixel art
                  graphics, and permadeath mechanics. Players navigate through increasingly difficult dungeons,
                  collecting items and battling enemies.
                </p>
                <h2 className="text-xl font-bold mb-2">Key Features</h2>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Procedurally generated levels</li>
                  <li>Permadeath mechanics</li>
                  <li>Diverse enemy types and behaviors</li>
                  <li>Unique items and power-ups</li>
                </ul>
              </div>
            ),
          },
          {
            name: "Portfolio Website",
            type: "file",
            description: "A modern, responsive portfolio website",
            content: (
              <div>
                <h1 className="text-3xl font-bold mb-6">Portfolio Website</h1>
                <div className="aspect-video w-full max-w-2xl mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Portfolio Website"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mb-4">A modern, responsive portfolio website built with Next.js and Tailwind CSS.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                    TypeScript
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2">Project Overview</h2>
                <p className="mb-4">
                  This portfolio website showcases my work, skills, and experience in a clean, modern interface. The
                  site is built with Next.js and Tailwind CSS, featuring responsive design and smooth animations.
                </p>
                <h2 className="text-xl font-bold mb-2">Key Features</h2>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Responsive design</li>
                  <li>Dark/light mode toggle</li>
                  <li>Project showcase</li>
                  <li>Blog section</li>
                </ul>
              </div>
            ),
          },
          {
            name: "Weather App",
            type: "file",
            description: "A weather application with real-time data",
            content: (
              <div>
                <h1 className="text-3xl font-bold mb-6">Weather App</h1>
                <div className="aspect-video w-full max-w-2xl mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Weather App"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mb-4">
                  A weather application that provides real-time weather data and forecasts for locations around the
                  world.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">React</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                    OpenWeather API
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">CSS</span>
                </div>
                <h2 className="text-xl font-bold mb-2">Project Overview</h2>
                <p className="mb-4">
                  The Weather App provides users with accurate, real-time weather information for any location
                  worldwide. The application features a clean, intuitive interface and utilizes the OpenWeather API for
                  data.
                </p>
                <h2 className="text-xl font-bold mb-2">Key Features</h2>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Real-time weather data</li>
                  <li>5-day forecast</li>
                  <li>Location search</li>
                  <li>Weather alerts and notifications</li>
                </ul>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    name: "Blog",
    type: "file",
    description: "Articles and thoughts on technology",
    content: <BlogPostsList />,
  },
  {
    name: "About",
    type: "file",
    description: "Information about me and my skills",
    content: <AboutContent />,
  },
  {
    name: "Contact",
    type: "file",
    description: "Ways to get in touch with me",
    content: <ContactContent />,
  },
  {
    name: "Resume",
    type: "file",
    description: "Professional resume and CV",
    content: <ResumeContent />,
  },
] 