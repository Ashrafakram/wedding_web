import React, { useRef, useState } from 'react'

interface Card3DTiltProps {
  children: React.ReactNode
  className?: string
  maxTiltDeg?: number
  glareOpacity?: number
  scaleOnHover?: number
  perspective?: number
  style?: React.CSSProperties
  onClick?: () => void
}

/**
 * Card3DTilt
 * Adds interactive 3D physics tilt and dynamic golden specular glare to any card.
 * Uses hardware-accelerated CSS 3D transforms (`rotateX`, `rotateY`, `translateZ`)
 * with smooth easing and mouse/touch tracking.
 */
export function Card3DTilt({
  children,
  className = '',
  maxTiltDeg = 14,
  glareOpacity = 0.35,
  scaleOnHover = 1.035,
  perspective = 1100,
  style = {},
  onClick,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [transformStyle, setTransformStyle] = useState<string>('')
  const [glareStyle, setGlareStyle] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Normalize coordinates from -1 to 1
    const normX = (x - centerX) / centerX
    const normY = (y - centerY) / centerY

    const tiltX = -normY * maxTiltDeg
    const tiltY = normX * maxTiltDeg

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(
        2
      )}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, 1.05)`
    )

    // Move specular glare with light reflection
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100
    setGlareStyle({ x: glareX, y: glareY, opacity: glareOpacity })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`)
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative transform-gpu transition-transform ease-out will-change-transform ${className}`}
      style={{
        transform: transformStyle || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
        transitionDuration: isHovered ? '90ms' : '550ms',
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {/* Dynamic Specular Light Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glareStyle.opacity,
          background: `radial-gradient(circle 280px at ${glareStyle.x}% ${glareStyle.y}%, rgba(255, 235, 175, 0.45) 0%, rgba(243, 210, 121, 0.15) 40%, transparent 80%)`,
          mixBlendMode: 'overlay',
        }}
        aria-hidden="true"
      />

      {/* Children elements rendered with 3D depth */}
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  )
}

export default Card3DTilt

