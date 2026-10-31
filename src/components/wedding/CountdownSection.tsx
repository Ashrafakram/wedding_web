import React, { useState, useEffect } from 'react'
import { Heart, Sparkles } from 'lucide-react'

export function CountdownSection() {
  // Wedding Reception target: 19 November 2026 at 18:00 (6:00 PM IST)
  const targetDate = new Date('2026-11-19T18:00:00+05:30').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="relative my-6 sm:my-8 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#163224] via-[#12281D] to-[#0E1F16] text-[#FBF7F0] py-10 sm:py-16 px-4 sm:px-12 text-center shadow-xl border border-[#2B543D]">
          
          {/* Subtle Background Multi-Shape Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Hanging Diya Lantern Ornaments */}
          <div className="hidden sm:block absolute left-8 top-0 h-32 w-12 pointer-events-none opacity-60">
            <svg viewBox="0 0 40 100" fill="none" className="h-full w-full stroke-[#C59B27]">
              <line x1="20" y1="0" x2="20" y2="70" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="20" cy="76" r="6" fill="#C59B27" />
              <path d="M14 76 Q 20 62 26 76" strokeWidth="1.5" />
              <circle cx="20" cy="72" r="3" fill="#FFE28A" className="animate-pulse" />
            </svg>
          </div>

          <div className="hidden sm:block absolute right-8 top-0 h-32 w-12 pointer-events-none opacity-60">
            <svg viewBox="0 0 40 100" fill="none" className="h-full w-full stroke-[#C59B27]">
              <line x1="20" y1="0" x2="20" y2="70" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="20" cy="76" r="6" fill="#C59B27" />
              <path d="M14 76 Q 20 62 26 76" strokeWidth="1.5" />
              <circle cx="20" cy="72" r="3" fill="#FFE28A" className="animate-pulse" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Title with Heart accents */}
            <div className="flex items-center justify-center gap-2 mb-1">
              <Heart className="size-4 text-[#E7C979] fill-[#E7C979]/40 animate-pulse" />
              <h2 className="font-script text-2xl sm:text-4xl text-[#E7C979] font-normal">
                The Countdown to Our Forever
              </h2>
              <Heart className="size-4 text-[#E7C979] fill-[#E7C979]/40 animate-pulse" />
            </div>
            
            {/* Tamil translation */}
            <p className="font-tamil text-xs sm:text-base text-[#D4C3A3] mb-2 sm:mb-3">
              இரு மனங்கள் இணையும் இனிய நாளை எதிர்நோக்கி...
            </p>

            <p className="text-[11px] sm:text-sm text-[#C4B79F] max-w-lg mx-auto font-light leading-relaxed mb-6 sm:mb-8 px-2">
              Every passing moment brings us closer to a celebration filled with love, blessings, and beautiful memories.
            </p>

            {/* Unique Multi-Shape Countdown Containers (Heart, Circle, Diamond, Star) */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-6 max-w-lg mx-auto items-center">
              
              {/* Shape 1: Heart Container for DAYS */}
              <div className="group relative flex flex-col items-center justify-center aspect-square rounded-[36%_36%_48%_48%/42%_42%_58%_58%] bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] text-[#163224] p-2 sm:p-3 shadow-lg border-2 border-[#D8C7A9] transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-[#163224]">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[8px] sm:text-[10px] font-cinzel uppercase tracking-[0.16em] text-[#C59B27] mt-0.5 font-bold flex items-center gap-0.5">
                  <Heart className="size-2 fill-[#C59B27]" />
                  <span>Days</span>
                </span>
              </div>

              {/* Shape 2: Scalloped Circular Medallion for HOURS */}
              <div className="group relative flex flex-col items-center justify-center aspect-square rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] text-[#163224] p-2 sm:p-3 shadow-lg border-2 border-[#D8C7A9] ring-2 ring-[#C59B27]/25 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-[#163224]">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[8px] sm:text-[10px] font-cinzel uppercase tracking-[0.16em] text-[#6B5E4F] mt-0.5 font-medium">
                  Hours
                </span>
              </div>

              {/* Shape 3: Sculptural Rounded Diamond for MINUTES */}
              <div className="group relative flex flex-col items-center justify-center aspect-square rounded-2xl rotate-45 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] text-[#163224] p-2 sm:p-3 shadow-lg border-2 border-[#D8C7A9] transition-all duration-300 hover:scale-105 active:scale-95">
                <div className="-rotate-45 flex flex-col items-center justify-center">
                  <span className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-[#163224]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] sm:text-[10px] font-cinzel uppercase tracking-[0.16em] text-[#6B5E4F] mt-0.5 font-medium">
                    Mins
                  </span>
                </div>
              </div>

              {/* Shape 4: Octagonal Star Sanctuary for SECONDS */}
              <div className="group relative flex flex-col items-center justify-center aspect-square rounded-3xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] text-[#163224] p-2 sm:p-3 shadow-lg border-2 border-[#D8C7A9] transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="font-serif text-xl sm:text-3xl font-bold tracking-tight text-[#C59B27]">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[8px] sm:text-[10px] font-cinzel uppercase tracking-[0.16em] text-[#6B5E4F] mt-0.5 font-medium flex items-center gap-0.5">
                  <Sparkles className="size-2 text-[#C59B27]" />
                  <span>Secs</span>
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
