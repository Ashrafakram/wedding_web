import React, { useEffect, useState, useRef } from 'react'

interface Countdown3DCardProps {
  label: string
  tamilLabel?: string
  value: number
  isSeconds?: boolean
}

/**
 * Countdown3DCard
 * Luxury 3D Animated Countdown Tile for Indian Royal Weddings.
 * Features:
 * - Hardware-accelerated CSS 3D perspective flip on every digit tick
 * - Physical 3D isometric bevel & gold rim lighting
 * - Interactive 3D mouse parallax tilt
 * - Auspicious rhythmic golden pulse
 */
export function Countdown3DCard({
  label,
  tamilLabel,
  value,
  isSeconds = false,
}: Countdown3DCardProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const [isFlipping, setIsFlipping] = useState(false)
  const [cardTilt, setCardTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const prevValueRef = useRef(value)

  // Trigger 3D flip animation whenever value changes
  useEffect(() => {
    if (value !== prevValueRef.current) {
      setIsFlipping(true)
      const timer = setTimeout(() => {
        setDisplayValue(value)
        setIsFlipping(false)
      }, 350)
      prevValueRef.current = value
      return () => clearTimeout(timer)
    }
  }, [value])

  // Format 2 digits
  const formattedValue = String(displayValue).padStart(2, '0')

  // Interactive 3D mouse tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setCardTilt({ x: -y * 14, y: x * 14 })
  }

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center group cursor-pointer select-none"
      style={{ perspective: '800px' }}
    >
      {/* 3D Physical Card Outer Container */}
      <div
        className="relative w-20 sm:w-26 md:w-32 aspect-square rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37]/80 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#F5ECE0] p-2 sm:p-3 shadow-[0_16px_36px_-6px_rgba(62,12,19,0.45),0_0_20px_rgba(212,175,55,0.35),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-2px_0_rgba(197,155,39,0.3)] transition-transform duration-200 ease-out flex flex-col items-center justify-center transform-gpu"
        style={{
          transform: `rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg) translateZ(10px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle Horizontal 3D Split-Flap Crease Line */}
        <div className="absolute inset-x-2 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent z-10 pointer-events-none" />

        {/* Dynamic Specular Gold Sheen Reflection on Hover */}
        <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-tr from-transparent via-white/30 to-[#F3D279]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* 3D Flipping Number Display */}
        <div
          className={`relative z-20 flex items-center justify-center transition-transform duration-350 ease-in-out ${
            isFlipping ? 'scale-90 rotate-x-90 opacity-40' : 'scale-100 rotate-x-0 opacity-100'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(25px)`,
          }}
        >
          <span className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#5C131E] drop-shadow-[0_2px_4px_rgba(92,19,30,0.2)]">
            {formattedValue}
          </span>
        </div>

        {/* English Unit Label */}
        <span
          className="relative z-20 mt-1 sm:mt-1.5 text-[9px] sm:text-[11px] md:text-xs font-cinzel font-bold tracking-[0.25em] text-[#9A7516] uppercase drop-shadow-xs"
          style={{ transform: 'translateZ(20px)' }}
        >
          {label}
        </span>

        {/* Optional Tamil Secondary Label */}
        {tamilLabel && (
          <span
            className="hidden sm:inline-block text-[8px] sm:text-[9px] font-tamil text-[#C45B6E] tracking-wider mt-0.5"
            style={{ transform: 'translateZ(15px)' }}
          >
            {tamilLabel}
          </span>
        )}

        {/* Auspicious Pulsing Ring on Seconds Card */}
        {isSeconds && (
          <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl border border-[#F3D279] opacity-40 animate-ping pointer-events-none" />
        )}
      </div>

      {/* 3D Card Base Cast Shadow */}
      <div className="w-14 sm:w-20 h-2 bg-[#2B080C]/35 rounded-full blur-md mt-1.5 transition-all group-hover:w-16 sm:group-hover:w-22 group-hover:bg-[#2B080C]/45" />
    </div>
  )
}

export default Countdown3DCard

