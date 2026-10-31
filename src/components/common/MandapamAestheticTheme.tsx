import React from 'react'

/**
 * MandapamAestheticTheme Component
 * Infuses the traditional Tamil wedding mandapam watercolor aesthetic
 * (tall arching banana trees, antique brass kuthuvilakku lamps with jasmine garlands,
 * and brass urlis filled with fresh pink rose petals) across the overall website design.
 */
export function MandapamAestheticTheme() {
  return (
    <div
      className="mandapam-theme-root pointer-events-none select-none z-15"
      aria-hidden="true"
    >
      {/* 1. Left Flank: Tall Arching Banana Tree & Antique Brass Kuthuvilakku Lamp */}
      <div className="fixed top-0 left-0 w-28 sm:w-44 md:w-56 lg:w-64 max-w-[28vw] z-10 pointer-events-none opacity-70 sm:opacity-85 mix-blend-multiply transition-opacity duration-700">
        <img
          src="/assets/mandapam_left_transparent.png"
          alt="Traditional Mandapam Tall Banana Tree & Brass Kuthuvilakku"
          className="w-full h-auto object-contain object-left-top drop-shadow-sm filter contrast-105"
          loading="lazy"
        />
      </div>

      {/* 2. Right Flank: Lush Banana Grove & Terracotta Rose Bowls (Mirrored Balance) */}
      <div className="fixed top-0 right-0 w-28 sm:w-44 md:w-56 lg:w-64 max-w-[28vw] z-10 pointer-events-none opacity-65 sm:opacity-80 mix-blend-multiply transition-opacity duration-700 -scale-x-100">
        <img
          src="/assets/mandapam_left_transparent.png"
          alt="Traditional Mandapam Foliage & Lamp Right Accent"
          className="w-full h-auto object-contain object-left-top drop-shadow-sm filter contrast-105"
          loading="lazy"
        />
      </div>

      {/* 3. Bottom Corner Accent: Brass Urli with Pink Rose Petals & Floor Kolam */}
      <div className="fixed bottom-0 left-0 w-36 sm:w-56 md:w-72 max-w-[40vw] z-10 pointer-events-none opacity-80 mix-blend-multiply drop-shadow-md">
        <img
          src="/assets/mandapam_urli_transparent.png"
          alt="Auspicious Brass Urli with Pink Rose Petals"
          className="w-full h-auto object-contain object-left-bottom"
          loading="lazy"
        />
      </div>

      {/* 4. Bottom Right Mirror Urli Flower Bowl */}
      <div className="fixed bottom-0 right-0 w-36 sm:w-56 md:w-72 max-w-[40vw] z-10 pointer-events-none opacity-75 mix-blend-multiply drop-shadow-md -scale-x-100">
        <img
          src="/assets/mandapam_urli_transparent.png"
          alt="Auspicious Brass Urli Right Accent"
          className="w-full h-auto object-contain object-left-bottom"
          loading="lazy"
        />
      </div>

      {/* 5. Subtle Handcrafted Watercolor Paper Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15 mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(#C59B27 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  )
}

export default MandapamAestheticTheme
