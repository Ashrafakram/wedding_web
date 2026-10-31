import React, { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, ArrowRight, Heart, Sparkles, ChevronRight } from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'
import { launchPetalShower, launchHeartAndMultiShapeBurst } from '@/lib/confetti'

interface WeddingVideoPlayerProps {
  onVideoEnd: () => void
  onSkip: () => void
  isAudioPlaying: boolean
  onToggleAudio: () => void
}

type SceneId = 'entrance' | 'exchange' | 'blessing'

export function WeddingVideoPlayer({
  onVideoEnd,
  onSkip,
  isAudioPlaying,
  onToggleAudio,
}: WeddingVideoPlayerProps) {
  const [currentScene, setCurrentScene] = useState<SceneId>('entrance')
  const [entranceProgress, setEntranceProgress] = useState<'entering' | 'met'>('entering')
  const [sceneProgress, setSceneProgress] = useState(0) // 0 to 100 for progress bar
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Scene 1: Entrance Choreography
  useEffect(() => {
    // 1. Groom slides in from left, Bride slides in from right
    const meetTimer = setTimeout(() => {
      setEntranceProgress('met')
      try {
        weddingAudio.playTempleBellChime()
      } catch (_) {}
      launchHeartAndMultiShapeBurst()
    }, 1800)

    // 2. Transition from Entrance to Exchange Maalai (Garland Exchange)
    const exchangeTimer = setTimeout(() => {
      setCurrentScene('exchange')
      launchPetalShower()
      try {
        weddingAudio.playTempleBellChime()
      } catch (_) {}
    }, 5500)

    // 3. Transition from Exchange Maalai to Couple Holding Invitation Card
    const blessingTimer = setTimeout(() => {
      setCurrentScene('blessing')
      launchHeartAndMultiShapeBurst()
    }, 11000)

    // 4. Conclude ceremony animation and transition to Royal 3D Card Open phase
    const endTimer = setTimeout(() => {
      onVideoEnd()
    }, 16500)

    return () => {
      clearTimeout(meetTimer)
      clearTimeout(exchangeTimer)
      clearTimeout(blessingTimer)
      clearTimeout(endTimer)
    }
  }, [onVideoEnd])

  // Progress Bar ticker
  useEffect(() => {
    const start = Date.now()
    const totalDuration = 16500
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.floor((elapsed / totalDuration) * 100))
      setSceneProgress(pct)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const handleNextScene = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentScene === 'entrance') {
      setCurrentScene('exchange')
      launchPetalShower()
    } else if (currentScene === 'exchange') {
      setCurrentScene('blessing')
      launchHeartAndMultiShapeBurst()
    } else {
      onVideoEnd()
    }
  }

  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden select-none"
      onClick={handleNextScene}
    >
      {/* =========================================================================
          SCENE 1: THE GRAND TEMPLE ENTRANCE
          Background: Empty Temple Mandapam with zero background people!
          Groom glides in from Left, Bride glides in from Right
          ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          currentScene === 'entrance' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Empty Sacred Mandapam Hall Background (NO People) */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/mandapam_empty.jpg"
            alt="Sacred South Indian Temple Mandapam"
            className="w-full h-full object-cover animate-mandapam-zoom"
          />
          {/* Warm Temple Diya Vignette */}
          <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/25 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        </div>

        {/* Scene 1 Center Mandapam Walkway: Groom from Left & Bride from Right */}
        <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-12">
          {/* Subtitle Banner at Top — Clean, compact spacing */}
          <div className="absolute top-14 sm:top-16 text-center z-20 pointer-events-none px-4">
            <p className="text-[10px] sm:text-[11px] font-serif tracking-[0.24em] text-[#D4AF37] uppercase drop-shadow-md">
              || ஸ்ரீ விநாயகர் துணை ||
            </p>
            <h1 className="text-xs sm:text-base md:text-xl font-cinzel font-bold text-[#FFF7DC] tracking-wider drop-shadow-lg">
              THE GRAND ENTRANCE
            </h1>
            <p className="text-[9px] sm:text-[10px] text-[#F3D279] font-cinzel tracking-widest mt-0.5">
              Welcoming the Groom &amp; Bride to the Sacred Mandapam
            </p>
          </div>

          {/* GROOM (Comes from Left) */}
          <div
            className={`absolute left-4 sm:left-12 md:left-24 lg:left-36 bottom-12 sm:bottom-16 transition-all duration-1200 ease-out z-20 ${
              entranceProgress === 'entering'
                ? '-translate-x-full opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="relative group flex flex-col items-center">
              {/* Gold Aura Frame */}
              <div className="relative w-44 sm:w-60 md:w-72 lg:w-80 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.4)] bg-gradient-to-b from-[#2B080C]/80 to-black">
                <img
                  src="/assets/groom_walking_in.jpg"
                  alt="Groom Er. Deepak Kumar"
                  className="w-full h-auto object-cover object-top max-h-[50vh] sm:max-h-[60vh] transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                {/* Groom Tag */}
                <div className="absolute bottom-3 inset-x-0 text-center">
                  <span className="inline-block text-[10px] sm:text-xs font-cinzel uppercase tracking-wider text-[#D4AF37] font-semibold bg-black/80 px-3 py-1 rounded-full border border-[#D4AF37]/50 shadow-md">
                    The Groom • Er. Deepak
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER UNION EMBLEM & SPARKS (When they meet) */}
          <div
            className={`transition-all duration-700 z-30 flex flex-col items-center justify-center ${
              entranceProgress === 'met'
                ? 'scale-100 opacity-100'
                : 'scale-50 opacity-0 pointer-events-none'
            }`}
          >
            <div className="relative size-16 sm:size-24 rounded-full bg-gradient-to-b from-[#5C131E] to-[#2B080C] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.8)] flex items-center justify-center animate-pulse">
              <Heart className="size-8 sm:size-12 text-[#F3D279] fill-[#D4AF37]" />
              {/* Auspicious Tamil Symbol */}
              <div className="absolute -top-3 bg-[#2B080C] px-2 py-0.5 rounded-full border border-[#D4AF37] text-[10px] font-serif text-[#F3D279]">
                ௐ
              </div>
            </div>
            <div className="mt-3 bg-black/75 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-xl backdrop-blur-md">
              <span className="text-xs sm:text-sm font-cinzel text-[#F3D279] font-medium tracking-widest">
                Two Souls, One Sacred Bond
              </span>
            </div>
          </div>

          {/* BRIDE (Comes from Right) */}
          <div
            className={`absolute right-4 sm:right-12 md:right-24 lg:right-36 bottom-12 sm:bottom-16 transition-all duration-1200 ease-out z-20 ${
              entranceProgress === 'entering'
                ? 'translate-x-full opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="relative group flex flex-col items-center">
              {/* Gold Aura Frame */}
              <div className="relative w-44 sm:w-60 md:w-72 lg:w-80 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.4)] bg-gradient-to-b from-[#2B080C]/80 to-black">
                {/* Couple avatar bride cutout portrait */}
                <div className="relative w-full h-[50vh] sm:h-[60vh] max-h-[50vh] sm:max-h-[60vh] overflow-hidden bg-[#1A0407]">
                  <img
                    src="/assets/groom_bride_maalai.jpg"
                    alt="Bride Dr. Swetha"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: '75% 20%', transform: 'scale(1.35)' }}
                  />
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                {/* Bride Tag */}
                <div className="absolute bottom-3 inset-x-0 text-center">
                  <span className="inline-block text-[10px] sm:text-xs font-cinzel uppercase tracking-wider text-[#D4AF37] font-semibold bg-black/80 px-3 py-1 rounded-full border border-[#D4AF37]/50 shadow-md">
                    The Bride • Dr. Swetha
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SCENE 2: THE SACRED GARLAND EXCHANGE (EXCHANGE MAALAI / மாலை மாற்றுதல்)
          Zero background people! Just the Groom & Bride in divine temple glow
          ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          currentScene === 'exchange' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/groom_bride_maalai.jpg"
            alt="Maalai Maattrudhal - Sacred Garland Exchange Ceremony"
            className="w-full h-full object-cover animate-ceremony-pan"
            style={{ objectPosition: 'center 28%' }}
          />
          {/* Subtle cinematic golden vignette */}
          <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
        </div>

        {/* Ceremonial Badge & Romantic Caption — Realigned to bottom to keep couple's faces 100% visible! */}
        <div className="absolute bottom-8 sm:bottom-12 inset-x-0 flex flex-col items-center justify-center z-20 pointer-events-none px-4">
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

      {/* =========================================================================
          SCENE 3: INVITATION CARD PRESENTATION (திருமண அழைப்பிதழ்)
          Zero background people! Just the happy couple presenting the card!
          ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          currentScene === 'blessing' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/couple_card_only.jpg"
            alt="Deepak & Swetha presenting the Wedding Invitation Card"
            className="w-full h-full object-cover animate-ceremony-pan"
            style={{ objectPosition: 'center 25%' }}
          />
          <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
        </div>

        {/* Invitation Presentation Banner — Realigned to bottom to keep couple's faces 100% visible! */}
        <div className="absolute bottom-8 sm:bottom-12 inset-x-0 flex flex-col items-center justify-center z-20 pointer-events-none px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-black/80 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4AF37]/60 shadow-[0_4px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.35)]">
            <span className="text-[11px] sm:text-xs font-serif text-[#D4AF37]">|| திருமண அழைப்பிதழ் ||</span>
            <span className="h-3 w-px bg-[#D4AF37]/50" />
            <h2 className="text-xs sm:text-sm md:text-base font-cinzel font-bold text-[#FFF7DC] tracking-wider">
              A CORDIAL INVITATION FROM OUR HEARTS
            </h2>
          </div>
          <div className="mt-2.5 inline-flex items-center gap-2 bg-[#5C131E]/95 backdrop-blur-md px-5 py-1.5 rounded-full border border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.6)] animate-pulse">
            <Sparkles className="size-3.5 text-[#F3D279]" />
            <span className="text-[10px] sm:text-xs font-cinzel text-[#FFF7DC] font-semibold tracking-wider uppercase">
              Tap to Reveal Your 3D Royal Invitation Card
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TOP PERSISTENT CONTROL BAR (BRANDING, MUSIC & SKIP)
          ========================================================================= */}
      <div
        className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-40 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Monogram Badge */}
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-lg">
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

        {/* Scene Indicator Badges */}
        <div className="hidden md:flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/30">
          <button
            onClick={() => setCurrentScene('entrance')}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-cinzel transition-all ${
              currentScene === 'entrance'
                ? 'bg-[#D4AF37] text-[#2B080C] font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            1. Grand Entrance
          </button>
          <span className="text-zinc-600">•</span>
          <button
            onClick={() => setCurrentScene('exchange')}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-cinzel transition-all ${
              currentScene === 'exchange'
                ? 'bg-[#D4AF37] text-[#2B080C] font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            2. Exchange Maalai
          </button>
          <span className="text-zinc-600">•</span>
          <button
            onClick={() => setCurrentScene('blessing')}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-cinzel transition-all ${
              currentScene === 'blessing'
                ? 'bg-[#D4AF37] text-[#2B080C] font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            3. Wedding Card
          </button>
        </div>

        {/* Audio & Skip Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleAudio}
            className="flex items-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 text-[#F5EFE3] text-xs font-cinzel transition-all shadow-md active:scale-95 cursor-pointer"
            title={isAudioPlaying ? 'Mute Music' : 'Play Nadaswaram Music'}
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
            onClick={onSkip}
            className="flex items-center gap-1 bg-[#5C131E]/90 hover:bg-[#7A1725] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5C058]/60 text-[#F3D279] text-xs font-cinzel tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
            title="Open Wedding Card Directly"
          >
            <span>Skip to Card</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom Ceremonial Progress Bar */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-black/50 z-40">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#D4AF37] transition-all duration-300 shadow-[0_0_10px_#D4AF37]"
          style={{ width: `${sceneProgress}%` }}
        />
      </div>
    </div>
  )
}
export default WeddingVideoPlayer
