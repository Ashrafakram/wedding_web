import React, { useState } from 'react'
import { RoyalEnvelope } from '@/components/wedding/RoyalEnvelope'
import { MahalGoldInvitation } from '@/components/wedding/MahalGoldInvitation'
import { MahalAudioPlayer } from '@/components/wedding/MahalAudioPlayer'
import { RsvpModal } from '@/components/wedding/RsvpModal'

export function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false)
  const [musicStarted, setMusicStarted] = useState(false)
  const [isRsvpOpen, setIsRsvpOpen] = useState(false)

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpened(true)
    setMusicStarted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Fullscreen Authentic Wax Seal Envelope Opening Animation */}
      {!isEnvelopeOpened && <RoyalEnvelope onOpen={handleOpenEnvelope} />}

      {/* 2. Authentic 1:1 Mahal Gold Invitation Template */}
      <main className="min-h-screen w-full">
        <MahalGoldInvitation onRsvpClick={() => setIsRsvpOpen(true)} />
      </main>

      {/* 3. Floating Music Disc Player */}
      <MahalAudioPlayer autoPlayTrigger={musicStarted} />

      {/* 4. Interactive Attendance Modal */}
      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
    </div>
  )
}

export default App
