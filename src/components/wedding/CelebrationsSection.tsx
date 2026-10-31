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
          <div className="relative rounded-3xl border border-[#E8DEC8] bg-[#FFFDF9] p-6 sm:p-7 shadow-xs hover-card-glow transition-all duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              
              {/* Arched Kuthuvilakku Diya Lamp Image */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-36 sm:w-full max-w-[150px] h-52 rounded-t-full rounded-b-2xl overflow-hidden shadow-xs border border-[#E2D5BE] bg-[#F7F2E7]">
                  <img
                    src="/assets/kuthuvilakku_lamp.jpg"
                    alt="Traditional Brass Kuthuvilakku Diya"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                {/* Date header */}
                <div className="mb-2">
                  <div className="font-cinzel text-xs sm:text-sm font-semibold text-[#163224] tracking-wider uppercase">
                    19 November 2026
                  </div>
                  <div className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#8A7D6C]">
                    Thursday
                  </div>
                </div>

                <div className="w-16 my-1 mx-auto sm:mx-0">
                  <div className="h-[1px] bg-[#C59B27]/40" />
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#163224] font-normal tracking-wide mt-1">
                  Reception
                </h3>
                <div className="font-tamil text-base sm:text-lg text-[#9A7516] font-medium my-0.5">
                  வரவேற்பு விழா
                </div>

                {/* Time & Venue */}
                <div className="space-y-2 mt-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[#163224]">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-medium">6:00 PM – 9:00 PM</span>
                  </div>

                  <div className="flex items-start justify-center sm:justify-start gap-2 text-[#4A4237]">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#163224]">AVVS Mahal</div>
                      <div className="text-xs text-[#7A6D5E]">Ammapet, Salem</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Day 2: Wedding Card */}
          <div className="relative rounded-3xl border border-[#E8DEC8] bg-[#FFFDF9] p-6 sm:p-7 shadow-xs hover-card-glow transition-all duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              
              {/* Arched Temple Gateway Image */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-36 sm:w-full max-w-[150px] h-52 rounded-t-full rounded-b-2xl overflow-hidden shadow-xs border border-[#E2D5BE] bg-[#F7F2E7]">
                  <img
                    src="/assets/senraya_entrance.jpg"
                    alt="Senraya Perumal Temple Gateway"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                {/* Date header */}
                <div className="mb-2">
                  <div className="font-cinzel text-xs sm:text-sm font-semibold text-[#163224] tracking-wider uppercase">
                    20 November 2026
                  </div>
                  <div className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#8A7D6C]">
                    Friday
                  </div>
                </div>

                <div className="w-16 my-1 mx-auto sm:mx-0">
                  <div className="h-[1px] bg-[#C59B27]/40" />
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#163224] font-normal tracking-wide mt-1">
                  Wedding (Muhurtham)
                </h3>
                <div className="font-tamil text-base sm:text-lg text-[#9A7516] font-medium my-0.5">
                  திருமண விழா
                </div>

                {/* Time & Venue */}
                <div className="space-y-2 mt-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[#163224]">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-medium">4:00 AM – 6:00 AM</span>
                  </div>

                  <div className="flex items-start justify-center sm:justify-start gap-2 text-[#4A4237]">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#163224]">Senraya Perumal Temple</div>
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
