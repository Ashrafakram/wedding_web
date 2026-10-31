import React, { useState, useEffect } from 'react'
import { Sparkles, Crown, ArrowRight, Volume2 } from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'
import { launchPetalShower } from '@/lib/confetti'

interface RoyalEnvelopeUnboxProps {
  isOpen: boolean
  onClose: () => void
}

export function RoyalEnvelopeUnbox({ isOpen, onClose }: RoyalEnvelopeUnboxProps) {
  const [isOpening, setIsOpening] = useState(false)

  // Prevent background scrolling while envelope is active
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

  const handleOpenEnvelope = () => {
    if (isOpening) return
    setIsOpening(true)

    // 1. Start authentic Indian classical Shehnai & Tanpura drone audio
    try {
      weddingAudio.start()
    } catch (e) {
      console.warn('Audio start failed:', e)
    }

    // 2. Launch auspicious golden and jasmine petal shower waves
    launchPetalShower()
    setTimeout(() => {
      launchPetalShower()
    }, 700)

    // 3. Smoothly fade out the unboxing screen after card elevates
    setTimeout(() => {
      onClose()
      setIsOpening(false)
    }, 2350)
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
      id="envelope-modal-wrapper"
      className={isOpening ? 'opacity-100' : ''}
      onClick={handleOpenEnvelope}
      role="dialog"
      aria-modal="true"
      aria-label="Royal Wedding Invitation Opening Ceremony"
    >
      {/* Background Ambient Radiance */}
      <div className="envelope-ambient-glow" />

      {/* Top Controls: Audio badge & Skip Button */}
      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-auto">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#F5EFE3] text-xs font-cinzel">
          <Crown className="size-3.5 text-[#F3D279] animate-pulse" />
          <span className="hidden sm:inline tracking-wider">Auspicious Shehnai & Bansuri</span>
          <span className="sm:hidden tracking-wider">Royal Audio</span>
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

      {/* 3D Envelope Scene */}
      <div className="envelope-scene">
        {/* Instruction Header */}
        <div className="envelope-instruction">
          <div className="flex items-center justify-center gap-1.5 mb-1 text-[#F3D279]">
            <Crown className="size-4" />
            <span>A Royal Invitation Awaits You</span>
            <Crown className="size-4" />
          </div>
          <span>Click the auspicious Wax Seal to unbox & listen</span>
        </div>

        {/* 3D Envelope Container */}
        <div
          id="envelope-container"
          className={`envelope-container ${isOpening ? 'opening' : ''}`}
          title="Click to unbox invitation"
        >
          {/* Back of Envelope with Gold Lining */}
          <div className="envelope-back">
            <div className="envelope-lining" />
          </div>

          {/* Invitation Card Inside (Elevates upward on click) */}
          <div className="envelope-card">
            <div className="envelope-card-om">ௐ</div>
            <div className="envelope-card-header font-script">Wedding Invitation</div>
            <div className="envelope-card-names font-cinzel">
              <span>Swetha</span>
              <span className="weds">weds</span>
              <span>Deepak Kumar</span>
            </div>
            <div className="envelope-card-date">
              Thursday & Friday • 19 & 20 November 2026
            </div>
            <p>
              "Two souls united by destiny, blessed by tradition and celebrated with love."
            </p>
            <div className="envelope-card-venue">
              📍 AVVS Mahal & Senraya Temple, Salem
            </div>
          </div>

          {/* Precision Flaps */}
          <div className="envelope-pocket-left" />
          <div className="envelope-pocket-right" />
          <div className="envelope-pocket-bottom" />

          {/* 3D Folding Top Flap */}
          <div className="envelope-flap">
            <div className="envelope-flap-inner" />
          </div>

          {/* Auspicious Wax Seal Badge */}
          <div
            id="wax-seal-trigger"
            className="wax-seal-wrapper"
            onClick={(e) => {
              e.stopPropagation()
              handleOpenEnvelope()
            }}
            role="button"
            tabIndex={0}
            aria-label="Open wedding invitation wax seal"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleOpenEnvelope()
              }
            }}
          >
            <div className="seal-ripple" />
            <img
              src="/assets/wax_seal.jpg"
              alt="Auspicious Wax Seal"
              className="wax-seal-img"
            />
          </div>
        </div>

        {/* Bottom subtle hint */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[#D4AF37]/80 text-xs tracking-widest font-cinzel uppercase animate-pulse">
          <Volume2 className="size-3.5" />
          <span>Tap to unbox with ceremonial music</span>
        </div>
      </div>
    </div>
  )
}
