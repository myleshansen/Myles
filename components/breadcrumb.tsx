"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Breadcrumb() {
  const pathname = usePathname()

  // Skip if we're on the home page
  if (pathname === "/") return null

  // Create breadcrumb segments
  const segments = pathname.split("/").filter(Boolean)

  return (
    <div className="flex items-center space-x-1 text-sm">
      <Link href="/">
        <Button variant="ghost" size="sm" className="h-8 px-2">
          <Home className="h-4 w-4" />
        </Button>
      </Link>

      {segments.map((segment, index) => {
        // Create the path for this segment
        const path = `/${segments.slice(0, index + 1).join("/")}`
        const isLast = index === segments.length - 1

        return (
          <div key={path} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
            {isLast ? (
              <span className="font-medium capitalize px-2">{segment}</span>
            ) : (
              <Link href={path}>
                <Button variant="ghost" size="sm" className="h-8 px-2 capitalize">
                  {segment}
                </Button>
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}
