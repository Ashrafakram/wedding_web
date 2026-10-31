import React, { useState, useEffect } from 'react'
import { Crown, ArrowRight, Volume2, Sparkles, Heart } from 'lucide-react'
import { weddingAudio } from '@/lib/weddingAudio'
import { launchPetalShower } from '@/lib/confetti'

interface EldersBlessingSplashProps {
  isOpen: boolean
  onComplete: () => void
}

export function EldersBlessingSplash({ isOpen, onClose: onComplete }: { isOpen: boolean; onClose: () => void }) {
  // Step 0: The Couple Arrives with Silver Plate ("They come")
  // Step 1: Offering Plate & Receiving Blessings ("They give & get blessings")
  const [step, setStep] = useState<0 | 1>(0)
  const [isFadingOut, setIsFadingOut] = useState(false)

  // Prevent background scrolling while splash is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setStep(0)
      setIsFadingOut(false)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle Step 0 -> Step 1: Giving invitation & receiving blessings
  const handleOfferInvitation = () => {
    try {
      weddingAudio.start()
    } catch (_) {}

    setStep(1)
    launchPetalShower()
  }

  // Handle Finish: Transition into the Royal Invitation
  const handleEnterInvitation = () => {
    if (isFadingOut) return
    setIsFadingOut(true)

    try {
      weddingAudio.start()
    } catch (_) {}

    launchPetalShower()

    setTimeout(() => {
      onComplete()
      setIsFadingOut(false)
    }, 1100)
  }

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      weddingAudio.start()
    } catch (_) {}
    onComplete()
  }

  if (!isOpen) return null

  // Generate 24 floating akshata rice grains for Step 1
  const akshataGrains = Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    left: Math.random() * 88 + 6,
    duration: (Math.random() * 1.5 + 2).toFixed(2),
    delay: (Math.random() * 2).toFixed(2),
    sway: (Math.random() * 40 - 20).toFixed(0),
  }))

  return (
    <div
      id="blessing-splash-wrapper"
      className={isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      role="dialog"
      aria-modal="true"
      aria-label="Elders Blessing Ceremony"
    >
      {/* Background Ambient Golden Temple Glow */}
      <div className="blessing-ambient-glow" />

      {/* Top Header: Audio Indicator & Skip Button */}
      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-auto">
        <div className="flex items-center gap-2 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 text-[#F5EFE3] text-xs font-cinzel">
          <Crown className="size-3.5 text-[#F3D279] animate-pulse" />
          <span className="tracking-wider">பெரியோர்களின் நல்லாசியுடன் • Sacred Blessing</span>
        </div>

        <button
          onClick={handleSkip}
          className="group flex items-center gap-1.5 bg-black/50 hover:bg-[#163224]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 hover:border-[#F3D279] text-[#F3D279] text-xs font-cinzel tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer active:scale-95"
          title="Directly enter invitation"
        >
          <span>Skip to Invite</span>
          <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Main Blessing Scene Container */}
      <div className="blessing-scene-container">
        
        {/* Step Indicator Badges */}
        <div className="flex items-center gap-2 mb-3 z-10">
          <div
            className={`px-3 py-1 rounded-full text-[11px] font-cinzel uppercase tracking-wider border transition-all duration-300 ${
              step === 0
                ? 'bg-[#D4AF37] text-[#163224] font-bold border-[#F3D279] shadow-md scale-105'
                : 'bg-black/40 text-[#C9AA71] border-[#D4AF37]/30'
            }`}
          >
            1. The Arrival (வரவு)
          </div>

          <div className="text-[#D4AF37] text-xs">➔</div>

          <div
            className={`px-3 py-1 rounded-full text-[11px] font-cinzel uppercase tracking-wider border transition-all duration-300 ${
              step === 1
                ? 'bg-[#D4AF37] text-[#163224] font-bold border-[#F3D279] shadow-md scale-105'
                : 'bg-black/40 text-[#C9AA71] border-[#D4AF37]/30'
            }`}
          >
            2. Divine Blessing (ஆசீர்வாதம்)
          </div>
        </div>

        {/* Artwork Display Frame */}
        <div className="blessing-frame group relative">
          
          {/* Falling Akshata (Turmeric Rice) Grains Active on Step 1 */}
          {step === 1 && (
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
              {akshataGrains.map((g) => (
                <div
                  key={g.id}
                  className="akshata-grain"
                  style={
                    {
                      left: `${g.left}%`,
                      '--duration': `${g.duration}s`,
                      '--delay': `${g.delay}s`,
                      '--sway-x': `${g.sway}px`,
                    } as React.CSSProperties
                  }
                />
              ))}

              {/* Top Golden Light Rays */}
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#FFE875]/25 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Image 1: The Couple Arrives with Silver Plate */}
          <img
            src="/assets/couple_coming.jpg"
            alt="Swetha & Deepak Kumar arriving with silver thamboolam plate"
            className={`blessing-frame-img absolute inset-0 ${
              step === 0 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
            }`}
          />

          {/* Image 2: Offering Plate & Receiving Elders Blessings */}
          <img
            src="/assets/blessing_moment.jpg"
            alt="Elders showering akshata blessings on couple"
            className={`blessing-frame-img absolute inset-0 ${
              step === 1 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 pointer-events-none z-0'
            }`}
          />

          {/* Subtle Bottom Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-15" />
        </div>

        {/* Narrative Captions & Actions */}
        <div className="mt-4 sm:mt-5 text-center max-w-lg px-2 z-10">
          {step === 0 ? (
            <div className="animate-fade-in">
              <h2 className="font-serif text-xl sm:text-2xl text-[#FCF6BA] font-normal leading-snug">
                இரு மனங்கள் பெரியோர்களை நாடுதல்
              </h2>
              <p className="text-xs sm:text-sm text-[#E8DEC8] font-light mt-1 mb-4 leading-relaxed">
                Swetha &amp; Deepak Kumar arrive holding the auspicious silver Thamboolam plate with coconut, fruits, and the wedding invitation.
              </p>

              <button
                onClick={handleOfferInvitation}
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#D4AF37] via-[#E7C979] to-[#C59B27] hover:brightness-110 text-[#163224] px-6 py-2.5 rounded-full font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-[#D4AF37]/50 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Offer Invitation to Elders (தட்டளித்தல்)</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h2 className="font-serif text-xl sm:text-2xl text-[#FCF6BA] font-normal leading-snug">
                பெரியோர்களின் நல்லாசியுடன் இல்லறம் மலரட்டும்
              </h2>
              <p className="text-xs sm:text-sm text-[#E8DEC8] font-light mt-1 mb-4 leading-relaxed">
                The elders affectionately raise their hands, blessing the couple with sacred yellow Akshata for a lifetime of joy and harmony.
              </p>

              <button
                onClick={handleEnterInvitation}
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#D4AF37] via-[#E7C979] to-[#C59B27] hover:brightness-110 text-[#163224] px-7 py-3 rounded-full font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-[#D4AF37]/50 active:scale-95 transition-all duration-300 cursor-pointer animate-pulse"
              >
                <Crown className="size-4 text-[#163224]" />
                <span>Open Royal Wedding Invitation ➔</span>
              </button>
            </div>
          )}
        </div>

        {/* Ambient Bottom Music Note */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[#D4AF37]/80 text-[11px] font-cinzel tracking-wider uppercase">
          <Volume2 className="size-3" />
          <span>Accompanied by traditional Shehnai &amp; Nadaswaram</span>
        </div>

      </div>
    </div>
  )
}
