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
          
          {/* Day 1: Reception Card (Sculptural Arch & Heart Keystone) */}
          <div className="relative rounded-t-[48px] rounded-b-3xl border-2 border-[#E8DEC8] bg-[#FFFDF9] p-6 sm:p-7 shadow-lg hover-card-glow transition-all duration-500">
            {/* Top Heart Badge */}
            <div className="absolute -top-3.5 left-8 px-3 py-0.5 rounded-full bg-[#163224] text-[#F3D279] text-[10px] font-cinzel font-semibold tracking-wider uppercase border border-[#C59B27] shadow-sm flex items-center gap-1">
              <span>💖 Day 1</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center pt-2">
              
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

          {/* Day 2: Wedding Card (Sculptural Arch & Heart Badge) */}
          <div className="relative rounded-t-[48px] rounded-b-3xl border-2 border-[#E8DEC8] bg-[#FFFDF9] p-6 sm:p-7 shadow-lg hover-card-glow transition-all duration-500">
            {/* Top Heart Badge */}
            <div className="absolute -top-3.5 left-8 px-3 py-0.5 rounded-full bg-[#163224] text-[#F3D279] text-[10px] font-cinzel font-semibold tracking-wider uppercase border border-[#C59B27] shadow-sm flex items-center gap-1">
              <span>💖 Day 2</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center pt-2">
              
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
                  Wedding
                </h3>
                <div className="font-tamil text-base sm:text-lg text-[#9A7516] font-medium my-0.5">
                  திருமண விழா
                </div>

                {/* Time & Venue */}
                <div className="space-y-2 mt-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[#163224]">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <div>
                      <span className="text-[#6B5E4F]">Muhurtham:</span>{' '}
                      <span className="font-semibold text-[#9A7516]">4:00 AM – 6:00 AM</span>
                    </div>
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

        {/* Welcoming Banner (as seen in Screenshot 1 & 3) */}
        <div className="mt-8 rounded-2xl bg-[#FAF5EB] border border-[#E6DAC3] p-4 sm:p-5 flex items-center justify-center text-center gap-3 shadow-xs hover:border-[#C59B27]/50 transition-colors">
          <Utensils className="w-5 h-5 text-[#C59B27] shrink-0 hidden sm:block animate-pulse" />
          <p className="font-sans text-xs sm:text-sm text-[#4D4336] leading-relaxed">
            After the wedding ceremony, we look forward to welcoming you at{' '}
            <span className="font-semibold text-[#163224]">AVVS Mahal, Ammapet, Salem</span>.
          </p>
        </div>

      </div>
    </section>
  )
}
