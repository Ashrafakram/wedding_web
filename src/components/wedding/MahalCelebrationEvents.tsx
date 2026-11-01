import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'

export const MahalCelebrationEvents: React.FC = () => {
  return (
    <section className="relative isolate z-10 w-full px-[6%] py-[8%] md:px-[12%]">
      <div className="relative z-10 max-w-[620px] mx-auto text-center">
        <span
          className="text-xs uppercase tracking-widest text-[#ab7a45] font-semibold block mb-1"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          Auspicious Celebrations
        </span>
        <h2
          className="text-[22px] md:text-[28px] font-bold text-[#640e1b] uppercase tracking-[0.05em] mb-3"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          WEDDING EVENTS
        </h2>

        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[55%] max-w-[260px] object-contain mb-8"
        />

        <div className="flex flex-col gap-6 md:gap-8">
          {/* Day 1: Reception */}
          <div
            className="rounded-2xl p-6 md:p-8 text-left relative overflow-hidden transition-all duration-300 hover:shadow-xl border border-[#ab7a45]/35"
            style={{
              background: 'linear-gradient(145deg, rgba(255,248,240,0.95), rgba(247,227,205,0.85))',
              boxShadow: '0 10px 30px -10px rgba(171, 122, 69, 0.25)',
            }}
          >
            <div className="flex items-center justify-between border-b border-[#ab7a45]/25 pb-4 mb-4">
              <div>
                <span className="inline-block px-3 py-1 bg-[#640e1b] text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-1">
                  Day 1 • Reception
                </span>
                <h3
                  className="text-xl md:text-2xl font-bold text-[#640e1b]"
                  style={{ fontFamily: '"EB Garamond", serif' }}
                >
                  வரவேற்பு விழா (Reception)
                </h3>
              </div>
              <img
                src="/images/themes/mahal-gold/medallion-cake.webp"
                alt=""
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </div>

            <div className="space-y-3 text-sm md:text-base text-[#640e1b]/85">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#ab7a45] shrink-0" />
                <span>
                  <strong>Thursday, November 19, 2026</strong> (கார்த்திகை 3)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#ab7a45] shrink-0" />
                <span>06:00 PM – 09:00 PM onwards</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ab7a45] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#640e1b]">AVVS Mahal (Vasavi Garden)</strong>
                  <span className="text-xs md:text-sm text-[#640e1b]/70">
                    13, Military Rd, Ammapet, Salem, Tamil Nadu 636003
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#ab7a45]/20 flex justify-end">
              <a
                href="https://maps.google.com/?q=AVVS+Mahal+Ammapet+Salem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-semibold text-[#640e1b] hover:text-[#ab7a45] flex items-center gap-1.5 underline underline-offset-4"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Day 2: Wedding Muhurtham */}
          <div
            className="rounded-2xl p-6 md:p-8 text-left relative overflow-hidden transition-all duration-300 hover:shadow-xl border border-[#ab7a45]/35"
            style={{
              background: 'linear-gradient(145deg, rgba(255,248,240,0.95), rgba(247,227,205,0.85))',
              boxShadow: '0 10px 30px -10px rgba(171, 122, 69, 0.25)',
            }}
          >
            <div className="flex items-center justify-between border-b border-[#ab7a45]/25 pb-4 mb-4">
              <div>
                <span className="inline-block px-3 py-1 bg-[#ab7a45] text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-1">
                  Day 2 • Muhurtham
                </span>
                <h3
                  className="text-xl md:text-2xl font-bold text-[#640e1b]"
                  style={{ fontFamily: '"EB Garamond", serif' }}
                >
                  திருமண விழா (Wedding Muhurtham)
                </h3>
              </div>
              <img
                src="/images/themes/mahal-gold/medallion-coming.webp"
                alt=""
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </div>

            <div className="space-y-3 text-sm md:text-base text-[#640e1b]/85">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#ab7a45] shrink-0" />
                <span>
                  <strong>Friday, November 20, 2026</strong> (கார்த்திகை 4)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#ab7a45] shrink-0" />
                <span>04:00 AM – 06:00 AM (Subha Muhurtham)</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ab7a45] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#640e1b]">Sri Senraya Perumal Temple</strong>
                  <span className="text-xs md:text-sm text-[#640e1b]/70">
                    Odayapatti, Salem, Tamil Nadu
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#ab7a45]/20 flex justify-end">
              <a
                href="https://maps.google.com/?q=Senraya+Perumal+Temple+Salem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-semibold text-[#640e1b] hover:text-[#ab7a45] flex items-center gap-1.5 underline underline-offset-4"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

