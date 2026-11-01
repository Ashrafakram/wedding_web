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

// Generate static ambient petals for background floating
const AMBIENT_PETALS: AmbientPetal[] = [
  { id: 1, x: 73, color: '#ab7a45', size: 24, sway: 22, duration: 23, delay: -9 },
  { id: 2, x: 50, color: '#ab7a45', size: 13, sway: -10, duration: 21, delay: -14 },
  { id: 3, x: 90, color: '#f7e3cd', size: 14, sway: -3, duration: 23, delay: -12 },
  { id: 4, x: 52, color: '#e0698f', size: 18, sway: 1, duration: 21, delay: -1.5 },
  { id: 5, x: 49, color: '#f7e3cd', size: 22, sway: -8, duration: 20, delay: -0.5 },
  { id: 6, x: 32, color: '#f7e3cd', size: 16, sway: -25, duration: 24, delay: -12 },
  { id: 7, x: 63, color: '#f7e3cd', size: 19, sway: 4, duration: 21, delay: -4.5 },
  { id: 8, x: 16, color: '#d8407a', size: 21, sway: 16, duration: 22, delay: -15 },
  { id: 9, x: 88, color: '#f7e3cd', size: 14, sway: -18, duration: 23, delay: -8 },
  { id: 10, x: 6, color: '#f7e3cd', size: 12, sway: -14, duration: 21, delay: -11 },
  { id: 11, x: 37, color: '#e0698f', size: 20, sway: -12, duration: 21, delay: -6 },
  { id: 12, x: 24, color: '#d8407a', size: 23, sway: -24, duration: 24, delay: -13 },
]

export const RoyalEnvelope: React.FC<RoyalEnvelopeProps> = ({ onOpen }) => {
  const [animationState, setAnimationState] = useState<'idle' | 'breaking' | 'away'>('idle')
  const [particles, setParticles] = useState<Particle[]>([])

  const handleOpen = () => {
    if (animationState !== 'idle') return

    // Create particle burst
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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none"
      style={{
        background:
          'linear-gradient(to bottom right, rgba(100,14,27,0.88), rgba(140,45,45,0.84), rgba(171,122,69,0.82)), url(/images/themes/mahal-gold/paper.webp) center / cover',
      }}
      onClick={handleOpen}
    >
      {/* 1. Ambient Falling Floral Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
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
        <div className="absolute inset-0 pointer-events-none z-[100]">
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
        className="relative z-10 transition-transform duration-700"
        style={{
          animation: animationState === 'away' ? 'envelope-away 0.85s ease-in forwards' : undefined,
        }}
      >
        <div className="relative w-[315px] sm:w-[350px] md:w-[480px] lg:w-[540px]">
          {/* Top Wax Seal */}
          <div
            className="absolute left-1/2 z-20"
            style={{
              top: '40px',
              width: '58px',
              height: '58px',
              transform: 'translate(-50%, -50%)',
              animation:
                animationState === 'breaking'
                  ? 'seal-break 0.6s ease-out forwards'
                  : 'seal-pulse 2.2s ease-in-out infinite',
            }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-white text-xl shadow-2xl border border-[#ab7a45]/40"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #c9933b, #7d521d, #4d2f09)',
                boxShadow: '0 6px 20px rgba(171, 122, 69, 0.55)',
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#fff8f0]">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* Envelope Card Body */}
          <div
            className="relative rounded-[16px] overflow-hidden"
            style={{
              background: 'rgba(247, 227, 205, 0.98)',
              border: '1px solid rgba(171, 122, 69, 0.25)',
              boxShadow:
                '0 25px 60px -12px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 40px rgba(171, 122, 69, 0.2)',
            }}
          >
            {/* Top Right Corner Flower Decoration */}
            <img
              src="/images/themes/mahal-gold/flower1.webp"
              alt=""
              aria-hidden="true"
              className="absolute -top-6 -right-6 w-[42%] md:w-[35%] max-w-[190px] pointer-events-none select-none opacity-90"
            />

            <div className="relative z-10 text-center px-6 pt-24 pb-12 md:pt-24 md:pb-14">
              {/* Couple Names */}
              <h1 className="mb-4">
                <span
                  className="block text-[#640e1b] font-normal leading-[1.1]"
                  style={{
                    fontFamily: '"The Nautigal", cursive',
                    fontSize: 'clamp(42px, 12vw, 68px)',
                  }}
                >
                  Deepak Kumar
                </span>
                <span
                  className="block my-1 text-[#640e1b]"
                  style={{
                    fontFamily: '"Alex Brush", cursive',
                    fontSize: 'clamp(24px, 6vw, 36px)',
                  }}
                >
                  &amp;
                </span>
                <span
                  className="block text-[#640e1b] font-normal leading-[1.1]"
                  style={{
                    fontFamily: '"The Nautigal", cursive',
                    fontSize: 'clamp(42px, 12vw, 68px)',
                  }}
                >
                  Swetha
                </span>
              </h1>

              {/* Divider with ❦ */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-12 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, #ab7a45)' }}
                />
                <span className="text-[#ab7a45] text-base opacity-80">❦</span>
                <div
                  className="w-12 h-px"
                  style={{ background: 'linear-gradient(to left, transparent, #ab7a45)' }}
                />
              </div>

              {/* Date */}
              <div
                className="text-[17px] md:text-[19px] mb-4 text-[#640e1b]/80 font-normal tracking-wide"
                style={{ fontFamily: '"Lora", serif' }}
              >
                November 20, 2026
              </div>

              {/* Cordially Invites */}
              <div className="mb-7">
                <p
                  className="text-[16px] md:text-[18px] font-light text-[#640e1b]/75 italic"
                  style={{ fontFamily: '"Lora", serif' }}
                >
                  Cordially Invites
                </p>
              </div>

              {/* Open Pill Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleOpen()
                }}
                className="relative px-10 py-3 text-lg font-medium text-white rounded-full shadow-lg overflow-hidden flex items-center justify-center mx-auto transition-transform hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: '#640e1b',
                  boxShadow: '0 6px 20px rgba(100, 14, 27, 0.45)',
                  fontFamily: '"Lora", serif',
                }}
              >
                <span className="relative z-10 tracking-wider">Open</span>
                {/* Shimmer Sweep Animation */}
                <div
                  className="absolute top-0 h-full w-12 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)',
                    animation: 'shine 2.8s ease-in-out infinite',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

