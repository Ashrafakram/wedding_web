import React from 'react'

export const MahalThankYouNote: React.FC = () => {
  return (
    <section className="relative isolate z-10 w-full px-[6%] py-[10%] md:px-[12%] text-center">
      <div className="relative z-10 max-w-[540px] mx-auto p-6 md:p-8 rounded-2xl border border-[#ab7a45]/35 bg-[#fff8f0]/85 shadow-lg">
        <h3
          className="text-xl md:text-2xl font-bold text-[#640e1b] uppercase tracking-wider mb-2"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          Thank You
        </h3>

        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[45%] max-w-[200px] object-contain mb-4"
        />

        <p
          className="text-sm md:text-base text-[#640e1b]/85 leading-relaxed italic mb-4"
          style={{ fontFamily: '"Lora", serif' }}
        >
          &ldquo;With love and gratitude, we invite you to be part of our special day. Your
          presence, blessings, and good wishes will make our celebration even more memorable.&rdquo;
        </p>

        <p
          className="text-sm md:text-base text-[#640e1b]/85 leading-relaxed font-normal mb-6"
          style={{ fontFamily: '"Lora", serif' }}
        >
          Thank you for being a part of our happiness and for showering us with your love and
          blessings. ❤️
        </p>

        <div className="pt-4 border-t border-[#ab7a45]/20 flex flex-col items-center">
          <span
            className="text-2xl md:text-3xl text-[#640e1b]"
            style={{ fontFamily: '"The Nautigal", cursive' }}
          >
            Swetha &amp; Deepak Kumar
          </span>
          <span className="text-xs uppercase tracking-widest text-[#ab7a45] mt-1">
            November 2026 • Salem
          </span>
        </div>
      </div>
    </section>
  )
}

