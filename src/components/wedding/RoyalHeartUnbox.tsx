import React, { useState, useEffect } from 'react'
import { Heart, Sparkles, Crown, ArrowRight, Volume2, Star } from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'
import { launchHeartAndMultiShapeBurst } from '@/lib/confetti'

interface RoyalHeartUnboxProps {
  isOpen: boolean
  onClose: () => void
}

export function RoyalHeartUnbox({ isOpen, onClose }: RoyalHeartUnboxProps) {
  const [isOpening, setIsOpening] = useState(false)

  // Prevent background scrolling while locket is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reset opening state when reopened
  useEffect(() => {
    if (isOpen) {
      setIsOpening(false)
    }
  }, [isOpen])

  const handleOpenHeartLocket = () => {
    if (isOpening) return
    setIsOpening(true)

    // 1. Play auspicious Bansuri & Shehnai classical raga
    try {
      weddingAudio.start()
    } catch (e) {
      console.warn('Audio start failed:', e)
    }

    // 2. Launch romantic multi-shape explosion (hearts, stars, petals, gems)
    launchHeartAndMultiShapeBurst()
    setTimeout(() => {
      launchHeartAndMultiShapeBurst()
    }, 800)

    // 3. Smoothly fade out into the main site after the heart opens
    setTimeout(() => {
      onClose()
      setIsOpening(false)
    }, 2400)
  }

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      weddingAudio.start()
    } catch (_) {}
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      id="heart-unbox-wrapper"
      className={isOpening ? 'opacity-100' : ''}
      onClick={handleOpenHeartLocket}
      role="dialog"
      aria-modal="true"
      aria-label="Royal Heart Wedding Invitation Unboxing"
    >
      {/* 1. Ambient Pulsing Radiance */}
      <div className="heart-ambient-glow" />

      {/* 2. Celestial Orbiting Shapes Ring */}
      <div className="orbiting-shapes-ring">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-sm text-[#F3D279] animate-pulse">✦</span>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-sm text-[#F3D279] animate-pulse">💖</span>
        <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-sm text-[#E8C060] animate-pulse">✨</span>
        <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-sm text-[#F3D279] animate-pulse">✦</span>
      </div>

      {/* 3. Floating Background Multi-Shapes */}
      <div className="floating-shape-orb top-16 left-12 text-[#F3D279]/50 text-xl hidden sm:block">💖</div>
      <div className="floating-shape-orb top-28 right-16 text-[#F3D279]/40 text-2xl hidden sm:block">✦</div>
      <div className="floating-shape-orb bottom-24 left-20 text-[#F3D279]/45 text-lg hidden sm:block">✨</div>
      <div className="floating-shape-orb bottom-20 right-24 text-[#F3D279]/50 text-xl hidden sm:block">💖</div>

      {/* 4. Top Header Controls */}
      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-auto">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/35 text-[#F5EFE3] text-xs font-cinzel">
          <Heart className="size-3.5 text-[#F3D279] fill-[#F3D279]/30 animate-pulse" />
          <span className="tracking-wider">Two Hearts &bull; Sacred Union</span>
        </div>

        <button
          onClick={handleSkip}
          className="group flex items-center gap-1.5 bg-black/45 hover:bg-[#163224]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 hover:border-[#F3D279] text-[#F3D279] text-xs font-cinzel tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer active:scale-95"
          title="Directly enter invitation"
        >
          <span>Skip to Invite</span>
          <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 5. 3D Heart Scene */}
      <div className="heart-scene">
        {/* Instruction Header */}
        <div className="heart-instruction">
          <div className="flex items-center justify-center gap-2 mb-1.5 text-[#F3D279]">
            <Heart className="size-4 fill-[#F3D279] animate-pulse" />
            <span className="font-semibold tracking-[0.2em]">Sacred Heart Unboxing</span>
            <Heart className="size-4 fill-[#F3D279] animate-pulse" />
          </div>
          <span>Tap the beating Golden Heart Locket to unlock</span>
        </div>

        {/* 3D Heart Locket Container */}
        <div
          className={`heart-locket-container ${isOpening ? 'opening' : ''}`}
          title="Tap to open the heart locket"
        >
          {/* Inner Heart Sanctuary Core (Revealed on Open) */}
          <div className="heart-inner-portal">
            <div className="text-xl sm:text-2xl text-[#F3D279] leading-none mb-1">ௐ</div>
            <div className="font-script text-2xl sm:text-3xl text-[#FCF6BA] leading-tight mb-0.5">
              Wedding Invitation
            </div>
            
            <div className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide my-1">
              <span>Swetha</span>
              <span className="font-script text-xl sm:text-2xl text-[#F3D279] mx-1.5">&amp;</span>
              <span>Deepak Kumar</span>
            </div>

            <div className="text-[10px] sm:text-[11px] font-cinzel text-[#F3D279] uppercase tracking-wider my-0.5">
              19 &amp; 20 November 2026
            </div>

            <p className="text-[10px] sm:text-xs text-[#E8DEC8]/90 italic max-w-[85%] line-clamp-2 my-1">
              "Two hearts united in eternal devotion, blessed by family and tradition."
            </p>

            <div className="text-[9px] sm:text-[10px] font-semibold text-[#FCF6BA] px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 mt-1">
              📍 AVVS Mahal &amp; Senraya Temple, Salem
            </div>
          </div>

          {/* Left Heart Wing (3D Door) */}
          <div className="heart-wing-left">
            <svg viewBox="0 0 160 280" className="w-full h-full drop-shadow-xl" preserveAspectRatio="none">
              <defs>
                <linearGradient id="heartGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1B4731" />
                  <stop offset="70%" stopColor="#0E2B1D" />
                  <stop offset="100%" stopColor="#081A12" />
                </linearGradient>
                <linearGradient id="goldBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF0B3" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#997A15" />
                </linearGradient>
              </defs>
              {/* Left half of sculptural heart */}
              <path
                d="M 160,280 C 70,220 5,170 5,100 C 5,40 50,5 110,5 C 135,5 150,15 160,35 Z"
                fill="url(#heartGradLeft)"
                stroke="url(#goldBorderGrad)"
                strokeWidth="3.5"
              />
              {/* Ornate inner filigree line */}
              <path
                d="M 155,260 C 80,205 20,160 20,102 C 20,52 56,22 108,22 C 130,22 144,30 155,48"
                fill="none"
                stroke="rgba(243, 210, 121, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              {/* Decorative Corner Flourish */}
              <circle cx="50" cy="85" r="3" fill="#F3D279" opacity="0.7" />
              <circle cx="95" cy="45" r="4" fill="#F3D279" opacity="0.8" />
            </svg>
          </div>

          {/* Right Heart Wing (3D Door) */}
          <div className="heart-wing-right">
            <svg viewBox="0 0 160 280" className="w-full h-full drop-shadow-xl" preserveAspectRatio="none">
              {/* Right half of sculptural heart */}
              <path
                d="M 0,280 C 90,220 155,170 155,100 C 155,40 110,5 50,5 C 25,5 10,15 0,35 Z"
                fill="url(#heartGradLeft)"
                stroke="url(#goldBorderGrad)"
                strokeWidth="3.5"
              />
              {/* Ornate inner filigree line */}
              <path
                d="M 5,260 C 80,205 140,160 140,102 C 140,52 104,22 52,22 C 30,22 16,30 5,48"
                fill="none"
                stroke="rgba(243, 210, 121, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              {/* Decorative Corner Flourish */}
              <circle cx="110" cy="85" r="3" fill="#F3D279" opacity="0.7" />
              <circle cx="65" cy="45" r="4" fill="#F3D279" opacity="0.8" />
            </svg>
          </div>

          {/* Center Royal Golden Heart Seal */}
          <div
            className="heart-seal-wrapper"
            onClick={(e) => {
              e.stopPropagation()
              handleOpenHeartLocket()
            }}
            role="button"
            tabIndex={0}
            aria-label="Open wedding heart locket"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleOpenHeartLocket()
              }
            }}
          >
            <div className="heart-seal-ripple" />
            <div className="heart-seal-inner group">
              <Heart className="size-6 sm:size-7 text-[#523B06] fill-[#8C6A12] animate-bounce" />
              <span className="text-[9px] sm:text-[10px] font-cinzel font-black tracking-widest text-[#241703] uppercase mt-0.5">
                S 💖 D
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Hint */}
        <div className="mt-7 flex items-center justify-center gap-2 text-[#F3D279]/90 text-xs tracking-widest font-cinzel uppercase animate-pulse">
          <Volume2 className="size-3.5" />
          <span>Tap to unlock with ceremonial music &amp; hearts</span>
        </div>
      </div>
    </div>
  )
}
