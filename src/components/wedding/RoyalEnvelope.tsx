import React, { useState } from 'react'

interface RoyalEnvelopeProps {
  onOpen: () => void
}

interface Particle {
  id: number
  x: number
  y: number
  color: string
  size: number
  rotStart: number
  rotEnd: number
  delay: number
}

interface AmbientPetal {
  id: number
  x: number
  color: string
  size: number
  sway: number
  duration: number
  delay: number
}

// ChungDoi authentic ambient falling flowers
const AMBIENT_PETALS: AmbientPetal[] = [
  { id: 1, x: 73.05, color: '#ab7a45', size: 23.85, sway: 22.1, duration: 22.9, delay: -9.3 },
  { id: 2, x: 50.1, color: '#ab7a45', size: 12.83, sway: -9.6, duration: 21.6, delay: -14.0 },
  { id: 3, x: 90.62, color: '#f7e3cd', size: 13.16, sway: -2.6, duration: 23.2, delay: -12.9 },
  { id: 4, x: 52.18, color: '#e0698f', size: 18.8, sway: 0.84, duration: 20.8, delay: -1.47 },
  { id: 5, x: 49.04, color: '#f7e3cd', size: 21.77, sway: -8.4, duration: 20.8, delay: -0.52 },
  { id: 6, x: 32.84, color: '#f7e3cd', size: 16.92, sway: -25.7, duration: 23.9, delay: -12.36 },
  { id: 7, x: 63.3, color: '#f7e3cd', size: 19.46, sway: 3.89, duration: 21.75, delay: -4.56 },
  { id: 8, x: 15.98, color: '#d8407a', size: 20.95, sway: -27.06, duration: 19.3, delay: -2.52 },
  { id: 9, x: 88.18, color: '#f7e3cd', size: 14.13, sway: 8.96, duration: 23.11, delay: -5.68 },
  { id: 10, x: 5.61, color: '#f7e3cd', size: 11.85, sway: -7.08, duration: 20.5, delay: -14.8 },
  { id: 11, x: 36.98, color: '#e0698f', size: 19.62, sway: -26.32, duration: 21.23, delay: -12.6 },
  { id: 12, x: 23.97, color: '#d8407a', size: 23.26, sway: 12.02, duration: 24.29, delay: -8.95 },
]

