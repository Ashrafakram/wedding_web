import React, { useState } from 'react'

export interface WeddingEvent {
  id: string
  title: string
  badgeText: string
  subBadge?: string
  date: string
  displayDate: string
  time: string
  venueName: string
  address: string
  mapQuery: string
  googleMapsUrl: string
}

const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'reception',
    title: 'Wedding Reception',
    badgeText: 'WEDDING RECEPTION',
    date: '2026-11-19',
    displayDate: '19 November 2026',
    time: '6:00 PM – 10:00 PM',
    venueName: 'Vasavi Garden and AVVS Mahal',
    address: '13, Military Rd, Ammapet, Salem, Tamil Nadu 636003',
    mapQuery: '13,%20Military%20Rd,%20Ammapet,%20Salem,%20Tamil%20Nadu%20636003',
    googleMapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=13%2C%20Military%20Rd%2C%20Ammapet%2C%20Salem%2C%20Tamil%20Nadu%20636003',
  },
  {
    id: 'ceremony',
    title: 'Wedding Ceremony',
    badgeText: 'WEDDING CEREMONY',
    subBadge: 'MUHURTHAM',
    date: '2026-11-20',
    displayDate: '20 November 2026',
    time: '4:00 AM – 6:00 AM',
    venueName: 'Arulmigu Senraya Perumal Temple',
    address: 'Odayapatti, Salem, Tamil Nadu',
    mapQuery: '11.6627405,78.2091834',
    googleMapsUrl: 'https://maps.app.goo.gl/LZ5V1XntHBmdKdMs6?g_st=aw',
  },
]

