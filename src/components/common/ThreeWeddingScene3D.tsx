import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeWeddingScene3DProps {
  petalCount?: number
  sparkleCount?: number
  interactive?: boolean
  className?: string
}

/**
 * ThreeWeddingScene3D
 * High-performance WebGL 3D Wedding Canvas with Three.js.
 * Features realistic 3D curved falling rose and lotus petals,
 * 3D shimmering golden stardust particles, and responsive 3D mouse parallax.
 */
export function ThreeWeddingScene3D({
  petalCount = 38,
  sparkleCount = 120,
  interactive = true,
  className = '',
}: ThreeWeddingScene3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 25

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.2)
    scene.add(ambientLight)

    const warmPointLight = new THREE.PointLight(0xffd700, 2.2, 50)
    warmPointLight.position.set(5, 10, 15)
    scene.add(warmPointLight)

    const rosePointLight = new THREE.PointLight(0xff6b8b, 1.8, 45)
    rosePointLight.position.set(-8, -5, 12)
    scene.add(rosePointLight)

    // -------------------------------------------------------------
    // 1. Curved 3D Petal Geometry (Natural Rose & Jasmine Petal)
    // -------------------------------------------------------------
    const createPetalGeometry = () => {
      const geom = new THREE.BufferGeometry()
      const segmentsU = 10
      const segmentsV = 10
      const positions: number[] = []
      const normals: number[] = []
      const uvs: number[] = []
      const indices: number[] = []

      for (let j = 0; j <= segmentsV; j++) {
        const v = j / segmentsV
        for (let i = 0; i <= segmentsU; i++) {
          const u = i / segmentsU
          // Parametric petal shape: narrower at base and tip, widest at middle
          const theta = (u - 0.5) * Math.PI
          const radius = Math.sin(v * Math.PI) * 0.75 + 0.15
          const x = Math.sin(theta) * radius * 1.3
          const y = (v - 0.5) * 2.2
          // 3D curvature: bowl curve and tip curl
          const z = Math.sin(v * Math.PI) * 0.35 + Math.sin(u * Math.PI) * 0.2

          positions.push(x, y, z)
          normals.push(0, 0, 1)
          uvs.push(u, v)
        }
      }

      for (let j = 0; j < segmentsV; j++) {
        for (let i = 0; i < segmentsU; i++) {
          const a = j * (segmentsU + 1) + i
          const b = a + 1
          const c = a + (segmentsU + 1)
          const d = c + 1
          indices.push(a, b, d)
          indices.push(a, d, c)
        }
      }

      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
      geom.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
      geom.setIndex(indices)
      geom.computeVertexNormals()
      return geom
    }

    const petalGeometry = createPetalGeometry()

    // 4 Palette Materials for Petals: Blush Pink, Champagne Rose, Royal Wine, Gold Sheen
    const petalPalettes = [
      { color: 0xf8a5b2, emissive: 0x3d0b15, roughness: 0.4, metalness: 0.1 }, // Soft Blush Pink
      { color: 0xfde2e7, emissive: 0x22050b, roughness: 0.35, metalness: 0.05 }, // Lotus Cream White
      { color: 0xd95071, emissive: 0x4a0a19, roughness: 0.45, metalness: 0.15 }, // Deep Rose Pink
      { color: 0xf3d279, emissive: 0x593d05, roughness: 0.25, metalness: 0.6 }, // Golden Petal Sheen
    ]

    const petalMaterials = petalPalettes.map(
      (p) =>
        new THREE.MeshStandardMaterial({
          color: p.color,
          emissive: p.emissive,
          roughness: p.roughness,
          metalness: p.metalness,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.92,
        })
    )

    // Create 3D Petal Meshes
    interface PetalData {
      mesh: THREE.Mesh
      velocity: THREE.Vector3
      rotSpeed: THREE.Vector3
      oscFreq: number
      oscAmp: number
      initialX: number
      seed: number
    }

    const petals: PetalData[] = []
    const groupPetals = new THREE.Group()
    scene.add(groupPetals)

    for (let i = 0; i < petalCount; i++) {
      const mat = petalMaterials[i % petalMaterials.length]
      const mesh = new THREE.Mesh(petalGeometry, mat)

      // Random starting spatial positions across 3D frustum
      const scale = THREE.MathUtils.randFloat(0.35, 0.75)
      mesh.scale.set(scale, scale, scale)

      const x = THREE.MathUtils.randFloat(-18, 18)
      const y = THREE.MathUtils.randFloat(-16, 22)
      const z = THREE.MathUtils.randFloat(-10, 12)
      mesh.position.set(x, y, z)

      mesh.rotation.set(
        THREE.MathUtils.randFloat(0, Math.PI * 2),
        THREE.MathUtils.randFloat(0, Math.PI * 2),
        THREE.MathUtils.randFloat(0, Math.PI * 2)
      )

      groupPetals.add(mesh)

      petals.push({
        mesh,
        velocity: new THREE.Vector3(
          THREE.MathUtils.randFloat(-0.015, 0.015),
          THREE.MathUtils.randFloat(-0.025, -0.055), // Slow romantic descent
          THREE.MathUtils.randFloat(-0.01, 0.01)
        ),
        rotSpeed: new THREE.Vector3(
          THREE.MathUtils.randFloat(-0.02, 0.02),
          THREE.MathUtils.randFloat(-0.025, 0.025),
          THREE.MathUtils.randFloat(-0.015, 0.015)
        ),
        oscFreq: THREE.MathUtils.randFloat(1.2, 2.5),
        oscAmp: THREE.MathUtils.randFloat(0.01, 0.03),
        initialX: x,
        seed: Math.random() * 100,
      })
    }

    // -------------------------------------------------------------
    // 2. Auspicious 3D Golden Sparkle Points & Dust Particles
    // -------------------------------------------------------------
    const sparkleGeometry = new THREE.BufferGeometry()
    const sparklePositions = new Float32Array(sparkleCount * 3)
    const sparkleScales = new Float32Array(sparkleCount)
    const sparkleVelocities: number[] = []

    for (let i = 0; i < sparkleCount; i++) {
      sparklePositions[i * 3 + 0] = THREE.MathUtils.randFloat(-24, 24)
      sparklePositions[i * 3 + 1] = THREE.MathUtils.randFloat(-18, 20)
      sparklePositions[i * 3 + 2] = THREE.MathUtils.randFloat(-12, 14)

      sparkleScales[i] = THREE.MathUtils.randFloat(0.5, 2.2)
      sparkleVelocities.push(
        THREE.MathUtils.randFloat(-0.005, 0.005), // vx
        THREE.MathUtils.randFloat(-0.008, 0.004), // vy
        THREE.MathUtils.randFloat(-0.005, 0.005) // vz
      )
    }

    sparkleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(sparklePositions, 3)
    )

    // Generate procedural soft-glow circle sprite
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')
      if (!ctx) return new THREE.Texture()

      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      grad.addColorStop(0, 'rgba(255, 248, 220, 1)')
      grad.addColorStop(0.25, 'rgba(243, 210, 121, 0.85)')
      grad.addColorStop(0.6, 'rgba(212, 175, 55, 0.35)')
      grad.addColorStop(1, 'rgba(212, 175, 55, 0)')

      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 64, 64)

      const texture = new THREE.CanvasTexture(canvas)
      return texture
    }

    const sparkleMaterial = new THREE.PointsMaterial({
      size: 0.65,
      map: createGlowTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xffe28a,
      opacity: 0.85,
    })

    const sparkles = new THREE.Points(sparkleGeometry, sparkleMaterial)
    scene.add(sparkles)

    // -------------------------------------------------------------
    // 3. Mouse & Orientation Interactive Parallax
    // -------------------------------------------------------------
    let mouseX = 0
    let mouseY = 0
    let targetCameraX = 0
    let targetCameraY = 0

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = -(e.clientY / window.innerHeight) * 2 + 1
      mouseX = nx
      mouseY = ny
      targetCameraX = nx * 2.5
      targetCameraY = ny * 1.8
    }

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (!interactive || e.gamma === null || e.beta === null) return
      const gamma = Math.max(-30, Math.min(30, e.gamma))
      const beta = Math.max(-30, Math.min(30, e.beta - 45))
      targetCameraX = (gamma / 30) * 2.0
      targetCameraY = (beta / 30) * 1.5
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true })

    // -------------------------------------------------------------
    // 4. Animation Loop
    // -------------------------------------------------------------
    let animationFrameId: number
    const clock = new THREE.Clock()
    let isVisible = true

    const handleVisibilityChange = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      if (!isVisible) return

      const delta = clock.getDelta()
      const time = clock.getElapsedTime()

      // Smooth camera parallax lerp
      camera.position.x += (targetCameraX - camera.position.x) * 0.04
      camera.position.y += (targetCameraY - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)

      // Light breathing animation
      warmPointLight.position.x = 5 + Math.sin(time * 0.7) * 2.5
      rosePointLight.position.y = -5 + Math.cos(time * 0.9) * 2.0

      // Update 3D Petals
      petals.forEach((p) => {
        // Fall down with fluttering sway
        p.mesh.position.y += p.velocity.y
        p.mesh.position.x +=
          p.velocity.x + Math.sin(time * p.oscFreq + p.seed) * p.oscAmp
        p.mesh.position.z += Math.cos(time * 0.8 + p.seed) * 0.01

        // 3D rotation
        p.mesh.rotation.x += p.rotSpeed.x
        p.mesh.rotation.y += p.rotSpeed.y
        p.mesh.rotation.z += p.rotSpeed.z

        // Wrap around when petal leaves bottom boundary
        if (p.mesh.position.y < -16) {
          p.mesh.position.y = 18
          p.mesh.position.x = THREE.MathUtils.randFloat(-18, 18)
          p.mesh.position.z = THREE.MathUtils.randFloat(-10, 10)
        }
      })

      // Update 3D Sparkles
      const posAttr = sparkleGeometry.attributes.position as THREE.BufferAttribute
      const posArr = posAttr.array as Float32Array

      for (let i = 0; i < sparkleCount; i++) {
        posArr[i * 3 + 0] += sparkleVelocities[i * 3 + 0]
        posArr[i * 3 + 1] += sparkleVelocities[i * 3 + 1]
        posArr[i * 3 + 2] += sparkleVelocities[i * 3 + 2]

        // Wrap boundaries
        if (posArr[i * 3 + 1] < -18) posArr[i * 3 + 1] = 18
        if (posArr[i * 3 + 0] > 24) posArr[i * 3 + 0] = -24
        if (posArr[i * 3 + 0] < -24) posArr[i * 3 + 0] = 24
      }
      posAttr.needsUpdate = true

      // Gentle overall shimmer rotation
      sparkles.rotation.y = time * 0.02
      sparkles.rotation.x = Math.sin(time * 0.015) * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('deviceorientation', handleDeviceOrientation)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      petalGeometry.dispose()
      petalMaterials.forEach((m) => m.dispose())
      sparkleGeometry.dispose()
      sparkleMaterial.dispose()
      renderer.dispose()
    }
  }, [petalCount, sparkleCount, interactive])

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-12 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  )
}

export default ThreeWeddingScene3D

