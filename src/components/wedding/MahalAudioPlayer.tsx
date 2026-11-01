import React, { useRef, useState, useEffect } from 'react'
import { Disc3, Volume2, VolumeX } from 'lucide-react'

interface MahalAudioPlayerProps {
  autoPlayTrigger: boolean
}

export const MahalAudioPlayer: React.FC<MahalAudioPlayerProps> = ({ autoPlayTrigger }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.volume = 0.5
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked by browser policy
          setIsPlaying(false)
        })
    }
  }, [autoPlayTrigger])

  const togglePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <audio ref={audioRef} src="/audio/bg_music.mp3" loop preload="auto" />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #640e1b, #4a0a14)',
          border: '1.5px solid #ab7a45',
          boxShadow: '0 8px 25px rgba(100, 14, 27, 0.45)',
        }}
      >
        {/* Spinning Disc */}
        <Disc3
          className={`w-5 h-5 text-[#f7e3cd] ${
            isPlaying ? 'animate-spin-slow' : 'opacity-70'
          }`}
        />

        {/* Dynamic sound bar animation or icon */}
        <div className="flex items-center gap-1">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#f7e3cd]" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#f7e3cd]/60" />
          )}
          <span className="text-xs font-medium text-[#f7e3cd] hidden sm:inline tracking-wider">
            {isPlaying ? 'Music Playing' : 'Music Paused'}
          </span>
        </div>
      </button>
    </div>
  )
}

