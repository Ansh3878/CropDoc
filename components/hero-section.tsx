"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function HeroSection() {
  const containerRef = useRef(null)
  const [renderMode, setRenderMode] = useState("loading") // 'loading', 'webgl', 'canvas', 'none'

  useEffect(() => {
    if (!containerRef.current) return

    let renderer = null
    let scene = null
    let camera = null
    let frameId = null
    let plantGroup = null
    let cleanup = null

    // Function to detect WebGL support
    const detectWebGLContext = () => {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")

      if (gl && gl instanceof WebGLRenderingContext) {
        return true
      }
      return false
    }

    // Create a simple 2D canvas fallback
    const createCanvasFallback = () => {
      setRenderMode("canvas")

      const fallbackCanvas = document.createElement("canvas")
      fallbackCanvas.width = containerRef.current.clientWidth
      fallbackCanvas.height = containerRef.current.clientHeight
      fallbackCanvas.style.width = "100%"
      fallbackCanvas.style.height = "100%"
      containerRef.current.appendChild(fallbackCanvas)

      const ctx = fallbackCanvas.getContext("2d")
      if (!ctx) return null

      // Draw a gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, fallbackCanvas.height)
      gradient.addColorStop(0, "#1a2e35")
      gradient.addColorStop(1, "#0f172a")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, fallbackCanvas.width, fallbackCanvas.height)

      // Draw a simple plant
      const drawPlant = () => {
        // Clear canvas with gradient
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, fallbackCanvas.width, fallbackCanvas.height)

        const centerX = fallbackCanvas.width / 2
        const centerY = fallbackCanvas.height / 2

        // Draw pot
        ctx.fillStyle = "#964B00"
        ctx.beginPath()
        ctx.moveTo(centerX - 60, centerY + 100)
        ctx.lineTo(centerX - 80, centerY + 150)
        ctx.lineTo(centerX + 80, centerY + 150)
        ctx.lineTo(centerX + 60, centerY + 100)
        ctx.closePath()
        ctx.fill()

        // Draw soil
        ctx.fillStyle = "#3E2723"
        ctx.beginPath()
        ctx.ellipse(centerX, centerY + 100, 60, 20, 0, 0, Math.PI * 2)
        ctx.fill()

        // Draw stem
        ctx.fillStyle = "#33691E"
        ctx.beginPath()
        ctx.moveTo(centerX - 5, centerY + 100)
        ctx.lineTo(centerX - 10, centerY - 50)
        ctx.lineTo(centerX, centerY - 100)
        ctx.lineTo(centerX + 10, centerY - 50)
        ctx.lineTo(centerX + 5, centerY + 100)
        ctx.closePath()
        ctx.fill()

        // Draw leaves
        ctx.fillStyle = "#4CAF50"

        // Left leaf
        ctx.beginPath()
        ctx.ellipse(centerX - 50, centerY, 60, 30, Math.PI / 6, 0, Math.PI * 2)
        ctx.fill()

        // Right leaf
        ctx.beginPath()
        ctx.ellipse(centerX + 50, centerY - 20, 60, 30, -Math.PI / 6, 0, Math.PI * 2)
        ctx.fill()

        // Top leaf
        ctx.beginPath()
        ctx.ellipse(centerX + 20, centerY - 70, 40, 25, Math.PI / 4, 0, Math.PI * 2)
        ctx.fill()

        // Draw flower
        ctx.fillStyle = "#9C27B0"
        ctx.beginPath()
        ctx.arc(centerX, centerY - 120, 25, 0, Math.PI * 2)
        ctx.fill()

        // Draw petals
        ctx.fillStyle = "#BA68C8"
        const petalRadius = 15
        const petalDistance = 20

        // Draw 6 petals around the flower
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2
          const petalX = centerX + Math.cos(angle) * petalDistance
          const petalY = centerY - 120 + Math.sin(angle) * petalDistance

          ctx.beginPath()
          ctx.arc(petalX, petalY, petalRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Initial draw
      drawPlant()

      // Add simple animation
      let animationFrame
      let rotation = 0

      const animateCanvas = () => {
        rotation += 0.02

        // Apply a subtle movement to the plant
        const centerX = fallbackCanvas.width / 2
        const centerY = fallbackCanvas.height / 2
        const offsetX = Math.sin(rotation) * 5

        // Clear and redraw with offset
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, fallbackCanvas.width, fallbackCanvas.height)

        // Draw with offset
        ctx.save()
        ctx.translate(offsetX, 0)
        drawPlant()
        ctx.restore()

        animationFrame = requestAnimationFrame(animateCanvas)
      }

      animateCanvas()

      // Handle window resize
      const handleResize = () => {
        fallbackCanvas.width = containerRef.current.clientWidth
        fallbackCanvas.height = containerRef.current.clientHeight
        drawPlant()
      }

      window.addEventListener("resize", handleResize)

      // Return cleanup function
      return () => {
        cancelAnimationFrame(animationFrame)
        window.removeEventListener("resize", handleResize)
        if (containerRef.current && fallbackCanvas) {
          containerRef.current.removeChild(fallbackCanvas)
        }
      }
    }

    // Initialize WebGL scene
    const initWebGL = () => {
      try {
        // Set render mode
        setRenderMode("webgl")

        // Create scene
        scene = new THREE.Scene()

        // Create camera
        camera = new THREE.PerspectiveCamera(
          65,
          containerRef.current.clientWidth / containerRef.current.clientHeight,
          0.1,
          1000,
        )
        camera.position.z = 5

        // Create renderer with safe settings
        renderer = new THREE.WebGLRenderer({
          antialias: false, // Disable for better performance
          alpha: true,
          powerPreference: "low-power",
          precision: "lowp",
          preserveDrawingBuffer: false,
        })

        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
        renderer.setClearColor(0x000000, 0)
        renderer.setPixelRatio(1) // Use lowest pixel ratio for performance
        containerRef.current.appendChild(renderer.domElement)

        // Create a group for the plant
        plantGroup = new THREE.Group()
        scene.add(plantGroup)

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
        directionalLight.position.set(5, 5, 5)
        scene.add(directionalLight)

        // Create plant pot
        const potGeometry = new THREE.CylinderGeometry(1, 0.8, 1, 16)
        const potMaterial = new THREE.MeshBasicMaterial({ color: 0x964b00 })
        const pot = new THREE.Mesh(potGeometry, potMaterial)
        pot.position.y = -1.5
        plantGroup.add(pot)

        // Create soil
        const soilGeometry = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 16)
        const soilMaterial = new THREE.MeshBasicMaterial({ color: 0x3e2723 })
        const soil = new THREE.Mesh(soilGeometry, soilMaterial)
        soil.position.y = -0.9
        plantGroup.add(soil)

        // Create stem
        const stemGeometry = new THREE.CylinderGeometry(0.08, 0.15, 2, 8)
        const stemMaterial = new THREE.MeshBasicMaterial({ color: 0x33691e })
        const stem = new THREE.Mesh(stemGeometry, stemMaterial)
        stem.position.y = 0
        plantGroup.add(stem)

        // Create leaves
        const createLeaf = (x, y, z, rotationY, scale, color) => {
          // Simple leaf geometry
          const leafGeometry = new THREE.SphereGeometry(0.5, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2)
          const leafMaterial = new THREE.MeshBasicMaterial({
            color: color,
            side: THREE.DoubleSide,
          })

          const leaf = new THREE.Mesh(leafGeometry, leafMaterial)
          leaf.position.set(x, y, z)
          leaf.rotation.set(Math.PI / 2, rotationY, 0)
          leaf.scale.set(scale, scale * 1.5, scale)

          return leaf
        }

        // Add leaves
        const leaves = [
          createLeaf(0.7, 0.2, 0, 0, 0.7, 0x4caf50),
          createLeaf(-0.7, 0.3, 0, Math.PI, 0.7, 0x4caf50),
          createLeaf(0.3, 0.7, 0.5, Math.PI / 4, 0.6, 0x8bc34a),
          createLeaf(-0.4, 0.5, -0.3, -Math.PI / 4, 0.6, 0x8bc34a),
          // Add a diseased leaf
          createLeaf(0.5, 0, 0.4, Math.PI / 6, 0.5, 0xffd54f),
        ]

        leaves.forEach((leaf) => plantGroup.add(leaf))

        // Create flower
        const flowerGeometry = new THREE.SphereGeometry(0.25, 12, 12)
        const flowerMaterial = new THREE.MeshBasicMaterial({ color: 0x9c27b0 })
        const flower = new THREE.Mesh(flowerGeometry, flowerMaterial)
        flower.position.y = 1
        plantGroup.add(flower)

        // Create petals
        const petalGeometry = new THREE.SphereGeometry(0.15, 8, 8)
        const petalMaterial = new THREE.MeshBasicMaterial({ color: 0xba68c8 })

        // Add 6 petals around the flower
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2
          const petalX = Math.cos(angle) * 0.3
          const petalZ = Math.sin(angle) * 0.3

          const petal = new THREE.Mesh(petalGeometry, petalMaterial)
          petal.position.set(petalX, 1, petalZ)
          plantGroup.add(petal)
        }

        // Mouse interaction variables
        let isDragging = false
        let previousMousePosition = { x: 0, y: 0 }

        // Mouse interaction handlers
        const handleMouseDown = (event) => {
          event.preventDefault()
          isDragging = true
          previousMousePosition = {
            x: event.clientX,
            y: event.clientY,
          }
          containerRef.current.style.cursor = "grabbing"
        }

        const handleMouseMove = (event) => {
          if (!isDragging) return

          const deltaX = event.clientX - previousMousePosition.x
          const deltaY = event.clientY - previousMousePosition.y

          plantGroup.rotation.y += deltaX * 0.01
          plantGroup.rotation.x += deltaY * 0.01

          // Limit vertical rotation
          plantGroup.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, plantGroup.rotation.x))

          previousMousePosition = {
            x: event.clientX,
            y: event.clientY,
          }
        }

        const handleMouseUp = () => {
          isDragging = false
          containerRef.current.style.cursor = "grab"
        }

        // Add mouse event listeners
        containerRef.current.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp)
        containerRef.current.style.cursor = "grab"

        // Handle window resize
        const handleResize = () => {
          if (!containerRef.current || !renderer) return
          camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
          camera.updateProjectionMatrix()
          renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
        }
        window.addEventListener("resize", handleResize)

        // Animation loop
        const animate = () => {
          frameId = requestAnimationFrame(animate)

          // Simple animation
          flower.rotation.y += 0.01

          // Gentle swaying of the plant
          plantGroup.position.x = Math.sin(Date.now() * 0.001) * 0.1

          // Render scene
          renderer.render(scene, camera)
        }

        // Start animation
        animate()

        // Return cleanup function
        return () => {
          cancelAnimationFrame(frameId)
          window.removeEventListener("resize", handleResize)

          if (containerRef.current) {
            containerRef.current.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp)

            if (renderer && renderer.domElement) {
              containerRef.current.removeChild(renderer.domElement)
            }
          }

          // Dispose resources
          scene.traverse((object) => {
            if (object.geometry) object.geometry.dispose()
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach((material) => material.dispose())
              } else {
                object.material.dispose()
              }
            }
          })

          if (renderer) renderer.dispose()
        }
      } catch (err) {
        console.error("WebGL initialization error:", err)

        // Clean up any created resources
        if (renderer && renderer.domElement && containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement)
        }

        // Fall back to canvas rendering
        return createCanvasFallback()
      }
    }

    // Try to initialize WebGL, fall back to canvas if needed
    if (detectWebGLContext()) {
      cleanup = initWebGL()
    } else {
      cleanup = createCanvasFallback()
    }

    // Return cleanup function
    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div className="w-full h-full">
      <div ref={containerRef} className="w-full h-full">
        {renderMode === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  )
}