export const ModernWeddingEvents: React.FC = () => {
  const [activeModalEvent, setActiveModalEvent] = useState<WeddingEvent | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopyAddress = (event: WeddingEvent, e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(`${event.venueName}, ${event.address}`)
    setCopiedId(event.id)
    setTimeout(() => setCopiedId(null), 2500)
  }

  return (
    <section className="relative flex w-full flex-col items-center px-4 md:px-8 py-6 md:py-10">
      {/* Royal Section Header */}
      <div className="text-center mb-8 md:mb-10 max-w-[480px]">
        <h2
          className="font-bold text-[22px] md:text-[28px] uppercase tracking-[0.06em] mb-2"
          style={{
            color: '#640e1b',
            fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
            textShadow: '0 1px 2px rgba(171, 122, 69, 0.2)',
          }}
        >
          Wedding Events
        </h2>
        <p
          className="text-xs md:text-sm italic"
          style={{
            color: '#ab7a45',
            fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", serif',
          }}
        >
          Your presence will make our celebration more special
        </p>

        {/* Gold Ornament Divider */}
        <div className="flex items-center justify-center gap-3 mt-3">
          <div
            className="w-14 h-px"
            style={{ background: 'linear-gradient(to right, transparent, #ab7a45)' }}
          />
          <span className="text-sm select-none" style={{ color: '#ab7a45' }}>
            ❦
          </span>
          <div
            className="w-14 h-px"
            style={{ background: 'linear-gradient(to left, transparent, #ab7a45)' }}
          />
        </div>
      </div>

      {/* Royal Events Grid */}
      <div className="w-full max-w-[450px] md:max-w-[540px] flex flex-col gap-8 md:gap-10">
        {WEDDING_EVENTS.map((event) => (
          <div
            key={event.id}
            className="relative rounded-2xl overflow-hidden p-6 md:p-8 animate-royal-glow hover:-translate-y-1.5 transition-all duration-500 group"
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(253, 247, 238, 0.92) 50%, rgba(247, 227, 205, 0.6) 100%)',
              border: '2px solid rgba(171, 122, 69, 0.45)',
              boxShadow:
                '0 12px 35px rgba(100, 14, 27, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.8)',
            }}
          >
            {/* Ambient Gold Shimmer Beam */}
            <div
              className="absolute top-0 bottom-0 w-24 pointer-events-none animate-gold-shimmer"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.18), transparent)',
              }}
            />

            {/* Intricate Royal Filigree Corners */}
            <div className="absolute top-2 left-2 text-[#ab7a45]/40 text-sm select-none pointer-events-none group-hover:text-[#ab7a45]/70 transition-colors">
              ⚜
            </div>
            <div className="absolute top-2 right-2 text-[#ab7a45]/40 text-sm select-none pointer-events-none group-hover:text-[#ab7a45]/70 transition-colors">
              ⚜
            </div>
            <div className="absolute bottom-2 left-2 text-[#ab7a45]/40 text-sm select-none pointer-events-none group-hover:text-[#ab7a45]/70 transition-colors">
              ⚜
            </div>
            <div className="absolute bottom-2 right-2 text-[#ab7a45]/40 text-sm select-none pointer-events-none group-hover:text-[#ab7a45]/70 transition-colors">
              ⚜
            </div>

            {/* Event Badge Header with Filigree Wings */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="text-[#ab7a45]/60 text-xs hidden sm:inline select-none">❖</span>
              <div
                className="relative px-7 py-2.5 rounded-full shadow-lg text-center overflow-hidden inline-flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #7d1222 0%, #640e1b 100%)',
                  border: '1px solid rgba(247, 227, 205, 0.6)',
                  boxShadow: '0 4px 18px rgba(100, 14, 27, 0.35)',
                }}
              >
                <span
                  className="text-white text-xs md:text-sm font-bold tracking-[0.1em] uppercase relative z-10"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  {event.badgeText}
                </span>
                {/* Subtle shine on badge */}
                <div
                  className="absolute top-0 h-full w-8 pointer-events-none animate-shine"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  }}
                />
              </div>
              <span className="text-[#ab7a45]/60 text-xs hidden sm:inline select-none">❖</span>
            </div>

            {/* Date & Time */}
            <div className="flex flex-col items-center gap-2 mb-4 text-[#640e1b]">
              {/* Date */}
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-5 h-5 text-[#ab7a45] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span
                  className="text-base md:text-lg font-semibold tracking-wide"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", serif',
                  }}
                >
                  {event.displayDate}
                </span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-5 h-5 text-[#ab7a45] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span
                  className="text-sm md:text-base font-medium text-[#ab7a45]"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", serif',
                  }}
                >
                  {event.time}
                </span>
              </div>
            </div>

            {/* Sub-badge for Muhurtham */}
            {event.subBadge && (
              <div className="flex justify-center mb-4">
                <div
                  className="px-5 py-1 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-widest text-[#640e1b] bg-[#ab7a45]/20 border border-[#ab7a45]/50 shadow-sm"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  {event.subBadge}
                </div>
              </div>
            )}

            {/* Gold Hairline Divider */}
            <div className="w-20 h-px mx-auto my-3 bg-gradient-to-r from-transparent via-[#ab7a45]/50 to-transparent" />

            {/* Venue Information */}
            <div className="flex flex-col items-center text-center mt-3 mb-6">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#ab7a45] font-semibold mb-1">
                <svg
                  className="w-4 h-4 text-[#640e1b]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Venue</span>
              </div>
              <h3
                className="text-base md:text-lg font-bold text-[#640e1b] mb-1.5 leading-snug"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", serif',
                }}
              >
                {event.venueName}
              </h3>
              <p
                className="text-xs md:text-sm text-[#640e1b]/80 max-w-[340px] leading-relaxed"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", serif',
                }}
              >
                {event.address}
              </p>
            </div>

            {/* Interactive Royal Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3 border-t border-[#ab7a45]/30">
              {/* 1. View Interactive Map Modal */}
              <button
                type="button"
                onClick={() => setActiveModalEvent(event)}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white overflow-hidden shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: '#640e1b',
                  boxShadow: '0 4px 14px rgba(100, 14, 27, 0.35)',
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
                <span>View on Map</span>
                {/* Button shine sweep */}
                <div
                  className="absolute top-0 h-full w-8 pointer-events-none animate-shine"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  }}
                />
              </button>

              {/* 2. Direct GPS Navigation */}
              <a
                href={event.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border shadow-sm hover:bg-[#ab7a45]/15 hover:scale-105 active:scale-95"
                style={{
                  borderColor: '#ab7a45',
                  color: '#640e1b',
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                <svg
                  className="w-4 h-4 text-[#ab7a45]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>Directions</span>
              </a>

              {/* 3. Quick Copy Address */}
              <button
                type="button"
                onClick={(e) => handleCopyAddress(event, e)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-[#ab7a45] hover:text-[#640e1b] transition-colors"
                title="Copy Address"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>{copiedId === event.id ? 'Copied ✓' : 'Copy'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Royal Map Modal */}
      {activeModalEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalEvent(null)}
        >
          <div
            className="relative w-full max-w-[560px] rounded-2xl overflow-hidden shadow-2xl p-5 md:p-6"
            style={{
              background: '#fcf8f2',
              border: '2px solid #ab7a45',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-[#ab7a45] font-bold block mb-1">
                  {activeModalEvent.badgeText}
                </span>
                <h3
                  className="text-base md:text-xl font-bold text-[#640e1b]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  {activeModalEvent.venueName}
                </h3>
                <p className="text-xs text-[#640e1b]/75 mt-0.5">
                  {activeModalEvent.address}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalEvent(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#640e1b] bg-[#ab7a45]/20 hover:bg-[#ab7a45]/40 transition-colors shrink-0"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Interactive Embedded Map */}
            <div className="relative w-full h-[280px] md:h-[340px] rounded-xl overflow-hidden border border-[#ab7a45]/40 shadow-inner bg-slate-100 mb-4">
              <iframe
                title={`Map of ${activeModalEvent.venueName}`}
                className="w-full h-full border-0"
                src={`https://maps.google.com/maps?q=${activeModalEvent.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={(e) => handleCopyAddress(activeModalEvent, e)}
                className="text-xs font-semibold text-[#ab7a45] hover:text-[#640e1b] transition-colors"
              >
                {copiedId === activeModalEvent.id ? 'Address Copied ✓' : '📋 Copy Address'}
              </button>

              <a
                href={activeModalEvent.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white bg-[#640e1b] hover:bg-[#7d1222] shadow-md transition-transform active:scale-95"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>Open in Google Maps App</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ModernWeddingEvents
