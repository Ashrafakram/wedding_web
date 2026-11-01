import React from 'react'

export const MahalMandapamThankYou: React.FC = () => {
  return (
    <div className="relative isolate z-10 w-full overflow-hidden">
      {/* Full-bleed authentic traditional temple mandapam artwork seamlessly matching the page */}
      <div className="relative w-full">
        <img
          src="/images/themes/mahal-gold/traditional_couple_mandapam.jpg"
          alt="Swetha & Deepak Kumar - Traditional Wedding Blessing"
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

      {/* Signature Couple Name */}
      <div className="relative z-10 -mt-5 sm:-mt-8 pb-10 text-center flex flex-col items-center">
        <span
          className="text-3xl sm:text-4xl text-[#640e1b] inline-flex items-center justify-center gap-2"
          style={{ fontFamily: '"The Nautigal", ChungDoiIndic, cursive' }}
        >
          <span>Swetha &amp; Deepak Kumar</span>
          <span className="font-sans text-2xl sm:text-3xl not-italic select-none" role="img" aria-label="blessings">
            🙏
          </span>
        </span>
        <span
          className="text-[11px] uppercase tracking-widest text-[#ab7a45] mt-1 font-serif"
          style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
        >
          With Love &amp; Gratitude
        </span>
      </div>
    </div>
  )
}

export default MahalMandapamThankYou
