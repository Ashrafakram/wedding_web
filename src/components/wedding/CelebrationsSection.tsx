import React from 'react'
import { Clock, MapPin, Sparkles, Utensils, Heart } from 'lucide-react'
import { GoldFloralDivider, AnimatedKolamDivider } from '@/components/common/Ornaments'
import { Card3DTilt } from '@/components/common/Card3DTilt'

export function CelebrationsSection() {
  return (
    <section id="wedding" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF5EB]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-xs font-cinzel tracking-[0.3em] uppercase text-[#5C131E] font-bold mb-1">
            TWO DAYS OF BLESSINGS, LOVE AND TOGETHERNESS
          </p>
          <h2 className="font-script text-4xl sm:text-6xl text-[#5C131E] font-normal leading-tight">
            Our Wedding Celebrations
          </h2>
          <p className="text-[11px] sm:text-xs font-cinzel tracking-[0.22em] uppercase text-[#7A6B5C] font-semibold mt-1">
            மங்கல நிகழ்வுகள் &bull; SACRED EVENTS
          </p>
          <GoldFloralDivider className="my-3" />
        </div>

        {/* Celebrations Grid: Day 1 (Reception) & Day 2 (Muhurtham) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Day 1: Reception Card */}
          <Card3DTilt maxTiltDeg={7} scaleOnHover={1.015} glareOpacity={0.25} className="h-full">
            <div className="relative h-full rounded-3xl border-2 border-[#E5A5B2]/60 bg-gradient-to-b from-[#FFFDF9] via-[#FAF0EE] to-[#FAF5EB] p-6 sm:p-8 shadow-lg card-wine-glow overflow-hidden group flex flex-col justify-between">
            {/* Top Corner Lotus Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C45B6E]/15 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              {/* Event Pill */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-cinzel uppercase tracking-[0.2em] font-bold text-[#C45B6E] bg-[#C45B6E]/10 px-3 py-0.5 rounded-full border border-[#C45B6E]/30">
                  DAY 1
                </span>
                <span className="text-[10px] font-cinzel uppercase tracking-wider text-[#8C6D23] font-semibold">
                  THURSDAY EVENING
                </span>
              </div>

              {/* Arched Reception Card Artwork */}
              <div className="relative w-full h-60 sm:h-68 rounded-2xl overflow-hidden mb-4 shadow-md border-2 border-[#C59B27]/40 bg-[#FAF0EE]">
                <img
                  src="/assets/reception_stairs_couple.jpg"
                  alt="Grand Wedding Reception - Couple in Royal Blush Pink Lehenga & Sherwani at Mandapam"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0C13]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Date Header */}
              <div className="text-center sm:text-left">
                <div className="font-cinzel text-xs sm:text-sm font-bold text-[#5C131E] tracking-wider uppercase">
                  19 November 2026
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#5C131E] font-normal tracking-wide mt-1">
                  Reception
                </h3>
                <div className="font-tamil text-base sm:text-lg text-[#C45B6E] font-semibold my-0.5">
                  வரவேற்பு விழா
                </div>

                <p className="text-xs text-[#5A5044] leading-relaxed my-2 font-sans">
                  We warmly invite you to join us for an evening of joy, togetherness and celebration as our families come together to mark the beginning of this beautiful journey.
                </p>

                {/* Time & Venue */}
                <div className="space-y-2 mt-3 pt-3 border-t border-[#E8DEC8] text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#5C131E]">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-semibold">6:00 PM – 9:00 PM onwards</span>
                  </div>

                  <div className="flex items-start gap-2 text-[#4A4237]">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#5C131E]">AVVS Mahal</div>
                      <div className="text-xs text-[#7A6D5E]">Ammapet (Ammapettai), Salem, Tamil Nadu</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          </Card3DTilt>

          {/* Day 2: Wedding (Muhurtham) Card */}
          <Card3DTilt maxTiltDeg={7} scaleOnHover={1.015} glareOpacity={0.25} className="h-full">
            <div className="relative h-full rounded-3xl border-2 border-[#C59B27]/60 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#FAF0EE] p-6 sm:p-8 shadow-lg card-wine-glow overflow-hidden group flex flex-col justify-between">
            {/* Top Corner Wine & Gold Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#5C131E]/15 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              {/* Event Pill */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-cinzel uppercase tracking-[0.2em] font-bold text-[#5C131E] bg-[#5C131E]/10 px-3 py-0.5 rounded-full border border-[#5C131E]/30">
                  DAY 2
                </span>
                <span className="text-[10px] font-cinzel uppercase tracking-wider text-[#8C6D23] font-semibold">
                  FRIDAY MORNING
                </span>
              </div>

              {/* Sacred Wedding Ceremony Photo - Couple Walking to Temple Mandapam */}
              <div className="relative w-full h-60 sm:h-68 rounded-2xl overflow-hidden mb-4 shadow-md border-2 border-[#C59B27]/40 bg-[#FAF5EB]">
                <img
                  src="/assets/temple_couple_walk.jpg"
                  alt="Traditional Sacred Tamil Muhurtham - Couple in Pattu Veshti & Kanchipuram Silk Saree Walking towards Temple Gopuram"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5C131E]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Date Header */}
              <div className="text-center sm:text-left">
                <div className="font-cinzel text-xs sm:text-sm font-bold text-[#5C131E] tracking-wider uppercase">
                  20 November 2026
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#5C131E] font-normal tracking-wide mt-1">
                  Wedding Ceremony
                </h3>
                <div className="font-tamil text-base sm:text-lg text-[#5C131E] font-semibold my-0.5">
                  திருமண விழா (முகூர்த்தம்)
                </div>

                <p className="text-xs text-[#5A5044] leading-relaxed my-2 font-sans">
                  With the blessings of the Almighty, we invite you to witness the sacred union of Swetha and Deepak Kumar in the divine abode of Senraya Perumal.
                </p>

                {/* Time & Venue */}
                <div className="space-y-2 mt-3 pt-3 border-t border-[#E8DEC8] text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#5C131E]">
                    <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
                    <span className="font-semibold">Muhurtham: 4:30 AM – 6:00 AM (Subha Brahma Muhurtham)</span>
                  </div>

                  <div className="flex items-start gap-2 text-[#4A4237]">
                    <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#5C131E]">Arulmigu Senraya Perumal Temple</div>
                      <div className="text-xs text-[#7A6D5E]">Odayapatti, Salem, Tamil Nadu</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          </Card3DTilt>

        </div>

        {/* Post-Ceremony Breakfast & Reception Gathering Notice Banner (From Image 3 & 4) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 text-xs sm:text-sm text-[#5C131E] text-center bg-gradient-to-r from-[#FAF0EE] via-[#FFFDF9] to-[#FAF0EE] py-4 px-6 rounded-2xl border-2 border-[#C59B27]/40 shadow-sm max-w-3xl mx-auto">
          <Utensils className="w-5 h-5 text-[#C59B27] shrink-0 animate-bounce" />
          <div className="font-cinzel">
            <span className="font-bold">Wedding Breakfast &amp; Post-Wedding Event: </span>
            <span className="text-[#6B5E4F]">
              After the temple ceremony, we look forward to welcoming you at <strong>AVVS Mahal, Ammapet, Salem</strong>.
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
