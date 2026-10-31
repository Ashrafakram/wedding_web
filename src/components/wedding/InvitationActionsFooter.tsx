import React from 'react'
import { Calendar, Heart, MessageCircle } from 'lucide-react'
import { LotusLogo } from '@/components/common/Ornaments'
import { Button } from '@/components/ui/button'

interface FooterActionsProps {
  onOpenWishes: () => void
  onAddToCalendar: () => void
  onShare: () => void
}

export function InvitationActionsFooter({
  onOpenWishes,
  onAddToCalendar,
  onShare,
}: FooterActionsProps) {
  return (
    <footer id="contact" className="relative mt-20 text-[#FBF7F0] overflow-hidden">
      
      {/* Arch Wave Top Boundary */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16 text-[#1A3828] fill-current"
        >
          <path d="M0,0 C350,75 850,75 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Main Deep Green Background Container */}
      <div className="bg-[#1A3828] pb-16 pt-2 px-4 sm:px-6 relative">
        
        {/* Decorative corner elements */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Header */}
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-cinzel tracking-[0.35em] uppercase text-[#C4B79F]">
              You Are Invited
            </span>
          </div>

          {/* Lotus motif */}
          <div className="flex items-center justify-center my-1 text-[#C59B27]">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 4C10 8 10 16 12 20C14 16 14 8 12 4Z" fill="#C59B27" fillOpacity="0.25" />
              <path d="M12 20C8 16 5 12 7 8C9 12 11 16 12 20Z" fill="#C59B27" fillOpacity="0.2" />
              <path d="M12 20C16 16 19 12 17 8C15 12 13 16 12 20Z" fill="#C59B27" fillOpacity="0.2" />
            </svg>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-1 mb-2">
            Be a Part of Our Special Day
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#D1C6B4] max-w-md mx-auto mb-1">
            Your presence will make our celebration even more special.
          </p>

          {/* Tamil invite sentiment */}
          <p className="font-tamil text-xs sm:text-sm text-[#E7C979] font-medium tracking-wide mb-8">
            உங்கள் வருகையே எங்கள் மகிழ்ச்சி, அன்புடன் அழைக்கிறோம்.
          </p>

          {/* 3 Dark Green Pill Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-12">
            
            {/* 1. Share Invitation */}
            <Button
              onClick={onShare}
              variant="greenOutlinePill"
              className="w-full sm:w-auto flex-1 py-2.5 px-6 border border-[#3E6B52] bg-black/20 hover:bg-white/10 text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Share Invitation</span>
            </Button>

            {/* 2. Add to Calendar */}
            <Button
              onClick={onAddToCalendar}
              variant="greenOutlinePill"
              className="w-full sm:w-auto flex-1 py-2.5 px-6 border border-[#3E6B52] bg-black/20 hover:bg-white/10 text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#E7C979]" />
              <span>Add to Calendar</span>
            </Button>

            {/* 3. Send Your Wishes */}
            <Button
              onClick={onOpenWishes}
              variant="greenOutlinePill"
              className="w-full sm:w-auto flex-1 py-2.5 px-6 border border-[#3E6B52] bg-black/20 hover:bg-white/10 text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 text-[#F43F5E]" />
              <span>Send Your Wishes</span>
            </Button>

          </div>

          {/* Couple Script Signature */}
          <div className="pt-6 border-t border-[#2A523C]/80">
            <div className="font-script text-3xl sm:text-4xl text-[#E7C979]">
              Swetha &amp; Deepak Kumar
            </div>
            <div className="text-[11px] font-cinzel uppercase tracking-[0.25em] text-[#A69784] mt-1">
              19 &amp; 20 November 2026
            </div>

            <div className="flex items-center justify-center mt-3">
              <LotusLogo className="w-5 h-5 text-[#C59B27]/50" />
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
