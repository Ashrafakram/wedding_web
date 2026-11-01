import React from 'react'

interface FlowerParticle {
  id: number
  x: number
  color: string
  size: number
  sway: number
  duration: number
  delay: number
  type: 'flower' | 'petal'
}

// 25 handcrafted falling blossom petals for rich, continuous floral shower
const RAIN_PETALS: FlowerParticle[] = [
  { id: 1, x: 5, color: '#e0698f', size: 16, sway: 25, duration: 13, delay: -2, type: 'flower' },
  { id: 2, x: 12, color: '#d8407a', size: 19, sway: -18, duration: 16, delay: -7, type: 'petal' },
  { id: 3, x: 19, color: '#f7e3cd', size: 14, sway: 22, duration: 14, delay: -4, type: 'flower' },
  { id: 4, x: 26, color: '#ab7a45', size: 13, sway: -15, duration: 18, delay: -11, type: 'petal' },
  { id: 5, x: 33, color: '#e0698f', size: 20, sway: 30, duration: 12, delay: -5, type: 'flower' },
  { id: 6, x: 40, color: '#d8407a', size: 15, sway: -22, duration: 15, delay: -9, type: 'petal' },
  { id: 7, x: 47, color: '#ffb7c5', size: 18, sway: 18, duration: 17, delay: -1, type: 'flower' },
  { id: 8, x: 54, color: '#ab7a45', size: 14, sway: -20, duration: 14, delay: -13, type: 'petal' },
  { id: 9, x: 61, color: '#e0698f', size: 22, sway: 24, duration: 13, delay: -6, type: 'flower' },
  { id: 10, x: 68, color: '#d8407a', size: 17, sway: -28, duration: 16, delay: -10, type: 'petal' },
  { id: 11, x: 75, color: '#f7e3cd', size: 15, sway: 20, duration: 15, delay: -3, type: 'flower' },
  { id: 12, x: 82, color: '#ff8da1', size: 21, sway: -16, duration: 12, delay: -8, type: 'petal' },
  { id: 13, x: 89, color: '#ab7a45', size: 13, sway: 26, duration: 17, delay: -12, type: 'flower' },
  { id: 14, x: 96, color: '#e0698f', size: 18, sway: -22, duration: 14, delay: -4.5, type: 'petal' },
  { id: 15, x: 8, color: '#d8407a', size: 15, sway: 19, duration: 15, delay: -14, type: 'petal' },
  { id: 16, x: 22, color: '#f7e3cd', size: 17, sway: -24, duration: 13.5, delay: -9.5, type: 'flower' },
  { id: 17, x: 37, color: '#ff8da1', size: 14, sway: 21, duration: 16.5, delay: -2.5, type: 'petal' },
  { id: 18, x: 51, color: '#e0698f', size: 23, sway: -27, duration: 12.5, delay: -11.5, type: 'flower' },
  { id: 19, x: 65, color: '#ab7a45', size: 16, sway: 25, duration: 15, delay: -7.5, type: 'petal' },
  { id: 20, x: 79, color: '#d8407a', size: 19, sway: -21, duration: 14, delay: -1.2, type: 'flower' },
  { id: 21, x: 93, color: '#f7e3cd', size: 13, sway: 17, duration: 17, delay: -8.8, type: 'petal' },
  { id: 22, x: 15, color: '#ffb7c5', size: 18, sway: -19, duration: 13, delay: -5.8, type: 'flower' },
  { id: 23, x: 44, color: '#e0698f', size: 16, sway: 23, duration: 15.5, delay: -12.2, type: 'petal' },
  { id: 24, x: 71, color: '#ab7a45', size: 15, sway: -18, duration: 14.5, delay: -3.7, type: 'flower' },
  { id: 25, x: 86, color: '#d8407a', size: 20, sway: 22, duration: 13, delay: -10.5, type: 'petal' },
]

export const FlowerRain: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-20 select-none"
    >
      {RAIN_PETALS.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={
            {
              left: `${p.x}%`,
              top: '-32px',
              color: p.color,
              fontSize: `${p.size}px`,
              '--sway': `${p.sway}px`,
              animation: `ambient-fall ${p.duration}s ease-in-out ${p.delay}s infinite`,
              willChange: 'transform',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))',
            } as React.CSSProperties
          }
        >
          {p.type === 'flower' ? (
            <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
              <g>
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(120 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(180 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(240 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(300 12 12)" />
              </g>
              <circle cx="12" cy="12" r="1.8" fillOpacity="0.45" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
              <path
                d="M12 2C7.5 2 4 6 4 11c0 4.5 3.5 8.2 7.7 8.8L12 21.5l.3-1.7C16.5 19.2 20 15.5 20 11c0-5-3.5-9-8-9z"
                opacity="0.85"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

export default FlowerRain
