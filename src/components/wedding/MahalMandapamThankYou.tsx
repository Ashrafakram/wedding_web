import React from 'react'

export const MahalMandapamThankYou: React.FC = () => {
  return (
    <div className="relative isolate z-10 w-full overflow-hidden">
      {/* Upper Blessings Card Container */}
      <div className="relative z-20 flex flex-col items-center px-6 pt-6 pb-4 text-center max-w-[620px] mx-auto">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div
            className="w-12 h-px"
            style={{ background: 'linear-gradient(to right, transparent, #ab7a45)' }}
          />
          <span className="text-base" style={{ color: '#ab7a45' }}>
            🪷
          </span>
          <div
            className="w-12 h-px"
            style={{ background: 'linear-gradient(to left, transparent, #ab7a45)' }}
          />
        </div>

        <p
          className="text-xs md:text-sm leading-relaxed max-w-[500px]"
          style={{
            color: '#640e1b',
            fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", serif',
            fontWeight: 500,
          }}
        >
          With love and gratitude, we invite you to be part of our special day. Your presence,
          blessings, and good wishes will make our celebration even more memorable.
        </p>

        <p
          className="text-xs md:text-sm mt-3 font-semibold"
          style={{
            color: '#640e1b',
            fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", serif',
          }}
        >
          Thank you for being a part of our <span className="italic">happiness</span> and for showering
          us with your <span className="italic">love and blessings</span>. ❤️
        </p>
      </div>

      {/* Main Temple Mandapam Artwork with Bottom Plaque */}
      <div className="relative w-full max-w-[640px] mx-auto mt-2 px-3 md:px-6 pb-12">
        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl border"
          style={{
            borderColor: 'rgba(171, 122, 69, 0.45)',
            boxShadow: '0 20px 50px rgba(100, 14, 27, 0.25)',
          }}
        >
          <img
            src="/images/themes/mahal-gold/traditional_couple_mandapam.jpg"
            alt="Deepak Kumar & Swetha - Traditional Wedding Blessing"
            className="w-full h-auto object-cover block"
            loading="eager"
          />

          {/* Subtle gradient vignette to blend top and bottom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(247, 227, 205, 0.15) 0%, transparent 20%, transparent 80%, rgba(100, 14, 27, 0.25) 100%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default MahalMandapamThankYou
