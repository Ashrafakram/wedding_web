import React, { useRef, useState, useEffect } from 'react'
import { Volume2, VolumeX, ArrowRight } from 'lucide-react'

interface WeddingVideoPlayerProps {
  onVideoEnd: () => void
  onSkip: () => void
  isAudioPlaying: boolean
  onToggleAudio: () => void
}

export function WeddingVideoPlayer({
  onVideoEnd,
  onSkip,
  isAudioPlaying,
  onToggleAudio,
}: WeddingVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Start video playback immediately on mount with zero delay
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.defaultMuted = true
    video.muted = true

    const handlePlaying = () => {
      setIsPlaying(true)
    }

    const handleEnded = () => {
      onVideoEnd()
    }

    video.addEventListener('playing', handlePlaying)
    video.addEventListener('ended', handleEnded)

    // Trigger instant playback
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true)
      }).catch(() => {
        // Fallback if browser requires user gesture: retry on first interaction
        const handleInteraction = () => {
          video.play().catch(() => {})
          window.removeEventListener('click', handleInteraction)
          window.removeEventListener('touchstart', handleInteraction)
        }
        window.addEventListener('click', handleInteraction, { once: true })
        window.addEventListener('touchstart', handleInteraction, { once: true })
      })
    }

    return () => {
      video.removeEventListener('playing', handlePlaying)
      video.removeEventListener('ended', handleEnded)
    }
  }, [onVideoEnd])

  const handleContainerClick = () => {
    const video = videoRef.current
    if (video && video.paused) {
      video.play().catch(() => {})
    }
  }

  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden select-none"
      onClick={handleContainerClick}
    >
      {/* Pure Cinematic Character Animation (NO Video Player UI, NO Progress Bar, NO Time Codes) */}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover sm:object-contain transition-opacity duration-500 ${
          isPlaying ? 'opacity-100' : 'opacity-95'
        }`}
        poster="/videos/wedding-opening-poster.jpg"
        src="/videos/wedding-opening.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />

      {/* Subtle cinematic golden vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-black/60 pointer-events-none" />

      {/* Floating Petal Accents & Golden Sparkle Ambience */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/40" />

      {/* Minimal, discreet top controls (Music & Skip only — No video player chrome) */}
      <div
        className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sacred Tamil Monogram Badge */}
        <div className="flex items-center gap-2 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C59B27]/40 shadow-lg">
          <div className="size-6 rounded-full overflow-hidden border border-[#F3D279]/70 shrink-0">
            <img
              src="/assets/seal_stamp.jpg"
              alt="Seal"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[11px] sm:text-xs font-cinzel tracking-wider text-[#F3D279] font-medium">
            Swetha & Deepak
          </span>
        </div>

        {/* Music & Skip buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleAudio}
            className="flex items-center gap-1.5 bg-black/45 hover:bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C59B27]/40 text-[#F5EFE3] text-xs font-cinzel transition-all shadow-md active:scale-95 cursor-pointer"
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
            className="flex items-center gap-1 bg-[#5C131E]/80 hover:bg-[#7A1725] backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E5C058]/50 text-[#F3D279] text-xs font-cinzel tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
            title="Skip to Wedding Card"
          >
            <span>Skip</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
