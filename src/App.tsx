import React, { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/wedding/HeroSection'
import { HeartfeltInvitation } from '@/components/wedding/HeartfeltInvitation'
import { CountdownSection } from '@/components/wedding/CountdownSection'
import { CelebrationsSection } from '@/components/wedding/CelebrationsSection'
import { VenuesSection } from '@/components/wedding/VenuesSection'
import { GlimpsesSection } from '@/components/wedding/GlimpsesSection'
import { InvitationActionsFooter } from '@/components/wedding/InvitationActionsFooter'
import { FloatingPetals } from '@/components/common/FloatingPetals'
import { MandapamAestheticTheme } from '@/components/common/MandapamAestheticTheme'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { WeddingIntro } from '@/components/wedding-intro/WeddingIntro'
import { FloatingAudioControls } from '@/components/wedding/FloatingAudioControls'
import { WaxSealIntro } from '@/components/wedding/WaxSealIntro'
import { SendWishesModal } from '@/components/wedding/SendWishesModal'
import { SaveTheDateModal } from '@/components/wedding/SaveTheDateModal'
import { ShareModal } from '@/components/wedding/ShareModal'
import { NetworkShareModal } from '@/components/wedding/NetworkShareModal'
import { downloadWeddingCalendarEvent } from '@/lib/calendar'

export function App() {
  // Cinematic Character Animation Opening Experience:
  // Bride & Groom Walk -> Handover Thamboolam -> Elders Bless -> Elders Open Invitation Card -> Open Website
  const [isIntroOpen, setIsIntroOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      return params.get('skip_intro') !== '1' && params.get('skip_splash') !== '1' && !window.location.hash
    }
    return true
  })

  const [isWaxSealOpen, setIsWaxSealOpen] = useState(false)
  const [isWishesOpen, setIsWishesOpen] = useState(false)
  const [isSaveDateOpen, setIsSaveDateOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isNetworkShareOpen, setIsNetworkShareOpen] = useState(false)

  const handleAddToCalendar = () => {
    downloadWeddingCalendarEvent()
  }

  const handleReplayIntro = () => {
    setIsIntroOpen(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#1A2621] relative selection:bg-[#C59B27]/20 selection:text-[#163224]">
      {/* 1. Fullscreen Cinematic Character Animation & Tamil Traditional Wedding Card Intro */}
      <WeddingIntro
        isOpen={isIntroOpen}
        onComplete={() => setIsIntroOpen(false)}
      />

      {/* 2. Floating Wedding Music Equalizer & Replay Ceremony Controls (Bottom Left) */}
      <FloatingAudioControls
        onReopenEnvelope={handleReplayIntro}
      />

      {/* 3. Background Floating Jasmine & Gold Petals Animation */}
      <FloatingPetals />

      {/* 3b. Traditional Mandapam Watercolor Theme (Banana Trees, Kuthuvilakku Lamps, Rose Urlis) */}
      <MandapamAestheticTheme />

      {/* 4. Navigation Header */}
      <Navbar
        onSaveDateClick={() => setIsSaveDateOpen(true)}
        onWishesClick={() => setIsWishesOpen(true)}
        onNetworkShareClick={() => setIsNetworkShareOpen(true)}
      />

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

        {/* Glimpses of Our Celebration (Photo Gallery matching references) */}
        <ScrollReveal direction="up" delayMs={100}>
          <GlimpsesSection />
        </ScrollReveal>

        {/* Footer & Interactive Actions */}
        <ScrollReveal direction="up" delayMs={80}>
          <InvitationActionsFooter
            onOpenWishes={() => setIsWishesOpen(true)}
            onAddToCalendar={handleAddToCalendar}
            onShare={() => setIsShareOpen(true)}
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
    </div>
  )
}

export default App
