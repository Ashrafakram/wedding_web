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
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#7E2E40] via-[#5C1D2A] to-[#43121D] text-[#FFFDF8] py-10 sm:py-16 px-4 sm:px-12 text-center shadow-2xl border border-[#E8C5CB]/60">
          
          {/* Subtle Temple Gopuram & Lantern Background Silhouette */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Hanging Diya Lantern Ornaments on Left & Right with Sacred Flame Flicker */}
          <div className="hidden sm:block absolute left-8 top-0 h-36 w-14 pointer-events-none z-10">
            <svg viewBox="0 0 40 110" fill="none" className="h-full w-full">
              {/* Hanging Brass Chain */}
              <line x1="20" y1="0" x2="20" y2="72" stroke="#C59B27" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.8" />
              {/* Brass Diya Bowl */}
              <path d="M12 80 Q 20 92 28 80 Z" fill="#9A7516" stroke="#C59B27" strokeWidth="1.2" />
              <ellipse cx="20" cy="80" rx="8" ry="2.5" fill="#E8C86A" />
              {/* Warm Flame Glow Halo */}
              <circle cx="20" cy="74" r="10" className="diya-halo" fill="#FFB347" opacity="0.6" />
              {/* Organic Flickering Sacred Flame */}
              <path
                d="M20 66 C17 72, 16 76, 20 80 C24 76, 23 72, 20 66 Z"
                fill="url(#diyaFlameGradLeft)"
                className="animate-flame origin-bottom"
              />
              <defs>
                <linearGradient id="diyaFlameGradLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="35%" stopColor="#FFC837" />
                  <stop offset="85%" stopColor="#FF6B00" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="hidden sm:block absolute right-8 top-0 h-36 w-14 pointer-events-none z-10">
            <svg viewBox="0 0 40 110" fill="none" className="h-full w-full">
              {/* Hanging Brass Chain */}
              <line x1="20" y1="0" x2="20" y2="72" stroke="#C59B27" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.8" />
              {/* Brass Diya Bowl */}
              <path d="M12 80 Q 20 92 28 80 Z" fill="#9A7516" stroke="#C59B27" strokeWidth="1.2" />
              <ellipse cx="20" cy="80" rx="8" ry="2.5" fill="#E8C86A" />
              {/* Warm Flame Glow Halo */}
              <circle cx="20" cy="74" r="10" className="diya-halo" fill="#FFB347" opacity="0.6" />
              {/* Organic Flickering Sacred Flame */}
              <path
                d="M20 66 C17 72, 16 76, 20 80 C24 76, 23 72, 20 66 Z"
                fill="url(#diyaFlameGradRight)"
                className="animate-flame origin-bottom"
              />
              <defs>
                <linearGradient id="diyaFlameGradRight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="35%" stopColor="#FFC837" />
                  <stop offset="85%" stopColor="#FF6B00" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Title */}
            <h2 className="font-script text-3xl sm:text-5xl text-[#F3D279] font-normal mb-1">
              The Countdown to Our Forever
            </h2>
            
            {/* Tamil translation */}
            <p className="font-tamil text-sm sm:text-base text-[#F7D6DC] mb-2 sm:mb-3 font-medium">
              இனிய நாளை எதிர்நோக்கி...
            </p>

            <p className="text-[11px] sm:text-sm text-[#F9E8EC] max-w-lg mx-auto font-light leading-relaxed mb-6 sm:mb-8 px-2">
              Every passing moment brings us closer to a celebration filled with love, blessings, and beautiful memories.
            </p>

            {/* Countdown Grid (Days, Hours, Minutes, Seconds) */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-6 max-w-lg mx-auto">
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className="group relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EE] text-[#7E2E40] py-3.5 sm:py-5 px-1.5 sm:px-2 shadow-lg border-2 border-[#E8C5CB] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_10px_25px_rgba(212,175,55,0.3)] active:scale-95"
                >
                  <span className="font-serif text-2xl sm:text-4xl font-semibold tracking-tight text-[#7E2E40] group-hover:text-[#9A7516] transition-colors">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-xs font-cinzel uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#8C3A4F] mt-0.5 sm:mt-1 font-semibold">
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
