import Link from "next/link"
import { FolderIcon, FileText } from "lucide-react"
import type { ViewType } from "./view-toggle"

interface FolderProps {
  name: string
  href: string
  description?: string
  icon?: "folder" | "file"
  view: ViewType
}

export default function Folder({ name, href, description, icon = "folder", view }: FolderProps) {
  const Icon = icon === "folder" ? FolderIcon : FileText

  if (view === "grid") {
    return (
      <Link href={href} className="folder">
        <div className="folder-icon bg-background border-2 hover:border-primary transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <span className="text-sm bg-background px-2 py-1 rounded text-center">{name}</span>
      </Link>
    )
  }

  if (view === "list") {
    return (
      <Link
        href={href}
        className="flex items-center gap-3 p-2 hover:bg-secondary/30 rounded-md transition-colors w-full"
      >
        <Icon className="h-5 w-5 text-primary flex-shrink-0" />
        <span className="font-medium">{name}</span>
      </Link>
    )
  }

  // Detailed view
  return (
    <Link
      href={href}
      className="flex items-start gap-3 p-3 hover:bg-secondary/30 rounded-md transition-colors w-full border"
    >
      <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        {description && <span className="text-sm text-muted-foreground">{description}</span>}
      </div>
    </Link>
  )
}
