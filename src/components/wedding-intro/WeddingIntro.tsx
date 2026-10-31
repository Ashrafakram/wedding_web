import React from 'react'
import { CinematicSaveTheDateIntro } from './CinematicSaveTheDateIntro'
// import { RoyalSealFloralIntro } from './RoyalSealFloralIntro'
// import { LuxeGatefoldIntro } from './LuxeGatefoldIntro'
import './wedding-intro.css'

interface WeddingIntroProps {
  isOpen: boolean
  onComplete: () => void
}

export function WeddingIntro({ isOpen, onComplete }: WeddingIntroProps) {
  if (!isOpen) return null

  return (
    <CinematicSaveTheDateIntro
      isOpen={isOpen}
      onComplete={onComplete}
    />
  )
}
export default WeddingIntro
