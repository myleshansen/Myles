"use client"
import { LayoutGrid, List, AlignLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export type ViewType = "grid" | "list" | "detailed"

interface ViewToggleProps {
  onViewChange: (view: ViewType) => void
  currentView: ViewType
}

export default function ViewToggle({ onViewChange, currentView }: ViewToggleProps) {
  return (
    <TooltipProvider>
      <div className="flex gap-1 bg-secondary/30 p-1 rounded-md">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={currentView === "grid" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => onViewChange("grid")}
              aria-label="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Grid view</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={currentView === "list" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => onViewChange("list")}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>List view</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={currentView === "detailed" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => onViewChange("detailed")}
              aria-label="Detailed view"
            >
              <AlignLeft className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Detailed view</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
