"use client"

import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <div className="w-full max-w-xs border-r p-6 flex flex-col justify-between relative bg-background h-screen sticky top-0">
      <div className="space-y-6">
        {/* Profile */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-secondary">
              <img src="/placeholder.svg?height=96&width=96" alt="Myles Hansen" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-1 right-1 status-dot"></div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Myles Hansen</h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <div className="border rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground">Wednesday</div>
            <div className="font-bold">2:26 PM EDT</div>
          </div>
          <Button className="rounded-lg h-auto py-3">
            <div className="text-center w-full">
              <div className="text-xs">Send Message</div>
              <div className="font-bold text-primary-foreground">Say "Hello!"</div>
            </div>
          </Button>
        </div>

        {/* Bio */}
        <div className="pt-4">
          <p className="text-sm leading-relaxed">
            Combining creativity with technical expertise, I leverage my design and development background to craft
            forward-thinking solutions while staying up-to-date with trends.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="space-y-4">
        <div className="text-lg font-bold">San Francisco, CA</div>
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <div>portfolio_v-3.0</div>
          <div>
            theme: $(<span className="text-primary">minimal.ui</span>)
          </div>
        </div>
      </div>
    </div>
  )
}
