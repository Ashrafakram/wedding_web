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

          {/* Couple Names Inside Arch */}
          <div className="absolute left-1/2 top-[43.5%] z-20 flex w-[75%] -translate-x-1/2 flex-col items-center gap-[1.5%] text-center leading-[1.12]">
            <div className="w-full">
              <span
                className="inline-block"
                style={{
                  fontFamily: '"The Nautigal", cursive',
                  color: '#640e1b',
                  fontSize: 'clamp(38px, 12.5vw, 72px)',
                }}
              >
                Deepak Kumar
              </span>
            </div>
            <span
              className="block my-0.5"
              style={{
                fontFamily: '"Alex Brush", cursive',
                color: '#640e1b',
                fontSize: 'clamp(20px, 6.5vw, 36px)',
              }}
            >
              &amp;
            </span>
            <div className="w-full">
              <span
                className="inline-block"
                style={{
                  fontFamily: '"The Nautigal", cursive',
                  color: '#640e1b',
                  fontSize: 'clamp(38px, 12.5vw, 72px)',
                }}
              >
                Swetha
              </span>
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

