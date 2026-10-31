import React, { useState, useEffect } from 'react'
import { Volume2, VolumeX, MailOpen } from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'

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

  return (
    <aside
      aria-label="Audio and envelope controls"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2"
    >
      {/* 1. Audio Mute / Unmute Player Button */}
      <button
        onClick={handleToggleAudio}
        className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-xl cursor-pointer active:scale-95 ${
          isPlaying
            ? 'bg-[#7E2E40]/95 border-[#E8C5CB] text-[#FFF0F3] shadow-[0_4px_20px_rgba(126,46,64,0.4)] ring-2 ring-[#E8C5CB]/40'
            : 'bg-[#FFFDF9]/95 border-[#E8C5CB] text-[#7E2E40] hover:border-[#D4AF37]'
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
            <span className="hidden sm:inline text-[11px] font-cinzel tracking-wider uppercase font-semibold text-[#FFF0F3]">
              Music Playing
            </span>
          </>
        ) : (
          <>
            <VolumeX className="size-4 text-[#B5566A]" />
            <span className="hidden sm:inline text-[11px] font-cinzel tracking-wider uppercase text-[#7E2E40] font-semibold">
              Music Off
            </span>
          </>
        )}
      </button>

      {/* 2. Re-open Royal Envelope Button */}
      <button
        onClick={onReopenEnvelope}
        className="group flex items-center justify-center size-10 rounded-full bg-[#7E2E40]/95 hover:bg-[#9E3D52] backdrop-blur-md border border-[#E8C5CB] text-[#FFF0F3] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        title="Re-open Save The Date Animation"
        aria-label="Re-open Save The Date Animation"
      >
        <MailOpen className="size-4 text-[#F3D279] group-hover:scale-110 transition-transform" />
      </button>
    </aside>
  )
}
