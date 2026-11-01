import React, { useEffect, useState } from 'react'

interface PetalItem {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  isGold: boolean
  rotation: number
}

interface FloatingPetalsProps {
  count?: number
  zIndexClass?: string
}

export function FloatingPetals({ count = 18, zIndexClass = 'z-10' }: FloatingPetalsProps = {}) {
  const [petals, setPetals] = useState<PetalItem[]>([])

  useEffect(() => {
    const list: PetalItem[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 96,
      size: Math.random() * 8 + 10,
      duration: Math.random() * 6 + 9,
      delay: Math.random() * 8,
      isGold: Math.random() > 0.75,
      rotation: Math.random() * 360,
    }))
    setPetals(list)
  }, [])

  return (
    <div className={`fixed inset-0 pointer-events-none ${zIndexClass} overflow-hidden`} aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute -top-12 opacity-80"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
            borderRadius: '60% 0 60% 60%',
            backgroundColor: p.isGold ? '#E7C979' : '#FFFDF5',
            boxShadow: p.isGold
              ? '0 0 10px rgba(231,201,121,0.6)'
              : '0 2px 6px rgba(0,0,0,0.06)',
            border: p.isGold ? 'none' : '1px solid rgba(232, 222, 200, 0.4)',
            animation: `petal-sway ${p.duration}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}
