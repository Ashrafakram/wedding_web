import React, { useEffect, useState, useMemo } from 'react'

export interface PetalItem {
  id: number
  left: number // 0% to 98%
  size: number // width in px
  duration: number // 8 to 12 seconds for medium petals
  delay: number // negative & positive for seamless continuous drift
  animationName: 'romanticPetalFall1' | 'romanticPetalFall2' | 'romanticPetalFall3'
  type: 'blush_pink' | 'soft_pink' | 'ivory_jasmine' | 'white_silk'
  shape: 'rose_curved' | 'jasmine_oval' | 'blossom_flutter'
  initialRotation: number
  maxOpacity: number
  hasGoldGlint: boolean
}

interface FloatingPetalsProps {
  count?: number
  className?: string
  zIndexClass?: string
}

export function FloatingPetals({ count = 26, className = '', zIndexClass = 'z-20' }: FloatingPetalsProps) {
  const [petals, setPetals] = useState<PetalItem[]>([])

  useEffect(() => {
    const animationVariants: PetalItem['animationName'][] = [
      'romanticPetalFall1',
      'romanticPetalFall2',
      'romanticPetalFall3',
    ]

    const petalTypes: PetalItem['type'][] = [
      'blush_pink',
      'soft_pink',
      'ivory_jasmine',
      'white_silk',
    ]

    const petalShapes: PetalItem['shape'][] = [
      'rose_curved',
      'jasmine_oval',
      'blossom_flutter',
    ]

    const generated: PetalItem[] = Array.from({ length: count }).map((_, i) => {
      // Petal sizing: medium petals predominantly (19px - 26px), with small (15px-18px) and large (27px-32px)
      const sizeRand = Math.random()
      const size = sizeRand < 0.2
        ? Math.floor(Math.random() * 4 + 15) // small: 15-18px
        : sizeRand < 0.8
        ? Math.floor(Math.random() * 8 + 19) // medium: 19-26px (majority)
        : Math.floor(Math.random() * 6 + 27) // large accent: 27-32px

      // Fall speed: strictly between 8 and 12 seconds as specified
      const duration = Number((8.0 + Math.random() * 4.0).toFixed(2))

      // Staggered delays: negative delays ensure petals are already distributed across the screen instantly
      const delay = Number(((Math.random() * duration) * (i % 2 === 0 ? -1 : 1)).toFixed(2))

      const type = petalTypes[i % petalTypes.length]
      const shape = petalShapes[i % petalShapes.length]
      const animationName = animationVariants[i % animationVariants.length]

      return {
        id: i,
        left: Number((Math.random() * 95 + 1.5).toFixed(2)),
        size,
        duration,
        delay,
        animationName,
        type,
        shape,
        initialRotation: Math.floor(Math.random() * 360),
        maxOpacity: Number((0.75 + Math.random() * 0.2).toFixed(2)),
        hasGoldGlint: Math.random() > 0.45,
      }
    })

    setPetals(generated)
  }, [count])

  if (petals.length === 0) return null

  return (
    <div
      className={`romantic-petals-container fixed inset-0 pointer-events-none select-none overflow-hidden ${zIndexClass} ${className}`}
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <PetalGraphic key={petal.id} petal={petal} />
      ))}
    </div>
  )
}

