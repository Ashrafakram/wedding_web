import React from 'react'
import { GoldFloralDivider } from '@/components/common/Ornaments'

export function HeartfeltInvitation() {
  return (
    <section id="invitation" className="relative py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border-2 border-[#D8C7A9] bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] p-8 sm:p-12 shadow-md overflow-hidden">
          
          {/* Subtle Corner Florals */}
          <div className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-25">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C59B27]">
              <path d="M100 0 Q 70 30, 0 100" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="85" cy="15" r="4" fill="#C59B27" />
              <circle cx="70" cy="30" r="3" fill="#E8C86A" />
            </svg>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-base sm:text-lg text-[#C59B27] font-serif mb-1">ௐ</div>
            <h2 className="font-script text-4xl sm:text-6xl font-normal leading-tight">
              <span className="gold-foil-text-rich">A Heartfelt Invitation</span>
            </h2>
            <GoldFloralDivider className="my-3" />
          </div>

          {/* Bilingual Invitation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-[#4A4237] leading-relaxed text-sm sm:text-base">
            
            {/* English Invitation */}
            <div className="flex flex-col justify-center space-y-4 text-center md:text-left border-b md:border-b-0 md:border-r border-[#EFE5D3] pb-6 md:pb-0 md:pr-6">
              <p className="font-sans text-[#4A4237]">
                With grateful hearts and the love of our families, we are delighted to invite you to celebrate the beginning of our life together.
              </p>
              <p className="font-sans text-[#5A5044]">
                Your presence, blessings and good wishes will make these precious moments even more memorable. We look forward to sharing the joy, traditions and happiness of our wedding with you.
              </p>
            </div>

            {/* Tamil Traditional Invitation */}
            <div className="flex flex-col justify-center space-y-4 text-center md:text-left font-tamil text-[#3D352B] leading-relaxed">
              <p>
                இறைவனின் அருளுடனும், எங்கள் குடும்பத்தினரின் அன்பு மற்றும் ஆசீர்வாதங்களுடனும், எங்கள் வாழ்வின் புதிய அத்தியாயத்தைத் தொடங்கும் இந்த இனிய தருணத்தில் தங்களை அன்புடன் அழைக்கிறோம்.
              </p>
              <p className="text-[#5A5044]">
                தங்களின் வருகையும், வாழ்த்துகளும், ஆசீர்வாதங்களும் எங்கள் திருமண விழாவை மேலும் சிறப்பாக்கும். எங்களின் மகிழ்ச்சியை தங்களுடன் பகிர்ந்து கொள்ள ஆவலுடன் காத்திருக்கிறோம்.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
