import React, { useState, useEffect } from 'react'
import { Sparkles, Heart } from 'lucide-react'
import { Countdown3DCard } from './Countdown3DCard'

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
    <section id="countdown" className="relative my-8 sm:my-14 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#4A0E17] via-[#5C131E] to-[#380A11] text-[#FFFDF8] py-12 sm:py-18 px-3 sm:px-12 text-center shadow-[0_25px_60px_-15px_rgba(62,12,19,0.7),0_0_35px_rgba(197,155,39,0.3)] border-2 border-[#D4AF37]/60">
          
          {/* Subtle Silk Pattern Background Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#F3D279_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Hanging Traditional Brass Diya Lanterns with Animated Flickering Flames */}
          <div className="hidden sm:block absolute left-8 top-0 h-40 w-14 pointer-events-none z-10">
            <svg viewBox="0 0 40 100" fill="none" className="h-full w-full">
              <line x1="20" y1="0" x2="20" y2="65" stroke="#C59B27" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M12 70 Q 20 85 28 70 Z" fill="#9A7516" stroke="#F3D279" strokeWidth="1" />
              {/* Animated Diya Flame */}
              <ellipse cx="20" cy="62" rx="4" ry="7" fill="#F3D279" className="animate-diya-flame" />
              <circle cx="20" cy="62" r="2.5" fill="#FFF2BD" />
            </svg>
          </div>

          <div className="hidden sm:block absolute right-8 top-0 h-40 w-14 pointer-events-none z-10">
            <svg viewBox="0 0 40 100" fill="none" className="h-full w-full">
              <line x1="20" y1="0" x2="20" y2="65" stroke="#C59B27" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M12 70 Q 20 85 28 70 Z" fill="#9A7516" stroke="#F3D279" strokeWidth="1" />
              <ellipse cx="20" cy="62" rx="4" ry="7" fill="#F3D279" className="animate-diya-flame" />
              <circle cx="20" cy="62" r="2.5" fill="#FFF2BD" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Header */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-[#F3D279]/30 mb-2">
              <Sparkles className="size-3 text-[#F3D279] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-cinzel uppercase tracking-[0.22em] text-[#F3D279] font-bold">
                Together Soon
              </span>
            </div>

            <h2 className="font-script text-3xl sm:text-5xl text-[#F3D279] font-normal mb-1">
              The Countdown to Our Forever
            </h2>
            
            <p className="font-tamil text-sm sm:text-base text-amber-200/90 mb-2 sm:mb-3">
              மங்கல நாளை எதிர்நோக்கி...
            </p>

            <p className="text-[11px] sm:text-sm text-zinc-300 max-w-lg mx-auto font-light leading-relaxed mb-6 sm:mb-8 px-2">
              Every passing second brings us closer to a joyous celebration of sacred love, family traditions, and everlasting memories.
            </p>

            {/* 3D Animated Countdown Grid with Physical Bevel & Flip Animations */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-2xl mx-auto my-3">
              <Countdown3DCard
                label="Days"
                tamilLabel="நாட்கள்"
                value={timeLeft.days}
              />
              <Countdown3DCard
                label="Hours"
                tamilLabel="மணி"
                value={timeLeft.hours}
              />
              <Countdown3DCard
                label="Minutes"
                tamilLabel="நிமிடம்"
                value={timeLeft.minutes}
              />
              <Countdown3DCard
                label="Seconds"
                tamilLabel="நொடி"
                value={timeLeft.seconds}
                isSeconds={true}
              />
            </div>

            {/* Heart Blessing Line */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#F3D279]/90 font-cinzel tracking-wider">
              <Heart className="size-3 text-[#F3D279] fill-[#F3D279] animate-pulse" />
              <span>19 & 20 November 2026 &bull; Salem (Ammapettai)</span>
              <Heart className="size-3 text-[#F3D279] fill-[#F3D279] animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CountdownSection