function PetalGraphic({ petal }: { petal: PetalItem }) {
  const width = petal.size
  const height = Math.round(petal.size * 1.34)

  // Gradient IDs unique to each petal type
  const gradId = `petal-grad-${petal.id}`
  const veinId = `vein-grad-${petal.id}`

  // Color tokens tailored to Romantic French Beige & Blush Pink Theme
  const colors = useMemo(() => {
    switch (petal.type) {
      case 'blush_pink':
        return {
          stop0: '#FFF0F5',
          stop50: '#F8B6C3',
          stop100: '#E07A8F',
          vein: '#FAD2E1',
          goldEdge: '#F3D279',
          glow: 'drop-shadow(0 2px 6px rgba(224, 122, 143, 0.32)) drop-shadow(0 0 5px rgba(243, 210, 121, 0.25))',
        }
      case 'soft_pink':
        return {
          stop0: '#FFF5F8',
          stop50: '#FBCFE8',
          stop100: '#D97285',
          vein: '#FCE7F3',
          goldEdge: '#E8C5CB',
          glow: 'drop-shadow(0 2px 5px rgba(217, 114, 133, 0.28)) drop-shadow(0 0 4px rgba(243, 210, 121, 0.2))',
        }
      case 'ivory_jasmine':
        return {
          stop0: '#FFFFFF',
          stop50: '#FFFDF6',
          stop100: '#F6EBD9',
          vein: '#FFF9EB',
          goldEdge: '#D4AF37',
          glow: 'drop-shadow(0 2px 6px rgba(212, 175, 55, 0.35)) drop-shadow(0 0 4px rgba(255, 235, 160, 0.3))',
        }
      case 'white_silk':
      default:
        return {
          stop0: '#FFFFFF',
          stop50: '#FFFAFB',
          stop100: '#FDEEF2',
          vein: '#FFFFFF',
          goldEdge: '#F3D279',
          glow: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 5px rgba(243, 210, 121, 0.2))',
        }
    }
  }, [petal.type])

  return (
    <div
      className="absolute -top-14 pointer-events-none transform-gpu"
      style={{
        left: `${petal.left}%`,
        width: `${width}px`,
        height: `${height}px`,
        animationName: petal.animationName,
        animationDuration: `${petal.duration}s`,
        animationDelay: `${petal.delay}s`,
        animationTimingFunction: 'cubic-bezier(0.37, 0, 0.63, 1)',
        animationIterationCount: 'infinite',
        animationFillMode: 'both',
        filter: colors.glow,
        willChange: 'transform, opacity',
        ['--petal-max-opacity' as any]: petal.maxOpacity,
      }}
    >
      <svg
        viewBox="0 0 32 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform-gpu"
        style={{
          transform: `rotate(${petal.initialRotation}deg)`,
        }}
      >
        <defs>
          {/* Main Petal Shaded Gradient */}
          <linearGradient id={gradId} x1="0" y1="0" x2="32" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.stop0} stopOpacity="0.96" />
            <stop offset="48%" stopColor={colors.stop50} stopOpacity="0.92" />
            <stop offset="100%" stopColor={colors.stop100} stopOpacity="0.88" />
          </linearGradient>

          {/* Delicate Central Vein Gradient */}
          <linearGradient id={veinId} x1="16" y1="6" x2="16" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.vein} stopOpacity="0.75" />
            <stop offset="100%" stopColor={colors.stop100} stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* 1. Organic Petal Silhouette (based on shape) */}
        {petal.shape === 'rose_curved' && (
          <>
            {/* Heart-curved Rose Petal */}
            <path
              d="M16 2.5 C23.5 2.5, 30.5 10, 29.5 22 C28.5 31, 21.5 39.5, 16 40.5 C10.5 39.5, 3.5 31, 2.5 22 C1.5 10, 8.5 2.5, 16 2.5 Z"
              fill={`url(#${gradId})`}
            />
            {/* Subtle natural crease / vein */}
            <path
              d="M16 7 Q17.2 20 16 36"
              stroke={`url(#${veinId})`}
              strokeWidth="0.85"
              strokeLinecap="round"
            />
          </>
        )}

        {petal.shape === 'jasmine_oval' && (
          <>
            {/* Slender Jasmine / Sampangi Petal */}
            <path
              d="M16 2 C21 3, 27 12, 26 24 C25 33, 19 39.5, 16 41 C13 39.5, 7 33, 6 24 C5 12, 11 3, 16 2 Z"
              fill={`url(#${gradId})`}
            />
            {/* Elegant curved center rib */}
            <path
              d="M16 5 Q15 22 16 38"
              stroke={`url(#${veinId})`}
              strokeWidth="0.75"
              strokeLinecap="round"
            />
          </>
        )}

        {petal.shape === 'blossom_flutter' && (
          <>
            {/* Wide Orchard Blossom Petal with flutter contour */}
            <path
              d="M16 2.5 C24 3, 31 11, 29 23 C27 32, 21 39, 16 40 C11 39, 5 32, 3 23 C1 11, 8 3, 16 2.5 Z"
              fill={`url(#${gradId})`}
            />
            {/* Soft branched delicate vein */}
            <path
              d="M16 6 Q16.8 21 16 36 M16 18 Q20 14 23 15 M16 24 Q11 20 8 22"
              stroke={`url(#${veinId})`}
              strokeWidth="0.65"
              strokeLinecap="round"
            />
          </>
        )}

        {/* 2. Gentle Auspicious Golden Edge Shimmer Glow */}
        {petal.hasGoldGlint && (
          <path
            d="M16 2.5 C21.5 3, 27.5 9, 28 18"
            stroke={colors.goldEdge}
            strokeWidth="0.8"
            strokeOpacity="0.55"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  )
}

export default FloatingPetals
