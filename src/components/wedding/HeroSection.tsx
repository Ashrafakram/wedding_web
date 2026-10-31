import React from 'react'
import { ChevronDown } from 'lucide-react'
import { GoldFloralDivider } from '@/components/common/Ornaments'

export function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById('invitation')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-10 sm:pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF5EE] via-[#FCECEF] to-[#FAF5EE]">
      {/* Ambient Romantic Luxury Beige & Blush Pink Atmosphere Blooms */}
      <div className="absolute -top-24 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(247,214,220,0.65)_0%,rgba(247,214,220,0.2)_50%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(243,233,218,0.75)_0%,rgba(243,233,218,0.2)_50%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,235,238,0.55)_0%,rgba(245,235,225,0.35)_45%,transparent_70%)] rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Jasmine Garland at Top Left */}
      <div className="absolute top-0 left-0 w-36 sm:w-56 h-36 sm:h-56 pointer-events-none z-10 opacity-70">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#C59B27]">
          <path d="M-20 20 Q 60 40, 100 120 T 140 200" stroke="#8CA18B" strokeWidth="2" strokeDasharray="3 4" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Couple Artwork: ORDER 1 on Mobile, Left on Desktop */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-1 relative">
            <div className="relative group max-w-[280px] sm:max-w-md w-full">
              {/* Dynamic warm golden & blush pink aura glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/30 via-[#F7D6DC]/35 to-[#7E2E40]/25 rounded-3xl blur-2xl opacity-75 animate-pulse-ring" />
              
              {/* Decorative ornate corner sparkles */}
              <div className="absolute -top-3 -left-3 size-6 text-[#C59B27] pointer-events-none animate-pulse">
                ✦
              </div>
              <div className="absolute -bottom-3 -right-3 size-6 text-[#C59B27] pointer-events-none animate-pulse">
                ✦
              </div>

              {/* Couple Anime Illustration */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-[#D8C7A9]/90 bg-[#FAF5EB] p-1.5 transition-all duration-700 group-hover:scale-[1.02] group-hover:border-[#C59B27] group-hover:shadow-[0_20px_50px_rgba(197,155,39,0.25)]">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src="/assets/couple_anime.jpg"
                    alt="Swetha and Deepak Kumar Traditional South Indian Wedding Couple"
                    className="w-full h-auto object-cover rounded-[22px] transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle golden shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Typography & Details: ORDER 2 on Mobile, Right on Desktop */}
          <div className="lg:col-span-6 flex flex-col items-center text-center order-2 lg:order-2 px-2 sm:px-4">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-2 px-3 py-0.5 rounded-full bg-[#FAF3E0] border border-[#E8DEC8]">
              <span className="text-[10px] sm:text-xs font-cinzel font-semibold tracking-[0.35em] uppercase text-[#6B5E4F]">
                ✦ Together Forever ✦
              </span>
            </div>

            {/* Lotus motif */}
            <div className="flex items-center justify-center my-1 text-[#C59B27]">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 animate-float-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 4C10 8 10 16 12 20C14 16 14 8 12 4Z" fill="#C59B27" fillOpacity="0.25" />
                <path d="M12 20C8 16 5 12 7 8C9 12 11 16 12 20Z" fill="#C59B27" fillOpacity="0.2" />
                <path d="M12 20C16 16 19 12 17 8C15 12 13 16 12 20Z" fill="#C59B27" fillOpacity="0.2" />
              </svg>
            </div>

            {/* Names in Royal Calligraphy & Liquid Gold Shimmer */}
            <div className="my-1 sm:my-2">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-none mb-0.5">
                <span className="gold-foil-text-rich">Swetha</span>
              </h1>
              
              {/* Heart Ampersand flourish */}
              <div className="flex items-center justify-center gap-2 my-1 sm:my-1.5">
                <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#B5566A]/60" />
                <span className="font-script text-3xl sm:text-5xl text-[#B5566A] inline-flex items-center px-2 animate-pulse drop-shadow-xs">
                  &amp;
                </span>
                <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#B5566A]/60" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-none">
                <span className="gold-foil-text-rich">Deepak Kumar</span>
              </h2>
            </div>

            {/* Journey Subline */}
            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium text-[#7D705F] mt-2 mb-1 font-cinzel">
              Two Hearts &bull; One Sacred Journey
            </p>

            {/* Tamil Traditional Line with Auspicious Amber Glow */}
            <p className="font-tamil text-sm sm:text-base text-[#9A7516] font-semibold tracking-wide my-1.5 sm:my-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#E9DFC8]/70">
              இரு மனங்கள் இணையும் இனிய திருமணம்
            </p>

            {/* Ornamental Divider */}
            <div className="w-full max-w-xs sm:max-w-sm my-2 sm:my-3 flex justify-center">
              <GoldFloralDivider />
            </div>

            {/* Dates: 19 & 20 November 2026 */}
            <div className="mt-1 sm:mt-2 flex flex-col items-center">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-cinzel font-semibold tracking-[0.2em] text-[#7E2E40] uppercase px-4 py-1.5 rounded-full bg-[#FFFDF9] border border-[#E8C5CB] shadow-xs">
                <span className="text-base sm:text-xl font-serif text-[#C59B27] font-bold">19 &amp; 20</span>
                <span>November 2026</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#6B5E4F] tracking-wider mt-2 font-cinzel">
                <span className="font-semibold text-[#7E2E40]">AVVS Mahal</span>
                <span className="text-[#C59B27]">&bull;</span>
                <span className="font-semibold text-[#7E2E40]">Senraya Perumal Temple, Salem</span>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={scrollToNext}
              className="mt-6 sm:mt-8 p-2 rounded-full border border-[#E8C5CB] hover:border-[#D4AF37] text-[#7E2E40] hover:text-[#9E3D52] transition-all duration-300 animate-bounce cursor-pointer"
              aria-label="Scroll to invitation details"
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#B5566A]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
