import React, { useState } from 'react'
import { ChevronDown, Sparkles, Heart } from 'lucide-react'
import { GoldFloralDivider, AnimatedKolamDivider, SwayingTempleBells } from '@/components/common/Ornaments'
import { launchPetalShower, launchHeartAndMultiShapeBurst } from '@/lib/confetti'

export function HeroSection() {
  const [tapCount, setTapCount] = useState(0)

  const scrollToNext = () => {
    const el = document.getElementById('invitation')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  // Interactive flower blessing when guest taps couple artwork
  const handleCoupleTap = () => {
    setTapCount((prev) => prev + 1)
    launchHeartAndMultiShapeBurst()
    setTimeout(() => {
      launchPetalShower()
    }, 300)
  }

  return (
    <section
      id="home"
      className="relative pt-16 sm:pt-20 pb-12 sm:pb-20 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF5EB] via-[#FBF7F0] to-[#FAF5EB]"
    >
      {/* 1. Traditional Swaying Brass Temple Bells at Top */}
      <div className="absolute top-0 inset-x-0 z-20">
        <SwayingTempleBells />
      </div>

      {/* Decorative Jasmine & Mango Leaf Garland Accent */}
      <div className="absolute top-0 left-0 w-36 sm:w-56 h-36 sm:h-56 pointer-events-none z-10 opacity-60">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#C59B27]">
          <path
            d="M-20 20 Q 60 40, 100 120 T 140 200"
            stroke="#C59B27"
            strokeWidth="2"
            strokeDasharray="4 6"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10 mt-6 sm:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Couple Artwork with Living Float Animation & Tap Shower */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-1 relative">
            <div
              className="relative group max-w-[290px] sm:max-w-md w-full cursor-pointer animate-living-float"
              onClick={handleCoupleTap}
              title="Tap for flower blessings!"
            >
              {/* Soft Pulsing Golden Aura */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C59B27]/25 via-[#5C131E]/15 to-[#F3D279]/30 rounded-full blur-2xl opacity-75 animate-pulse" />
              
              {/* Couple Anime Illustration */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-[#C59B27]/60 group-hover:border-[#C59B27] transition-all duration-500 group-hover:scale-102">
                <img
                  src="/assets/couple_anime.jpg"
                  alt="Swetha and Deepak Kumar Traditional South Indian Wedding Couple"
                  className="w-full h-auto object-cover rounded-3xl"
                />

                {/* Subtle Silk Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0C13]/40 via-transparent to-transparent pointer-events-none" />

                {/* Tap to bless floating pill badge */}
                <div className="absolute bottom-3 inset-x-3 flex justify-center">
                  <div className="flex items-center gap-1.5 bg-[#3E0C13]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F3D279]/60 text-[10px] sm:text-xs text-[#F3D279] shadow-lg group-hover:scale-105 transition-transform">
                    <Sparkles className="size-3 animate-spin text-[#F3D279]" />
                    <span className="font-cinzel tracking-wider uppercase font-semibold">
                      {tapCount > 0 ? `Blessed ${tapCount}x 🌸` : 'Tap for Flower Blessings 🌸'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typography & Details in Royal Wine & Champagne Gold */}
          <div className="lg:col-span-6 flex flex-col items-center text-center order-2 lg:order-2 px-2 sm:px-4">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-2 bg-[#5C131E]/8 px-3.5 py-1 rounded-full border border-[#C59B27]/30">
              <span className="text-[10px] sm:text-xs font-cinzel font-semibold tracking-[0.3em] uppercase text-[#5C131E]">
                Together Forever
              </span>
            </div>

            {/* Sacred Tamil Invocation */}
            <p className="font-tamil text-xs sm:text-sm text-[#9A7516] font-semibold tracking-widest uppercase my-1">
              || ஸ்ரீ விநாயகர் துணை ||
            </p>

            {/* Names in Royal Wine & Shimmering Gold */}
            <div className="my-2 sm:my-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#5C131E] tracking-tight leading-none mb-1">
                Er. Swetha
              </h1>
              
              {/* Ampersand Flourish with Gold Glow */}
              <div className="flex items-center justify-center gap-3 my-1">
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C59B27]" />
                <span className="font-script text-3xl sm:text-4xl text-[#C59B27] inline-flex items-center px-2">
                  &amp;
                </span>
                <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C59B27]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#5C131E] tracking-tight leading-none">
                Er. Deepak Kumar
              </h2>
            </div>

            {/* Journey Subline */}
            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium text-[#7D6B58] mt-2 mb-1 font-cinzel">
              Two Souls &bull; United in Sacred Tradition
            </p>

            {/* Tamil Traditional Line with Wine Accent */}
            <p className="font-tamil text-sm sm:text-base text-[#5C131E] font-medium tracking-wide my-1.5">
              இரு மனங்கள் இணையும் இனிய திருமண அழைப்பு
            </p>

            {/* Animated Self-Drawing Kolam Divider */}
            <div className="w-full my-2">
              <AnimatedKolamDivider />
            </div>

            {/* Dates Card in Royal Wine & Gold */}
            <div className="mt-1 flex flex-col items-center bg-[#FAF5EB] px-6 py-3 rounded-2xl border border-[#C59B27]/40 shadow-sm">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.2em] text-[#5C131E] uppercase">
                <span className="text-base sm:text-xl font-serif text-[#C59B27] font-bold">19 &amp; 20</span>
                <span>November 2026</span>
              </div>
              
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[#6B5E4F] tracking-wider mt-1 font-cinzel">
                <span>AVVS Mahal, Ammapettai</span>
                <span className="text-[#C59B27]">&bull;</span>
                <span>Senraya Perumal Temple, Salem</span>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={scrollToNext}
              className="mt-6 sm:mt-8 p-2.5 rounded-full border border-[#C59B27]/50 hover:border-[#5C131E] text-[#5C131E] hover:text-[#9A7516] transition-all duration-300 animate-bounce cursor-pointer shadow-sm hover:shadow-md"
              aria-label="Scroll to invitation details"
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#5C131E]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
