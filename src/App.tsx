import React, { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/wedding/HeroSection'
import { HeartfeltInvitation } from '@/components/wedding/HeartfeltInvitation'
import { CountdownSection } from '@/components/wedding/CountdownSection'
import { CelebrationsSection } from '@/components/wedding/CelebrationsSection'
import { VenuesSection } from '@/components/wedding/VenuesSection'
import { InvitationActionsFooter } from '@/components/wedding/InvitationActionsFooter'
import { FloatingPetals } from '@/components/common/FloatingPetals'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { WeddingIntro } from '@/components/wedding-intro/WeddingIntro'
import { FloatingAudioControls } from '@/components/wedding/FloatingAudioControls'
import { WaxSealIntro } from '@/components/wedding/WaxSealIntro'
import { SendWishesModal } from '@/components/wedding/SendWishesModal'
import { SaveTheDateModal } from '@/components/wedding/SaveTheDateModal'
import { ShareModal } from '@/components/wedding/ShareModal'
import { NetworkShareModal } from '@/components/wedding/NetworkShareModal'
import { RsvpModal } from '@/components/wedding/RsvpModal'
import { ThemeColorModal } from '@/components/wedding/ThemeColorModal'
import { downloadWeddingCalendarEvent } from '@/lib/calendar'
import { getInitialTheme, applyTheme } from '@/lib/theme'

export function App() {
  // Apply initial theme (Beige & Pink) on mount
  React.useEffect(() => {
    const initialTheme = getInitialTheme()
    applyTheme(initialTheme)
  }, [])

  // Cinematic Character Animation Opening Experience:
  // Bride & Groom Walk -> Handover Thamboolam -> Elders Bless -> Elders Open Invitation Card -> Open Website
  const [isIntroOpen, setIsIntroOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      return params.get('skip_intro') !== '1' && params.get('skip_splash') !== '1'
    }
    return true
  })

  const [isWaxSealOpen, setIsWaxSealOpen] = useState(false)
  const [isWishesOpen, setIsWishesOpen] = useState(false)
  const [isSaveDateOpen, setIsSaveDateOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isNetworkShareOpen, setIsNetworkShareOpen] = useState(false)
  const [isRsvpOpen, setIsRsvpOpen] = useState(false)
  const [isThemeOpen, setIsThemeOpen] = useState(false)

  const handleAddToCalendar = () => {
    downloadWeddingCalendarEvent()
  }

  const handleReplayIntro = () => {
    setIsIntroOpen(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF5EE] via-[#FCECEF] via-35% to-[#FAF5EE] text-[var(--theme-primary,#2D1B22)] relative selection:bg-[#E8A5B2]/30 selection:text-[#7E2E40] transition-colors duration-500 overflow-x-hidden">
      {/* Global Ambient Romantic Luxury Beige & Blush Pink Backdrop Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Cashmere Beige & Blush Rose Pink Base Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(247,214,220,0.5)_0%,rgba(250,245,238,0.7)_40%,#FAF5EE_100%)]" />
        {/* Warm Rose Radiance Floating Accent at Top Right */}
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(232,165,178,0.25)_0%,transparent_70%)] rounded-full blur-3xl" />
        {/* Warm Golden Sand Accent at Mid Left */}
        <div className="absolute top-[40%] -left-32 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(243,210,121,0.18)_0%,transparent_70%)] rounded-full blur-3xl" />
        {/* Soft Blush Rose Petal Accent at Bottom Right */}
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(247,214,220,0.38)_0%,transparent_70%)] rounded-full blur-3xl" />
      </div>

      {/* 1. Fullscreen Cinematic Character Animation & Tamil Traditional Wedding Card Intro */}
      <WeddingIntro
        isOpen={isIntroOpen}
        onComplete={() => setIsIntroOpen(false)}
      />

      {/* 2. Floating Wedding Music Equalizer & Replay Ceremony Controls (Bottom Left) */}
      {!isIntroOpen && (
        <FloatingAudioControls
          onReopenEnvelope={handleReplayIntro}
        />
      )}

      {/* 3. Background Floating Jasmine & Gold Petals Animation */}
      <FloatingPetals />

      {/* 4. Navigation Header */}
      {!isIntroOpen && (
        <Navbar
          onSaveDateClick={() => setIsSaveDateOpen(true)}
          onWishesClick={() => setIsWishesOpen(true)}
          onNetworkShareClick={() => setIsNetworkShareOpen(true)}
          onRsvpClick={() => setIsRsvpOpen(true)}
          onThemeClick={() => setIsThemeOpen(true)}
        />
      )}

      {/* 5. Main Content Flow with Smooth Scroll Reveal */}
      <main className="relative z-20">
        {/* Hero Section with Anime Couple on Top */}
        <HeroSection />

        {/* Heartfelt Bilingual Invitation */}
        <ScrollReveal direction="up" delayMs={50}>
          <HeartfeltInvitation />
        </ScrollReveal>

        {/* The Countdown to Our Forever */}
        <ScrollReveal direction="up" delayMs={80}>
          <CountdownSection />
        </ScrollReveal>

        {/* Our Wedding Celebrations (Day 1 & Day 2) */}
        <ScrollReveal direction="up" delayMs={100}>
          <CelebrationsSection />
        </ScrollReveal>

        {/* Our Venues (AVVS Mahal & Senraya Temple) */}
        <ScrollReveal direction="up" delayMs={100}>
          <VenuesSection />
        </ScrollReveal>

        {/* Footer & Interactive Actions */}
        <ScrollReveal direction="up" delayMs={80}>
          <InvitationActionsFooter
            onOpenWishes={() => setIsWishesOpen(true)}
            onAddToCalendar={handleAddToCalendar}
            onShare={() => setIsShareOpen(true)}
            onOpenRsvp={() => setIsRsvpOpen(true)}
          />
        </ScrollReveal>
      </main>

      {/* Floating Interactive Wax Seal Monogram Button (Bottom Right) */}
      <button
        onClick={handleReplayIntro}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-2 bg-[#FAF5EB] pl-1.5 pr-3.5 sm:pr-4 py-1.5 rounded-full shadow-lg border border-[#D8C7A9] hover:border-[#C59B27] active:scale-90 transition-all duration-300 animate-pulse-ring cursor-pointer"
        title="Replay Blessing & Invitation Ceremony"
        aria-label="Replay Blessing & Invitation Ceremony"
      >
        <div className="size-7 sm:size-8 rounded-full overflow-hidden shadow-xs border border-[#C59B27]/60">
          <img
            src="/assets/seal_stamp.jpg"
            alt="S|D Seal"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-[10px] sm:text-[11px] font-cinzel uppercase tracking-[0.16em] text-[#163224] font-semibold">
          Ceremony
        </span>
      </button>

      {/* Interactive Modals */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
      />

      <WaxSealIntro
        isOpen={isWaxSealOpen}
        onClose={() => setIsWaxSealOpen(false)}
      />

      <SendWishesModal
        isOpen={isWishesOpen}
        onClose={() => setIsWishesOpen(false)}
      />

      <SaveTheDateModal
        isOpen={isSaveDateOpen}
        onClose={() => setIsSaveDateOpen(false)}
        onAddToCalendar={handleAddToCalendar}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        onOpenNetworkShare={() => setIsNetworkShareOpen(true)}
      />

      <NetworkShareModal
        isOpen={isNetworkShareOpen}
        onClose={() => setIsNetworkShareOpen(false)}
      />

      <ThemeColorModal
        isOpen={isThemeOpen}
        onClose={() => setIsThemeOpen(false)}
      />
    </div>
  )
}

export default App

