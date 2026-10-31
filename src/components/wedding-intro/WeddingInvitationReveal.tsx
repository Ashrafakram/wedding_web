import React, { useState, useEffect } from 'react'
import { Calendar, MapPin, Sparkles, Heart, ExternalLink, CalendarPlus } from 'lucide-react'
import { launchPetalShower, launchHeartAndMultiShapeBurst } from '@/lib/confetti'
import { weddingAudio } from '@/lib/weddingAudio'
import { getGoogleCalendarUrl } from '@/lib/calendar'

interface WeddingInvitationRevealProps {
  onOpenWebsite: () => void
  onReplayVideo?: () => void
}

export function WeddingInvitationReveal({
  onOpenWebsite,
}: WeddingInvitationRevealProps) {
  const [avatarsMet, setAvatarsMet] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const [isBooming, setIsBooming] = useState(false)

  // 1. Cinematic entrance: Groom slides from left, Bride slides from right.
  // 2. After 1.1s, they meet in the center -> trigger gold sparkle & marigold petal burst!
  useEffect(() => {
    const timer = setTimeout(() => {
      setAvatarsMet(true)
      launchHeartAndMultiShapeBurst()
      try {
        weddingAudio.playTempleBellChime()
      } catch (_) {}
    }, 1100)

    return () => clearTimeout(timer)
  }, [])

  // When clicking the center envelope or seal:
  // 1. Auspicious Temple Bell Chime plays!
  // 2. Flap opens, card slides up in 3D
  // 3. Confetti & celebratory petals burst
  // 4. Smoothly transitions directly into the full wedding website!
  const handleOpenEnvelope = () => {
    if (isBooming) {
      onOpenWebsite()
      return
    }

    setIsOpened(true)
    setIsBooming(true)

    try {
      weddingAudio.playTempleBellChime()
      if (!weddingAudio.isPlaying) {
        weddingAudio.start()
      }
    } catch (_) {}

    launchHeartAndMultiShapeBurst()
    setTimeout(() => {
      launchPetalShower()
    }, 350)

    setTimeout(() => {
      onOpenWebsite()
    }, 2200)
  }

  const handleGoogleCalendarClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(getGoogleCalendarUrl(), '_blank')
  }

  return (
    <div
      className={`wedding-envelope-screen relative transition-all duration-700 ${
        isBooming ? 'scale-105 opacity-95' : ''
      }`}
      onClick={handleOpenEnvelope}
    >
      {/* Background with empty mandapam */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/mandapam_empty.jpg"
          alt="Temple Mandapam"
          className="w-full h-full object-cover filter blur-[6px] opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B080C]/90 via-[#180306]/95 to-[#0F0204]/98" />
      </div>

      <div className="wedding-envelope-scene relative z-10">
        {/* Auspicious Invocation Header */}
        <div className="wedding-envelope-instruction pointer-events-none mb-3">
          <p className="text-[11px] sm:text-xs font-serif tracking-[0.24em] text-[#D4AF37] uppercase mb-1">
            || ஸ்ரீ விநாயகர் துணை ||
          </p>
          <h2 className="text-xs sm:text-sm font-cinzel tracking-wider text-[#FAF5EB] font-semibold">
            {isOpened
              ? 'மங்கல அழைப்பிதழ் • WEDDING INVITATION'
              : 'A ROYAL INDIAN WEDDING INVITATION'}
          </h2>
        </div>

        {/* Cinematic Avatars: Groom from Left, Bride from Right Meeting at Center */}
        <div className="relative mb-5 flex items-center justify-center h-20 sm:h-24 w-full">
          {/* Groom Avatar (Sliding from Left) */}
          <div
            className={`absolute transition-transform duration-1000 ${
              avatarsMet
                ? 'translate-x-[-26px] sm:translate-x-[-32px] scale-100 z-10'
                : 'avatar-slide-groom -translate-x-32 sm:-translate-x-44 z-0'
            }`}
          >
            <div className="relative size-16 sm:size-20 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-xl bg-[#163224]">
              <img
                src="/assets/groom_walking_in.jpg"
                alt="Groom Er. Deepak"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 15%', transform: 'scale(1.2)' }}
              />
            </div>
            <div className="text-center mt-1">
              <span className="text-[9px] font-cinzel uppercase tracking-wider text-[#F3D279] font-medium bg-black/60 px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                Deepak
              </span>
            </div>
          </div>

          {/* Meeting Heart Sparkle & Marigold Burst Centerpiece */}
          {avatarsMet && (
            <div className="relative z-20 flex items-center justify-center size-8 sm:size-9 rounded-full bg-[#2B080C] border border-[#D4AF37] shadow-lg animate-pulse">
              <Heart className="size-4 text-[#F3D279] fill-[#D4AF37]" />
            </div>
          )}

          {/* Bride Avatar (Sliding from Right) */}
          <div
            className={`absolute transition-transform duration-1000 ${
              avatarsMet
                ? 'translate-x-[26px] sm:translate-x-[32px] scale-100 z-10'
                : 'avatar-slide-bride translate-x-32 sm:translate-x-44 z-0'
            }`}
          >
            <div className="relative size-16 sm:size-20 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-xl bg-[#2B080C]">
              <img
                src="/assets/groom_bride_maalai.jpg"
                alt="Bride Dr. Swetha"
                className="w-full h-full object-cover"
                style={{ objectPosition: '75% 20%', transform: 'scale(1.35)' }}
              />
            </div>
            <div className="text-center mt-1">
              <span className="text-[9px] font-cinzel uppercase tracking-wider text-[#F3D279] font-medium bg-black/60 px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                Swetha
              </span>
            </div>
          </div>
        </div>

        {/* The 3D Royal Maroon & Antique Gold Envelope */}
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
          {/* Back Shell in Royal Maroon (#2B080C) with Gold Lining */}
          <div className="wedding-envelope-back">
            <div className="wedding-envelope-lining" />
          </div>

          {/* Sacred Raised Invitation Card Inside */}
          <div className="wedding-envelope-inner-card">
            <div className="text-base text-[#D4AF37] font-serif font-bold animate-pulse">ௐ</div>
            <div className="text-[9.5px] tracking-[0.22em] text-[#D4AF37] uppercase font-cinzel font-semibold">
              Wedding Invitation
            </div>

            {/* Couple Names in Gold Foil */}
            <div className="my-1 px-1">
              <h3 className="text-xs sm:text-sm font-bold text-white font-cinzel leading-tight tracking-wide">
                <span className="text-[#FFF7DC]">Dr. Swetha</span>
                <span className="gold-foil-text font-serif italic mx-1.5 font-normal text-xs sm:text-sm">weds</span>
                <span className="text-[#FFF7DC]">Er. Deepak Kumar</span>
              </h3>
            </div>

            {/* Dates & Venues */}
            <div className="flex items-center justify-center gap-1.5 text-[9px] sm:text-[10px] text-[#F9E9BE] font-medium tracking-wide">
              <Calendar className="size-2.5 text-[#D4AF37]" />
              <span className="font-cinzel">19 &amp; 20 November 2026</span>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[8.5px] sm:text-[9.5px] text-[#D8C7A9] mt-0.5 font-cinzel">
              <MapPin className="size-2.5 text-[#D4AF37]" />
              <span>AVVS Mahal &amp; Senraya Temple</span>
            </div>

            {/* Add to Google Calendar Action Button inside Raised Card */}
            <div className="mt-2.5 pt-1.5 border-t border-[#D4AF37]/30 flex items-center justify-center gap-2">
              <button
                onClick={handleGoogleCalendarClick}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D4AF37] hover:bg-[#E8C86A] text-[#2B080C] text-[9px] font-cinzel font-semibold uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer pointer-events-auto"
                title="Add to Google Calendar"
              >
                <CalendarPlus className="size-3" />
                <span>Add to Calendar</span>
              </button>
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

        {/* Action Prompt or Direct Enter Button */}
        {isOpened ? (
          <div className="mt-5 flex flex-col items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onOpenWebsite()
              }}
              className="wedding-gold-btn text-xs sm:text-sm py-2.5 px-6 shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Enter Full Wedding Celebration</span>
              <ExternalLink className="size-4" />
            </button>
            <p className="text-[10px] text-[#D4AF37]/80 font-cinzel tracking-wider">
              ✦ Opening ceremony website... ✦
            </p>
          </div>
        ) : (
          <p className="mt-5 text-[10px] sm:text-[11px] text-[#D4AF37]/90 font-cinzel tracking-widest uppercase animate-pulse pointer-events-none">
            ✦ Tap the Wax Seal or Card to Open ✦
          </p>
        )}
      </div>
    </div>
  )
}

export default WeddingInvitationReveal

