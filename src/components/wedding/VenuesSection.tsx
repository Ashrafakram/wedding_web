import React from 'react'
import { ExternalLink, MapPin, Navigation, Sparkles } from 'lucide-react'
import { GoldFloralDivider, AnimatedKolamDivider } from '@/components/common/Ornaments'
import { Card3DTilt } from '@/components/common/Card3DTilt'

export function VenuesSection() {
  const avvsMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Vasavi+Garden+AVVS+Hall+Ammapet+Salem+Tamil+Nadu+636003'
  const templeMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Senraya+Perumal+Temple+Odayapatti+Salem+Tamil+Nadu'

  return (
    <section id="venues" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF5EB]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-xs font-cinzel tracking-[0.3em] uppercase text-[#5C131E] font-bold mb-1">
            CELEBRATING TWO SPECIAL MOMENTS
          </p>
          <h2 className="font-script text-4xl sm:text-6xl text-[#5C131E] font-normal leading-tight">
            Our Venues
          </h2>
          <p className="text-[11px] sm:text-xs font-cinzel tracking-[0.2em] uppercase text-[#7A6B5C] font-semibold mt-1">
            Where Sacred Traditions & Celebrations Unfold
          </p>
          <GoldFloralDivider className="my-2" />
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Venue 1: AVVS Mahal (Real Outsourced Exterior Photo) */}
          <Card3DTilt maxTiltDeg={7} scaleOnHover={1.015} glareOpacity={0.25} className="h-full">
            <div className="group h-full rounded-3xl border-2 border-[#C59B27]/40 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] p-6 sm:p-7 shadow-lg card-wine-glow transition-all duration-500 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#5C131E]/8 border border-[#5C131E]/20 mb-1.5">
                  <span className="text-[10px] font-cinzel tracking-wider text-[#5C131E] font-bold uppercase">
                    Reception Venue & Feast
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#5C131E]">
                  AVVS Mahal
                </h3>
                <p className="text-xs text-[#7A6D5E] font-sans mt-0.5 font-medium">
                  Ammapet, Salem, Tamil Nadu - 636003
                </p>
              </div>

              {/* Photo of AVVS Mahal with Illuminated Sign */}
              <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden mb-4 shadow-md border-2 border-[#C59B27]/40">
                <img
                  src="/assets/avvs_mahal_exterior.jpg"
                  alt="AVVS Mahal Grand Convention Center, Ammapet, Salem"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                
                {/* Radar Pulsing Pin */}
                <div className="absolute bottom-3 right-3 flex items-center justify-center size-8 rounded-full bg-[#5C131E] text-white shadow-lg">
                  <div className="absolute size-full rounded-full bg-[#C59B27] animate-radar-ping" />
                  <MapPin className="size-4 text-[#F3D279] relative z-10" />
                </div>
              </div>

              {/* Context Description */}
              <p className="text-xs text-[#6B5E4F] text-center px-2 mb-4 leading-relaxed font-sans">
                Join us at AVVS Mahal for the reception on November 19 and the auspicious wedding breakfast following the temple ceremony on November 20.
              </p>
            </div>

            {/* Directions Button */}
            <div className="flex justify-center mt-2">
              <a
                href={avvsMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  type="button"
                  className="rounded-full py-2.5 px-7 text-xs uppercase tracking-wider font-cinzel font-semibold flex items-center justify-center gap-2 bg-[#5C131E] hover:bg-[#7A1D2B] text-[#FFFDF8] border-1.5 border-[#C59B27] shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F3D279]" />
                  <span>Get Directions</span>
                </button>
              </a>
            </div>
          </div>
          </Card3DTilt>

          {/* Venue 2: Senraya Perumal Temple */}
          <Card3DTilt maxTiltDeg={7} scaleOnHover={1.015} glareOpacity={0.25} className="h-full">
            <div className="group h-full rounded-3xl border-2 border-[#C59B27]/40 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] p-6 sm:p-7 shadow-lg card-wine-glow transition-all duration-500 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#5C131E]/8 border border-[#5C131E]/20 mb-1.5">
                  <span className="text-[10px] font-cinzel tracking-wider text-[#5C131E] font-bold uppercase">
                    Sacred Muhurtham Venue
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#5C131E]">
                  Senraya Perumal Temple
                </h3>
                <p className="text-xs text-[#7A6D5E] font-sans mt-0.5 font-medium">
                  Odayapatti, Salem, Tamil Nadu
                </p>
              </div>

              {/* Photo with Radar Ping Pin Overlay */}
              <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden mb-4 shadow-md border-2 border-[#C59B27]/40">
                <img
                  src="/assets/senraya_temple_venue.jpg"
                  alt="Senraya Perumal Temple Sacred Gateway, Odayapatti, Salem"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                
                <div className="absolute bottom-3 right-3 flex items-center justify-center size-8 rounded-full bg-[#5C131E] text-white shadow-lg">
                  <div className="absolute size-full rounded-full bg-[#C59B27] animate-radar-ping" />
                  <MapPin className="size-4 text-[#F3D279] relative z-10" />
                </div>
              </div>

              {/* Context Description */}
              <p className="text-xs text-[#6B5E4F] text-center px-2 mb-4 leading-relaxed font-sans">
                A divine, sacred hill temple setting for the auspicious Vedic muhurtham and the sacred tying of the mangalyam.
              </p>
            </div>

            {/* Directions Button */}
            <div className="flex justify-center mt-2">
              <a
                href={templeMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button
                  type="button"
                  className="rounded-full py-2.5 px-7 text-xs uppercase tracking-wider font-cinzel font-semibold flex items-center justify-center gap-2 bg-[#5C131E] hover:bg-[#7A1D2B] text-[#FFFDF8] border-1.5 border-[#C59B27] shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F3D279]" />
                  <span>Find on Maps</span>
                </button>
              </a>
            </div>
          </div>
          </Card3DTilt>

        </div>

        {/* Animated Kolam at Bottom */}
        <div className="mt-12">
          <AnimatedKolamDivider />
        </div>

      </div>
    </section>
  )
}
