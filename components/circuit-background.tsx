"use client"

import { useEffect, useRef } from "react"

export default function CircuitBackground() {
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

    // Circuit properties
    const nodeSize = 3
    const lineWidth = 1
    const gridSize = 80
    const nodeColor = "rgba(0, 120, 255, 0.2)"
    const lineColor = "rgba(0, 120, 255, 0.1)"

    // Draw the circuit background
    const drawCircuit = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create grid of nodes
      const nodes = []
      for (let x = gridSize; x < canvas.width - gridSize; x += gridSize) {
        for (let y = gridSize; y < canvas.height - gridSize; y += gridSize) {
          // Add some randomness to node positions
          const offsetX = Math.random() * 20 - 10
          const offsetY = Math.random() * 20 - 10
          nodes.push({ x: x + offsetX, y: y + offsetY })
        }
      }

      // Draw connections
      ctx.strokeStyle = lineColor
      ctx.lineWidth = lineWidth

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Find closest nodes
        const closestNodes = nodes
          .filter((n, index) => index !== i)
          .sort((a, b) => {
            const distA = Math.sqrt(Math.pow(a.x - node.x, 2) + Math.pow(a.y - node.y, 2))
            const distB = Math.sqrt(Math.pow(b.x - node.x, 2) + Math.pow(b.y - node.y, 2))
            return distA - distB
          })
          .slice(0, 2)

        // Draw lines to closest nodes
        for (const closestNode of closestNodes) {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)

          // Create L-shaped paths instead of direct lines
          const midX = Math.random() > 0.5 ? node.x : closestNode.x
          const midY = Math.random() > 0.5 ? node.y : closestNode.y

          ctx.lineTo(midX, midY)
          ctx.lineTo(closestNode.x, closestNode.y)
          ctx.stroke()
        }
      }

      // Draw nodes
      ctx.fillStyle = nodeColor
      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    drawCircuit()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" aria-hidden="true" />
}
