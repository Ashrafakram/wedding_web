import React, { useState, useEffect } from 'react'
import { Volume2, VolumeX, Heart, Sparkles } from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'
import { launchHeartAndMultiShapeBurst } from '@/lib/confetti'

interface FloatingAudioControlsProps {
  onReopenEnvelope: () => void
}

export function FloatingAudioControls({ onReopenEnvelope }: FloatingAudioControlsProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(weddingAudio.isPlaying)

  useEffect(() => {
    // Subscribe to wedding audio status changes
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const handleToggleAudio = () => {
    weddingAudio.toggle()
  }

  const handleShowerHearts = () => {
    launchHeartAndMultiShapeBurst()
  }

  return (
    <aside
      aria-label="Audio, heart, and ceremony controls"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2"
    >
      {/* 1. Audio Mute / Unmute Player Button */}
      <button
        onClick={handleToggleAudio}
        className={`group relative flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-xl cursor-pointer active:scale-95 ${
          isPlaying
            ? 'bg-[#163224]/95 border-[#D4AF37] text-[#F3D279] shadow-[#163224]/40 ring-2 ring-[#D4AF37]/30'
            : 'bg-[#1A2621]/90 border-[#A89880]/40 text-[#DFDBD1] hover:border-[#D4AF37]/60'
        }`}
        title={isPlaying ? 'Pause Wedding Music' : 'Play Auspicious Wedding Music'}
        aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
      >
        {isPlaying ? (
          <>
            {/* Animated Equalizer Waves */}
            <div className="flex items-end gap-0.5 h-3.5 w-3.5">
              <span className="w-0.5 bg-[#F3D279] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
              <span className="w-0.5 bg-[#F3D279] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.15s] h-2/3" />
              <span className="w-0.5 bg-[#F3D279] rounded-full animate-[pulse_0.75s_ease-in-out_infinite_0.3s] h-4/5" />
            </div>
            <Volume2 className="size-4 text-[#F3D279]" />
            <span className="hidden sm:inline text-[11px] font-cinzel tracking-wider uppercase font-semibold text-[#F3D279]">
              Music Playing
            </span>
          </>
        ) : (
          <>
            <VolumeX className="size-4 text-[#C9AA71]" />
            <span className="hidden sm:inline text-[11px] font-cinzel tracking-wider uppercase text-[#DFDBD1]">
              Music Off
            </span>
          </>
        )}
      </button>

      {/* 2. Re-open Sacred Heart Locket Unboxing Button */}
      <button
        onClick={onReopenEnvelope}
        className="group flex items-center justify-center size-10 rounded-full bg-[#163224]/90 hover:bg-[#163224] backdrop-blur-md border border-[#D4AF37]/60 hover:border-[#F3D279] text-[#F3D279] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        title="Re-open Sacred Heart Ceremony"
        aria-label="Re-open Sacred Heart Ceremony"
      >
        <Heart className="size-4 text-[#F3D279] fill-[#F3D279]/50 group-hover:scale-115 transition-transform animate-pulse" />
      </button>

      {/* 3. Interactive Shower Hearts Button */}
      <button
        onClick={handleShowerHearts}
        className="group hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#163224]/90 hover:bg-[#163224] backdrop-blur-md border border-[#D4AF37]/50 text-[#F3D279] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        title="Shower Multi-Shape Hearts & Confetti"
        aria-label="Shower Multi-Shape Hearts & Confetti"
      >
        <Sparkles className="size-3.5 text-[#F3D279]" />
        <span className="text-[11px] font-cinzel uppercase tracking-wider text-[#F3D279]">
          Shower Hearts 💖
        </span>
      </button>
    </aside>
  )
}
