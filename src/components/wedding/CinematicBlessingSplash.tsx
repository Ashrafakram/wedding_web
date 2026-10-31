import React, { useState, useEffect, useRef } from 'react'
import { Crown, ArrowRight, Volume2, VolumeX, Sparkles } from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'
import { launchPetalShower, launchHeartAndMultiShapeBurst } from '@/lib/confetti'

interface CinematicBlessingSplashProps {
  isOpen: boolean
  onComplete: () => void
}

type Stage = 'approaching' | 'blessing' | 'boom'

export function CinematicBlessingSplash({ isOpen, onComplete }: CinematicBlessingSplashProps) {
  const [stage, setStage] = useState<Stage>('approaching')
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(weddingAudio.isPlaying)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Listen to audio changes
  useEffect(() => {
    const unsub = weddingAudio.subscribe((playing) => {
      setIsAudioPlaying(playing)
    })
    return () => unsub()
  }, [])

  // Preload both images on mount so there is zero black frame delay
  useEffect(() => {
    let loadedCount = 0
    const img1 = new Image()
    const img2 = new Image()

    const checkLoaded = () => {
      loadedCount++
      if (loadedCount >= 2) {
        setImagesLoaded(true)
      }
    }

    img1.src = '/assets/couple_coming.jpg'
    img1.onload = checkLoaded
    img1.onerror = checkLoaded

    img2.src = '/assets/blessing_moment.jpg'
    img2.onload = checkLoaded
    img2.onerror = checkLoaded
  }, [])

  // Prevent background scrolling and run cinematic timeline
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setStage('approaching')

      // Start auspicious Shehnai & Nadaswaram audio
      try {
        weddingAudio.start()
      } catch (_) {}

      // Auto-timeline: 
      // 0s - 3.2s: Approaching (couple comes in with silver plate)
      // 3.2s - 6.5s: Blessing (elders shower akshata)
      // 6.5s - 8.5s: Boom (invitation flies out and opens website)
      timerRef.current = setTimeout(() => {
        handleEnterBlessing()
      }, 3200)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isOpen])

  // Phase 1 -> Phase 2: Offering Plate & Receiving Blessings
  const handleEnterBlessing = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setStage('blessing')

    launchPetalShower()

    // Auto-advance to "Boom" invitation reveal after 3.3 seconds of blessing
    timerRef.current = setTimeout(() => {
      handleTriggerBoom()
    }, 3300)
  }

  // Phase 2 -> Phase 3: Invitation flies out, BOOM it opens into website!
  const handleTriggerBoom = () => {
    if (stage === 'boom') return
    if (timerRef.current) clearTimeout(timerRef.current)

    setStage('boom')

    // Launch celebratory multi-shape confetti & petals burst
    launchHeartAndMultiShapeBurst()
    setTimeout(() => {
      launchPetalShower()
    }, 600)

    // After 2.1 seconds of the dramatic boom zoom, reveal the website
    setTimeout(() => {
      onComplete()
    }, 2100)
  }

  // Skip immediately to the website
  const handleSkip = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (timerRef.current) clearTimeout(timerRef.current)
    onComplete()
  }

  // Toggle audio on/off immediately
  const handleToggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation()
    weddingAudio.toggle()
  }

  if (!isOpen) return null

  // 36 Golden Akshata Rice grains falling during the blessing phase
  const akshataGrains = Array.from({ length: 36 }).map((_, i) => ({
    id: i,
    left: Math.random() * 88 + 6,
    duration: (Math.random() * 1.4 + 1.8).toFixed(2),
    delay: (Math.random() * 1.8).toFixed(2),
    sway: (Math.random() * 50 - 25).toFixed(0),
  }))

  return (
    <div
      id="cinematic-blessing-stage"
      className="fixed inset-0 w-screen h-screen z-50 bg-[#08150e] overflow-hidden select-none flex flex-col justify-between"
      onClick={() => {
        if (stage === 'approaching') handleEnterBlessing()
        else if (stage === 'blessing') handleTriggerBoom()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Animated Elders Blessing Ceremony"
    >
      {/* =========================================================================
          TOP CONTROLS BAR: AUDIO TOGGLE & SKIP BUTTON (Always accessible)
          ========================================================================= */}
      <div className="relative z-50 px-4 sm:px-8 pt-4 sm:pt-6 flex items-center justify-between pointer-events-auto">
        
        {/* Audio Toggle Button (Mute / Unmute instantly) */}
        <button
          onClick={handleToggleAudio}
          className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md border transition-all duration-300 shadow-xl cursor-pointer active:scale-95 ${
            isAudioPlaying
              ? 'bg-[#163224]/90 border-[#D4AF37] text-[#F3D279] ring-2 ring-[#D4AF37]/30'
              : 'bg-black/60 border-white/20 text-[#DFDBD1] hover:border-[#D4AF37]'
          }`}
          title={isAudioPlaying ? 'Mute Music' : 'Play Music'}
          aria-label={isAudioPlaying ? 'Mute music' : 'Play music'}
        >
          {isAudioPlaying ? (
            <>
              <div className="flex items-end gap-0.5 h-3.5 w-3.5">
                <span className="w-0.5 bg-[#F3D279] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
                <span className="w-0.5 bg-[#F3D279] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.15s] h-2/3" />
                <span className="w-0.5 bg-[#F3D279] rounded-full animate-[pulse_0.75s_ease-in-out_infinite_0.3s] h-4/5" />
              </div>
              <Volume2 className="size-3.5 text-[#F3D279]" />
              <span className="text-[11px] font-cinzel tracking-wider uppercase font-semibold text-[#F3D279]">
                Music On
              </span>
            </>
          ) : (
            <>
              <VolumeX className="size-3.5 text-red-400" />
              <span className="text-[11px] font-cinzel tracking-wider uppercase text-[#DFDBD1]">
                Music Off
              </span>
            </>
          )}
        </button>

        {/* Prominent SKIP BUTTON */}
        <button
          onClick={handleSkip}
          className="group flex items-center gap-2 bg-[#D4AF37] hover:bg-[#FFE082] text-[#163224] px-5 py-2 rounded-full font-cinzel font-bold text-xs uppercase tracking-wider shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer"
          title="Directly enter wedding website"
        >
          <span>Skip to Website</span>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* =========================================================================
          FULLSCREEN VISUAL ANIMATION CANVAS (NO CARD, EDGE-TO-EDGE)
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* Ambient Warm Golden Temple Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,rgba(6,20,12,0.92)_85%)] z-10" />

        {/* 1. SCENE 1: THE ARRIVAL (Couple comes in from the right holding silver plate) */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            stage === 'approaching' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full overflow-hidden animate-walk-approach">
            <img
              src="/assets/couple_coming.jpg"
              alt="Deepak Kumar and Swetha walking forward with silver plate"
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
        </div>

        {/* 2. SCENE 2: THE BLESSING (Elders shower Akshata rice on the couple) */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            stage === 'blessing' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="/assets/blessing_moment.jpg"
              alt="Elders showering akshata blessings on couple"
              className="w-full h-full object-cover object-center scale-102"
            />

            {/* Falling Akshata Rice Particles */}
            <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
              {akshataGrains.map((g) => (
                <div
                  key={g.id}
                  className="akshata-particle"
                  style={
                    {
                      left: `${g.left}%`,
                      '--duration': `${g.duration}s`,
                      '--delay': `${g.delay}s`,
                      '--sway-x': `${g.sway}px`,
                    } as React.CSSProperties
                  }
                />
              ))}

              {/* Divine Golden Light Rays Aura */}
              <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#FFF59D]/35 via-transparent to-transparent animate-divine-glow" />
            </div>
          </div>
        </div>

        {/* 3. SCENE 3: THE "BOOM" INVITATION FLYOUT & REVEAL */}
        {stage === 'boom' && (
          <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
            {/* Shockwave expanding rings */}
            <div className="boom-shockwave" />
            <div className="boom-shockwave" style={{ animationDelay: '0.25s' }} />

            {/* Fullscreen Golden Flash on boom */}
            <div className="boom-screen-flash" />

            {/* The Royal Golden Invitation zooms out from the plate into full screen! */}
            <div className="absolute top-1/2 left-1/2 animate-invitation-boom">
              <div className="w-[320px] sm:w-[440px] aspect-[1.45/1] rounded-3xl bg-gradient-to-br from-[#0E3D29] via-[#09261A] to-[#04140D] border-4 border-[#FFD700] p-6 sm:p-8 shadow-[0_0_90px_rgba(255,215,0,0.95)] flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Gold Inner dashed border */}
                <div className="absolute inset-3 border-2 border-dashed border-[#F3D279]/70 rounded-2xl pointer-events-none" />

                {/* Glowing Om & Header */}
                <div className="text-3xl sm:text-4xl text-[#FFD700] leading-none mb-1">ௐ</div>
                <div className="font-script text-3xl sm:text-4xl text-[#FFF8DC] leading-tight">
                  Wedding Invitation
                </div>

                {/* Names */}
                <div className="font-cinzel text-lg sm:text-2xl font-bold text-white tracking-widest my-1">
                  Swetha &amp; Deepak Kumar
                </div>

                {/* Date */}
                <div className="text-xs sm:text-sm font-cinzel text-[#FFD700] uppercase tracking-wider font-semibold">
                  19 &amp; 20 November 2026
                </div>

                {/* Auspicious Tamil sentiment */}
                <div className="font-tamil text-xs text-[#E8DEC8] mt-1">
                  இரு மனங்கள் இணையும் இனிய திருமணம்
                </div>

                {/* Wax Seal popping */}
                <div className="mt-3 size-12 sm:size-14 rounded-full bg-gradient-to-tr from-[#C59B27] via-[#FFD700] to-[#E5A93C] border-2 border-white flex items-center justify-center shadow-lg animate-pulse">
                  <Crown className="size-6 sm:size-7 text-[#163224]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Top Vignette and Bottom Vignette for Cinematic Depth */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 pointer-events-none" />
      </div>

      {/* =========================================================================
          BOTTOM NARRATIVE & ACTION CONTROLS
          ========================================================================= */}
      <div className="relative z-50 px-4 sm:px-8 pb-6 sm:pb-8 flex flex-col items-center text-center pointer-events-auto">
        
        {stage === 'approaching' && (
          <div className="flex flex-col items-center animate-fade-in max-w-lg">
            <span className="text-[11px] sm:text-xs font-cinzel uppercase tracking-[0.25em] text-[#F3D279] font-bold mb-1">
              Step 1: The Arrival • தட்டளித்தல்
            </span>
            <p className="text-xs sm:text-sm text-[#E8DEC8] font-light mb-3">
              Deepak Kumar &amp; Swetha arrive holding the sacred silver plate with fruits &amp; invitation.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleEnterBlessing()
              }}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#F3D279] to-[#C59B27] hover:brightness-110 text-[#163224] px-6 py-2.5 rounded-full font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl active:scale-95 transition-all cursor-pointer"
            >
              <span>Offer Invitation to Elders ➔</span>
            </button>
          </div>
        )}

        {stage === 'blessing' && (
          <div className="flex flex-col items-center animate-fade-in max-w-lg">
            <span className="text-[11px] sm:text-xs font-cinzel uppercase tracking-[0.25em] text-[#F3D279] font-bold mb-1 flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-[#F3D279]" />
              <span>Step 2: Divine Blessing • ஆசீர்வாதம்</span>
              <Sparkles className="size-3.5 text-[#F3D279]" />
            </span>
            <p className="text-xs sm:text-sm text-[#E8DEC8] font-light mb-3">
              The elders affectionately raise their hands, showering golden Akshata for an eternal union.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleTriggerBoom()
              }}
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FFD700] via-[#FFF3A8] to-[#E5A93C] hover:brightness-110 text-[#163224] px-8 py-3 rounded-full font-cinzel font-black text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_35px_rgba(255,215,0,0.8)] active:scale-95 transition-all cursor-pointer animate-bounce"
            >
              <Crown className="size-4 text-[#163224]" />
              <span>Open Invitation (BOOM!) ➔</span>
            </button>
          </div>
        )}

        {stage === 'boom' && (
          <div className="text-[#FFD700] font-cinzel text-sm sm:text-base uppercase tracking-[0.3em] font-bold animate-pulse">
            ✨ Opening Sacred Wedding Celebration ✨
          </div>
        )}

        {/* Ambient Bottom Note */}
        <div className="mt-3 text-[#D4AF37]/80 text-[10px] sm:text-[11px] font-cinzel tracking-wider uppercase">
          Tap anywhere to advance &bull; Traditional Shehnai &amp; Nadaswaram
        </div>

      </div>
    </div>
  )
}
