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

          {/* Couple Header, Names & Ornaments matching Reference Card Design */}
          <div className="absolute left-1/2 top-[38%] z-20 flex w-[90%] -translate-x-1/2 flex-col items-center text-center select-none">
            {/* Invitation Line */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 opacity-90">
              <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent via-[#ab7a45]/60 to-[#ab7a45]" />
              <p
                className="text-[10px] sm:text-[12px] md:text-[14px] text-[#640e1b] tracking-wider uppercase font-medium"
                style={{ fontFamily: '"EB Garamond", "Cormorant Garamond", serif', letterSpacing: '0.12em' }}
              >
                You are cordially invited to the Wedding of
              </p>
              <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent via-[#ab7a45]/60 to-[#ab7a45]" />
            </div>

            {/* Names Block (Deepak Kumar & Swetha) */}
            <div className="my-1 sm:my-1.5 flex items-center justify-center gap-2 sm:gap-4 select-none leading-none">
              {/* Left Pink Blossom Accent */}
              <span className="text-xs sm:text-base text-[#df4977] -mt-6 select-none">🌸</span>

              {/* Groom: Deepak Kumar (2-line stacked block) */}
              <div className="flex flex-col text-right leading-[0.85] sm:leading-[0.88]">
                <span
                  style={{
                    fontFamily: '"Great Vibes", "Alex Brush", cursive',
                    color: '#640e1b',
                    fontSize: 'clamp(28px, 6.6vw, 56px)',
                  }}
                >
                  Deepak
                </span>
                <span
                  style={{
                    fontFamily: '"Great Vibes", "Alex Brush", cursive',
                    color: '#640e1b',
                    fontSize: 'clamp(28px, 6.6vw, 56px)',
                  }}
                >
                  Kumar
                </span>
              </div>

              {/* Vertical Divider & Script Ampersand */}
              <div className="flex flex-col items-center justify-center px-1">
                <div className="h-4 sm:h-7 w-[1.5px] bg-[#ab7a45]/60 mb-0.5" />
                <span
                  className="text-[#640e1b] text-xl sm:text-3xl my-0.5 leading-none"
                  style={{ fontFamily: '"Great Vibes", "Alex Brush", cursive' }}
                >
                  &amp;
                </span>
                <div className="h-4 sm:h-7 w-[1.5px] bg-[#ab7a45]/60 mt-0.5" />
              </div>

              {/* Bride: Swetha (Single large name vertically centered) */}
              <div className="flex items-center text-left leading-[0.85] sm:leading-[0.88]">
                <span
                  style={{
                    fontFamily: '"Great Vibes", "Alex Brush", cursive',
                    color: '#640e1b',
                    fontSize: 'clamp(36px, 8.5vw, 70px)',
                  }}
                >
                  Swetha
                </span>
              </div>
            </div>

            {/* Gold Ornament Divider with Pink Blossom */}
            <div className="flex items-center justify-center gap-2 mt-1.5 select-none">
              <div
                style={{ background: 'linear-gradient(to right, transparent, #ab7a45)' }}
                className="w-10 sm:w-20 h-px"
              />
              <span style={{ color: '#ab7a45', opacity: 0.8 }} className="text-xs sm:text-sm">
                ❖
              </span>
              <span className="text-xs sm:text-sm text-[#df4977]">🌸</span>
              <span style={{ color: '#ab7a45', opacity: 0.8 }} className="text-xs sm:text-sm">
                ❖
              </span>
              <div
                style={{ background: 'linear-gradient(to left, transparent, #ab7a45)' }}
                className="w-10 sm:w-20 h-px"
              />
            </div>
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

