import React from 'react'

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
      <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C59B27]/60 to-[#C59B27]" />
      <div className="flex items-center gap-1.5 text-[#C59B27]">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5">
          <path d="M12 4C10 8 10 16 12 20C14 16 14 8 12 4Z" fill={accentColor} fillOpacity="0.25" />
          <path d="M12 20C8 16 5 12 7 8C9 12 11 16 12 20Z" fill={accentColor} fillOpacity="0.2" />
          <path d="M12 20C16 16 19 12 17 8C15 12 13 16 12 20Z" fill={accentColor} fillOpacity="0.2" />
        </svg>
      </div>
      <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#C59B27]/60 to-[#C59B27]" />
    </div>
  )
}

export function OrnamentalSwirl({ className = 'w-12 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} fill="none" stroke="#C59B27" strokeWidth="2">
      <path d="M10 20 Q 25 5, 45 20 T 55 20 Q 75 35, 90 20" strokeLinecap="round" />
      <circle cx="50" cy="20" r="3" fill="#C59B27" />
    </svg>
  )
}

export function JasmineFlower({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="#FFFDF9" stroke="#E2D4B7" strokeWidth="2">
      <circle cx="50" cy="50" r="12" fill="#F8E5A7" stroke="#C59B27" />
      <ellipse cx="50" cy="22" rx="14" ry="20" />
      <ellipse cx="50" cy="78" rx="14" ry="20" />
      <ellipse cx="22" cy="50" rx="20" ry="14" />
      <ellipse cx="78" cy="50" rx="20" ry="14" />
      <ellipse cx="30" cy="30" rx="16" ry="16" />
      <ellipse cx="70" cy="30" rx="16" ry="16" />
      <ellipse cx="30" cy="70" rx="16" ry="16" />
      <ellipse cx="70" cy="70" rx="16" ry="16" />
    </svg>
  )
}
