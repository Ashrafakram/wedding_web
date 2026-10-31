import React, { useState } from 'react'
import { ChevronDown, Heart, Sparkles } from 'lucide-react'
import { GoldFloralDivider } from '@/components/common/Ornaments'
import { launchHeartAndMultiShapeBurst } from '@/lib/confetti'

export function HeroSection() {
  const [heartLikes, setHeartLikes] = useState(108)
  const [hasLiked, setHasLiked] = useState(false)

  const handleHeartClick = () => {
    setHeartLikes((prev) => prev + 1)
    setHasLiked(true)
    launchHeartAndMultiShapeBurst()
  }

  const scrollToNext = () => {
    const el = document.getElementById('invitation')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-10 sm:pb-16 flex items-center justify-center overflow-hidden bg-[#FBF7F0]">
      {/* Decorative Jasmine & Heart Garland at Top Left */}
      <div className="absolute top-0 left-0 w-36 sm:w-56 h-36 sm:h-56 pointer-events-none z-10 opacity-70">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#C59B27]">
          <path d="M-20 20 Q 60 40, 100 120 T 140 200" stroke="#8CA18B" strokeWidth="2" strokeDasharray="3 4" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Couple Artwork in Sculptural Palace Arch & Heart Crest */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-1 relative">
            <div className="relative group max-w-[280px] sm:max-w-md w-full">
              {/* Soft ambient golden heart glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C59B27]/25 via-[#E25B74]/15 to-[#163224]/15 rounded-full blur-2xl opacity-70" />
              
              {/* Sculptural Arched & Scalloped Frame with Golden Heart Apex */}
              <div className="relative p-2.5 sm:p-3 rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl bg-gradient-to-b from-[#FAF5EB] via-[#FFFDF9] to-[#F5EFE3] shadow-2xl border-2 border-[#D8C7A9] transition-transform duration-700 group-hover:scale-102">
                
                {/* Crown Heart Keystone at Arch Apex */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center size-9 sm:size-10 rounded-full bg-gradient-to-tr from-[#C59B27] to-[#E7C979] text-[#163224] shadow-md border-2 border-[#FAF5EB]">
                  <Heart className="size-4 sm:size-5 fill-[#163224] animate-pulse" />
                </div>

                {/* Inner Image Container */}
                <div className="relative overflow-hidden rounded-t-[130px] sm:rounded-t-[170px] rounded-b-2xl border border-[#C59B27]/40 shadow-inner">
                  <img
                    src="/assets/couple_anime.jpg"
                    alt="Swetha and Deepak Kumar Traditional South Indian Wedding Couple"
                    className="w-full h-auto object-cover"
                  />

                  {/* Subtle Gradient Shade at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                  {/* Interactive Heart Shower Tap Badge */}
                  <button
                    onClick={handleHeartClick}
                    className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-black/60 hover:bg-[#163224]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#F3D279] text-xs font-cinzel tracking-wider cursor-pointer active:scale-90 transition-all shadow-lg"
                    title="Tap to shower love and hearts"
                  >
                    <Heart className={`size-3.5 fill-[#E25B74] text-[#E25B74] ${hasLiked ? 'animate-bounce' : ''}`} />
                    <span className="font-semibold">{heartLikes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Typography & Details: ORDER 2 on Mobile, Right on Desktop */}
          <div className="lg:col-span-6 flex flex-col items-center text-center order-2 lg:order-2 px-2 sm:px-4">
            
            {/* Tagline with Hearts */}
            <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-2">
              <Heart className="size-3 text-[#C59B27] fill-[#C59B27]/40" />
              <span className="text-[10px] sm:text-xs font-cinzel font-semibold tracking-[0.35em] uppercase text-[#6B5E4F]">
                Together Forever
              </span>
              <Heart className="size-3 text-[#C59B27] fill-[#C59B27]/40" />
            </div>

            {/* Lotus motif */}
            <div className="flex items-center justify-center my-0.5 sm:my-1 text-[#C59B27]">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 4C10 8 10 16 12 20C14 16 14 8 12 4Z" fill="#C59B27" fillOpacity="0.25" />
                <path d="M12 20C8 16 5 12 7 8C9 12 11 16 12 20Z" fill="#C59B27" fillOpacity="0.2" />
                <path d="M12 20C16 16 19 12 17 8C15 12 13 16 12 20Z" fill="#C59B27" fillOpacity="0.2" />
              </svg>
            </div>

            {/* Names in Royal Serif / Calligraphy */}
            <div className="my-1 sm:my-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#163224] tracking-tight leading-none mb-0.5">
                Swetha
              </h1>
              
              {/* Heart Ampersand flourish */}
              <div className="flex items-center justify-center gap-2 my-0.5 sm:my-1">
                <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#C59B27]" />
                <div className="inline-flex items-center gap-1.5 px-2">
                  <span className="font-script text-2xl sm:text-4xl text-[#C59B27] inline-flex items-center">
                    &amp;
                  </span>
                  <Heart className="size-3 sm:size-4 fill-[#C59B27] text-[#C59B27]" />
                </div>
                <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#C59B27]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#163224] tracking-tight leading-none">
                Deepak Kumar
              </h2>
            </div>

            {/* Journey Subline */}
            <p className="text-[9px] sm:text-xs tracking-[0.25em] uppercase font-medium text-[#7D705F] mt-2 sm:mt-3 mb-1 font-cinzel flex items-center justify-center gap-1.5">
              <span>Two Hearts</span>
              <span className="text-[#C59B27]">&bull;</span>
              <span>One Beautiful Journey</span>
            </p>

            {/* Tamil Traditional Line */}
            <p className="font-tamil text-xs sm:text-base text-[#9A7516] font-medium tracking-wide my-1.5 sm:my-2">
              இரு மனங்கள் இணையும் இனிய திருமணம்
            </p>

            {/* Ornamental Divider */}
            <div className="w-full max-w-xs sm:max-w-sm my-2 sm:my-3 flex justify-center">
              <GoldFloralDivider />
            </div>

            {/* Dates: 19 & 20 November 2026 */}
            <div className="mt-1 sm:mt-2 flex flex-col items-center">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.2em] text-[#163224] uppercase">
                <span className="text-base sm:text-xl font-serif text-[#C59B27] font-bold">19 &amp; 20</span>
                <span>November 2026</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#6B5E4F] tracking-wider mt-1 font-cinzel">
                <span>AVVS Mahal</span>
                <span className="text-[#C59B27]">&bull;</span>
                <span>Senraya Perumal Temple, Salem</span>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={scrollToNext}
              className="mt-6 sm:mt-8 p-2 rounded-full border border-[#D8C7A9] hover:border-[#C59B27] text-[#6B5E4F] hover:text-[#163224] transition-all duration-300 animate-bounce cursor-pointer"
              aria-label="Scroll to invitation details"
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
