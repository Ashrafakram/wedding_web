import React, { useEffect, useState } from 'react'

interface ShapeItem {
  id: number
  type: 'heart' | 'star' | 'petal' | 'diamond' | 'ring'
  left: number
  size: number
  duration: number
  delay: number
  color: string
  rotation: number
}

export function FloatingPetals() {
  const [shapes, setShapes] = useState<ShapeItem[]>([])

  useEffect(() => {
    const types: ShapeItem['type'][] = ['heart', 'star', 'petal', 'diamond', 'ring', 'heart', 'petal']
    const colors = ['#C59B27', '#E5A93C', '#E25B74', '#F4C877', '#C93B57', '#FDF8EC']

    const list: ShapeItem[] = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      type: types[i % types.length],
      left: Math.random() * 95,
      size: Math.random() * 10 + 12,
      duration: Math.random() * 7 + 10,
      delay: Math.random() * 8,
      color: colors[i % colors.length],
      rotation: Math.random() * 360,
    }))
    setShapes(list)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {shapes.map((s) => (
        <div
          key={s.id}
          className="absolute -top-12 will-change-transform"
          style={{
            left: `${s.left}%`,
            animation: `petal-sway ${s.duration}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
            animationDelay: `${s.delay}s`,
            transform: `rotate(${s.rotation}deg)`,
          }}
        >
          {s.type === 'heart' && (
            <svg
              width={s.size}
              height={s.size}
              viewBox="0 0 24 24"
              fill={s.color}
              className="opacity-75 drop-shadow-[0_2px_6px_rgba(226,91,116,0.4)]"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}

          {s.type === 'star' && (
            <span
              style={{
                fontSize: `${s.size}px`,
                color: s.color,
                textShadow: '0 0 8px rgba(243, 210, 121, 0.7)',
              }}
              className="opacity-80 block"
            >
              ✦
            </span>
          )}

          {s.type === 'diamond' && (
            <div
              style={{
                width: `${s.size * 0.8}px`,
                height: `${s.size * 0.8}px`,
                backgroundColor: s.color,
                transform: 'rotate(45deg)',
                boxShadow: '0 0 8px rgba(197, 155, 39, 0.5)',
              }}
              className="opacity-70 rounded-xs"
            />
          )}

          {s.type === 'ring' && (
            <div
              style={{
                width: `${s.size}px`,
                height: `${s.size}px`,
                border: `1.5px solid ${s.color}`,
                boxShadow: '0 0 6px rgba(243, 210, 121, 0.4)',
              }}
              className="rounded-full opacity-65"
            />
          )}

          {s.type === 'petal' && (
            <div
              style={{
                width: `${s.size}px`,
                height: `${s.size * 1.3}px`,
                borderRadius: '60% 0 60% 60%',
                backgroundColor: s.color,
                boxShadow: '0 0 8px rgba(231,201,121,0.5)',
              }}
              className="opacity-75"
            />
          )}
        </div>
      ))}
    </div>
  )
}
