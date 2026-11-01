import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const GALLERY_IMAGES = [
  {
    src: '/images/gallery/couple-1.jpg',
    alt: 'Swetha & Deepak Kumar in Traditional Silk Attire',
    caption: 'Moments of Love & Devotion',
  },
  {
    src: '/images/gallery/couple-2.jpg',
    alt: 'Swetha & Deepak Kumar Elegant Portrait',
    caption: 'Together Forever',
  },
  {
    src: '/images/gallery/couple-3.jpg',
    alt: 'Swetha & Deepak Kumar Wedding Portrait',
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
          PHOTO GALLERY
        </h2>

        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[55%] max-w-[260px] object-contain mb-8"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl border border-[#ab7a45]/30 bg-[#ab7a45]/5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#ab7a45] hover:-translate-y-1"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium truncate">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-3xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[selectedIdx].src}
              alt={GALLERY_IMAGES[selectedIdx].alt}
              className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl object-contain border border-[#ab7a45]/40"
            />
            <p className="text-white/90 text-sm md:text-base mt-3 font-medium">
              {GALLERY_IMAGES[selectedIdx].caption}
            </p>
            <span className="text-white/60 text-xs mt-1">
              {selectedIdx + 1} of {GALLERY_IMAGES.length}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

