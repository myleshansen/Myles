"use client"

import { useEffect, useRef } from "react"

export default function WindowsBackground() {
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

    // Draw the background
    const draw = () => {
      // Create sky gradient
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.7)
      skyGradient.addColorStop(0, "#3a7bd5")
      skyGradient.addColorStop(1, "#86c6f8")

      // Fill the sky
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw the hills
      drawHills(ctx, canvas.width, canvas.height)

      // Add subtle clouds
      drawClouds(ctx, canvas.width, canvas.height, Date.now() / 10000)
    }

    // Draw rolling hills
    const drawHills = (ctx, width, height) => {
      const hillHeight = height * 0.3
      const baseY = height * 0.7

      // First hill (larger, darker)
      ctx.fillStyle = "#4da64d"
      ctx.beginPath()
      ctx.moveTo(0, baseY)

      // Create a smooth curve for the hill
      for (let x = 0; x <= width; x += 10) {
        const y = baseY - hillHeight * 0.8 * Math.sin((x / width) * Math.PI)
        ctx.lineTo(x, y)
      }

      ctx.lineTo(width, baseY)
      ctx.lineTo(0, baseY)
      ctx.fill()

      // Second hill (smaller, lighter)
      ctx.fillStyle = "#7ac142"
      ctx.beginPath()
      ctx.moveTo(0, baseY)

      // Create a smooth curve for the second hill
      for (let x = 0; x <= width; x += 10) {
        const y = baseY - hillHeight * 0.5 * Math.sin((x / width) * Math.PI * 1.5 + 1)
        ctx.lineTo(x, y)
      }

      ctx.lineTo(width, baseY)
      ctx.lineTo(0, baseY)
      ctx.fill()
    }

    // Draw subtle clouds
    const drawClouds = (ctx, width, height, time) => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"

      // Draw a few clouds at different positions
      for (let i = 0; i < 5; i++) {
        const x = ((time * (i + 1) * 10) % (width + 300)) - 150
        const y = height * 0.2 + i * 30
        const cloudWidth = 100 + i * 30
        const cloudHeight = 40 + i * 5

        // Draw cloud shape
        ctx.beginPath()
        ctx.ellipse(x, y, cloudWidth / 2, cloudHeight / 2, 0, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.ellipse(x + cloudWidth * 0.3, y - cloudHeight * 0.2, cloudWidth / 3, cloudHeight / 2, 0, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.ellipse(x - cloudWidth * 0.3, y - cloudHeight * 0.1, cloudWidth / 4, cloudHeight / 3, 0, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Animation loop
    const animate = () => {
      draw()
      requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  )
}
