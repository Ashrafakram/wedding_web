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

        {/* Seamless bottom fade overlay matching paper background */}
        <div
          className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, #f7e3cd 0%, rgba(247, 227, 205, 0.85) 45%, transparent 100%)',
          }}
        />
      </div>

      {/* Royal Vanakkam Crest & Couple Signature */}
      <div className="relative z-10 -mt-10 sm:-mt-14 pb-14 px-4 flex flex-col items-center">
        <div
          className="w-full max-w-[340px] sm:max-w-[400px] rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center relative shadow-[0_12px_36px_rgba(100,14,27,0.14)]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 253, 249, 0.97) 0%, rgba(253, 246, 236, 0.95) 100%)',
            border: '1.5px solid rgba(171, 122, 69, 0.45)',
          }}
        >
          {/* Delicate Corner Ornaments */}
          <span className="absolute top-2 left-2 text-[#ab7a45]/45 text-[10px] select-none">❦</span>
          <span className="absolute top-2 right-2 text-[#ab7a45]/45 text-[10px] select-none">❦</span>
          <span className="absolute bottom-2 left-2 text-[#ab7a45]/45 text-[10px] select-none">❦</span>
          <span className="absolute bottom-2 right-2 text-[#ab7a45]/45 text-[10px] select-none">❦</span>

          {/* Top Gold Flourish Divider */}
          <div className="flex items-center justify-center gap-2 mb-2 w-full">
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-[#ab7a45]/60 to-transparent" />
            <span className="text-xs text-[#ab7a45] select-none">⚜</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent via-[#ab7a45]/60 to-transparent" />
          </div>

          {/* Vanakkam / Namaste Hands Artwork in Royal Maroon */}
          <img
            src="/images/themes/mahal-gold/vanakkam_hands.png"
            alt="Vanakkam - With Love & Gratitude"
            className="w-24 sm:w-28 h-auto object-contain mx-auto mb-2 opacity-95 select-none filter drop-shadow-xs"
            loading="lazy"
          />

          {/* Couple Calligraphy Name (Groom first, Bride second) */}
          <h3
            className="text-3xl sm:text-4xl md:text-[42px] leading-tight text-[#640e1b] my-0.5 tracking-wide"
            style={{ fontFamily: '"The Nautigal", ChungDoiIndic, cursive' }}
          >
            Deepak Kumar &amp; Swetha
          </h3>

          {/* Subtitle */}
          <p
            className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#8c5e28] mt-1"
            style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
          >
            With Love &amp; Gratitude
          </p>

          {/* Bottom Accent */}
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#ab7a45]/50 to-transparent mt-3" />
        </div>
      </div>
    </div>
  )
}

export default MahalMandapamThankYou
