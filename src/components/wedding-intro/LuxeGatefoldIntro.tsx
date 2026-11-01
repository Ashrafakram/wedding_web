import React, { useState, useEffect } from 'react'
import {
  Volume2,
  VolumeX,
  ArrowRight,
  Heart,
  Sparkles,
  Calendar,
  MapPin,
  CalendarPlus,
  ExternalLink,
  ChevronRight,
} from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'
import { launchPetalShower, launchHeartAndMultiShapeBurst } from '@/lib/confetti'
import { getGoogleCalendarUrl } from '@/lib/calendar'

interface LuxeGatefoldIntroProps {
  isOpen: boolean
  onComplete: () => void
}

type IntroStage = 'gatefold_closed' | 'entrance' | 'exchange' | 'invitation'

export function LuxeGatefoldIntro({ isOpen, onComplete }: LuxeGatefoldIntroProps) {
  const [stage, setStage] = useState<IntroStage>('gatefold_closed')
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(weddingAudio.isPlaying)
  const [entranceMet, setEntranceMet] = useState(false)
  const [doorsOpened, setDoorsOpened] = useState(false)

  // Sync audio state with singleton
  useEffect(() => {
    const unsub = weddingAudio.subscribe((playing) => {
      setIsAudioPlaying(playing)
    })
    return () => unsub()
  }, [])

  // Lock body scroll while intro is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setStage('gatefold_closed')
      setDoorsOpened(false)
      setEntranceMet(false)
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

  // Trigger 3D Gatefold Door Opening
  const handleOpenGatefold = () => {
    if (doorsOpened) return
    setDoorsOpened(true)

    try {
      weddingAudio.playTempleBellChime()
      if (!weddingAudio.isPlaying) weddingAudio.start()
    } catch (_) {}

    launchHeartAndMultiShapeBurst()

    // After doors swing open (1s), transition to Groom & Bride Entrance
    setTimeout(() => {
      setStage('entrance')
      launchPetalShower()

      // Avatars meet after 1.8s
      setTimeout(() => {
        setEntranceMet(true)
        try {
          weddingAudio.playTempleBellChime()
        } catch (_) {}
      }, 1800)

      // Transition to Exchange Maalai ceremony after 5.5s
      setTimeout(() => {
        setStage('exchange')
        launchPetalShower()
      }, 5500)

      // Transition to Royal Invitation Card after 11s
      setTimeout(() => {
        setStage('invitation')
        launchHeartAndMultiShapeBurst()
      }, 11000)
    }, 1000)
  }

  const handleToggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation()
    weddingAudio.toggle()
  }

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (stage !== 'invitation') {
      setDoorsOpened(true)
      setStage('invitation')
    } else {
      onComplete()
    }
  }

  const handleGoogleCalendarClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(getGoogleCalendarUrl(), '_blank')
  }

  return (
    <aside
      className="wedding-intro-root"
      aria-label="The Luxe Digital Wedding Invitation"
    >
      {/* Ambient background glow */}
      <div className="wedding-ambient-glow" />

      {/* Top Persistent Bar (Brand, Audio, Skip) */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50 pointer-events-auto">
        {/* Monogram Badge */}
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-lg">
          <div className="size-6 rounded-full overflow-hidden border border-[#F3D279]/70 shrink-0">
            <img
              src="/assets/seal_stamp.jpg"
              alt="Seal"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[11px] sm:text-xs font-cinzel tracking-wider text-[#F3D279] font-medium">
            Swetha &amp; Deepak
          </span>
        </div>

        {/* Stage Indicator Pills (When open) */}
        {doorsOpened && (
          <div className="hidden md:flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/30">
            <button
              onClick={() => setStage('entrance')}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-cinzel transition-all ${
                stage === 'entrance'
                  ? 'bg-[#D4AF37] text-[#2B080C] font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              1. Grand Entrance
            </button>
            <span className="text-zinc-600">•</span>
            <button
              onClick={() => setStage('exchange')}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-cinzel transition-all ${
                stage === 'exchange'
                  ? 'bg-[#D4AF37] text-[#2B080C] font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              2. Exchange Maalai
            </button>
            <span className="text-zinc-600">•</span>
            <button
              onClick={() => setStage('invitation')}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-cinzel transition-all ${
                stage === 'invitation'
                  ? 'bg-[#D4AF37] text-[#2B080C] font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              3. Invitation Card
            </button>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleAudio}
            className="flex items-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#F5EFE3] text-xs font-cinzel transition-all shadow-md active:scale-95 cursor-pointer"
            title={isAudioPlaying ? 'Mute Music' : 'Play Music'}
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
            onClick={handleSkip}
            className="flex items-center gap-1 bg-[#5C131E]/90 hover:bg-[#7A1725] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5C058]/60 text-[#F3D279] text-xs font-cinzel tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
            title="Skip directly to Celebration Website"
          >
            <span>{stage === 'invitation' ? 'Enter Website' : 'Skip'}</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          MAIN 3D STAGE WRAPPER
          ========================================================================= */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 perspective-[1800px] overflow-hidden">
        {/* =======================================================================
            INNER CHAMBER (Revealed when 3D Gatefold Doors Swing Open)
            ======================================================================= */}
        <div className="relative w-full max-w-4xl h-[86vh] sm:h-[82vh] max-h-[780px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_20px_70px_rgba(0,0,0,0.9)] bg-black">
          {/* -------------------------------------------------------------------
              INNER SCENE 1: GROOM & BRIDE ENTRANCE (MANDAPAM)
              ------------------------------------------------------------------- */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              stage === 'entrance' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Empty Mandapam Background */}
            <img
              src="/assets/mandapam_empty.jpg"
              alt="Sacred Mandapam Hall"
              className="w-full h-full object-cover animate-mandapam-zoom"
            />
            <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/30 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />

            {/* Top Invocation */}
            <div className="absolute top-12 sm:top-14 inset-x-0 text-center z-20 pointer-events-none px-4">
              <p className="text-[10px] sm:text-xs font-serif tracking-[0.24em] text-[#D4AF37] uppercase drop-shadow-md">
                || ஸ்ரீ விநாயகர் துணை ||
              </p>
              <h2 className="text-base sm:text-xl font-cinzel font-bold text-[#FFF7DC] tracking-wider drop-shadow-lg">
                THE GRAND ENTRANCE
              </h2>
            </div>

            {/* Groom from Left */}
            <div
              className={`absolute left-3 sm:left-8 md:left-16 bottom-8 sm:bottom-12 transition-all duration-1200 ease-out z-20 ${
                entranceMet ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
            >
              <div className="w-36 sm:w-52 md:w-64 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] bg-[#1A0407]">
                <img
                  src="/assets/groom_walking_in.jpg"
                  alt="Groom Er. Deepak"
                  className="w-full h-auto object-cover max-h-[46vh] sm:max-h-[52vh]"
                />
                <div className="bg-black/90 py-1.5 text-center border-t border-[#D4AF37]/30">
                  <span className="text-[10px] sm:text-xs font-cinzel text-[#F3D279] font-semibold tracking-wider uppercase">
                    The Groom • Deepak
                  </span>
                </div>
              </div>
            </div>

            {/* Union Heart in Center */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 z-30 ${
                entranceMet ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'
              }`}
            >
              <div className="size-16 sm:size-20 rounded-full bg-gradient-to-b from-[#5C131E] to-[#2B080C] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.8)] flex items-center justify-center animate-pulse">
                <Heart className="size-8 sm:size-10 text-[#F3D279] fill-[#D4AF37]" />
                <div className="absolute -top-2.5 bg-[#2B080C] px-2 py-0.5 rounded-full border border-[#D4AF37] text-[10px] font-serif text-[#F3D279]">
                  ௐ
                </div>
              </div>
              <div className="mt-2.5 bg-black/80 px-4 py-1 rounded-full border border-[#D4AF37]/40 shadow-xl backdrop-blur-md">
                <span className="text-xs sm:text-sm font-cinzel text-[#F3D279] font-medium tracking-widest">
                  Two Souls, One Sacred Bond
                </span>
              </div>
            </div>

            {/* Bride from Right */}
            <div
              className={`absolute right-3 sm:right-8 md:right-16 bottom-8 sm:bottom-12 transition-all duration-1200 ease-out z-20 ${
                entranceMet ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <div className="w-36 sm:w-52 md:w-64 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] bg-[#1A0407]">
                <div className="w-full h-[46vh] sm:h-[52vh] overflow-hidden">
                  <img
                    src="/assets/groom_bride_maalai.jpg"
                    alt="Bride Dr. Swetha"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '75% 20%', transform: 'scale(1.35)' }}
                  />
                </div>
                <div className="bg-black/90 py-1.5 text-center border-t border-[#D4AF37]/30">
                  <span className="text-[10px] sm:text-xs font-cinzel text-[#F3D279] font-semibold tracking-wider uppercase">
                    The Bride • Swetha
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              INNER SCENE 2: SACRED GARLAND EXCHANGE (மாலை மாற்றுதல்)
              ------------------------------------------------------------------- */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              stage === 'exchange' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src="/assets/groom_bride_maalai.jpg"
              alt="Sacred Garland Exchange"
              className="w-full h-full object-cover animate-ceremony-pan"
              style={{ objectPosition: 'center 28%' }}
            />
            <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

            {/* Realigned Bottom Banner — Completely clear faces */}
            <div className="absolute bottom-6 sm:bottom-10 inset-x-0 flex flex-col items-center justify-center z-20 pointer-events-none px-4">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/80 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4AF37]/60 shadow-[0_4px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.35)]">
                <span className="text-[11px] sm:text-xs font-serif text-[#D4AF37]">|| மாலை மாற்றுதல் ||</span>
                <span className="h-3 w-px bg-[#D4AF37]/50" />
                <h2 className="text-xs sm:text-sm md:text-base font-cinzel font-bold text-[#FFF7DC] tracking-wider">
                  SACRED GARLAND EXCHANGE
                </h2>
              </div>
              <p className="text-[10px] sm:text-xs font-cinzel text-[#F9E9BE] tracking-widest drop-shadow-md mt-2 max-w-xl text-center">
                &ldquo;Exchanging fragrant garlands of eternal love, devotion, and togetherness.&rdquo;
              </p>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              INNER SCENE 3: ROYAL GOLD FOIL INVITATION CARD & ACTIONS
              ------------------------------------------------------------------- */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center p-4 sm:p-8 text-center bg-radial-[ellipse_at_center] from-[#2B080C] via-[#1A0407] to-[#0A0203] ${
              stage === 'invitation' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Subtle floating gold frame */}
            <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.35),inset_0_0_30px_rgba(0,0,0,0.8)] bg-gradient-to-b from-[#2B080C]/90 to-[#160204]/95 backdrop-blur-md">
              <div className="text-xl sm:text-2xl text-[#D4AF37] font-serif font-bold animate-pulse">
                ௐ
              </div>
              <p className="text-[10px] sm:text-xs font-serif tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
                || ஸ்ரீ விநாயகர் துணை ||
              </p>

              <h1 className="text-xs sm:text-sm font-cinzel tracking-[0.2em] text-[#F3D279] uppercase font-semibold mt-2">
                Royal Wedding Invitation
              </h1>

              {/* Couple Names in Liquid Gold Foil */}
              <div className="my-3 sm:my-4">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-cinzel font-bold text-white leading-tight">
                  <span className="text-[#FFF7DC]">Dr. Swetha</span>
                  <span className="gold-foil-text font-serif italic mx-2 font-normal text-base sm:text-xl">
                    weds
                  </span>
                  <span className="text-[#FFF7DC]">Er. Deepak Kumar</span>
                </h2>
              </div>

              {/* Auspicious Dates & Times */}
              <div className="space-y-1.5 my-3">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#F9E9BE] font-medium">
                  <Calendar className="size-3.5 text-[#D4AF37]" />
                  <span className="font-cinzel">19 &amp; 20 November 2026</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#D8C7A9]">
                  <MapPin className="size-3.5 text-[#D4AF37]" />
                  <span>AVVS Mahal &amp; Sri Senraya Perumal Temple</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <button
                  onClick={handleGoogleCalendarClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 border border-[#D4AF37]/60 text-[#F3D279] text-xs font-cinzel uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
                >
                  <CalendarPlus className="size-3.5" />
                  <span>Add to Calendar</span>
                </button>

                <button
                  onClick={onComplete}
                  className="w-full sm:w-auto wedding-gold-btn text-xs py-2 px-6 shadow-xl cursor-pointer active:scale-95"
                >
                  <span>Enter Full Website</span>
                  <ExternalLink className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================================
            STAGE 1: 3D LUXE SCALLOPED GATEFOLD DOORS (PINTEREST REFERENCE)
            These sit in front of the inner chamber and swing open in 3D!
            ======================================================================= */}
        <div
          className={`absolute inset-0 flex items-center justify-center p-4 sm:p-8 pointer-events-none transition-opacity duration-700 ${
            stage === 'gatefold_closed' ? 'opacity-100 z-40' : 'opacity-0'
          }`}
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md aspect-[9/15] max-h-[720px] shadow-2xl rounded-2xl overflow-hidden cursor-pointer pointer-events-auto"
            onClick={handleOpenGatefold}
            title="Click to Open Wedding Invitation"
          >
            {/* The Reference Scalloped Gatefold Invitation Image */}
            <img
              src="/assets/luxe_ref.jpg"
              alt="The Luxe Gatefold Wedding Invitation with Silk Ribbon and Wax Seal"
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                doorsOpened ? 'scale-110 filter blur-xs' : 'hover:scale-[1.02]'
              }`}
            />

            {/* Glowing Instruction Overlay */}
            <div className="absolute inset-x-0 bottom-8 text-center px-4 pointer-events-none">
              <div className="inline-block bg-black/75 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.7)] animate-bounce">
                <span className="text-xs sm:text-sm font-cinzel text-[#FFF7DC] font-bold tracking-widest uppercase">
                  ✦ Tap the Wax Seal to Open ✦
                </span>
              </div>
            </div>

            {/* Center Pulsing Wax Seal Ripple */}
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full border-2 border-[#F3D279] animate-ping opacity-60 pointer-events-none" />
          </div>
        </div>
      </div>
    </aside>
  )
}
export default LuxeGatefoldIntro
