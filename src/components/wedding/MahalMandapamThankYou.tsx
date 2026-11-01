import React from 'react'

export const MahalMandapamThankYou: React.FC = () => {
  return (
    <div className="relative isolate z-10 w-full overflow-hidden">
      {/* Full-bleed authentic traditional temple mandapam artwork seamlessly matching the page */}
      <div className="relative w-full">
        <img
          src="/images/themes/mahal-gold/traditional_couple_mandapam.jpg"
          alt="Deepak Kumar & Swetha - Traditional Wedding Blessing"
          className="w-full h-auto object-cover block"
          loading="eager"
        />

        {/* Soft top blend overlay matching page background */}
        <div
          className="absolute top-0 inset-x-0 h-16 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(253, 247, 238, 0.6) 0%, rgba(253, 247, 238, 0.15) 60%, transparent 100%)',
          }}
        />
      </div>
    </div>
  )
}

export default MahalMandapamThankYou
