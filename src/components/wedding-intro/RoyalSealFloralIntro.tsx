import React, { useState, useEffect } from 'react'
import { Volume2, VolumeX, ArrowRight, CalendarPlus, ExternalLink, Sparkles } from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'
import { launchPetalShower, launchHeartAndMultiShapeBurst } from '@/lib/confetti'
import { getGoogleCalendarUrl } from '@/lib/calendar'

interface RoyalSealFloralIntroProps {
  isOpen: boolean
  onComplete: () => void
}

export function RoyalSealFloralIntro({ isOpen, onComplete }: RoyalSealFloralIntroProps) {
  const [isOpened, setIsOpened] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(weddingAudio.isPlaying)
  const [animatingCard, setAnimatingCard] = useState(false)

  // Sync audio state
  useEffect(() => {
    const unsub = weddingAudio.subscribe((playing) => {
      setIsAudioPlaying(playing)
    })
    return () => unsub()
  }, [])

  // Lock body scroll while intro is visible
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsOpened(false)
      setAnimatingCard(false)
      try {
        weddingAudio.start()
      } catch (_) {}
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleToggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation()
    weddingAudio.toggle()
  }

  // When clicking the royal seal
  const handleOpenSeal = () => {
    if (isOpened) return
    setIsOpened(true)
    setAnimatingCard(true)

    try {
      weddingAudio.playTempleBellChime()
      if (!weddingAudio.isPlaying) weddingAudio.start()
    } catch (_) {}

    launchHeartAndMultiShapeBurst()
    setTimeout(() => {
      launchPetalShower()
    }, 400)
  }

  const handleGoogleCalendarClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(getGoogleCalendarUrl(), '_blank')
  }

  return (
    <aside
      className="fixed inset-0 z-[9999] w-screen h-screen overflow-hidden flex flex-col items-center justify-center select-none bg-[#0D0708] font-cinzel text-[#FAF5EB]"
      aria-label="Royal Floral Wedding Invitation"
    >
      {/* =========================================================================
          BACKGROUND: WARM WATERCOLOR TEMPLE RECEPTION AESTHETIC
          Matching the user's shared floral & bell theme
          ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/reception_invite_theme.jpg"
          alt="Royal Wedding Backdrop"
          className="w-full h-full object-cover filter blur-[2px] opacity-40 scale-105"
        />
        {/* Warm luxury vignette overlay */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-black/20 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0407] via-transparent to-[#1A0407]/90" />
      </div>

      {/* =========================================================================
          TOP PERSISTENT CONTROL BAR
          ========================================================================= */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50 pointer-events-auto">
        {/* Monogram Badge */}
        <div className="flex items-center gap-2 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-lg">
          <div className="size-6 rounded-full overflow-hidden border border-[#F3D279]/70 shrink-0">
            <img
              src="/assets/seal_stamp.jpg"
              alt="Seal"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[11px] sm:text-xs tracking-wider text-[#F3D279] font-medium">
            Deepak &amp; Swetha
          </span>
        </div>

        {/* Music & Skip Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleAudio}
            className="flex items-center gap-1.5 bg-black/65 hover:bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#F5EFE3] text-xs transition-all shadow-md active:scale-95 cursor-pointer"
            title={isAudioPlaying ? 'Mute Music' : 'Play Auspicious Music'}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="size-3.5 text-[#F3D279] animate-pulse" />
                <span className="text-[11px] text-[#F3D279]">Music On</span>
              </>
            ) : (
              <>
                <VolumeX className="size-3.5 text-zinc-400" />
                <span className="text-[11px] text-zinc-300">Music Off</span>
              </>
            )}
          </button>

          <button
            onClick={onComplete}
            className="flex items-center gap-1 bg-[#5C131E]/90 hover:bg-[#7A1725] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5C058]/60 text-[#F3D279] text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
            title="Enter Website Directly"
          >
            <span>Skip</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          MAIN CENTER STAGE: SEAL -> UNVEIL SHARED INVITATION CARD ANIMATION
          ========================================================================= */}
      <div className="relative z-20 w-full max-w-sm sm:max-w-md md:max-w-lg px-4 flex flex-col items-center justify-center">
        {/* -----------------------------------------------------------------------
            STATE 1: THE ROYAL WAX SEAL ENVELOPE (BEFORE CLICK)
            ----------------------------------------------------------------------- */}
        {!isOpened && (
          <div
            onClick={handleOpenSeal}
            className="flex flex-col items-center justify-center cursor-pointer group transition-transform duration-500 hover:scale-105 active:scale-95"
            role="button"
            tabIndex={0}
            aria-label="Tap to open the royal wedding invitation seal"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleOpenSeal()
              }
            }}
          >
            {/* Auspicious Invocation Header */}
            <div className="text-center mb-6 pointer-events-none">
              <p className="text-xs sm:text-sm font-serif tracking-[0.25em] text-[#D4AF37] uppercase drop-shadow-md">
                || ஸ்ரீ விநாயகர் துணை ||
              </p>
              <h1 className="text-lg sm:text-2xl font-cinzel font-bold text-[#FFF7DC] tracking-wider mt-1 drop-shadow-lg">
                ROYAL WEDDING INVITATION
              </h1>
              <p className="text-[11px] sm:text-xs text-[#F3D279]/90 tracking-widest mt-0.5 font-light">
                Deepak &amp; Swetha • 20 November 2026
              </p>
            </div>

            {/* The 3D Royal Wax Seal Button with Ripple Waves */}
            <div className="relative size-32 sm:size-40 flex items-center justify-center">
              {/* Outer Pulsing Golden Ripple Waves */}
              <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-35" />
              <div className="absolute -inset-3 rounded-full border border-[#F3D279]/50 animate-pulse" />

              {/* Glowing Aura */}
              <div className="absolute inset-0 rounded-full bg-radial from-[#D4AF37]/40 via-transparent to-transparent blur-md" />

              {/* The Royal Gold Wax Seal Badge */}
              <div className="relative size-28 sm:size-34 rounded-full overflow-hidden border-3 border-[#F3D279] shadow-[0_15px_45px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.7)] bg-[#2B080C] transition-transform duration-300 group-hover:rotate-6">
                <img
                  src="/assets/seal_stamp.jpg"
                  alt="Auspicious Wax Seal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Glowing Instruction Button */}
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 bg-[#5C131E]/95 hover:bg-[#7A1725] px-6 py-2.5 rounded-full border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all">
                <Sparkles className="size-4 text-[#F3D279] animate-pulse" />
                <span className="text-xs sm:text-sm font-cinzel text-[#FFF7DC] font-bold tracking-widest uppercase">
                  Tap to Open Invitation
                </span>
              </div>
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------------
            STATE 2: THE REVEALED SHARED INVITATION CARD (AFTER SEAL CLICKS)
            Smooth elevation, floating lotus petals, and direct action buttons!
            ----------------------------------------------------------------------- */}
        {isOpened && (
          <div
            className={`w-full flex flex-col items-center transition-all duration-1000 ${
              animatingCard ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            {/* The User's Shared Invitation Card */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.4)] bg-[#FFFDF9] animate-scale-up">
              {/* Card Image */}
              <img
                src="/assets/deepak_swetha_invite_card.jpg"
                alt="Wedding celebration of Deepak & Swetha"
                className="w-full h-auto object-cover max-h-[68vh] sm:max-h-[72vh] mx-auto block"
              />

              {/* Subtle top and bottom gold trim */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>

            {/* Action Buttons Below the Card */}
            <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2.5 w-full max-w-[360px]">
              <button
                onClick={handleGoogleCalendarClick}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-black/75 hover:bg-black border border-[#D4AF37]/70 text-[#F3D279] text-xs font-cinzel tracking-wider uppercase shadow-md transition-all active:scale-95 cursor-pointer"
                title="Add to Google Calendar"
              >
                <CalendarPlus className="size-3.5" />
                <span>Add to Calendar</span>
              </button>

              <button
                onClick={onComplete}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#7A1725] via-[#5C131E] to-[#7A1725] hover:brightness-110 border-2 border-[#F3D279] text-[#FFFDF8] text-xs font-cinzel font-bold tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all active:scale-95 cursor-pointer"
                title="Enter the Full Wedding Website"
              >
                <span>Enter Website</span>
                <ExternalLink className="size-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
export default RoyalSealFloralIntro
