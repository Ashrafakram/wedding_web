import React, { useState, useEffect } from 'react'

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

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section className="relative my-6 sm:my-8 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#163224] via-[#12281D] to-[#0E1F16] text-[#FBF7F0] py-10 sm:py-16 px-4 sm:px-12 text-center shadow-xl border border-[#2B543D]">
          
          {/* Subtle Temple Gopuram & Lantern Background Silhouette */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Hanging Diya Lantern Ornaments on Left & Right */}
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
            {/* Title */}
            <h2 className="font-script text-2xl sm:text-4xl text-[#E7C979] font-normal mb-1">
              The Countdown to Our Forever
            </h2>
            
            {/* Tamil translation */}
            <p className="font-tamil text-xs sm:text-base text-[#D4C3A3] mb-2 sm:mb-3">
              இனிய நாளை எதிர்நோக்கி...
            </p>

            <p className="text-[11px] sm:text-sm text-[#C4B79F] max-w-lg mx-auto font-light leading-relaxed mb-6 sm:mb-8 px-2">
              Every passing moment brings us closer to a celebration filled with love, blessings, and beautiful memories.
            </p>

            {/* Countdown Grid (Days, Hours, Minutes, Seconds) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-lg mx-auto">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="group relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl bg-[#FFFDF9] text-[#163224] py-3 sm:py-5 px-1 sm:px-2 shadow-md border border-[#E9DFC9] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                  <span className="font-serif text-xl sm:text-4xl font-semibold tracking-tight text-[#163224]">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs font-cinzel uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#6B5E4F] mt-0.5 sm:mt-1 font-medium">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
