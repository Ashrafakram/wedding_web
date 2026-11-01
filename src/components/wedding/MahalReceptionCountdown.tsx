import React, { useState, useEffect } from 'react'
import { downloadWeddingCalendarEvent, getGoogleCalendarUrl } from '@/lib/calendar'

interface MahalReceptionCountdownProps {
  onRsvpClick: () => void
}

export const MahalReceptionCountdown: React.FC<MahalReceptionCountdownProps> = ({
  onRsvpClick,
}) => {
  // Target: November 19, 2026, 18:00 IST
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
      const diff = targetDate - now

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  // Calendar for November 2026:
  // Nov 1, 2026 is Sunday!
  // Days in Nov 2026 = 30 days
  // Su Mo Tu We Th Fr Sa
  //  1  2  3  4  5  6  7
  //  8  9 10 11 12 13 14
  // 15 16 17 18 19 20 21
  // 22 23 24 25 26 27 28
  // 29 30
  const daysInNov = Array.from({ length: 30 }, (_, i) => i + 1)
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  return (
    <section className="relative isolate z-10 w-full px-[6%] py-[8%] md:px-[12%]">
      <div className="relative z-10 max-w-[560px] mx-auto text-center flex flex-col items-center">
        <span
          className="text-xs uppercase tracking-widest text-[#ab7a45] font-semibold block mb-1"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          Counting Down To The Big Day
        </span>
        <h2
          className="text-[22px] md:text-[28px] font-bold text-[#640e1b] uppercase tracking-[0.05em] mb-3"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          WEDDING RECEPTION
        </h2>

        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[55%] max-w-[260px] object-contain mb-6"
        />

        {/* Live Countdown Display */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 my-4 w-full">
          <div className="flex flex-col items-center">
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#640e1b]"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              {timeLeft.days}
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#ab7a45] mt-1">
              Days
            </span>
          </div>

          <div className="h-8 w-[1px] bg-[#ab7a45]/40" />

          <div className="flex flex-col items-center">
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#640e1b]"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#ab7a45] mt-1">
              Hours
            </span>
          </div>

          <div className="h-8 w-[1px] bg-[#ab7a45]/40" />

          <div className="flex flex-col items-center">
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#640e1b]"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#ab7a45] mt-1">
              Mins
            </span>
          </div>

          <div className="h-8 w-[1px] bg-[#ab7a45]/40" />

          <div className="flex flex-col items-center">
            <span
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#640e1b]"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#ab7a45] mt-1">
              Secs
            </span>
          </div>
        </div>

        {/* Royal Calendar Frame */}
        <div
          className="relative mx-auto mt-7 w-full max-w-[320px] md:max-w-[420px]"
          style={{ aspectRatio: '359/339' }}
        >
          {/* Background Frame Texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/themes/mahal-gold/calendar-frame.webp)',
            }}
          />

          {/* Calendar Grid Container */}
          <div className="relative flex h-full w-full flex-col items-center justify-center px-[12%] py-[10%]">
            <h4
              className="text-sm md:text-base font-bold text-[#640e1b] uppercase tracking-wider mb-2"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              November 2026
            </h4>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-1 w-full text-center mb-1">
              {weekdays.map((wd) => (
                <span key={wd} className="text-[10px] md:text-xs font-semibold text-[#ab7a45]">
                  {wd}
                </span>
              ))}
            </div>

            {/* Month Days */}
            <div className="grid grid-cols-7 gap-1 w-full text-center">
              {daysInNov.map((day) => {
                const isReception = day === 19
                const isMuhurtham = day === 20

                return (
                  <div key={day} className="flex items-center justify-center p-0.5">
                    <span
                      className={`text-[11px] md:text-[13px] font-medium w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full transition-all ${
                        isMuhurtham
                          ? 'bg-[#640e1b] text-white font-bold shadow-md scale-110'
                          : isReception
                          ? 'bg-[#ab7a45] text-white font-bold shadow-sm'
                          : 'text-[#640e1b]/80'
                      }`}
                    >
                      {day}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Add to Calendar Link */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm">
          <button
            type="button"
            onClick={downloadWeddingCalendarEvent}
            className="font-medium text-[#ab7a45] hover:text-[#640e1b] underline underline-offset-4 transition-colors"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Download Calendar (.ics)
          </button>
          <span className="text-[#ab7a45]/50">•</span>
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#ab7a45] hover:text-[#640e1b] underline underline-offset-4 transition-colors"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Google Calendar
          </a>
        </div>

        {/* RSVP Pill Button */}
        <button
          type="button"
          onClick={onRsvpClick}
          className="mt-6 md:mt-8 px-8 py-2.5 text-sm md:text-base font-semibold text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: '#640e1b',
            boxShadow: '0 4px 16px rgba(100, 14, 27, 0.4)',
            fontFamily: '"EB Garamond", serif',
          }}
        >
          RSVP Now / உறுதிப்படுத்துக
        </button>
      </div>
    </section>
  )
}