export const RoyalEnvelope: React.FC<RoyalEnvelopeProps> = ({ onOpen }) => {
  const [animationState, setAnimationState] = useState<'idle' | 'breaking' | 'away'>('idle')
  const [particles, setParticles] = useState<Particle[]>([])

  const handleOpen = () => {
    if (animationState !== 'idle') return

    // Create particle burst on seal break
    const colors = ['#ab7a45', '#f7e3cd', '#e0698f', '#640e1b', '#ffd700']
    const newParticles: Particle[] = Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 80,
      y: 50 + (Math.random() - 0.5) * 80,
      color: colors[i % colors.length],
      size: 14 + Math.random() * 16,
      rotStart: Math.random() * 360,
      rotEnd: 360 + Math.random() * 720,
      delay: Math.random() * 0.15,
    }))

    setParticles(newParticles)
    setAnimationState('breaking')

    setTimeout(() => {
      setAnimationState('away')
    }, 450)

    setTimeout(() => {
      onOpen()
    }, 1100)
  }

  return (
    <div
      data-landing-screenshot-id="invite-envelope"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none"
      style={{
        background:
          'linear-gradient(to bottom right, rgba(100,14,27,0.86), rgba(140,45,45,0.82), rgba(171,122,69,0.80)), url(/images/themes/mahal-gold/paper.webp) center / cover',
      }}
      onClick={handleOpen}
    >
      {/* 1. Ambient Falling Floral Petals */}
      <div style={{ zIndex: 1 }} className="absolute inset-0 pointer-events-none overflow-hidden">
        {AMBIENT_PETALS.map((petal) => (
          <div
            key={petal.id}
            className="absolute"
            style={
              {
                left: `${petal.x}%`,
                top: '-30px',
                color: petal.color,
                fontSize: `${petal.size}px`,
                '--sway': `${petal.sway}px`,
                animation: `ambient-fall ${petal.duration}s ease-in-out ${petal.delay}s infinite`,
              } as React.CSSProperties
            }
          >
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
          </div>
        ))}
      </div>

      {/* 2. Burst Particles on Seal Break */}
      {particles.length > 0 && (
        <div style={{ zIndex: 100 }} className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute left-1/2 top-1/2"
              style={
                {
                  color: p.color,
                  fontSize: `${p.size}px`,
                  textShadow: `0 0 10px ${p.color}`,
                  '--dx': `${(p.x - 50) * 5}px`,
                  '--dy': `${(p.y - 50) * 5}px`,
                  '--rot-start': `${p.rotStart}deg`,
                  '--rot-end': `${p.rotEnd}deg`,
                  animation: `particle-burst 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${p.delay}s forwards`,
                } as React.CSSProperties
              }
            >
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
            </div>
          ))}
        </div>
      )}

      {/* 3. The Royal Parchment Envelope Card */}
      <div
        style={{
          zIndex: 10,
          animation: animationState === 'away' ? 'envelope-away 0.85s ease-in forwards' : undefined,
        }}
        className="relative"
      >
        <div className="relative w-[310px] sm:w-[340px] md:w-[520px] lg:w-[600px]">
          {/* Top Wax Seal - Authentic Burgundy with White Heart */}
          <div
            style={{
              top: '50px',
              width: '56px',
              height: '56px',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle at 30% 30%, #640e1b, rgb(70, 0, 0))',
              boxShadow:
                '0 4px 20px rgba(100, 14, 27, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
              zIndex: 30,
              animation:
                animationState === 'breaking'
                  ? 'seal-break 0.6s ease-out forwards'
                  : 'seal-pulse 2s ease-in-out infinite',
            }}
            className="absolute left-1/2 rounded-full flex items-center justify-center cursor-pointer"
          >
            <svg
              style={{ fill: '#ffffff' }}
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Envelope Card Body */}
          <div
            style={{
              boxShadow:
                '0 25px 60px -12px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 40px rgba(171, 122, 69, 0.15)',
            }}
            className="relative rounded-lg"
          >
            {/* Background & Floral Corner Decorations (Top-Left & Bottom-Right) */}
            <div
              style={{
                background: 'rgba(247, 227, 205, 0.98)',
                border: '1px solid rgba(171, 122, 69, 0.15)',
                clipPath: 'inset(0 round 8px)',
              }}
              className="absolute inset-0 rounded-lg overflow-hidden"
            >
              {/* Top-Left Bougainvillea Branch */}
              <img
                src="/images/themes/mahal-gold/flower1.webp"
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none w-[46%] md:w-[38%] max-w-[220px] top-0 left-0 -translate-x-[22%] -translate-y-[24%] -scale-x-100"
              />
              {/* Bottom-Right Bougainvillea Branch */}
              <img
                src="/images/themes/mahal-gold/flower1.webp"
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none w-[42%] md:w-[34%] max-w-[200px] bottom-0 right-0 translate-x-[20%] translate-y-[18%] -scale-y-100"
              />
            </div>

            {/* Card Content */}
            <div className="relative z-10 text-center px-6 pt-28 pb-14 md:pt-24 md:pb-8">
              {/* Names */}
              <h1
                style={{
                  color: '#640e1b',
                  fontFamily: '"The Nautigal", ChungDoiIndic, cursive',
                }}
                className="mb-2 flex flex-col items-center leading-tight text-3xl sm:text-4xl"
              >
                <span
                  style={{ fontFamily: '"The Nautigal", ChungDoiIndic, cursive' }}
                  className="block w-full text-center"
                >
                  Swetha
                </span>
                <span
                  style={{ fontFamily: '"Alex Brush", ChungDoiIndic, cursive' }}
                  className="block w-full text-center text-lg leading-none sm:text-xl"
                >
                  &amp;
                </span>
                <span
                  style={{ fontFamily: '"The Nautigal", ChungDoiIndic, cursive' }}
                  className="block w-full text-center"
                >
                  Deepak Kumar
                </span>
              </h1>

              {/* Gold Ornament Divider */}
              <div className="flex items-center justify-center gap-3 mb-2">
                <div
                  style={{ background: 'linear-gradient(to right, transparent, #ab7a45)' }}
                  className="w-10 h-px"
                />
                <span style={{ color: '#ab7a45', opacity: 0.7 }} className="text-sm">
                  ❦
                </span>
                <div
                  style={{ background: 'linear-gradient(to left, transparent, #ab7a45)' }}
                  className="w-10 h-px"
                />
              </div>

              {/* Date */}
              <div
                style={{
                  color: 'rgba(100, 14, 27, 0.72)',
                  fontFamily: '"Lora", "Times New Roman", ChungDoiIndic, serif',
                }}
                className="text-[18px] mb-5 flex flex-col items-center"
              >
                <span dir="auto">November 19, 20, 2026</span>
              </div>

              {/* Cordially Invites */}
              <div className="mb-6">
                <p
                  style={{
                    color: 'rgba(100, 14, 27, 0.72)',
                    fontFamily: '"Lora", "Times New Roman", ChungDoiIndic, serif',
                  }}
                  className="text-[18px] font-light mb-2"
                >
                  <span dir="auto">Cordially Invites</span>
                </p>
              </div>

              {/* Open Button with Shimmer Sweep */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleOpen()
                }}
                style={{
                  backgroundColor: '#640e1b',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(100, 14, 27, 0.35)',
                  fontFamily: '"Lora", "Times New Roman", ChungDoiIndic, serif',
                }}
                className="relative px-8 py-2.5 text-lg font-semibold sm:font-medium rounded-full shadow-lg cursor-pointer flex w-fit items-center justify-center mx-auto overflow-hidden hover:scale-105 active:scale-95 transition-transform"
              >
                <span dir="auto">Open</span>
                <div
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    animation: 'shine 3s ease-in-out infinite',
                  }}
                  className="absolute top-0 h-full w-8 pointer-events-none"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoyalEnvelope
