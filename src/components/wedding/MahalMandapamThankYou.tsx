import React from 'react'

export const MahalMandapamThankYou: React.FC = () => {
  return (
    <div className="relative isolate z-10 w-full overflow-hidden">
      {/* Full-bleed authentic traditional temple mandapam artwork seamlessly matching the page */}
      <div className="relative w-full">
        <img
          src="/images/themes/mahal-gold/traditional_couple_mandapam.jpg"
          alt="Swetha & Deepak Kumar - Traditional Wedding Blessing"
          className="w-full h-auto object-cover block"
          loading="eager"
        />

        {/* Soft top blend overlay matching page background */}
        <div
          className="absolute top-0 inset-x-0 h-16 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(253, 247, 238, 0.6) 0%, rgba(253, 247, 238, 0.15) 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Traditional Vanakkam (Namaste) Mandala Greeting Motif */}
      <div className="relative z-10 -mt-4 sm:-mt-6 pb-12 text-center flex flex-col items-center justify-center">
        <img
          src="/images/themes/mahal-gold/vanakkam_mandala.png"
          alt="Traditional Vanakkam Greeting"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-[0_4px_16px_rgba(171,122,69,0.3)] select-none pointer-events-none hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default MahalMandapamThankYou
