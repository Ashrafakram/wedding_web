import React, { useState, useEffect } from 'react'
import { WeddingVideoPlayer } from './WeddingVideoPlayer'
import { WeddingInvitationReveal } from './WeddingInvitationReveal'
import { weddingAudio } from '@/lib/weddingAudio'
import './wedding-intro.css'

interface WeddingIntroProps {
  isOpen: boolean
  onComplete: () => void
}

type IntroPhase = 'video' | 'reveal'

export function WeddingIntro({ isOpen, onComplete }: WeddingIntroProps) {
  const [phase, setPhase] = useState<IntroPhase>('video')
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(weddingAudio.isPlaying)

  // Sync audio state with singleton
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
      setPhase('video')
      // Try starting auspicious Nadaswaram wedding music
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

  const handleToggleAudio = () => {
    weddingAudio.toggle()
  }

  const handleVideoEnd = () => {
    setPhase('reveal')
  }

  const handleSkip = () => {
    // If during video, skip directly to the invitation reveal card
    if (phase === 'video') {
      setPhase('reveal')
    } else {
      onComplete()
    }
  }

  const handleReplayVideo = () => {
    setPhase('video')
  }

  return (
    <aside
      className="wedding-intro-root"
      aria-label="Traditional Tamil Wedding Animation Ceremony"
    >
      {/* Dynamic ambient glow behind video */}
      <div className="wedding-ambient-glow" />

      {/* Main Animated Character Video Experience */}
      <WeddingVideoPlayer
        onVideoEnd={handleVideoEnd}
        onSkip={handleSkip}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Phase 5: Automatic Wedding Card Unfolding & Reveal */}
      {phase === 'reveal' && (
        <WeddingInvitationReveal
          onOpenWebsite={onComplete}
          onReplayVideo={handleReplayVideo}
        />
      )}
    </aside>
  )
}
export default WeddingIntro
