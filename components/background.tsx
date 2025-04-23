"use client"

import { useEffect, useRef } from "react"

export default function Background() {
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

    // Grid properties
    const gridSize = 20
    const dotSize = 1

    // Draw the grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(0, 120, 255, 0.15)"

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.fillRect(x, y, dotSize, dotSize)
        }
      }

      // Draw random connecting lines
      ctx.strokeStyle = "rgba(0, 120, 255, 0.1)"
      ctx.lineWidth = 0.5

      const points = []
      for (let x = 0; x < canvas.width; x += gridSize * 4) {
        for (let y = 0; y < canvas.height; y += gridSize * 4) {
          if (Math.random() > 0.5) {
            points.push({ x, y })
          }
        }
      }

      // Connect some points with lines
      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        const closestPoints = findClosestPoints(point, points, 3)

        for (const closePoint of closestPoints) {
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(closePoint.x, closePoint.y)
          ctx.stroke()
        }
      }
    }

    // Find closest points
    const findClosestPoints = (point, allPoints, count) => {
      return allPoints
        .filter((p) => p !== point)
        .map((p) => ({
          point: p,
          distance: Math.sqrt(Math.pow(p.x - point.x, 2) + Math.pow(p.y - point.y, 2)),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, count)
        .map((p) => p.point)
    }

    drawGrid()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
}
