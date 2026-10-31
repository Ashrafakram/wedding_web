import React from 'react'
import { GoldFloralDivider, AnimatedKolamDivider } from '@/components/common/Ornaments'
import { Sparkles, Heart } from 'lucide-react'

export function HeartfeltInvitation() {
  return (
    <section id="invitation" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF5EB]">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border-2 border-[#C59B27]/40 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] p-8 sm:p-14 shadow-xl overflow-hidden card-wine-glow">
          
          {/* Traditional Temple Corner Accents */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C59B27] pointer-events-none" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C59B27] pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C59B27] pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C59B27] pointer-events-none" />
          
          {/* Inner Dashed Gold Border */}
          <div className="absolute inset-2 border border-dashed border-[#C59B27]/25 rounded-2xl pointer-events-none" />

          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <p className="text-[10px] sm:text-xs font-cinzel tracking-[0.28em] uppercase text-[#5C131E] font-bold mb-1">
              அழைப்பிதழ் &bull; INVITATION
            </p>
            <h2 className="font-script text-4xl sm:text-5xl text-[#5C131E] font-normal leading-tight">
              A Heartfelt Invitation
            </h2>
            <GoldFloralDivider className="my-3" />
          </div>

          {/* Bilingual Invitation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-[#4A4237] leading-relaxed text-sm sm:text-base relative z-10">
            
            {/* English Invitation */}
            <div className="flex flex-col justify-center space-y-4 text-center md:text-left border-b md:border-b-0 md:border-r border-[#E8DEC8] pb-6 md:pb-0 md:pr-6">
              <p className="font-sans text-[#2D261E]">
                With grateful hearts and the divine blessings of our beloved families, we are delighted to invite you to celebrate the sacred union of our lives.
              </p>
              <p className="font-sans text-[#5A5044] text-xs sm:text-sm">
                Your presence, blessings and warm wishes will make these treasured moments forever memorable. We look forward to sharing our auspicious traditions and joy with you.
              </p>
            </div>

            {/* Tamil Traditional Invitation */}
            <div className="flex flex-col justify-center space-y-4 text-center md:text-left font-tamil text-[#3D352B] leading-relaxed">
              <p className="text-[#5C131E] font-medium">
                இறைவனின் திருவருளுடனும், எங்கள் குடும்பப் பெரியோர்களின் நல்லாசியுடனும், எங்கள் வாழ்வின் புதிய நற்பயணம் தொடங்கும் இந்த மங்கல நாளில் தங்களை அன்புடன் அழைக்கிறோம்.
              </p>
              <p className="text-[#5A5044] text-xs sm:text-sm">
                தங்களின் மேலான வருகையும், உளம் கனிந்த வாழ்த்துகளும் எங்கள் திருமண விழாவை மேலும் சிறப்பாக்கும் என மகிழ்வோடு வேண்டுகிறோம்.
              </p>
            </div>

          </div>

          {/* Animated Kolam Divider at Bottom */}
          <div className="mt-8 relative z-10">
            <AnimatedKolamDivider />
          </div>

        </div>
      </div>
    </section>
  )
}
