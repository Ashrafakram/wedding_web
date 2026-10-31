import React from 'react'
import { Calendar, Heart, MessageCircle } from 'lucide-react'
import { LotusLogo, GoldFloralDivider } from '@/components/common/Ornaments'

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
    <footer id="contact" className="relative mt-20 text-[#FFFDF8] overflow-hidden">
      
      {/* Arch Wave Top Boundary in Royal Wine */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16 text-[#3E0C13] fill-current"
        >
          <path d="M0,0 C350,75 850,75 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Main Royal Wine Background Container */}
      <div className="bg-[#3E0C13] pb-16 pt-2 px-4 sm:px-6 relative">
        
        {/* Decorative corner elements */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Header */}
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-cinzel tracking-[0.35em] uppercase text-[#F3D279]">
              You Are Cordially Invited
            </span>
          </div>

          {/* Lotus motif */}
          <div className="flex items-center justify-center my-1 text-[#F3D279]">
            <LotusLogo className="w-8 h-8 text-[#F3D279]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-1 mb-2">
            Be a Part of Our Auspicious Celebration
          </h2>

          <p className="font-sans text-xs sm:text-sm text-zinc-300 max-w-md mx-auto mb-1">
            Your gracious presence and heartfelt blessings will make our union truly divine.
          </p>

          {/* Tamil invite sentiment */}
          <p className="font-tamil text-sm sm:text-base text-[#F3D279] font-medium tracking-wide mb-8">
            உங்கள் வருகையே எங்கள் மகிழ்ச்சி, உளம் கனிந்து அன்புடன் அழைக்கிறோம்.
          </p>

          {/* 3 Royal Wine & Gold Pill Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-12">
            
            {/* 1. Share Invitation */}
            <button
              onClick={onShare}
              className="w-full sm:w-auto flex-1 py-3 px-6 border border-[#C59B27]/50 bg-white/5 hover:bg-white/15 text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2 font-cinzel text-white shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Share Invitation</span>
            </button>

            {/* 2. Add to Calendar */}
            <button
              onClick={onAddToCalendar}
              className="w-full sm:w-auto flex-1 py-3 px-6 border border-[#C59B27]/50 bg-white/5 hover:bg-white/15 text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2 font-cinzel text-white shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#F3D279]" />
              <span>Add to Calendar</span>
            </button>

            {/* 3. Send Your Wishes */}
            <button
              onClick={onOpenWishes}
              className="w-full sm:w-auto flex-1 py-3 px-6 border border-[#F3D279] bg-[#5C131E] hover:bg-[#7A1D2B] text-xs sm:text-sm tracking-wider rounded-full flex items-center justify-center gap-2 font-cinzel text-[#F3D279] shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 text-[#F43F5E] fill-[#F43F5E] animate-pulse" />
              <span>Send Wishes</span>
            </button>

          </div>

          <GoldFloralDivider className="my-6 opacity-60" />

          {/* Copyright / Monogram */}
          <p className="text-[10px] sm:text-xs text-zinc-400 font-cinzel tracking-widest uppercase">
            Dr. Swetha &amp; Er. Deepak Kumar &bull; Wedding Celebration 2026
          </p>

        </div>
      </div>
    </footer>
  )
}
