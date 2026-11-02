import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const GALLERY_IMAGES = [
  {
    src: '/images/gallery/couple-1.jpg',
    alt: 'Swetha & Deepak Kumar in Traditional Silk Attire',
    caption: 'Moments of Love & Devotion',
  },
  {
    src: '/images/gallery/couple-3.jpg',
    alt: 'Swetha & Deepak Kumar Wedding Celebration',
    caption: 'A Beautiful New Beginning',
  },
]

export const MahalPhotoGallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % GALLERY_IMAGES.length)
    }
  }

  return (
    <section className="relative isolate z-10 w-full px-[6%] py-[8%] md:px-[12%]">
      <div className="relative z-10 max-w-[680px] mx-auto text-center">
        <span
          className="text-xs uppercase tracking-widest text-[#ab7a45] font-semibold block mb-1"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          Cherished Moments
        </span>
        <h2
          className="text-[22px] md:text-[28px] font-bold text-[#640e1b] uppercase tracking-[0.05em] mb-3"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Photo Gallery
        </h2>

        {/* Delicate Ornamental Line */}
        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[45%] max-w-[200px] object-contain mb-6"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[#ab7a45]/35 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-serif italic">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedIdx(null)}
            className="absolute top-4 right-4 text-white hover:text-[#ffd700] transition-colors p-2"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ffd700] transition-colors p-2 bg-black/30 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="max-w-[85vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[selectedIdx].src}
              alt={GALLERY_IMAGES[selectedIdx].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-[#ab7a45]/50"
            />
            <p className="text-white text-sm mt-3 font-serif italic text-center">
              {GALLERY_IMAGES[selectedIdx].caption}
            </p>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ffd700] transition-colors p-2 bg-black/30 rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  )
}

export default MahalPhotoGallery
