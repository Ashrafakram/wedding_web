import React from 'react'

/**
 * MandapamAestheticTheme Component
 * Infuses the traditional Tamil wedding mandapam watercolor aesthetic
 * (tall arching banana trees, antique brass kuthuvilakku lamps with jasmine garlands,
 * and brass urlis filled with fresh pink rose petals) across the overall website design.
 * Both Left and Right flanks frame the entire webpage with continuous 3D natural swaying.
 */
export function MandapamAestheticTheme() {
  return (
    <div
      className="mandapam-theme-root pointer-events-none select-none z-15"
      aria-hidden="true"
    >
      {/* 0. Full Website Traditional Mandapam Watercolor Art Backdrop */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-22 mix-blend-multiply overflow-hidden">
        <img
          src="/assets/mandapam_watercolor_trad.jpg"
          alt="Traditional Tamil Wedding Mandapam Backdrop"
          className="w-full h-full object-cover object-center filter contrast-105"
        />
        {/* Soft Radial Vignette for Content Readability */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-[#FAF5EB]/50 to-[#FAF5EB]/90" />
      </div>

      {/* 1. Left Flank: Tall Arching Banana Tree & Antique Brass Kuthuvilakku Lamp with 3D Sway */}
      <div className="fixed top-0 left-0 w-32 sm:w-48 md:w-64 lg:w-76 max-w-[32vw] z-10 pointer-events-none opacity-85 sm:opacity-95 mix-blend-multiply transition-opacity duration-700 animate-mandapam-left">
        <img
          src="/assets/mandapam_left_transparent.png"
          alt="Traditional Mandapam Tall Banana Tree & Brass Kuthuvilakku"
          className="w-full h-auto object-contain object-left-top drop-shadow-md filter contrast-105"
          loading="lazy"
        />
      </div>

      {/* 2. Right Flank: Symmetric Tall Banana Tree & Brass Kuthuvilakku Lamp with 3D Sway */}
      <div className="fixed top-0 right-0 w-32 sm:w-48 md:w-64 lg:w-76 max-w-[32vw] z-10 pointer-events-none opacity-85 sm:opacity-95 mix-blend-multiply transition-opacity duration-700 animate-mandapam-right">
        <img
          src="/assets/mandapam_right_mirrored.png"
          alt="Traditional Mandapam Tall Banana Tree & Brass Lamp Right Flank"
          className="w-full h-auto object-contain object-right-top drop-shadow-md filter contrast-105"
          loading="lazy"
        />
      </div>

      {/* 3. Bottom Left Accent: Brass Urli with Pink Rose Petals & Floor Kolam */}
      <div className="fixed bottom-0 left-0 w-36 sm:w-56 md:w-72 max-w-[42vw] z-10 pointer-events-none opacity-90 mix-blend-multiply drop-shadow-lg animate-urli-glow">
        <img
          src="/assets/mandapam_urli_transparent.png"
          alt="Auspicious Brass Urli with Pink Rose Petals"
          className="w-full h-auto object-contain object-left-bottom"
          loading="lazy"
        />
      </div>

      {/* 4. Bottom Right Accent: Auspicious Brass Urli with Pink Rose Petals */}
      <div className="fixed bottom-0 right-0 w-36 sm:w-56 md:w-72 max-w-[42vw] z-10 pointer-events-none opacity-85 mix-blend-multiply drop-shadow-lg animate-urli-glow">
        <img
          src="/assets/mandapam_urli_right.png"
          alt="Auspicious Brass Urli Right Accent"
          className="w-full h-auto object-contain object-right-bottom"
          loading="lazy"
        />
      </div>

      {/* 5. Subtle Handcrafted Watercolor Paper Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-12 mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(#C59B27 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  )
}

export default MandapamAestheticTheme
