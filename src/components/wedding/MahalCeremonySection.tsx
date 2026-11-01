import React from 'react'

export const MahalCeremonySection: React.FC = () => {
  return (
    <section className="relative isolate z-10 w-full px-[8%] pt-[5%] pb-[6%] md:px-[12%]">
      {/* Decorative Ornaments */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[6.1%] mt-[-9.5%] z-[1] w-[87.5%]"
        style={{
          aspectRatio: '1302/253',
          backgroundImage: 'url(/images/themes/mahal-gold/pattern.webp)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[-35%] md:left-[-20%] mt-[15%] z-[1] w-[56%] md:w-[40%] opacity-80"
        style={{
          aspectRatio: '837/1843',
          backgroundImage: 'url(/images/themes/mahal-gold/sandstone-flower.webp)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 right-[-30%] md:right-[-15%] mt-[45%] z-[1] w-[52%] md:w-[38%] opacity-80"
        style={{
          aspectRatio: '806/1254',
          backgroundImage: 'url(/images/themes/mahal-gold/flower3-decoration.webp)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[560px] mx-auto">
        {/* Sanskrit / Tamil Auspicious Invocations */}
        <p
          className="text-[#ab7a45] text-sm md:text-base font-semibold tracking-widest uppercase mb-1"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          ॥ ஸ்ரீ விநாயகர் துணை ॥
        </p>
        <p
          className="text-[#640e1b] text-xs md:text-sm tracking-widest uppercase mb-4 opacity-80"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          Om Shri Ganeshaya Namaha
        </p>

        {/* Section Heading */}
        <h2
          className="text-[22px] md:text-[28px] font-bold text-[#640e1b] uppercase tracking-[0.05em] mb-4"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          WEDDING CEREMONY
        </h2>

        {/* Gold Divider Line */}
        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[60%] max-w-[280px] object-contain mb-8"
        />

        {/* Family Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full text-center mb-8 px-4">
          {/* Groom's Family */}
          <div className="flex flex-col items-center p-5 rounded-xl border border-[#ab7a45]/30 bg-[#fff8f0]/60 shadow-sm">
            <span
              className="text-xs uppercase tracking-widest text-[#ab7a45] font-semibold mb-2"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              Groom&apos;s Family
            </span>
            <h3
              className="text-lg md:text-xl font-bold text-[#640e1b] mb-1"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              Deepak Kumar
            </h3>
            <p className="text-xs md:text-sm text-[#640e1b]/75 leading-relaxed font-normal">
              Son of Mrs. &amp; Mr. Kumar
              <br />
              <span className="text-xs text-[#ab7a45]">Salem, Tamil Nadu</span>
            </p>
          </div>

          {/* Bride's Family */}
          <div className="flex flex-col items-center p-5 rounded-xl border border-[#ab7a45]/30 bg-[#fff8f0]/60 shadow-sm">
            <span
              className="text-xs uppercase tracking-widest text-[#ab7a45] font-semibold mb-2"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              Bride&apos;s Family
            </span>
            <h3
              className="text-lg md:text-xl font-bold text-[#640e1b] mb-1"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              Swetha
            </h3>
            <p className="text-xs md:text-sm text-[#640e1b]/75 leading-relaxed font-normal">
              Daughter of Mrs. &amp; Mr. Swaminathan
              <br />
              <span className="text-xs text-[#ab7a45]">Salem, Tamil Nadu</span>
            </p>
          </div>
        </div>

        {/* Heartfelt Announcement Text */}
        <div className="max-w-[480px] px-2 mb-8">
          <p
            className="text-[14px] md:text-[16px] text-[#640e1b]/90 leading-relaxed italic"
            style={{ fontFamily: '"Lora", serif' }}
          >
            &ldquo;Together with our families, we joyfully invite you to share in our celebration as we
            unite our hearts and lives in holy matrimony.&rdquo;
          </p>
          <p
            className="text-[13px] md:text-[14px] text-[#640e1b]/80 mt-3 leading-relaxed"
            style={{ fontFamily: '"Noto Serif Tamil", serif' }}
          >
            எங்கள் இல்ல திருமண விழாவிற்கு தாங்களும் தங்களது குடும்பத்தினரும் வருகை தந்து மணமக்களை
            வாழ்த்தி அருளுமாறு அன்புடன் அழைக்கின்றோம்.
          </p>
        </div>

        {/* Gold Divider Line */}
        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[50%] max-w-[240px] object-contain"
        />
      </div>
    </section>
  )
}

