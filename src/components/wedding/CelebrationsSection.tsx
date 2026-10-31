import React from 'react'
import { Clock, MapPin, Sparkles, Utensils } from 'lucide-react'
import { GoldFloralDivider } from '@/components/common/Ornaments'

export function CelebrationsSection() {
  return (
    <section id="wedding" className="relative py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-script text-4xl sm:text-5xl text-[#C59B27] font-normal leading-tight">
            Our Wedding Celebrations
          </h2>
          <p className="text-[11px] sm:text-xs font-cinzel tracking-[0.25em] uppercase text-[#6B5E4F] font-semibold mt-1">
            Two Days of Blessings, Love and Togetherness
          </p>
          <GoldFloralDivider className="my-3" />
        </div>

        {/* Celebrations Grid: Day 1 & Day 2 Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Day 1: Reception Card */}
          <div className="relative rounded-3xl border-2 border-[#D8C7A9] bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] p-6 sm:p-7 shadow-md hover-card-glow transition-all duration-500 overflow-hidden">
            {/* Corner Filigree Accent */}
            <div className="absolute top-2 right-2 text-[#C59B27]/40 text-xs font-serif pointer-events-none">
              ✤
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              
              {/* Arched Reception Couple Image */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-36 sm:w-full max-w-[155px] h-56 rounded-t-full rounded-b-2xl overflow-hidden shadow-md border-2 border-[#D4AF37]/60 bg-[#FAF7F2] group">
                  <img
                    src="/assets/reception_couple.jpg"
                    alt="Swetha & Deepak Kumar Reception Celebration"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Subtle Soft Rose Gold Glow */}
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#F5E6D3]/40 via-[#E8C5CB]/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Event Details */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                {/* Date header badge */}
                <div className="mb-2 inline-block">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#E8C5CB] font-cinzel text-xs font-semibold text-[#7E2E40] tracking-wider uppercase">
                    <span>19 November 2026</span>
                    <span className="text-[#9A7516]">&bull;</span>
                    <span className="text-[#8A7D6C] text-[10px]">Thursday</span>
                  </div>
                </div>

                <div className="w-16 my-1 mx-auto sm:mx-0">
                  <div className="h-[1.5px] bg-gradient-to-r from-[#C59B27] to-transparent" />
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide mt-1">
                  <span className="gold-foil-text-rich">Reception</span>
                </h3>
                <div className="font-tamil text-base sm:text-lg text-[#9A7516] font-semibold my-0.5">
                  வரவேற்பு விழா
                </div>

                {/* Time & Venue */}
                <div className="space-y-2 mt-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[#7E2E40]">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-semibold text-sm">6:00 PM – 9:00 PM</span>
                  </div>

                  <div className="flex items-start justify-center sm:justify-start gap-2 text-[#4A4237]">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#7E2E40]">AVVS Mahal</div>
                      <div className="text-xs text-[#7A6D5E]">Ammapet, Salem</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Day 2: Wedding Card */}
          <div className="relative rounded-3xl border-2 border-[#D8C7A9] bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] p-6 sm:p-7 shadow-md hover-card-glow transition-all duration-500 overflow-hidden">
            {/* Corner Filigree Accent */}
            <div className="absolute top-2 right-2 text-[#C59B27]/40 text-xs font-serif pointer-events-none">
              ✤
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              
              {/* Arched Temple Gateway Image with Holy Sunrise Aura */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-36 sm:w-full max-w-[155px] h-56 rounded-t-full rounded-b-2xl overflow-hidden shadow-md border-2 border-[#D4AF37]/60 bg-[#F7F2E7] group">
                  <img
                    src="/assets/senraya_entrance.jpg"
                    alt="Senraya Perumal Temple Gateway"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Holy Morning Temple Radiance */}
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#FFEAA7]/45 via-[#FDCB6E]/20 to-transparent pointer-events-none animate-pulse" />
                </div>
              </div>

              {/* Event Details */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                {/* Date header badge */}
                <div className="mb-2 inline-block">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#E8C5CB] font-cinzel text-xs font-semibold text-[#7E2E40] tracking-wider uppercase">
                    <span>20 November 2026</span>
                    <span className="text-[#9A7516]">&bull;</span>
                    <span className="text-[#8A7D6C] text-[10px]">Friday</span>
                  </div>
                </div>

                <div className="w-16 my-1 mx-auto sm:mx-0">
                  <div className="h-[1.5px] bg-gradient-to-r from-[#C59B27] to-transparent" />
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide mt-1">
                  <span className="gold-foil-text-rich">Wedding (Muhurtham)</span>
                </h3>
                <div className="font-tamil text-base sm:text-lg text-[#9A7516] font-semibold my-0.5">
                  திருமண விழா
                </div>

                {/* Time & Venue */}
                <div className="space-y-2 mt-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[#7E2E40]">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-semibold text-sm">4:00 AM – 6:00 AM</span>
                  </div>

                  <div className="flex items-start justify-center sm:justify-start gap-2 text-[#4A4237]">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#7E2E40]">Senraya Perumal Temple</div>
                      <div className="text-xs text-[#7A6D5E]">Odayapatti, Salem</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Traditional Feast Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#6B5E4F] font-cinzel tracking-wider text-center bg-[#F4ECDC]/60 py-3 px-6 rounded-full max-w-lg mx-auto border border-[#E8DEC8]">
          <Utensils className="w-4 h-4 text-[#C59B27] shrink-0" />
          <span>Auspicious Wedding Feast (Kalyana Virundhu) follows</span>
        </div>

      </div>
    </section>
  )
}
