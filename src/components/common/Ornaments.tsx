import React, { useState, useEffect, useRef } from 'react'

export function LotusLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="#C59B27"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Central petal */}
      <path d="M50 15 C45 35, 45 65, 50 78 C55 65, 55 35, 50 15 Z" fill="#C59B27" fillOpacity="0.12" />
      {/* Inner left petal */}
      <path d="M50 78 C38 65, 30 42, 36 28 C42 42, 48 60, 50 78 Z" fill="#C59B27" fillOpacity="0.15" />
      {/* Inner right petal */}
      <path d="M50 78 C62 65, 70 42, 64 28 C58 42, 52 60, 50 78 Z" fill="#C59B27" fillOpacity="0.15" />
      {/* Outer left petal */}
      <path d="M50 78 C25 65, 15 50, 20 40 C30 52, 42 66, 50 78 Z" fill="#C59B27" fillOpacity="0.1" />
      {/* Outer right petal */}
      <path d="M50 78 C75 65, 85 50, 80 40 C70 52, 58 66, 50 78 Z" fill="#C59B27" fillOpacity="0.1" />
      {/* Base water/cushion */}
      <path d="M25 82 Q50 90 75 82" strokeWidth="2.5" />
      <path d="M32 87 Q50 93 68 87" strokeWidth="2" />
    </svg>
  )
}

export function GoldFloralDivider({
  className = 'my-6',
  accentColor = '#C59B27',
}: {
  className?: string
  accentColor?: string
}) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C59B27]/60 to-[#C59B27]" />
      <div className="flex items-center gap-1.5 text-[#C59B27]">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5">
          <path d="M12 4C10 8 10 16 12 20C14 16 14 8 12 4Z" fill={accentColor} fillOpacity="0.25" />
          <path d="M12 20C8 16 5 12 7 8C9 12 11 16 12 20Z" fill={accentColor} fillOpacity="0.2" />
          <path d="M12 20C16 16 19 12 17 8C15 12 13 16 12 20Z" fill={accentColor} fillOpacity="0.2" />
        </svg>
      </div>
      <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C59B27]/60 to-[#C59B27]" />
    </div>
  )
}

/**
 * Animated Traditional Tamil Kolam / Rangoli Divider
 * Self-draws its geometric sacred lines live on scroll using SVG stroke animation
 */
export function AnimatedKolamDivider({ className = 'my-8' }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center justify-center w-full max-w-xs sm:max-w-md px-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C59B27]/70" />
        <svg
          viewBox="0 0 120 40"
          className="w-28 sm:w-36 h-10 sm:h-12 mx-2 text-[#C59B27]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Kolam central lotus knot */}
          <path
            className={isVisible ? 'animate-kolam' : 'opacity-0'}
            d="M60 5 C50 18, 50 26, 60 35 C70 26, 70 18, 60 5 Z"
            fill="#C59B27"
            fillOpacity={isVisible ? '0.2' : '0'}
          />
          {/* Symmetrical Left Loop */}
          <path
            className={isVisible ? 'animate-kolam' : 'opacity-0'}
            style={{ animationDelay: '0.2s' }}
            d="M60 20 C42 8, 25 15, 20 20 C25 25, 42 32, 60 20 Z"
          />
          {/* Symmetrical Right Loop */}
          <path
            className={isVisible ? 'animate-kolam' : 'opacity-0'}
            style={{ animationDelay: '0.2s' }}
            d="M60 20 C78 8, 95 15, 100 20 C95 25, 78 32, 60 20 Z"
          />
          {/* Auspicious Kumkum / Sandal Dots */}
          <circle cx="60" cy="20" r="2.5" fill="#5C131E" />
          <circle cx="36" cy="20" r="1.8" fill="#C59B27" />
          <circle cx="84" cy="20" r="1.8" fill="#C59B27" />
          <circle cx="15" cy="20" r="1.5" fill="#5C131E" />
          <circle cx="105" cy="20" r="1.5" fill="#5C131E" />
        </svg>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C59B27]/70" />
      </div>
    </div>
  )
}

/**
 * Traditional Swaying Brass Temple Bells (Mani)
 * Gently sways back & forth with realistic pendulum physics
 */
export function SwayingTempleBells({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none flex items-start justify-between w-full px-4 sm:px-12 ${className}`}>
      {/* Left Bell */}
      <div className="animate-sway-bell flex flex-col items-center">
        {/* Brass Chain */}
        <div className="w-[1.5px] h-10 sm:h-16 bg-gradient-to-b from-[#C59B27] via-[#9A7516] to-[#F3D279]" />
        {/* Bell Body */}
        <svg viewBox="0 0 40 46" className="w-6 sm:w-8 h-8 sm:h-10 text-[#C59B27] drop-shadow-md">
          {/* Top Loop */}
          <circle cx="20" cy="5" r="3.5" fill="none" stroke="#C59B27" strokeWidth="2" />
          {/* Bell Dome */}
          <path
            d="M20 7 C13 14, 10 22, 7 32 C6 35, 34 35, 33 32 C30 22, 27 14, 20 7 Z"
            fill="url(#brassGradient)"
            stroke="#9A7516"
            strokeWidth="1.2"
          />
          {/* Clapper / Tongue */}
          <circle cx="20" cy="38" r="3" fill="#5C131E" stroke="#C59B27" strokeWidth="1" />
          <defs>
            <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3D279" />
              <stop offset="45%" stopColor="#C59B27" />
              <stop offset="100%" stopColor="#876510" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Bell */}
      <div className="animate-sway-bell-delayed flex flex-col items-center">
        {/* Brass Chain */}
        <div className="w-[1.5px] h-12 sm:h-20 bg-gradient-to-b from-[#C59B27] via-[#9A7516] to-[#F3D279]" />
        {/* Bell Body */}
        <svg viewBox="0 0 40 46" className="w-6 sm:w-8 h-8 sm:h-10 text-[#C59B27] drop-shadow-md">
          <circle cx="20" cy="5" r="3.5" fill="none" stroke="#C59B27" strokeWidth="2" />
          <path
            d="M20 7 C13 14, 10 22, 7 32 C6 35, 34 35, 33 32 C30 22, 27 14, 20 7 Z"
            fill="url(#brassGradient)"
            stroke="#9A7516"
            strokeWidth="1.2"
          />
          <circle cx="20" cy="38" r="3" fill="#5C131E" stroke="#C59B27" strokeWidth="1" />
        </svg>
      </div>
    </div>
  )
}
