import React, { useState, useEffect, useRef } from 'react'
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Sparkles,
  CalendarPlus,
  ExternalLink,
  Heart,
} from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'
import { launchPetalShower, launchHeartAndMultiShapeBurst } from '@/lib/confetti'
import { getGoogleCalendarUrl } from '@/lib/calendar'
import { FloatingPetals } from '@/components/common/FloatingPetals'
import { ThreeWeddingScene3D } from '@/components/common/ThreeWeddingScene3D'

interface CinematicSaveTheDateIntroProps {
  isOpen: boolean
  onComplete: () => void
}

type SceneIndex = 0 | 1 | 2 | 3 | 4 | 5

interface SceneConfig {
  id: SceneIndex
  name: string
  duration: number
}

const SCENES: SceneConfig[] = [
  { id: 0, name: 'Save The Date', duration: 4000 },
  { id: 1, name: 'Monogram', duration: 3800 },
  { id: 2, name: 'Invitation', duration: 4200 },
  { id: 3, name: 'Calendar', duration: 4500 },
  { id: 4, name: 'Venue & Time', duration: 4800 },
  { id: 5, name: 'Thank You', duration: 4500 },
]

export function CinematicSaveTheDateIntro({
  isOpen,
  onComplete,
}: CinematicSaveTheDateIntroProps) {
  // Gatefold Door Open State
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const [activeScene, setActiveScene] = useState<SceneIndex>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(weddingAudio.isPlaying)
  const [progressPct, setProgressPct] = useState<number>(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Sync audio state
  useEffect(() => {
    const unsub = weddingAudio.subscribe((playing) => {
      setIsAudioPlaying(playing)
    })
    return () => unsub()
  }, [])

  // Auto-run video timeline
  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'
    setIsDoorOpen(false)
    setActiveScene(0)
    setIsPlaying(true)
    setProgressPct(0)

    try {
      weddingAudio.start()
    } catch (_) {}

    // Auto-open doors after 2.6 seconds if user doesn't click
    const doorTimer = setTimeout(() => {
      triggerDoorOpen()
    }, 2600)

    return () => {
      document.body.style.overflow = ''
      clearTimeout(doorTimer)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isOpen])

  // Handle scene timing once door is open
  useEffect(() => {
    if (!isOpen || !isPlaying || !isDoorOpen) return

    if (timerRef.current) clearTimeout(timerRef.current)

    // Trigger celebration effects for specific scenes
    if (activeScene === 5) {
      // Thank you scene
      launchPetalShower()
      launchHeartAndMultiShapeBurst()
    }

    const currentDuration = SCENES[activeScene].duration

    timerRef.current = setTimeout(() => {
      if (activeScene < SCENES.length - 1) {
        setActiveScene((prev) => (prev + 1) as SceneIndex)
      } else {
        setIsPlaying(false)
      }
    }, currentDuration)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isOpen, activeScene, isPlaying, isDoorOpen])

  // Progress Bar tracking
  useEffect(() => {
    if (!isOpen || !isDoorOpen) return
    const totalDuration = SCENES.reduce((acc, s) => acc + s.duration, 0)

    const interval = setInterval(() => {
      if (!isPlaying) return
      let elapsedPrior = 0
      for (let i = 0; i < activeScene; i++) {
        elapsedPrior += SCENES[i].duration
      }
      const pct = Math.min(100, Math.floor(((elapsedPrior + 1500) / totalDuration) * 100))
      setProgressPct(pct)
    }, 200)

    return () => clearInterval(interval)
  }, [isOpen, activeScene, isPlaying, isDoorOpen])

  if (!isOpen) return null

  // 3D Card Hover Tilt state
  const [cardTilt, setCardTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDoorOpen) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setCardTilt({ x: -y * 11, y: x * 11 })
  }

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 })
  }

  const triggerDoorOpen = () => {
    if (isDoorOpen) return
    setIsDoorOpen(true)
    try {
      if (!weddingAudio.isPlaying) weddingAudio.start()
    } catch (_) {}
    launchHeartAndMultiShapeBurst()
  }

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  const handleReplay = () => {
    setIsDoorOpen(true)
    setActiveScene(0)
    setIsPlaying(true)
    setProgressPct(0)
    if (!weddingAudio.isPlaying) weddingAudio.start()
  }

  const handleToggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation()
    weddingAudio.toggle()
  }

  const handleGoogleCalendarClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(getGoogleCalendarUrl(), '_blank')
  }

  const handleSceneSelect = (idx: SceneIndex) => {
    if (!isDoorOpen) setIsDoorOpen(true)
    setActiveScene(idx)
    setIsPlaying(true)
    if (!weddingAudio.isPlaying) weddingAudio.start()
  }

  return (
    <aside
      onClick={() => {
        if (!weddingAudio.isPlaying) weddingAudio.start()
      }}
      className="wedding-intro-root relative flex flex-col items-center justify-center min-h-screen w-full bg-[#FAF5EE] text-[#3D1E24] overflow-hidden select-none cursor-pointer"
      aria-label="Save The Date Cinematic Video Invitation"
    >
      {/* =========================================================================
          AMBIENT LUXURY BACKDROP (WARM BEIGE & BLUSH PINK PALACE AMBIANCE)
          ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Soft Warm Champagne Beige & Blush Pink Gradient Aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,214,220,0.6)_0%,rgba(250,245,238,0.85)_55%,#F3EBE0_100%)]" />

        {/* Ambient blurred extension of the current scene */}
        <img
          src={activeScene <= 1 ? '/assets/card_inner_bg.jpg' : '/assets/swing_ref.jpg'}
          alt=""
          className="w-full h-full object-cover filter blur-3xl opacity-25 scale-125 transition-opacity duration-1000"
        />

        {/* Realistic Romantic Falling Flower Petals Animation */}
        <ThreeWeddingScene3D petalCount={28} sparkleCount={80} interactive={true} />
      </div>

      {/* =========================================================================
          PERSISTENT TOP BAR (ELEGANT MONOGRAM & CONTROLS IN BEIGE & ROSE GOLD)
          ========================================================================= */}
      <header className="absolute top-3 sm:top-5 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50 pointer-events-auto">
        {/* Monogram Badge */}
        <div className="flex items-center gap-2 bg-[#FFFDF9]/90 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-[#E8C5CB] shadow-[0_4px_15px_rgba(126,46,64,0.12)]">
          <div className="size-5 sm:size-6 rounded-full overflow-hidden border border-[#D4AF37] shrink-0 bg-[#7E2E40] flex items-center justify-center">
            <span className="font-serif italic font-bold text-[#FFF0F3] text-[10px]">S&amp;D</span>
          </div>
          <span className="text-[11px] sm:text-xs font-cinzel tracking-wider text-[#5C1D2A] font-semibold">
            Er. Swetha &amp; Er. Deepak
          </span>
        </div>

        {/* Video Controls & Skip */}
        <div className="flex items-center gap-2">
          {/* Play/Pause (only shown after doors open) */}
          {isDoorOpen && (
            <>
              <button
                onClick={handleTogglePlay}
                className="flex items-center justify-center size-8 sm:size-8.5 rounded-full bg-[#FFFDF9]/90 hover:bg-[#FAF5EE] border border-[#E8C5CB] text-[#5C1D2A] shadow-xs transition-all active:scale-95 cursor-pointer"
                title={isPlaying ? 'Pause Animation' : 'Play Animation'}
              >
                {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5 ml-0.5" />}
              </button>

              <button
                onClick={handleReplay}
                className="flex items-center justify-center size-8 sm:size-8.5 rounded-full bg-[#FFFDF9]/90 hover:bg-[#FAF5EE] border border-[#E8C5CB] text-[#5C1D2A] shadow-xs transition-all active:scale-95 cursor-pointer"
                title="Replay from Beginning"
              >
                <RotateCcw className="size-3.5" />
              </button>
            </>
          )}

          {/* Audio */}
          <button
            onClick={handleToggleAudio}
            className="flex items-center gap-1.5 bg-[#FFFDF9]/90 hover:bg-[#FAF5EE] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8C5CB] text-[#5C1D2A] text-xs font-cinzel transition-all shadow-xs active:scale-95 cursor-pointer"
            title={isAudioPlaying ? 'Mute Music' : 'Play Music'}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="size-3.5 text-[#B5566A] animate-pulse" />
                <span className="text-[11px] text-[#7E2E40] font-semibold hidden xs:inline">Music On</span>
              </>
            ) : (
              <>
                <VolumeX className="size-3.5 text-zinc-400" />
                <span className="text-[11px] text-zinc-600 hidden xs:inline">Music Off</span>
              </>
            )}
          </button>

          {/* Skip Button in Royal Blush Rosewood */}
          <button
            onClick={onComplete}
            className="flex items-center gap-1 bg-[#7E2E40] hover:bg-[#9E3D52] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8C5CB] text-[#FFF0F3] text-xs font-cinzel tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer font-semibold"
            title="Enter Website Directly"
          >
            <span>Skip</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </header>

      {/* =========================================================================
          MAIN ROYAL INVITATION STAGE (TRUE 736/1308 PORTRAIT FOLIO PROPORTIONS)
          Includes 3D French Gatefold Doors + "TAP TO OPEN" Button + Inner Video!
          ========================================================================= */}
      <main className="relative z-10 w-full flex items-center justify-center p-2 sm:p-4 my-auto">
        <div
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          className="cinematic-gatefold-stage relative h-[88vh] sm:h-[90vh] max-h-[820px] aspect-[736/1308] w-auto max-w-[94vw] rounded-2xl sm:rounded-3xl border-2 border-[#D4AF37]/90 shadow-[0_25px_70px_-10px_rgba(126,46,64,0.35),0_0_35px_rgba(212,175,55,0.4)] overflow-hidden select-none bg-[#FAF5EE] transition-transform duration-200 ease-out"
          style={{
            transform: !isDoorOpen
              ? `perspective(1400px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`
              : 'perspective(1400px) rotateX(0deg) rotateY(0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          
          {/* =====================================================================
              DUAL CINEMATIC SCENES:
              1) Auspicious Sacred Card (Lord Ganesha & Holy Hands) for first few seconds
              2) Animated Swing (Thoori) Sanctuary with up-and-down oscillation motion
              ===================================================================== */}
          <div className="absolute inset-0 overflow-hidden bg-[#FAF5EE]">
            
            {/* LAYER 1: SACRED CARD BLESSING (ACTIVE FOR SCENES 0 & 1 ~7.8 SECONDS) */}
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeScene <= 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src="/assets/card_inner_bg.jpg"
                alt="Sacred Wedding Card Blessing with Lord Ganesha and Divine Holding Hands"
                className="w-full h-full object-cover object-center"
              />

              {/* Gentle Golden Radiance Aura on Hanging Brass Deepams */}
              <div className="absolute top-[6%] left-[6%] size-12 bg-amber-400/25 rounded-full blur-md animate-pulse pointer-events-none" />
              <div className="absolute top-[6%] right-[6%] size-12 bg-amber-400/25 rounded-full blur-md animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

              {/* Subtle Divine Warm Glow over Sacred Holding Hands at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#B5566A]/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* LAYER 2: ANIMATED SWING (THOORI) SANCTUARY (ACTIVE FROM SCENE 2 ONWARDS) */}
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeScene >= 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* The Animated Swing (Thoori) Container - Moves Up & Down with harmonic sway! */}
              <div className="relative w-full h-full overflow-hidden animate-thoori-swing transform-gpu">
                <img
                  src="/assets/swing_ref.jpg"
                  alt="Romantic couple sitting on floral swing overlooking misty mountains"
                  className="w-full h-full object-cover object-center scale-[1.08] transform-gpu"
                />

                {/* Dreamy Morning Mist Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(250,245,238,0.92)_0%,rgba(250,245,238,0.7)_45%,transparent_75%)] pointer-events-none" />
                
                {/* Subtle Warm Vignette at Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#2D141B]/80 via-[#2D141B]/20 to-transparent pointer-events-none" />
              </div>

              {/* Dynamic Ground Shadow matching Thoori swing physics */}
              <div className="absolute inset-x-0 bottom-10 sm:bottom-14 h-2/3 flex items-end justify-center pointer-events-none z-20">
                <div className="w-full h-full flex items-end justify-center animate-thoori-shadow">
                  <div className="w-64 h-7 bg-black/35 blur-md rounded-full -mb-2" />
                </div>
              </div>

              {/* Flying Butterflies near Flowers */}
              <div className="absolute bottom-28 left-16 sm:left-24 size-4 pointer-events-none z-20 animate-butterfly">
                <span className="text-sm select-none opacity-85">🦋</span>
              </div>
              <div className="absolute bottom-32 right-16 sm:right-24 size-4 pointer-events-none z-20 animate-butterfly" style={{ animationDelay: '3s' }}>
                <span className="text-xs select-none opacity-75">🦋</span>
              </div>
            </div>

            {/* Crystal Chandelier Light Glints at the Top Arch */}
            <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-28 h-20 flex items-center justify-center pointer-events-none z-25">
              <Sparkles className="size-5 text-[#FFF5C0] absolute top-1 left-6 animate-star-glint" />
              <Sparkles className="size-4 text-[#FFFBE8] absolute top-6 right-6 animate-star-glint" style={{ animationDelay: '1.2s' }} />
              <Sparkles className="size-6 text-[#FFEAA0] absolute top-3 left-1/2 -translate-x-1/2 animate-chandelier-glint" />
            </div>
          </div>

          {/* =====================================================================
              INNER STORYBOARD SCENES (MATCHING PINTEREST VIDEO SEQUENCE)
              Dynamically positioned based on whether active scene is on the card or swing!
              ===================================================================== */}
          {isDoorOpen && (
            <div
              className={`absolute inset-x-3 sm:inset-x-6 flex flex-col items-center justify-center z-30 pointer-events-none text-center transition-all duration-700 ${
                activeScene <= 1
                  ? 'top-[16%] sm:top-[18%] bottom-[42%] sm:bottom-[44%]'
                  : 'top-[5%] sm:top-[6%] bottom-[48%] sm:bottom-[50%]'
              }`}
            >

              {/* -----------------------------------------------------------------
                  SCENE 0: "SAVE THE DATE" (00:01 - 00:04 in Pinterest Video)
                  ----------------------------------------------------------------- */}
              {activeScene === 0 && (
                <div className="animate-scene-entry flex flex-col items-center">
                  <p className="text-[10px] sm:text-xs font-serif tracking-[0.28em] text-[#9E6F18] uppercase font-semibold drop-shadow-xs mb-1">
                    || ஸ்ரீ விநாயகர் துணை ||
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[#7E2E40] tracking-wide drop-shadow-sm gold-foil-text-rich leading-tight">
                    Save
                    <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl">The</span>
                    <br />
                    Date
                  </h1>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-2" />
                </div>
              )}

              {/* -----------------------------------------------------------------
                  SCENE 1: FLORAL MONOGRAM WREATH "S & D" (00:05 - 00:09 in Video)
                  Positioned high in the open sky under the chandelier!
                  ----------------------------------------------------------------- */}
              {activeScene === 1 && (
                <div className="animate-scene-entry flex flex-col items-center -mt-2 sm:-mt-3">
                  {/* Circular Botanical Wreath Frame */}
                  <div className="relative size-28 sm:size-32 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#FFFDF9]/85 backdrop-blur-xs p-2.5 shadow-[0_8px_25px_rgba(126,46,64,0.15)] animate-wreath-glow">
                    <div className="absolute inset-1 rounded-full border border-dashed border-[#B5566A]/40 pointer-events-none" />
                    
                    {/* Botanical Accents */}
                    <span className="absolute -top-2 text-sm select-none">🌸</span>
                    <span className="absolute -bottom-2 text-sm select-none">🌿</span>
                    <span className="absolute -left-2 text-sm select-none">🍃</span>
                    <span className="absolute -right-2 text-sm select-none">✨</span>

                    {/* Interlinked Couple Monogram in Rose Gold */}
                    <div className="text-center">
                      <span className="text-2xl sm:text-3xl font-serif italic font-bold tracking-tight text-[#7E2E40] gold-foil-text-rich">
                        S
                      </span>
                      <span className="text-lg sm:text-xl font-serif italic text-[#B5566A] mx-0.5">
                        &amp;
                      </span>
                      <span className="text-2xl sm:text-3xl font-serif italic font-bold tracking-tight text-[#7E2E40] gold-foil-text-rich">
                        D
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-[11px] sm:text-xs font-cinzel text-[#7E2E40] tracking-[0.25em] uppercase font-bold drop-shadow-xs">
                    Swetha &amp; Deepak
                  </p>
                </div>
              )}

              {/* -----------------------------------------------------------------
                  SCENE 2: INVITATION ANNOUNCEMENT (00:11 - 00:16 in Video)
                  ----------------------------------------------------------------- */}
              {activeScene === 2 && (
                <div className="animate-scene-entry flex flex-col items-center px-2">
                  <p className="text-[10px] sm:text-xs font-serif tracking-[0.25em] text-[#9E6F18] uppercase font-semibold drop-shadow-xs mb-1">
                    || ஸ்ரீ விநாயகர் துணை ||
                  </p>
                  <p className="text-xs sm:text-sm font-serif italic text-[#5C1D2A] tracking-wide mb-2 max-w-xs font-medium">
                    Cordially invite you to celebrate the joyous wedding ceremony of
                  </p>

                  <h2 className="text-lg sm:text-2xl font-cinzel font-bold text-[#7E2E40] tracking-wide gold-foil-text-rich drop-shadow-sm">
                    Er. Swetha
                  </h2>
                  <span className="text-xs sm:text-sm font-serif italic text-[#B5566A] my-0.5">&amp;</span>
                  <h2 className="text-lg sm:text-2xl font-cinzel font-bold text-[#7E2E40] tracking-wide gold-foil-text-rich drop-shadow-sm">
                    Er. Deepak Kumar
                  </h2>

                  <p className="text-[9px] sm:text-[10px] font-cinzel tracking-widest text-[#8C3A4F] mt-2 uppercase font-semibold">
                    Together with their beloved families
                  </p>
                </div>
              )}

              {/* -----------------------------------------------------------------
                  SCENE 3: NOVEMBER 2026 CALENDAR WITH DRAWN HEART (00:17 - 00:20)
                  ----------------------------------------------------------------- */}
              {activeScene === 3 && (
                <div className="animate-scene-entry flex flex-col items-center w-full max-w-[260px] bg-[#FFFDF9]/95 backdrop-blur-md p-3 rounded-2xl border border-[#E8C5CB] shadow-[0_12px_35px_rgba(126,46,64,0.18)]">
                  <h3 className="text-base sm:text-lg font-serif italic font-bold text-[#7E2E40] tracking-wide gold-foil-text-rich mb-0.5">
                    November
                  </h3>
                  <p className="text-[11px] font-cinzel text-[#B5566A] tracking-widest font-semibold mb-1">2026</p>

                  {/* Days of Week Header */}
                  <div className="grid grid-cols-7 gap-1 text-[8px] sm:text-[9px] font-cinzel text-[#8C3A4F] tracking-wider mb-1 w-full text-center border-b border-[#E8C5CB]/60 pb-1 font-semibold">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>

                  {/* Calendar Numbers Grid (Nov 1 is Sunday, Nov 20 is Friday) */}
                  <div className="grid grid-cols-7 gap-y-1.5 gap-x-1 text-[10px] sm:text-[11px] font-serif text-[#3D1E24] w-full text-center font-medium">
                    {[...Array(30)].map((_, i) => {
                      const day = i + 1
                      const isWeddingDay = day === 20

                      return (
                        <div
                          key={day}
                          className={`relative flex items-center justify-center h-6 ${
                            isWeddingDay ? 'z-20 font-bold' : 'opacity-85'
                          }`}
                        >
                          {isWeddingDay ? (
                            <div className="relative flex items-center justify-center w-full h-full">
                              {/* Glowing Romantic Heart Highlight */}
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="size-7 sm:size-7.5 overflow-visible filter drop-shadow-[0_2px_8px_rgba(225,29,72,0.75)] animate-pulse"
                                >
                                  <path
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    fill="rgba(225, 29, 72, 0.25)"
                                    stroke="#E11D48"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <span className="relative z-10 text-[11px] sm:text-xs font-bold text-[#9F1239] drop-shadow-xs">
                                {day}
                              </span>
                            </div>
                          ) : (
                            <span className="relative z-10 leading-none">{day}</span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* -----------------------------------------------------------------
                  SCENE 4: DATE, TIME & VENUE DETAILS (00:21 - 00:24 in Video)
                  ----------------------------------------------------------------- */}
              {activeScene === 4 && (
                <div className="animate-scene-entry flex flex-col items-center w-full max-w-[275px] bg-[#FFFDF9]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#E8C5CB] shadow-[0_12px_40px_rgba(126,46,64,0.2)]">
                  <div className="w-10 h-0.5 bg-[#B5566A] mb-1.5" />
                  <span className="text-[11px] font-cinzel text-[#8C3A4F] tracking-widest uppercase font-semibold">2026</span>
                  <h3 className="text-sm sm:text-base font-cinzel font-bold text-[#7E2E40] tracking-wide my-0.5">
                    November <span className="text-lg sm:text-xl text-[#B5566A] font-serif">20</span> Friday
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-serif text-[#5C1D2A] tracking-wide font-medium">
                    At 06:00 PM onwards
                  </p>

                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#E8C5CB] to-transparent my-1.5" />

                  <p className="text-[9px] font-cinzel tracking-widest uppercase text-[#8C3A4F] font-semibold">Venue:</p>
                  <h4 className="text-[11px] sm:text-xs font-cinzel font-bold text-[#7E2E40] mt-0.5">
                    AVVS Mahal &amp; Sri Senraya Perumal Temple
                  </h4>
                  <p className="text-[9px] sm:text-[10px] font-serif text-[#6D424B]">
                    Ammapet (Ammapettai) &amp; Odayapatti, Salem, Tamil Nadu
                  </p>

                  {/* Dual Action Buttons */}
                  <div className="mt-2.5 flex items-center justify-center gap-1.5 pointer-events-auto">
                    <button
                      onClick={handleGoogleCalendarClick}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF5EE] hover:bg-[#F3EBE0] border border-[#E8C5CB] text-[#7E2E40] text-[10px] font-cinzel tracking-wider uppercase transition-all shadow-xs active:scale-95 cursor-pointer font-semibold"
                    >
                      <CalendarPlus className="size-3 text-[#B5566A]" />
                      <span>Add to Cal</span>
                    </button>

                    <button
                      onClick={onComplete}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7E2E40] hover:bg-[#9E3D52] border border-[#E8C5CB]/80 text-[#FFF0F3] text-[10px] font-cinzel tracking-wider uppercase shadow-md transition-all active:scale-95 cursor-pointer font-semibold"
                    >
                      <span>Enter Celebration</span>
                      <ExternalLink className="size-3" />
                    </button>
                  </div>
                </div>
              )}

              {/* -----------------------------------------------------------------
                  SCENE 5: "THANK YOU" & CELEBRATION (00:26 in Video)
                  ----------------------------------------------------------------- */}
              {activeScene === 5 && (
                <div className="animate-scene-entry flex flex-col items-center">
                  <Heart className="size-8 text-rose-500 animate-bounce mb-2 fill-rose-500" />
                  <h2 className="text-3xl sm:text-4xl font-serif italic text-[#7E2E40] tracking-wide gold-foil-text-rich drop-shadow-sm">
                    Thank You
                  </h2>
                  <p className="text-xs sm:text-sm font-serif italic text-[#5C1D2A] mt-2 max-w-xs drop-shadow-xs font-medium">
                    We look forward to celebrating our special day with your auspicious presence &amp; blessings
                  </p>

                  <div className="mt-5 pointer-events-auto">
                    <button
                      onClick={onComplete}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#7E2E40] hover:bg-[#9E3D52] border border-[#E8C5CB] text-[#FFF0F3] text-xs sm:text-sm font-cinzel tracking-wider uppercase shadow-xl transition-all active:scale-95 cursor-pointer font-bold"
                    >
                      <span>Enter Full Wedding Website</span>
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =====================================================================
              BOTTOM SCENE NAVIGATION PILLS (VISIBLE ONCE DOORS OPEN)
              ===================================================================== */}
          {isDoorOpen && (
            <div className="absolute inset-x-2 bottom-3 flex items-center justify-center gap-1.5 z-40">
              {SCENES.map((scene, idx) => (
                <button
                  key={scene.id}
                  onClick={() => handleSceneSelect(idx as SceneIndex)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeScene === idx
                      ? 'w-6 bg-[#7E2E40] shadow-[0_0_8px_rgba(126,46,64,0.6)]'
                      : 'w-2 bg-[#7E2E40]/30 hover:bg-[#7E2E40]/60'
                  }`}
                  title={`Jump to ${scene.name}`}
                />
              ))}
            </div>
          )}

          {/* =====================================================================
              OUTER LAYER: SCALLOPED DIE-CUT FRENCH GATEFOLD DOORS (REFERENCE 2)
              Matches 100% natural proportions: Scalloped edges, blue floral vines,
              silk ribbon, and the PROMINENT "TAP TO OPEN" Button!
              ===================================================================== */}
          {/* Left Scalloped Door */}
          <div
            className={`cinematic-door-left ${isDoorOpen ? 'is-open' : ''}`}
            style={{
              backgroundImage: 'url(/assets/luxe_ref.jpg)',
              backgroundSize: '200% 100%',
              backgroundPosition: 'left top',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Right Scalloped Door */}
          <div
            className={`cinematic-door-right ${isDoorOpen ? 'is-open' : ''}`}
            style={{
              backgroundImage: 'url(/assets/luxe_ref.jpg)',
              backgroundSize: '200% 100%',
              backgroundPosition: 'right top',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Center Silk Ribbon & Wax Seal Trigger with PROMINENT "TAP TO OPEN" Button */}
          <div
            className={`cinematic-ribbon-seal ${isDoorOpen ? 'is-open' : ''}`}
          >
            <button
              onClick={triggerDoorOpen}
              className="group relative flex flex-col items-center cursor-pointer select-none active:scale-95 transition-transform"
              title="Click to Open Wedding Invitation"
            >
              {/* Central Seal Anchor: Positioned directly over ribbon knot & printed card seal */}
              <div className="relative flex items-center justify-center transform-gpu" style={{ transform: "translateZ(35px)" }}>
                {/* Pulsing Golden Halo Ring */}
                <div className="absolute size-26 sm:size-32 rounded-full border-2 border-[#D4AF37] animate-ping opacity-60 pointer-events-none" />

                {/* Auspicious SD Wax Seal: Sized and centered to completely cover the underlying card seal */}
                <div className="relative size-22 sm:size-26 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_12px_40px_rgba(126,46,64,0.5),0_0_25px_rgba(212,175,55,0.7)] bg-[#FAF5EE] transition-transform duration-300 group-hover:scale-108 flex items-center justify-center">
                  <img
                    src="/assets/seal_stamp.jpg"
                    alt="Auspicious Wax Seal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Centered "TAP TO OPEN" Button positioned directly below the seal without offsetting seal center */}
              <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-gradient-to-r from-[#7E2E40] via-[#9E3D52] to-[#7E2E40] hover:from-[#9E3D52] hover:to-[#B5566A] border-2 border-[#F3D279] shadow-[0_8px_30px_rgba(126,46,64,0.5)] whitespace-nowrap transition-all duration-300 group-hover:scale-105 active:scale-95 animate-bounce">
                <span className="text-xs sm:text-sm font-cinzel text-[#FFF0F3] font-bold tracking-widest uppercase flex items-center gap-2">
                  <Sparkles className="size-3.5 text-[#F3D279] animate-pulse" />
                  <span>✦ TAP TO OPEN ✦</span>
                  <Sparkles className="size-3.5 text-[#F3D279] animate-pulse" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* =========================================================================
          BOTTOM VIDEO PROGRESS BAR
          ========================================================================= */}
      {isDoorOpen && (
        <footer className="absolute bottom-0 inset-x-0 h-1 bg-[#E8C5CB]/40 z-50">
          <div
            className="h-full bg-gradient-to-r from-[#B5566A] via-[#E8A5B2] to-[#7E2E40] transition-all duration-200 shadow-[0_0_12px_#B5566A]"
            style={{ width: `${progressPct}%` }}
          />
        </footer>
      )}
    </aside>
  )
}
export default CinematicSaveTheDateIntro
