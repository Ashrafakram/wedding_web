import React from 'react'
import { ExternalLink, MapPin, Navigation } from 'lucide-react'
import { GoldFloralDivider } from '@/components/common/Ornaments'
import { Button } from '@/components/ui/button'

export function VenuesSection() {
  const avvsMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Vasavi+Garden+AVVS+Hall+Ammapet+Salem+Tamil+Nadu+636003'
  const templeMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Senraya+Perumal+Temple+Odayapatti+Salem+Tamil+Nadu'

  return (
    <section id="venues" className="relative py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-script text-4xl sm:text-6xl font-normal leading-tight">
            <span className="gold-foil-text-rich">Our Venues</span>
          </h2>
          <p className="text-[11px] sm:text-xs font-cinzel tracking-[0.25em] uppercase text-[#6B5E4F] font-semibold mt-1">
            Salem, Tamil Nadu
          </p>
          <GoldFloralDivider className="my-2" />
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Venue 1: AVVS Mahal (Lawn marquee canopy tent) */}
          <div className="group rounded-3xl border-2 border-[#D8C7A9] bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] p-5 sm:p-6 shadow-md hover-card-glow transition-all duration-500 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="text-center mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#7E2E40]">
                  AVVS Mahal
                </h3>
                <p className="text-xs text-[#7A6D5E] font-cinzel tracking-wider mt-0.5">
                  Vasavi Garden Marquee &bull; Ammapet, Salem
                </p>
              </div>

              {/* Photo */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 shadow-sm border border-[#E8C5CB]/60">
                <img
                  src="/assets/avvs_tent_venue.jpg"
                  alt="AVVS Mahal Vasavi Garden Lawn Marquee Tent"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Centered Pill Button */}
            <div className="flex justify-center">
              <a
                href={avvsMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  className="rounded-full py-2.5 px-7 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 bg-[#7E2E40] hover:bg-[#9E3D52] text-[#FFF0F3] border border-[#E8C5CB] shadow-sm hover:border-[#D4AF37] active:scale-95 transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F3D279] animate-pulse" />
                  <span>Get Directions</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Venue 2: Senraya Perumal Temple */}
          <div className="group rounded-3xl border-2 border-[#D8C7A9] bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] p-5 sm:p-6 shadow-md hover-card-glow transition-all duration-500 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="text-center mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#7E2E40]">
                  Senraya Perumal Temple
                </h3>
                <p className="text-xs text-[#7A6D5E] font-cinzel tracking-wider mt-0.5">
                  Historic Sacred Shrine &bull; Odayapatti, Salem
                </p>
              </div>

              {/* Photo */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 shadow-sm border border-[#E8C5CB]/60">
                <img
                  src="/assets/senraya_temple_venue.jpg"
                  alt="Senraya Perumal Temple Gateway"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Centered Pill Button */}
            <div className="flex justify-center">
              <a
                href={templeMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  className="rounded-full py-2.5 px-7 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 bg-[#7E2E40] hover:bg-[#9E3D52] text-[#FFF0F3] border border-[#E8C5CB] shadow-sm hover:border-[#D4AF37] active:scale-95 transition-all cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F3D279] animate-pulse" />
                  <span>Find on Maps</span>
                </Button>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
