import React from 'react'
import { Clock, MapPin, Sparkles, Utensils, Heart } from 'lucide-react'
import { GoldFloralDivider, AnimatedKolamDivider } from '@/components/common/Ornaments'

export function CelebrationsSection() {
  return (
    <section id="wedding" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF5EB]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header in Royal Wine */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-xs font-cinzel tracking-[0.3em] uppercase text-[#5C131E] font-bold mb-1">
            மங்கல நிகழ்வுகள் &bull; SACRED EVENTS
          </p>
          <h2 className="font-script text-4xl sm:text-6xl text-[#5C131E] font-normal leading-tight">
            Our Wedding Celebrations
          </h2>
          <p className="text-[11px] sm:text-xs font-cinzel tracking-[0.22em] uppercase text-[#7A6B5C] font-semibold mt-1">
            Two Auspicious Days of Blessings, Love & Togetherness
          </p>
          <GoldFloralDivider className="my-3" />
        </div>

        {/* Celebrations Grid: Day 1 (Lotus Pink & Beige) and Day 2 (Royal Wine & Gold) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Day 1: Reception Card — Lotus Pink & Champagne Beige Aesthetic */}
          <div className="relative rounded-3xl border-2 border-[#E5A5B2]/60 bg-gradient-to-b from-[#FFFDF9] via-[#FAF0EE] to-[#FAF5EB] p-6 sm:p-8 shadow-lg card-wine-glow overflow-hidden group">
            {/* Top Corner Lotus Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C45B6E]/15 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center relative z-10">
              
              {/* Arched Kuthuvilakku Lamp with Warm Glow */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-36 sm:w-full max-w-[155px] h-54 rounded-t-full rounded-b-2xl overflow-hidden shadow-md border-2 border-[#C59B27]/50 bg-[#FAF0EE]">
                  <img
                    src="/assets/kuthuvilakku_lamp.jpg"
                    alt="Traditional Brass Kuthuvilakku Diya"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C45B6E]/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Event Details */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                {/* Event Pill */}
                <div className="inline-flex items-center gap-1.5 self-center sm:self-start bg-[#C45B6E]/10 border border-[#C45B6E]/30 px-3 py-0.5 rounded-full mb-2">
                  <Sparkles className="size-3 text-[#C45B6E] animate-pulse" />
                  <span className="text-[10px] font-cinzel tracking-wider text-[#C45B6E] font-bold uppercase">
                    Evening Gala
                  </span>
                </div>

                {/* Date Header */}
                <div className="mb-1">
                  <div className="font-cinzel text-xs sm:text-sm font-bold text-[#5C131E] tracking-wider uppercase">
                    19 November 2026
                  </div>
                  <div className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#8C6D23] font-semibold">
                    Thursday Evening
                  </div>
                </div>

                <div className="w-16 my-1.5 mx-auto sm:mx-0">
                  <div className="h-[1.5px] bg-gradient-to-r from-[#C45B6E] to-transparent" />
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#5C131E] font-normal tracking-wide mt-0.5">
                  Reception
                </h3>
                <div className="font-tamil text-base sm:text-lg text-[#C45B6E] font-semibold my-0.5">
                  வரவேற்பு விழா
                </div>

                {/* Time & Venue */}
                <div className="space-y-2.5 mt-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[#5C131E]">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-semibold">6:00 PM – 9:00 PM onwards</span>
                  </div>

                  <div className="flex items-start justify-center sm:justify-start gap-2 text-[#4A4237]">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#5C131E]">AVVS Mahal</div>
                      <div className="text-xs text-[#7A6D5E]">Pennagaram Road, Dharmapuri</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Day 2: Wedding (Muhurtham) Card — Royal Wine Burgundy & Temple Gold */}
          <div className="relative rounded-3xl border-2 border-[#C59B27]/60 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#FAF0EE] p-6 sm:p-8 shadow-lg card-wine-glow overflow-hidden group">
            {/* Top Corner Wine & Gold Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#5C131E]/15 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center relative z-10">
              
              {/* Arched Temple Gateway with Sacred Lighting */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-36 sm:w-full max-w-[155px] h-54 rounded-t-full rounded-b-2xl overflow-hidden shadow-md border-2 border-[#C59B27]/50 bg-[#FAF5EB]">
                  <img
                    src="/assets/senraya_entrance.jpg"
                    alt="Senraya Perumal Temple Gateway"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5C131E]/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Event Details */}
              <div className="sm:col-span-7 flex flex-col justify-center text-center sm:text-left">
                {/* Event Pill */}
                <div className="inline-flex items-center gap-1.5 self-center sm:self-start bg-[#5C131E]/10 border border-[#5C131E]/30 px-3 py-0.5 rounded-full mb-2">
                  <Sparkles className="size-3 text-[#5C131E] animate-pulse" />
                  <span className="text-[10px] font-cinzel tracking-wider text-[#5C131E] font-bold uppercase">
                    Subha Muhurtham
                  </span>
                </div>

                {/* Date Header */}
                <div className="mb-1">
                  <div className="font-cinzel text-xs sm:text-sm font-bold text-[#5C131E] tracking-wider uppercase">
                    20 November 2026
                  </div>
                  <div className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-[#8C6D23] font-semibold">
                    Friday Morning
                  </div>
                </div>

                <div className="w-16 my-1.5 mx-auto sm:mx-0">
                  <div className="h-[1.5px] bg-gradient-to-r from-[#5C131E] to-transparent" />
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#5C131E] font-normal tracking-wide mt-0.5">
                  Wedding Ceremony
                </h3>
                <div className="font-tamil text-base sm:text-lg text-[#5C131E] font-semibold my-0.5">
                  திருமண முகூர்த்தம்
                </div>

                {/* Time & Venue */}
                <div className="space-y-2.5 mt-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[#5C131E]">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-semibold">4:30 AM – 6:00 AM (Brahma Muhurtham)</span>
                  </div>

                  <div className="flex items-start justify-center sm:justify-start gap-2 text-[#4A4237]">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#5C131E]">Arulmigu Senraya Perumal Temple</div>
                      <div className="text-xs text-[#7A6D5E]">Dharmapuri</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Traditional Kalyana Virundhu Feast Banner */}
        <div className="mt-10 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-[#5C131E] font-cinzel tracking-wider text-center bg-gradient-to-r from-[#FAF0EE] via-[#FAF5EB] to-[#FAF0EE] py-3.5 px-6 rounded-full max-w-xl mx-auto border-2 border-[#C59B27]/40 shadow-sm">
          <Utensils className="w-4 h-4 text-[#C59B27] shrink-0 animate-bounce" />
          <span className="font-semibold">
            அறுசுவை திருமண விருந்து &bull; Auspicious Wedding Feast Follows
          </span>
        </div>

      </div>
    </section>
  )
}
