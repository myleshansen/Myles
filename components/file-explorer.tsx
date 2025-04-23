"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Folder from "@/components/folder"
import ViewToggle, { type ViewType } from "@/components/view-toggle"
import { folderStructure } from "@/lib/folder-structure"

export default function FileExplorer() {
  const router = useRouter()
  const pathname = usePathname()

  // Try to get the saved view from localStorage, default to grid
  const [view, setView] = useState<ViewType>("grid")

  // Load saved view preference on client side
  useEffect(() => {
    const savedView = localStorage.getItem("folderView") as ViewType | null
    if (savedView) {
      setView(savedView)
    }
  }, [])

  // Save view preference when it changes
  const handleViewChange = (newView: ViewType) => {
    setView(newView)
    localStorage.setItem("folderView", newView)
  }

  // Get current path and folders
  const path = pathname === "/" ? "" : pathname
  const currentPath = path.split("/").filter(Boolean)

  // Navigate through the folder structure to find current folders
  let currentFolders = folderStructure
  let currentContent = null

  if (currentPath.length > 0) {
    // Navigate through the path
    let current = folderStructure
    let valid = true

    for (const segment of currentPath) {
      const found = current.find((item) => item.name.toLowerCase() === segment.toLowerCase())
      if (found && found.type === "folder" && found.children) {
        current = found.children
      } else if (found && found.type === "file" && found.content) {
        currentContent = found.content
        valid = false
        break
      } else {
        valid = false
        break
      }
    }

    if (valid) {
      currentFolders = current
    }
  }

  return (
    <div className="flex-1 flex flex-col relative">
      {/* Header */}
      <div className="border-b p-4 flex justify-between items-center bg-background z-10">
        <div className="font-mono text-sm text-muted-foreground">/{currentPath.join("/")}</div>
        <ViewToggle onViewChange={handleViewChange} currentView={view} />
      </div>

      {/* Content */}
      <div className="flex-1 p-8 relative z-10">
        {currentContent ? (
          <div className="bg-background p-8 rounded-lg border">{currentContent}</div>
        ) : (
          <>
            {view === "grid" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {currentFolders.map((folder) => (
                  <Folder
                    key={folder.name}
                    name={folder.name}
                    href={`${path}/${folder.name.toLowerCase()}`}
                    description={folder.description}
                    icon={folder.type}
                    view={view}
                  />
                ))}
              </div>
            )}

            {view === "list" && (
              <div className="space-y-1">
                {currentFolders.map((folder) => (
                  <Folder
                    key={folder.name}
                    name={folder.name}
                    href={`${path}/${folder.name.toLowerCase()}`}
                    description={folder.description}
                    icon={folder.type}
                    view={view}
                  />
                ))}
              </div>
            )}

            {view === "detailed" && (
              <div className="space-y-3">
                {currentFolders.map((folder) => (
                  <Folder
                    key={folder.name}
                    name={folder.name}
                    href={`${path}/${folder.name.toLowerCase()}`}
                    description={folder.description}
                    icon={folder.type}
                    view={view}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
