import React from 'react'
import { Calendar, Heart, MessageCircle, CalendarCheck } from 'lucide-react'
import { LotusLogo } from '@/components/common/Ornaments'
import { Button } from '@/components/ui/button'

interface FooterActionsProps {
  onOpenWishes: () => void
  onAddToCalendar: () => void
  onShare: () => void
  onOpenRsvp?: () => void
}

export function InvitationActionsFooter({
  onOpenWishes,
  onAddToCalendar,
  onShare,
  onOpenRsvp,
}: FooterActionsProps) {
  return (
    <footer id="contact" className="relative mt-20 text-[#FBF7F0] overflow-hidden">
      
      {/* Arch Wave Top Boundary */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16 text-[#7E2E40] fill-current"
        >
          <path d="M0,0 C350,75 850,75 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Main Royal Rosewood & Blush Pink Background Container */}
      <div className="bg-gradient-to-b from-[#7E2E40] via-[#5C1D2A] to-[#3D121B] pb-16 pt-2 px-4 sm:px-6 relative border-t border-[#E8C5CB]/30">
        
        {/* Decorative corner elements */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Header */}
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-cinzel tracking-[0.35em] uppercase text-[#F7D6DC]">
              You Are Invited
            </span>
          </div>

          {/* Lotus motif */}
          <div className="flex items-center justify-center my-1 text-[#F3D279]">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 4C10 8 10 16 12 20C14 16 14 8 12 4Z" fill="#F3D279" fillOpacity="0.35" />
              <path d="M12 20C8 16 5 12 7 8C9 12 11 16 12 20Z" fill="#F3D279" fillOpacity="0.25" />
              <path d="M12 20C16 16 19 12 17 8C15 12 13 16 12 20Z" fill="#F3D279" fillOpacity="0.25" />
            </svg>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFFDF9] mt-1 mb-2">
            Be a Part of Our Special Day
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#F7D6DC] max-w-md mx-auto mb-1">
            Your presence will make our celebration even more special.
          </p>

          {/* Tamil invite sentiment */}
          <p className="font-tamil text-xs sm:text-sm text-[#F3D279] font-medium tracking-wide mb-8">
            உங்கள் வருகையே எங்கள் மகிழ்ச்சி, அன்புடன் அழைக்கிறோம்.
          </p>

          {/* 4 Responsive Action Buttons in Beige & Pink Theme */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
            
            {/* 1. Confirm RSVP */}
            {onOpenRsvp && (
              <Button
                onClick={onOpenRsvp}
                className="py-2.5 px-5 border border-[#E8C5CB] bg-[#FFF0F3] hover:bg-white text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2 text-[#7E2E40] font-cinzel font-bold shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-[#7E2E40]" />
                <span>Confirm RSVP</span>
              </Button>
            )}

            {/* 2. Share Invitation */}
            <Button
              onClick={onShare}
              className="py-2.5 px-5 border border-[#E8C5CB]/60 bg-black/20 hover:bg-white/15 text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2 text-[#FFF0F3] font-cinzel transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Share Invite</span>
            </Button>

            {/* 3. Add to Calendar */}
            <Button
              onClick={onAddToCalendar}
              className="py-2.5 px-5 border border-[#E8C5CB]/60 bg-black/20 hover:bg-white/15 text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2 text-[#FFF0F3] font-cinzel transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#F3D279]" />
              <span>Add to Calendar</span>
            </Button>

            {/* 4. Send Your Wishes */}
            <Button
              onClick={onOpenWishes}
              className="py-2.5 px-5 border border-[#E8C5CB]/60 bg-black/20 hover:bg-white/15 text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2 text-[#FFF0F3] font-cinzel transition-all active:scale-95 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-[#F43F5E] fill-[#F43F5E]" />
              <span>Send Wishes</span>
            </Button>

          </div>

          {/* Couple Script Signature */}
          <div className="pt-8 border-t border-[#E8C5CB]/40">
            <div className="font-script text-4xl sm:text-5xl">
              <span className="gold-foil-text-rich">Swetha &amp; Deepak Kumar</span>
            </div>
            <div className="text-[11px] font-cinzel uppercase tracking-[0.25em] text-[#F3D279] mt-1 font-semibold">
              19 &amp; 20 November 2026 &bull; Salem
            </div>

            <div className="flex items-center justify-center mt-3">
              <LotusLogo className="w-6 h-6 text-[#C59B27] animate-pulse" />
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
