import React, { useState } from 'react'
import { Sparkles, X } from 'lucide-react'
import { launchPetalShower } from '@/lib/confetti'

interface WaxSealIntroProps {
  isOpen: boolean
  onClose: () => void
}

export function WaxSealIntro({ isOpen, onClose }: WaxSealIntroProps) {
  const [opened, setOpened] = useState(false)

  if (!isOpen) return null

  const handleOpen = () => {
    launchPetalShower()
    setOpened(true)
    setTimeout(() => {
      onClose()
      setOpened(false)
    }, 1800)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-backdrop-in">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all z-20 active:scale-90"
        aria-label="Close Invitation Seal"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        onClick={handleOpen}
        className={`relative max-w-sm w-full bg-[#FAF5EB] rounded-3xl p-8 border-2 border-[#D8C7A9] shadow-2xl text-center cursor-pointer transition-all duration-700 transform animate-modal-in ${
          opened ? 'scale-110 opacity-0 -translate-y-8' : 'scale-100 hover:scale-102 active:scale-98'
        }`}
      >
        {/* Decorative corner borders */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C59B27]/40 rounded-tl-lg" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C59B27]/40 rounded-tr-lg" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C59B27]/40 rounded-bl-lg" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C59B27]/40 rounded-br-lg" />

        {/* Envelope Top Triangle Flap visual */}
        <div className="relative mb-6 flex justify-center">
          <div className="relative group">
            {/* Pulsing ring around wax seal */}
            <div className="absolute -inset-3 rounded-full bg-[#C59B27]/25 blur-md animate-pulse-ring" />

            {/* Gold Wax Seal Image */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-xl border-2 border-[#C59B27] bg-[#F7EED9] p-1">
              <img
                src="/assets/seal_stamp.jpg"
                alt="Royal S | D Monogram Gold Wax Seal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Invitation Text */}
        <div className="space-y-1 my-4">
          <div className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#9A7516] font-semibold">
            Wedding Invitation
          </div>
          <h3 className="font-serif text-3xl text-[#163224]">
            Swetha &amp; Deepak
          </h3>
          <p className="font-cinzel text-[11px] tracking-[0.2em] text-[#7A6D5E] uppercase">
            19 &amp; 20 November 2026
          </p>
        </div>

        {/* Tap to Open CTA */}
        <div className="mt-6 pt-4 border-t border-[#EAE0CD]">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#163224] text-[#FBF7F0] text-xs font-cinzel uppercase tracking-[0.2em] shadow-md hover:bg-[#1E4532] active:scale-95 transition-transform">
            <Sparkles className="w-3.5 h-3.5 text-[#E7C979]" />
            <span>Tap to Open</span>
          </div>
        </div>

      </div>
    </div>
  )
}
