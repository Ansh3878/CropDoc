"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Float, Text, Html } from "@react-three/drei"
import { MeshStandardMaterial, Color } from "three"
import { Button } from "@/components/ui/button"

// Plant model component
function Plant(props) {
  // Using a placeholder model (duck) since we don't have a plant model
  // In a real implementation, you would use an actual plant/crop model
  const { scene } = useGLTF("/assets/3d/duck.glb")
  const ref = useRef()

  useEffect(() => {
    scene.scale.set(2, 2, 2)
    scene.position.y = -1

    // Change materials to green to make it look more plant-like
    scene.traverse((node) => {
      if (node.isMesh) {
        node.material = new MeshStandardMaterial({
          color: new Color("#2d9d3a"),
          roughness: 0.5,
          metalness: 0.2,
        })
      }
    })
  }, [scene])

  // Add gentle rotation animation
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2 + props.rotation[1]
    }
  })

  return <primitive ref={ref} object={scene} {...props} />
}

// Add a new 3D model component for a magnifying glass
function MagnifyingGlass() {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) {
      // Circular motion around the plant
      const t = state.clock.getElapsedTime()
      ref.current.position.x = Math.sin(t * 0.5) * 3
      ref.current.position.z = Math.cos(t * 0.5) * 3
      ref.current.position.y = Math.sin(t * 0.3) + 1

      // Always look at the center
      ref.current.lookAt(0, 0, 0)
    }
  })

  return (
    <group ref={ref} position={[3, 1, 0]}>
      {/* Handle */}
      <mesh position={[0, -0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.1, 0.1, 2, 16]} />
        <meshStandardMaterial color="#8B4513" roughness={0.3} />
      </mesh>

      {/* Glass part */}
      <mesh position={[0, 0, 0]}>
        <ringGeometry args={[0.6, 0.8, 32]} />
        <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Lens */}
      <mesh position={[0, 0, 0.05]}>
        <circleGeometry args={[0.6, 32]} />
        <meshStandardMaterial color="#88CCFF" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

// Add a soil/ground component
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#5d4037" roughness={1} />
    </mesh>
  )
}

// Scanning effect component
function ScanningEffect({ active }) {
  const ref = useRef()
  const { viewport } = useThree()

  useFrame((state) => {
    if (ref.current && active) {
      // Move the scanning plane up and down
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 1.5
      // Rotate slightly
      ref.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[viewport.width * 0.8, viewport.width * 0.8]} />
      <meshBasicMaterial color="#4ade80" transparent opacity={0.2} wireframe />
    </mesh>
  )
}

// Floating particles component
function Particles({ count = 50 }) {
  const particles = useRef([])

  useFrame((state) => {
    particles.current.forEach((particle, i) => {
      const t = state.clock.getElapsedTime() + i * 100
      particle.position.y = Math.sin(t * 0.2) * 0.5 + Math.sin(t * 0.5) * 0.5
      particle.rotation.y = Math.sin(t * 0.3) * Math.PI
      particle.rotation.z = Math.cos(t * 0.2) * Math.PI * 0.2
    })
  })

  return Array.from({ length: count }).map((_, i) => (
    <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh
        ref={(el) => (particles.current[i] = el)}
        position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 10]}
        scale={0.1}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color={i % 3 === 0 ? "#4ade80" : i % 3 === 1 ? "#22c55e" : "#16a34a"}
          emissive={i % 3 === 0 ? "#4ade80" : i % 3 === 1 ? "#22c55e" : "#16a34a"}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  ))
}

// Info card component
function InfoCard({ position, title, description }) {
  return (
    <Html position={position} transform distanceFactor={10} occlude>
      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg w-48 pointer-events-auto">
        <h3 className="text-green-700 font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </Html>
  )
}

// Main scene component
export default function HeroScene() {
  const [scanning, setScanning] = useState(false)

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} shadows>
      <color attach="background" args={["#0f172a"]} />

      {/* Environment lighting */}
      <Environment preset="forest" />

      {/* Ambient light */}
      <ambientLight intensity={0.5} />

      {/* Directional light (sun) */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Ground */}
      <Ground />

      {/* Plant model */}
      <Plant rotation={[0, Math.PI / 4, 0]} />

      {/* Magnifying glass */}
      <MagnifyingGlass />

      {/* Scanning effect */}
      <ScanningEffect active={scanning} />

      {/* Particles */}
      <Particles />

      {/* Info cards */}
      <InfoCard
        position={[3, 1, 0]}
        title="Leaf Spot Detection"
        description="AI identifies patterns of leaf spots and classifies the disease type."
      />

      <InfoCard
        position={[-3, -1, 0]}
        title="Treatment Analysis"
        description="Get personalized treatment recommendations based on disease severity."
      />

      {/* Scan button */}
      <Html position={[0, -3, 0]} center>
        <Button className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg" onClick={() => setScanning(!scanning)}>
          {scanning ? "Stop Scan" : "Scan Plant"}
        </Button>
      </Html>

      {/* Title */}
      <Text
        position={[0, 3, 0]}
        fontSize={1}
        color="#ffffff"
        font="/fonts/Inter_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        CropDoc
      </Text>

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.5}
      />
    </Canvas>
  )
}

