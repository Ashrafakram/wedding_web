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
          <h2 className="font-script text-4xl sm:text-5xl text-[#C59B27] font-normal leading-tight">
            Our Venues
          </h2>
          <GoldFloralDivider className="my-2" />
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Venue 1: AVVS Mahal (Lawn marquee canopy tent) */}
          <div className="group rounded-3xl border border-[#E8DEC8] bg-[#FFFDF9] p-5 sm:p-6 shadow-xs hover-card-glow transition-all duration-500 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="text-center mb-3">
                <h3 className="font-serif text-2xl font-normal text-[#163224]">
                  AVVS Mahal
                </h3>
                <p className="text-xs text-[#7A6D5E] font-sans mt-0.5">
                  Ammapet, Salem
                </p>
              </div>

              {/* Photo */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 shadow-xs border border-[#EAE0CD]">
                <img
                  src="/assets/avvs_tent_venue.jpg"
                  alt="AVVS Mahal Vasavi Garden Lawn Marquee Tent"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
              </div>
            </div>

            {/* Centered Green Pill Button */}
            <div className="flex justify-center">
              <a
                href={avvsMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="primaryGreen"
                  className="rounded-full py-2 px-6 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 bg-[#1C3E2C] hover:bg-[#25523A] text-[#FBF7F0] border border-[#3A6B4F] shadow-xs active:scale-95 transition-transform"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E7C979]" />
                  <span>Get Directions</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Venue 2: Senraya Perumal Temple */}
          <div className="group rounded-3xl border border-[#E8DEC8] bg-[#FFFDF9] p-5 sm:p-6 shadow-xs hover-card-glow transition-all duration-500 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="text-center mb-3">
                <h3 className="font-serif text-2xl font-normal text-[#163224]">
                  Senraya Perumal Temple
                </h3>
                <p className="text-xs text-[#7A6D5E] font-sans mt-0.5">
                  Odayapatti, Salem
                </p>
              </div>

              {/* Photo */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 shadow-xs border border-[#EAE0CD]">
                <img
                  src="/assets/senraya_temple_venue.jpg"
                  alt="Senraya Perumal Temple Gateway"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
              </div>
            </div>

            {/* Centered Green Pill Button */}
            <div className="flex justify-center">
              <a
                href={templeMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="primaryGreen"
                  className="rounded-full py-2 px-6 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 bg-[#1C3E2C] hover:bg-[#25523A] text-[#FBF7F0] border border-[#3A6B4F] shadow-xs active:scale-95 transition-transform"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#E7C979]" />
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
