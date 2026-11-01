import React, { useState, useEffect } from 'react'
import { Sparkles, ChevronLeft, ChevronRight, Eye, X } from 'lucide-react'
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
      subtitle: 'Swetha & Deepak Reception Art with Lotus Blossoms',
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

  // Keyboard navigation (Esc to close, Left/Right arrows to cycle)
  useEffect(() => {
    if (!activeImage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null)
      } else if (e.key === 'ArrowLeft') {
        const currentIdx = glimpses.findIndex((g) => g.id === activeImage.id)
        const prevIdx = (currentIdx - 1 + glimpses.length) % glimpses.length
        setActiveImage(glimpses[prevIdx])
      } else if (e.key === 'ArrowRight') {
        const currentIdx = glimpses.findIndex((g) => g.id === activeImage.id)
        const nextIdx = (currentIdx + 1) % glimpses.length
        setActiveImage(glimpses[nextIdx])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImage, glimpses])

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
            className="fixed inset-0 z-50 flex flex-col justify-between p-3 sm:p-6 bg-black/92 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setActiveImage(null)}
          >
            {/* Top Bar: Category, Counter & Close Button */}
            <div
              className="w-full max-w-5xl mx-auto flex items-center justify-between z-10 py-1"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[10px] sm:text-xs font-cinzel uppercase tracking-widest text-[#F3D279] bg-[#3E0C13]/90 border border-[#D4AF37]/50 px-3 py-1 rounded-full shadow-md">
                  {activeImage.category}
                </span>
                <span className="text-[11px] font-cinzel text-zinc-400 tracking-wider">
                  {glimpses.findIndex((g) => g.id === activeImage.id) + 1} / {glimpses.length}
                </span>
              </div>

              {/* Prominent Close (X) Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3E0C13]/90 hover:bg-[#5C131E] border border-[#D4AF37]/70 text-[#F3D279] shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title="Close (Esc)"
                aria-label="Close image viewer"
              >
                <X className="size-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-[11px] font-cinzel tracking-wider uppercase font-semibold">
                  Close
                </span>
              </button>
            </div>

            {/* Center Stage: Prev Button + Hero Image + Next Button */}
            <div
              className="relative flex-1 flex items-center justify-center my-2 sm:my-3 w-full max-w-5xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Image Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIdx = glimpses.findIndex((g) => g.id === activeImage.id)
                  const prevIdx = (currentIdx - 1 + glimpses.length) % glimpses.length
                  setActiveImage(glimpses[prevIdx])
                }}
                className="absolute left-1 sm:left-3 z-20 flex items-center justify-center size-10 sm:size-12 rounded-full bg-black/60 hover:bg-[#5C131E] border border-[#D4AF37]/50 text-[#F3D279] backdrop-blur-md shadow-xl hover:scale-110 active:scale-90 transition-all cursor-pointer"
                title="Previous Image (Left Arrow)"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-5 sm:size-6" />
              </button>

              {/* The Hero Image Frame (fits both portrait and landscape beautifully) */}
              <div className="relative max-h-[68vh] sm:max-h-[74vh] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(0,0,0,0.85)] bg-black/40 flex items-center justify-center">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="max-h-[66vh] sm:max-h-[72vh] max-w-[85vw] sm:max-w-[75vw] w-auto h-auto object-contain transition-all duration-300 select-none"
                />
              </div>

              {/* Next Image Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  const currentIdx = glimpses.findIndex((g) => g.id === activeImage.id)
                  const nextIdx = (currentIdx + 1) % glimpses.length
                  setActiveImage(glimpses[nextIdx])
                }}
                className="absolute right-1 sm:right-3 z-20 flex items-center justify-center size-10 sm:size-12 rounded-full bg-black/60 hover:bg-[#5C131E] border border-[#D4AF37]/50 text-[#F3D279] backdrop-blur-md shadow-xl hover:scale-110 active:scale-90 transition-all cursor-pointer"
                title="Next Image (Right Arrow)"
                aria-label="Next image"
              >
                <ChevronRight className="size-5 sm:size-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div
              className="w-full max-w-2xl mx-auto text-center px-4 py-2 rounded-2xl bg-[#3E0C13]/70 backdrop-blur-md border border-[#D4AF37]/30 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-base sm:text-xl text-[#FAF7F0] font-normal leading-snug drop-shadow-sm">
                {activeImage.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#D8CEBF] font-sans mt-0.5 line-clamp-2">
                {activeImage.subtitle}
              </p>
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
