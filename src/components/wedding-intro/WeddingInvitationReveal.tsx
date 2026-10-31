import React, { useState, useEffect } from 'react'
import { Calendar, MapPin, Sparkles } from 'lucide-react'
import { launchPetalShower, launchHeartAndMultiShapeBurst } from '@/lib/confetti'

interface WeddingInvitationRevealProps {
  onOpenWebsite: () => void
  onReplayVideo?: () => void
}

export function WeddingInvitationReveal({
  onOpenWebsite,
}: WeddingInvitationRevealProps) {
  const [isOpened, setIsOpened] = useState(false)
  const [isBooming, setIsBooming] = useState(false)

  // Gentle petal shower on appearance
  useEffect(() => {
    launchPetalShower()
  }, [])

  // When clicking the center envelope or seal:
  // 1. Flap opens, card slides up
  // 2. Confetti & celebratory petals burst
  // 3. BOOM it smoothly transitions directly into the full wedding website!
  const handleOpenEnvelope = () => {
    if (isBooming) {
      // If already booming and tapped again, open immediately
      onOpenWebsite()
      return
    }

    setIsOpened(true)
    setIsBooming(true)

    // Launch celebratory multi-shape confetti & jasmine petals
    launchHeartAndMultiShapeBurst()
    setTimeout(() => {
      launchPetalShower()
    }, 400)

    // After the unboxing animation plays (1.35 seconds), BOOM open website!
    setTimeout(() => {
      onOpenWebsite()
    }, 1350)
  }

  return (
    <div
      className={`wedding-envelope-screen transition-all duration-700 ${
        isBooming ? 'scale-105 opacity-90' : ''
      }`}
      onClick={handleOpenEnvelope}
    >
      <div className="wedding-envelope-scene">
        {/* Auspicious Tamil Invocation */}
        <div className="wedding-envelope-instruction pointer-events-none">
          <p className="text-[11px] sm:text-xs font-serif tracking-[0.24em] text-[#F3D279] uppercase mb-1">
            || ஸ்ரீ விநாயகர் துணை ||
          </p>
          <h2 className="text-xs sm:text-sm font-cinzel tracking-wider text-amber-100 font-semibold">
            {isOpened
              ? 'மங்கல அழைப்பிதழ் • WEDDING INVITATION'
              : 'A ROYAL TAMIL INVITATION AWAITS YOU'}
          </h2>
          <p className="text-[10px] sm:text-[11px] text-[#F3D279]/90 tracking-wide mt-1 flex items-center justify-center gap-1.5">
            <Sparkles className="size-3 text-[#F3D279] animate-pulse" />
            <span>
              {isOpened
                ? 'Opening your wedding invitation...'
                : 'Tap the Wax Seal to Open'}
            </span>
            <Sparkles className="size-3 text-[#F3D279] animate-pulse" />
          </p>
        </div>

        {/* The 3D Little Envelope in Center */}
        <div
          className={`wedding-envelope-box ${isOpened ? 'is-opened' : ''} ${
            isBooming ? 'animate-pulse' : ''
          }`}
          onClick={(e) => {
            e.stopPropagation()
            handleOpenEnvelope()
          }}
          role="button"
          tabIndex={0}
          aria-label="Tap to open wedding invitation envelope"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleOpenEnvelope()
            }
          }}
        >
          {/* Back Shell with Gold Dashed Lining */}
          <div className="wedding-envelope-back">
            <div className="wedding-envelope-lining" />
          </div>

          {/* Sacred Invitation Card Inside */}
          <div className="wedding-envelope-inner-card">
            <div className="text-sm text-[#F3D279] font-serif font-bold">ௐ</div>
            <div className="text-[10px] tracking-widest text-amber-200 uppercase font-cinzel">
              Wedding Invitation
            </div>

            {/* Couple Names */}
            <div className="my-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-white font-cinzel leading-tight">
                Dr. Swetha
                <span className="text-[#F3D279] font-serif italic mx-1 font-normal text-xs">weds</span>
                Er. Deepak Kumar
              </h3>
            </div>

            {/* Dates & Venues */}
            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-amber-100 font-medium tracking-wide">
              <Calendar className="size-2.5 text-[#F3D279]" />
              <span>19 & 20 November 2026</span>
            </div>

            <div className="flex items-center gap-1 text-[8.5px] sm:text-[9.5px] text-zinc-300 mt-0.5">
              <MapPin className="size-2.5 text-[#F3D279]" />
              <span>AVVS Mahal & Senraya Temple</span>
            </div>
          </div>

          {/* Envelope Geometric Flaps */}
          <div className="wedding-pocket-left" />
          <div className="wedding-pocket-right" />
          <div className="wedding-pocket-bottom" />

          {/* 3D Folding Top Flap */}
          <div className="wedding-folding-flap">
            <div className="wedding-folding-flap-shape" />
          </div>

          {/* Auspicious Wax Seal Badge in Center */}
          <div className="wedding-seal-wrapper">
            <div className="wedding-seal-ripple" />
            <img
              src="/assets/seal_stamp.jpg"
              alt="Auspicious Wax Seal"
              className="wedding-seal-img"
            />
          </div>
        </div>

        {/* Subtle, elegant hint below (NO unwanted buttons) */}
        <p className="mt-6 text-[10px] sm:text-[11px] text-amber-200/60 font-cinzel tracking-widest uppercase animate-pulse pointer-events-none">
          {isOpened ? '✦ Welcome to our wedding ✦' : '✦ Tap to enter celebration ✦'}
        </p>
      </div>
    </div>
  )
}
