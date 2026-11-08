import React from 'react'

export const MahalGoldHero: React.FC = () => {
  return (
    <section dir="ltr" className="relative isolate w-full overflow-hidden pt-[10%] pb-[14%]">
      <div className="relative mx-auto w-full max-w-[480px] md:max-w-[680px]">
        {/* Hanging Bells on Left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[1.4%] mt-[-17.9%] z-[2] w-[32.7%]"
          style={{
            aspectRatio: '1086/1448',
            backgroundImage: 'url(/images/themes/mahal-gold/bells.webp)',
          }}
        />

        {/* Hanging Floral Marigold Garland on Right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 md:top-[-5%] left-[40.6%] mt-[-17.5%] z-[3] w-[77.1%] md:w-[90%]"
          style={{
            aspectRatio: '1',
            backgroundImage: 'url(/images/themes/mahal-gold/flower1.webp)',
          }}
        />

        {/* Center Royal Arch Frame */}
        <div className="relative mx-auto w-[96.1%]" style={{ aspectRatio: '424/529' }}>
          {/* Arch Frame Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-contain bg-center bg-no-repeat opacity-[0.54]"
            style={{
              backgroundImage: 'url(/images/themes/mahal-gold/arch-frame.webp)',
            }}
          />

          {/* Lord Ganesha Medallion */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[20.0%] w-[13.7%] -translate-x-1/2 bg-contain bg-center bg-no-repeat"
            style={{
              aspectRatio: '579/699',
              backgroundImage: 'url(/images/themes/mahal-gold/ganesha.webp)',
            }}
          />

          {/* Couple Header, Names & Royal Invitation matching Authentic Royal Palace Design */}
          <div className="absolute left-1/2 top-[39%] z-20 flex w-[92%] max-w-[620px] -translate-x-1/2 flex-col items-center text-center select-none">
            {/* Couple Names - Equal Alignment Single Line (Groom first, Bride second) */}
            <h1
              style={{
                color: '#640e1b',
                textShadow: '0 2px 4px rgba(100, 14, 27, 0.12)',
              }}
              className="mb-1.5 sm:mb-2 flex flex-row items-baseline justify-center gap-2 sm:gap-3.5 text-center whitespace-nowrap leading-none select-none"
            >
              <span
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontSize: 'clamp(28px, 6.8vw, 56px)',
                }}
              >
                Deepak Kumar
              </span>
              <span
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontSize: 'clamp(22px, 5.2vw, 42px)',
                  color: '#ab7a45',
                }}
                className="px-0.5 select-none"
              >
                &amp;
              </span>
              <span
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontSize: 'clamp(28px, 6.8vw, 56px)',
                }}
              >
                Swetha
              </span>
            </h1>

            {/* Royal Symmetrical Gold Filigree Divider */}
            <div className="flex items-center justify-center gap-2 my-1 sm:my-1.5 select-none">
              <div
                style={{ background: 'linear-gradient(to right, transparent, #ab7a45)' }}
                className="w-8 sm:w-16 h-px"
              />
              <span style={{ color: '#ab7a45', opacity: 0.8 }} className="text-xs sm:text-sm">
                ❖
              </span>
              <span style={{ color: '#ab7a45', opacity: 0.9 }} className="text-sm sm:text-base">
                ❦
              </span>
              <span style={{ color: '#ab7a45', opacity: 0.8 }} className="text-xs sm:text-sm">
                ❖
              </span>
              <div
                style={{ background: 'linear-gradient(to left, transparent, #ab7a45)' }}
                className="w-8 sm:w-16 h-px"
              />
            </div>

            {/* Royal Invitation Line - Under the Names */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-1 mb-1.5 opacity-90 select-none">
              <div className="h-[1px] w-5 sm:w-10 bg-gradient-to-r from-transparent via-[#ab7a45]/60 to-[#ab7a45]" />
              <p
                className="text-[10px] sm:text-[12px] md:text-[13px] text-[#640e1b] tracking-[0.16em] sm:tracking-[0.22em] uppercase font-semibold"
                style={{ fontFamily: '"EB Garamond", "Cormorant Garamond", Georgia, serif' }}
              >
                You are cordially invited to the Wedding of
              </p>
              <div className="h-[1px] w-5 sm:w-10 bg-gradient-to-l from-transparent via-[#ab7a45]/60 to-[#ab7a45]" />
            </div>

            {/* Auspicious Dates & Location */}
            <p
              className="text-[10px] sm:text-[12px] md:text-[13px] text-[#ab7a45] tracking-widest uppercase font-medium select-none"
              style={{ fontFamily: '"Cinzel", "EB Garamond", Georgia, serif' }}
            >
              19 &amp; 20 November 2026 &bull; Salem, Tamil Nadu
            </p>
          </div>
        </div>

        {/* Bottom Castle, Sandstone, Flowers and Fence */}
        <div className="relative z-0 mt-[-59.6%] w-full" style={{ aspectRatio: '441/546' }}>
          {/* Sandstone Pillar */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[74.8%] top-0 z-[2] w-[55.8%]"
            style={{
              aspectRatio: '808/1402',
              backgroundImage: 'url(/images/themes/mahal-gold/sandstone.webp)',
            }}
          />

          {/* Castle / Palace Silhouette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[-25.9%] top-[13.4%] z-[1] w-[176.6%]"
            style={{
              aspectRatio: '1635/962',
              backgroundImage: 'url(/images/themes/mahal-gold/castle.webp)',
            }}
          />

          {/* Marigold Flower Left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[54.6%] md:left-[70%] top-[60.6%] z-[4] w-[47.6%]"
            style={{
              aspectRatio: '1',
              backgroundImage: 'url(/images/themes/mahal-gold/flower2.webp)',
            }}
          />

          {/* Marigold Flower Right (Mirrored) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat right-[54.6%] md:right-[70%] top-[60.6%] z-[4] w-[47.6%]"
            style={{
              aspectRatio: '1',
              backgroundImage: 'url(/images/themes/mahal-gold/flower2.webp)',
              transform: 'scaleX(-1)',
            }}
          />

          {/* Palace Fence */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat left-1/2 top-[75.5%] z-[3] w-[58.5%] -translate-x-1/2"
            style={{
              aspectRatio: '1774/887',
              backgroundImage: 'url(/images/themes/mahal-gold/fence.webp)',
            }}
          />
        </div>
      </div>
    </section>
  )
}

