"use client"

import { useEffect, useRef } from "react"

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Pixel properties
    const pixelSize = 12
    const colors = [
      "rgba(0, 120, 255, 0.03)",
      "rgba(0, 120, 255, 0.05)",
      "rgba(0, 120, 255, 0.08)",
      "rgba(0, 100, 255, 0.1)",
    ]

    // Draw the pixelated background
    const drawPixels = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let x = 0; x < canvas.width; x += pixelSize) {
        for (let y = 0; y < canvas.height; y += pixelSize) {
          // Random chance to draw a pixel
          if (Math.random() > 0.7) {
            const colorIndex = Math.floor(Math.random() * colors.length)
            ctx.fillStyle = colors[colorIndex]
            ctx.fillRect(x, y, pixelSize, pixelSize)
          }
        }
      }
    }

    drawPixels()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" aria-hidden="true" />
}
