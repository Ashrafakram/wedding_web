import React from 'react'

export const MahalTimelineSection: React.FC = () => {
  const timeline = [
    {
      time: '06:00 PM (19 Nov)',
      title: 'வரவேற்பு & விருந்து (Reception & Dinner)',
      desc: 'Welcoming guests with traditional nadaswaram music and grand feast at AVVS Mahal.',
      medallion: '/images/themes/mahal-gold/medallion-cake.webp',
    },
    {
      time: '04:00 AM (20 Nov)',
      title: 'அதிதி வரவு (Welcome & Seer Varisai)',
      desc: 'Arrival of family elders and welcoming the groom and bride at Senraya Perumal Temple.',
      medallion: '/images/themes/mahal-gold/medallion-coming.webp',
    },
    {
      time: '05:00 AM (20 Nov)',
      title: 'சுப முகூர்த்தம் (Auspicious Muhurtham)',
      desc: 'Sacred tying of the Mangalsutra (Thali) amidst Vedic chants and floral blessings.',
      medallion: '/images/themes/mahal-gold/medallion-gift.webp',
    },
  ]

  return (
    <section className="relative isolate z-10 w-full px-[6%] py-[8%] md:px-[12%]">
      <div className="relative z-10 max-w-[580px] mx-auto text-center">
        <span
          className="text-xs uppercase tracking-widest text-[#ab7a45] font-semibold block mb-1"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          Ceremonial Order
        </span>
        <h2
          className="text-[22px] md:text-[28px] font-bold text-[#640e1b] uppercase tracking-[0.05em] mb-3"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          TIMELINE OF EVENTS
        </h2>

        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[55%] max-w-[260px] object-contain mb-8"
        />

        <div className="relative border-l-2 border-[#ab7a45]/30 ml-6 md:ml-8 pl-6 md:pl-8 space-y-8 text-left">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Medallion Node on Left Line */}
              <div
                className="absolute -left-[45px] md:-left-[53px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full p-1 border border-[#ab7a45]/40 flex items-center justify-center shadow-md bg-[#fff8f0]"
              >
                <img
                  src={item.medallion}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Event Content */}
              <div className="bg-[#fff8f0]/70 p-4 md:p-5 rounded-xl border border-[#ab7a45]/25 shadow-sm transition-all duration-300 hover:border-[#ab7a45]">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#ab7a45] mb-1">
                  {item.time}
                </span>
                <h3
                  className="text-base md:text-lg font-bold text-[#640e1b] mb-1"
                  style={{ fontFamily: '"EB Garamond", serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-[#640e1b]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

