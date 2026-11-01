import React from 'react'
import { MapPin, Navigation } from 'lucide-react'

export const MahalVenuesSection: React.FC = () => {
  return (
    <section className="relative isolate z-10 w-full px-[6%] py-[8%] md:px-[12%]">
      <div className="relative z-10 max-w-[620px] mx-auto text-center">
        <span
          className="text-xs uppercase tracking-widest text-[#ab7a45] font-semibold block mb-1"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          Sacred Locations
        </span>
        <h2
          className="text-[22px] md:text-[28px] font-bold text-[#640e1b] uppercase tracking-[0.05em] mb-3"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          OUR VENUES
        </h2>

        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[55%] max-w-[260px] object-contain mb-8"
        />

        <div className="space-y-8">
          {/* Venue 1: AVVS Mahal */}
          <div className="rounded-2xl overflow-hidden border border-[#ab7a45]/30 bg-[#fff8f0]/80 shadow-md text-left">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src="/assets/avvs_tent_venue.jpg"
                alt="AVVS Mahal Vasavi Garden Tent"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-[#640e1b] text-white text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Reception Venue
              </div>
            </div>

            <div className="p-5 md:p-6">
              <h3
                className="text-xl md:text-2xl font-bold text-[#640e1b] mb-1"
                style={{ fontFamily: '"EB Garamond", serif' }}
              >
                AVVS Mahal (Vasavi Garden)
              </h3>
              <p className="flex items-start gap-2 text-xs md:text-sm text-[#640e1b]/75 mb-4">
                <MapPin className="w-4 h-4 text-[#ab7a45] shrink-0 mt-0.5" />
                <span>13, Military Rd, Ammapet, Salem, Tamil Nadu 636003</span>
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#ab7a45]/20">
                <span className="text-xs text-[#ab7a45] font-semibold">19 Nov • 6:00 PM</span>
                <a
                  href="https://maps.google.com/?q=AVVS+Mahal+Ammapet+Salem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#640e1b] hover:bg-[#7e1423] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Venue 2: Sri Senraya Perumal Temple */}
          <div className="rounded-2xl overflow-hidden border border-[#ab7a45]/30 bg-[#fff8f0]/80 shadow-md text-left">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src="/assets/senraya_temple_venue.jpg"
                alt="Sri Senraya Perumal Temple Salem"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-[#ab7a45] text-white text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Muhurtham Venue
              </div>
            </div>

            <div className="p-5 md:p-6">
              <h3
                className="text-xl md:text-2xl font-bold text-[#640e1b] mb-1"
                style={{ fontFamily: '"EB Garamond", serif' }}
              >
                Sri Senraya Perumal Temple
              </h3>
              <p className="flex items-start gap-2 text-xs md:text-sm text-[#640e1b]/75 mb-4">
                <MapPin className="w-4 h-4 text-[#ab7a45] shrink-0 mt-0.5" />
                <span>Odayapatti, Salem, Tamil Nadu</span>
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#ab7a45]/20">
                <span className="text-xs text-[#ab7a45] font-semibold">20 Nov • 4:00 AM</span>
                <a
                  href="https://maps.google.com/?q=Senraya+Perumal+Temple+Salem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#ab7a45] hover:bg-[#8f642e] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Find on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

