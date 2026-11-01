import React, { useState } from 'react'
import { RoyalEnvelope } from '@/components/wedding/RoyalEnvelope'
import { MahalGoldInvitation } from '@/components/wedding/MahalGoldInvitation'
import { MahalAudioPlayer } from '@/components/wedding/MahalAudioPlayer'
import { RsvpModal } from '@/components/wedding/RsvpModal'
import { FlowerRain } from '@/components/wedding/FlowerRain'

export function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false)
  const [musicStarted, setMusicStarted] = useState(false)
  const [isRsvpOpen, setIsRsvpOpen] = useState(false)

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpened(true)
    setMusicStarted(true)
  }

  return (
    <div
      className="min-h-screen relative overflow-x-hidden selection:bg-[#ab7a45]/20 selection:text-[#640e1b]"
      style={{
        backgroundColor: '#f7e3cd',
        backgroundImage: 'url(/images/themes/mahal-gold/paper.webp)',
        backgroundSize: '100% auto',
        backgroundRepeat: 'repeat-y',
      }}
    >
      {/* 1. Fullscreen Authentic Wax Seal Envelope Opening Animation */}
      {!isEnvelopeOpened && <RoyalEnvelope onOpen={handleOpenEnvelope} />}

      {/* 2. Romantic Falling Flower Rain Animation */}
      {isEnvelopeOpened && <FlowerRain />}

      {/* 3. Authentic 1:1 Mahal Gold Invitation Template */}
      <main className="min-h-screen w-full">
        <MahalGoldInvitation onRsvpClick={() => setIsRsvpOpen(true)} />
      </main>

      {/* 4. Floating Music Disc Player */}
      <MahalAudioPlayer autoPlayTrigger={musicStarted} />

      {/* 5. Interactive Attendance Modal */}
      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
    </div>
  )
}

export default App
