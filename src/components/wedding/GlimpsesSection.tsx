import React, { useState } from 'react'
import { Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { GoldFloralDivider, AnimatedKolamDivider } from '@/components/common/Ornaments'
import { Card3DTilt } from '@/components/common/Card3DTilt'

interface GlimpseItem {
  id: string
  title: string
  subtitle: string
  src: string
  category: string
}

export function GlimpsesSection() {
  const glimpses: GlimpseItem[] = [
    {
      id: 'reception_pink',
      title: 'Tender Cheek Pinch in Dusty Pink Attire',
      subtitle: 'Deepak & Swetha Reception Art with Lotus Blossoms',
      src: '/assets/reception_couple_pinch_pink.jpg',
      category: 'Reception Artwork',
    },
    {
      id: 'reception_arch',
      title: 'Royal Mandapam Gateway Reception Card',
      subtitle: 'Walking up the Floral Steps in Blush Pink Lehenga & Sherwani',
      src: '/assets/reception_royal_arch_card.jpg',
      category: 'Invitation Card',
    },
    {
      id: 'mandapam_decor',
      title: 'Traditional Tamil Mandapam Decor',
      subtitle: 'Tall Brass Kuthuvilakku, Banana Plants & Rose Petal Urli',
      src: '/assets/mandapam_watercolor_trad.jpg',
      category: 'Sacred Mandapam',
    },
    {
      id: 'avvs',
      title: 'AVVS Mahal Convention Center',
      subtitle: 'Ammapet, Salem — Grand Reception & Feast Venue',
      src: '/assets/avvs_mahal_exterior.jpg',
      category: 'Venue & Architecture',
    },
    {
      id: 'temple',
      title: 'Arulmigu Senraya Perumal Temple',
      subtitle: 'Odayapatti, Salem — Sacred Muhurtham Gateway',
      src: '/assets/senraya_entrance.jpg',
      category: 'Divine Abode',
    },
    {
      id: 'save_date',
      title: 'Save The Date Loving Moment',
      subtitle: 'Swetha & Deepak Kumar — Two Hearts Bound Forever',
      src: '/assets/save_the_date_cheek_touch.jpg',
      category: 'Save The Date',
    },
  ]

  const [activeImage, setActiveImage] = useState<GlimpseItem | null>(null)

  return (
    <section id="gallery" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF5EB]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-xs font-cinzel tracking-[0.3em] uppercase text-[#5C131E] font-bold mb-1">
            SACRED MEMORIES &amp; VENUES
          </p>
          <h2 className="font-script text-4xl sm:text-6xl text-[#5C131E] font-normal leading-tight">
            Glimpses of Our Celebration
          </h2>
          <p className="text-[11px] sm:text-xs font-cinzel tracking-[0.2em] uppercase text-[#7A6B5C] font-semibold mt-1">
            திருமண நினைவுகள் &bull; A Visual Journey
          </p>
          <GoldFloralDivider className="my-2" />
        </div>

        {/* Gallery Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {glimpses.map((item) => (
            <Card3DTilt
              key={item.id}
              maxTiltDeg={10}
              scaleOnHover={1.025}
              glareOpacity={0.28}
              onClick={() => setActiveImage(item)}
              className="cursor-pointer h-full"
            >
              <div
                className="group relative h-full rounded-2xl overflow-hidden shadow-md border-2 border-[#C59B27]/40 bg-[#FFFDF9] hover-card-glow transition-all duration-500"
              >
                {/* Photo */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#FAF0EE]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Dark Silk Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0C13]/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Category Pill on Top */}
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-cinzel uppercase tracking-wider text-[#F3D279] bg-[#3E0C13]/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#F3D279]/40 shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Click to expand hint icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="size-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Eye className="size-3.5 text-[#F3D279]" />
                  </div>
                </div>

                {/* Title & Subtitle at Bottom */}
                <div className="absolute bottom-3 inset-x-3 text-left">
                  <h3 className="font-serif text-base sm:text-lg text-white font-normal leading-snug drop-shadow-sm group-hover:text-[#F3D279] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-300 font-sans truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </Card3DTilt>
          ))}
        </div>

        {/* Modal Lightbox for Full View */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-backdrop-in"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#3E0C13] rounded-3xl overflow-hidden border-2 border-[#C59B27] shadow-2xl p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[70vh] rounded-2xl overflow-hidden mb-4 border border-[#F3D279]/30">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="w-full h-full object-contain max-h-[70vh] mx-auto"
                />
              </div>

              <div className="text-center">
                <p className="text-[10px] font-cinzel uppercase tracking-widest text-[#F3D279]">
                  {activeImage.category}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mt-0.5">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1 max-w-md mx-auto">
                  {activeImage.subtitle}
                </p>

                <button
                  onClick={() => setActiveImage(null)}
                  className="mt-4 px-6 py-2 rounded-full bg-[#5C131E] border border-[#F3D279] text-[#F3D279] font-cinzel text-xs uppercase tracking-wider hover:bg-[#7A1D2B] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Animated Kolam at Bottom */}
        <div className="mt-12">
          <AnimatedKolamDivider />
        </div>

      </div>
    </section>
  )
}
