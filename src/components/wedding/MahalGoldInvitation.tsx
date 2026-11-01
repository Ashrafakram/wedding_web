import React, { useState, useEffect, useRef } from 'react'
import { ModernWeddingEvents } from './ModernWeddingEvents'
import { MahalMandapamThankYou } from './MahalMandapamThankYou'

// Set to false to instantly revert to the original castle footer
const SHOW_TRADITIONAL_MANDAPAM_THANK_YOU = true

interface MahalGoldInvitationProps {
  onRsvpClick: () => void
}

interface Wish {
  id: string
  name: string
  message: string
  date: string
}

const GALLERY_IMAGES = [
  {
    src: '/images/gallery/couple-1.jpg',
    alt: 'Swetha & Deepak Kumar Wedding Save The Date',
  },
  {
    src: '/images/gallery/couple-2.jpg',
    alt: 'Swetha & Deepak Kumar Loving Portrait',
  },
  {
    src: '/images/gallery/couple-3.jpg',
    alt: 'Swetha & Deepak Kumar Wedding Celebration',
  },
]

export const MahalGoldInvitation: React.FC<MahalGoldInvitationProps> = ({ onRsvpClick }) => {
  // Parallax scroll state
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 3D Perspective Card Carousel State
  const [activePhotoIdx, setActivePhotoIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)
  const [isCarouselHovered, setIsCarouselHovered] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const handleNextPhoto = () => {
    setActivePhotoIdx((prev) => (prev + 1) % GALLERY_IMAGES.length)
  }

  const handlePrevPhoto = () => {
    setActivePhotoIdx((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
  }

  // Automatic photo shift every 3.5 seconds
  useEffect(() => {
    if (lightboxOpen || isCarouselHovered) return
    const autoShiftTimer = setInterval(() => {
      setActivePhotoIdx((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 3500)
    return () => clearInterval(autoShiftTimer)
  }, [lightboxOpen, isCarouselHovered])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) handleNextPhoto()
    else if (diff < -40) handlePrevPhoto()
    touchStartX.current = null
  }

  // Countdown timer to November 19, 2026, 18:00 (Reception Commencement)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date('2026-11-19T18:00:00+05:30').getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const diff = target - now
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Guestbook wishes
  const [wishes, setWishes] = useState<Wish[]>(() => {
    try {
      const saved = localStorage.getItem('swetha_deepak_guestbook')
      if (saved) return JSON.parse(saved)
    } catch {}
    return []
  })
  const [guestName, setGuestName] = useState('')
  const [guestMsg, setGuestMsg] = useState('')

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!guestName.trim() || !guestMsg.trim()) return
    const newWish: Wish = {
      id: Date.now().toString(),
      name: guestName.trim(),
      message: guestMsg.trim(),
      date: 'Just now',
    }
    const updated = [newWish, ...wishes]
    setWishes(updated)
    try {
      localStorage.setItem('swetha_deepak_guestbook', JSON.stringify(updated))
    } catch {}
    setGuestName('')
    setGuestMsg('')
  }

  // Days in Nov 2026 (Nov 1 is Sunday)
  const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  // Nov 1 = Sun, so in Mo-Su order, Sunday is col 7 (empty 6 slots before Nov 1)
  const calendarPadding = 6
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div className="flex w-full justify-center overflow-x-clip bg-transparent overflow-clip scrollbar-none" data-testid="mahal-gold-template">
      {/* Root Card Container with exact width max-w-[480px] md:max-w-[900px] */}
      <div
        data-showcase-root=""
        className="relative w-full max-w-[480px] md:max-w-[900px] md:mx-auto overflow-hidden md:border-x md:border-[#ab7a4533] isolate !overflow-hidden shadow-2xl"
        style={{ backgroundColor: '#f7e3cd', color: '#ab7a45' }}
      >
        {/* Paper Texture Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 mix-blend-darken"
          style={{
            backgroundImage: 'url(/images/themes/mahal-gold/paper.webp)',
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat-y',
            opacity: 0.4,
          }}
        />

        {/* ======================================================== */}
        {/* SECTION 1: HERO ARCH, BELLS, FLOWERS, GANESHA, COUPLE   */}
        {/* ======================================================== */}
        <section dir="ltr" className="relative isolate w-full overflow-hidden pt-[13.2%] pb-[16.6%]">
          <div className="relative mx-auto w-full max-w-[480px] md:max-w-[680px]">
            {/* Bells */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[1.4%] mt-[-17.9%] z-[2] w-[32.7%]"
              style={{
                aspectRatio: '1086/1448',
                backgroundImage: 'url(/images/themes/mahal-gold/bells.webp)',
              }}
            />

            {/* Marigold Garland Top Right */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 md:top-[-5%] left-[40.6%] mt-[-17.5%] z-[3] w-[77.1%] md:w-[90%]"
              style={{
                aspectRatio: '1',
                backgroundImage: 'url(/images/themes/mahal-gold/flower1.webp)',
              }}
            />

            {/* Center Royal Arch Frame */}
            <div className="relative mx-auto w-[96.1%]" style={{ aspectRatio: '424/529' }}>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-contain bg-center bg-no-repeat opacity-[0.54]"
                style={{
                  backgroundImage: 'url(/images/themes/mahal-gold/arch-frame.webp)',
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[20.0%] w-[13.7%] -translate-x-1/2 bg-contain bg-center bg-no-repeat"
                style={{
                  aspectRatio: '579/699',
                  backgroundImage: 'url(/images/themes/mahal-gold/ganesha.webp)',
                }}
              />
              <div className="absolute left-1/2 top-[43.9%] z-20 flex w-[68%] -translate-x-1/2 flex-col items-center gap-[1.2%] text-center leading-[1.15]">
                <div className="w-full">
                  <span
                    className="inline-block"
                    style={{
                      fontFamily: '"The Nautigal", ChungDoiIndic, cursive',
                      color: '#640e1b',
                      fontSize: 'clamp(30px, 12.5vw, 55px)',
                    }}
                  >
                    Swetha
                  </span>
                </div>
                <span
                  className="block"
                  style={{
                    fontFamily: '"Alex Brush", "The Nautigal", ChungDoiIndic, cursive',
                    color: '#640e1b',
                    fontSize: 'clamp(18px, 6.8vw, 30px)',
                  }}
                >
                  &amp;
                </span>
                <div className="w-full">
                  <span
                    className="inline-block"
                    style={{
                      fontFamily: '"The Nautigal", ChungDoiIndic, cursive',
                      color: '#640e1b',
                      fontSize: 'clamp(30px, 12.5vw, 55px)',
                    }}
                  >
                    Deepak Kumar
                  </span>
                </div>
              </div>
            </div>

            {/* Castle, Sandstone, Flowers and Fence Layers */}
            <div className="relative z-0 mt-[-59.6%] w-full" style={{ aspectRatio: '441/546' }}>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[74.8%] top-0 z-[2] w-[55.8%]"
                style={{
                  aspectRatio: '808/1402',
                  backgroundImage: 'url(/images/themes/mahal-gold/sandstone.webp)',
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[-25.9%] top-[13.4%] z-[1] w-[176.6%]"
                style={{
                  aspectRatio: '1635/962',
                  backgroundImage: 'url(/images/themes/mahal-gold/castle.webp)',
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[54.6%] md:left-[70%] top-[60.6%] z-[4] w-[47.6%]"
                style={{
                  aspectRatio: '1',
                  backgroundImage: 'url(/images/themes/mahal-gold/flower2.webp)',
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bg-contain bg-center bg-no-repeat right-[54.6%] md:right-[70%] top-[60.6%] z-[4] w-[47.6%]"
                style={{
                  aspectRatio: '1',
                  backgroundImage: 'url(/images/themes/mahal-gold/flower2.webp)',
                  transform: 'scaleX(-1)',
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bg-contain bg-center bg-no-repeat left-1/2 top-[75.5%] z-[3] w-[58.5%] -translate-x-1/2"
                style={{
                  aspectRatio: '1774/887',
                  backgroundImage: 'url(/images/themes/mahal-gold/fence.webp)',
                }}
              />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 2: CEREMONY INFO, FAMILY, AND TWO EVENTS         */}
        {/* ======================================================== */}
        <section className="relative isolate z-10 w-full px-[8.5%] pt-[5.2%] md:px-[12%] md:pt-[5.2%]">
          {/* Parallax Castle 2 Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat -z-10 opacity-10 top-0 left-[-18.8%] mt-[12.0%] w-[244%] md:w-[170%]"
            style={{
              willChange: 'transform',
              aspectRatio: '1448/1086',
              backgroundImage: 'url(/images/themes/mahal-gold/castle2.webp)',
              transform: `translateY(${scrollY * 0.08}px)`,
            }}
          />
          {/* Top Pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[6.1%] mt-[-9.5%] z-[1] w-[87.5%]"
            style={{
              aspectRatio: '1302/253',
              backgroundImage: 'url(/images/themes/mahal-gold/pattern.webp)',
            }}
          />
          {/* Parallax Sandstone Flower Left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[-40%] md:left-[-23%] mt-[15.6%] z-[1] w-[56.7%] md:w-[42%]"
            style={{
              willChange: 'transform',
              aspectRatio: '837/1843',
              backgroundImage: 'url(/images/themes/mahal-gold/sandstone-flower.webp)',
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          />
          {/* Parallax Flower 3 Decoration Right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[80%] mt-[61.0%] z-[1] w-[52.4%] md:w-[40%]"
            style={{
              willChange: 'transform',
              aspectRatio: '806/1254',
              backgroundImage: 'url(/images/themes/mahal-gold/flower3-decoration.webp)',
              transform: `translateY(${-scrollY * 0.035}px)`,
            }}
          />

          <div className="relative z-10 flex flex-col gap-6 md:gap-8">
            <h2
              className="font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em]"
              style={{
                color: '#640e1b',
                fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <span dir="auto">CEREMONY INFO</span>
            </h2>

            {/* Couple Announcement (Bride first, parents removed per request) */}
            <div data-showcase-keep="" className="w-full min-w-0 relative flex flex-col items-center text-center gap-3 md:gap-4 mt-2 mb-4">
              <h3
                className="w-[80%] min-h-[70px] flex items-center justify-center leading-[50px] md:leading-[68px] whitespace-nowrap"
                style={{
                  fontSize: '43px',
                  fontFamily: '"EB Garamond", ChungDoiIndic, serif',
                  color: '#640e1b',
                }}
              >
                Swetha
              </h3>
              <div
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: '#ab7a45',
                  fontFamily: '"Cormorant Garamond", "Times New Roman", ChungDoiIndic, serif',
                  letterSpacing: '0.16em',
                }}
              >
                <span dir="auto">Bride</span>
              </div>
              <div
                className="text-[28px] md:text-[36px]"
                style={{
                  color: '#640e1b',
                  fontFamily: '"EB Garamond", ChungDoiIndic, serif',
                }}
              >
                &amp;
              </div>
              <h3
                className="w-[80%] min-h-[70px] flex items-center justify-center leading-[50px] md:leading-[68px] whitespace-nowrap"
                style={{
                  fontSize: '43px',
                  fontFamily: '"EB Garamond", ChungDoiIndic, serif',
                  color: '#640e1b',
                }}
              >
                Deepak Kumar
              </h3>
              <div
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: '#ab7a45',
                  fontFamily: '"Cormorant Garamond", "Times New Roman", ChungDoiIndic, serif',
                  letterSpacing: '0.16em',
                }}
              >
                <span dir="auto">Groom</span>
              </div>
            </div>

            {/* Event 1 (First): Wedding Reception */}
            <div className="relative w-full">
              <div
                className="relative flex flex-col items-center gap-4 md:gap-5 text-center mt-4"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                <div style={{ color: '#ab7a45' }}>
                  <span dir="auto" className="whitespace-pre-line font-normal text-[16px] md:text-[20px] text-center">
                    WEDDING RECEPTION
                  </span>
                </div>
                <p className="font-normal text-[14px] md:text-[15px] text-center uppercase tracking-wide" style={{ color: '#ab7a45' }}>
                  AT 6:00 PM – 10:00 PM
                </p>
                <div className="flex items-center gap-6" style={{ color: '#640e1b' }}>
                  <span
                    className="text-[12px] md:text-[16px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                      textAlign: 'right',
                    }}
                  >
                    <span dir="auto">THURSDAY</span>
                  </span>
                  <span
                    className="flex items-center justify-center text-[20px] leading-none md:text-[26px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                      color: '#ab7a45',
                      opacity: 0.7,
                    }}
                  >
                    |
                  </span>
                  <span
                    className="text-[30px] md:text-[40px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    }}
                  >
                    19
                  </span>
                  <span
                    className="flex items-center justify-center text-[20px] leading-none md:text-[26px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                      color: '#ab7a45',
                      opacity: 0.7,
                    }}
                  >
                    |
                  </span>
                  <span
                    className="text-[12px] md:text-[16px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                      textAlign: 'left',
                    }}
                  >
                    <span dir="auto">NOVEMBER</span>
                  </span>
                </div>
                <div
                  className="text-[18px] md:text-[24px]"
                  style={{
                    color: '#640e1b',
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                  }}
                >
                  2026
                </div>
              </div>

              {/* Event 2 (Second): Wedding Ceremony */}
              <div
                className="relative flex flex-col items-center gap-4 md:gap-5 text-center mt-8 md:mt-10"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                <div style={{ color: '#ab7a45' }}>
                  <span dir="auto" className="whitespace-pre-line font-normal text-[16px] md:text-[20px] text-center">
                    WEDDING CEREMONY
                  </span>
                </div>
                <p className="font-normal text-[14px] md:text-[15px] text-center uppercase tracking-wide" style={{ color: '#ab7a45' }}>
                  AT 4:00 AM – 6:00 AM (MUHURTHAM)
                </p>
                <div className="flex items-center gap-6" style={{ color: '#640e1b' }}>
                  <span
                    className="text-[12px] md:text-[16px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                      textAlign: 'right',
                    }}
                  >
                    <span dir="auto">FRIDAY</span>
                  </span>
                  <span
                    className="flex items-center justify-center text-[20px] leading-none md:text-[26px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                      color: '#ab7a45',
                      opacity: 0.7,
                    }}
                  >
                    |
                  </span>
                  <span
                    className="text-[30px] md:text-[40px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    }}
                  >
                    20
                  </span>
                  <span
                    className="flex items-center justify-center text-[20px] leading-none md:text-[26px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                      color: '#ab7a45',
                      opacity: 0.7,
                    }}
                  >
                    |
                  </span>
                  <span
                    className="text-[12px] md:text-[16px]"
                    style={{
                      fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                      textAlign: 'left',
                    }}
                  >
                    <span dir="auto">NOVEMBER</span>
                  </span>
                </div>
                <div
                  className="text-[18px] md:text-[24px]"
                  style={{
                    color: '#640e1b',
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                  }}
                >
                  2026
                </div>
              </div>

              {/* Gold Divider Line */}
              <img
                src="/images/themes/mahal-gold/gold-line.webp"
                alt=""
                aria-hidden="true"
                className="mx-auto block h-auto max-w-[300px] object-contain w-[64.8%] mt-6 md:mt-8"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: PHOTO GALLERY WITH 3D PERSPECTIVE CAROUSEL    */}
        {/* ======================================================== */}
        <section className="relative isolate z-10 w-full px-[9%] pt-[7%] pb-[10.9%] md:px-[12%] md:pt-[4%] md:pb-[7%]">
          <div className="relative z-10 flex w-full flex-col items-center">
            <h2
              className="font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em] mb-5"
              style={{
                color: '#640e1b',
                fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <span dir="auto">Photo Gallery</span>
            </h2>

            {/* 3D Perspective Card Swiper */}
            <div
              className="mt-6 w-full max-w-[432px] md:max-w-[600px] group"
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
            >
              <div
                className="relative h-[340px] md:h-[520px] touch-pan-y select-none"
                onTouchStart={(e) => {
                  setIsCarouselHovered(true)
                  handleTouchStart(e)
                }}
                onTouchEnd={(e) => {
                  setIsCarouselHovered(false)
                  handleTouchEnd(e)
                }}
              >
                {/* Previous Button */}
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={handlePrevPhoto}
                  className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-[200] w-8 h-8 items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={handleNextPhoto}
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-[200] w-8 h-8 items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                {/* 3D Perspective Container */}
                <div
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ perspective: '1000px' }}
                >
                  {GALLERY_IMAGES.map((img, idx) => {
                    const total = GALLERY_IMAGES.length
                    let diff = (idx - activePhotoIdx) % total
                    if (diff < -Math.floor(total / 2)) diff += total
                    if (diff > Math.floor(total / 2)) diff -= total

                    let transform = 'translateX(0%) translateZ(-300px) scale(0.6)'
                    let opacity = 0
                    let zIndex = 80
                    let isCenter = false

                    if (diff === 0) {
                      // Active Center
                      transform = 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)'
                      opacity = 1
                      zIndex = 100
                      isCenter = true
                    } else if (diff === 1) {
                      // Right Card
                      transform = 'translateX(62%) translateZ(-150px) rotateY(38deg) scale(0.85)'
                      opacity = 0.75
                      zIndex = 90
                    } else if (diff === -1) {
                      // Left Card
                      transform = 'translateX(-62%) translateZ(-150px) rotateY(-38deg) scale(0.85)'
                      opacity = 0.75
                      zIndex = 90
                    }

                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (isCenter) {
                            setLightboxIdx(idx)
                            setLightboxOpen(true)
                          } else {
                            setActivePhotoIdx(idx)
                          }
                        }}
                        className={`absolute h-[92%] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all ${
                          isCenter
                            ? 'ring-2 ring-white/60 shadow-[0_20px_50px_rgba(100,14,27,0.3)]'
                            : 'hover:opacity-95 shadow-[0_10px_30px_rgba(0,0,0,0.15)]'
                        }`}
                        style={{
                          aspectRatio: '0.6666666666666666',
                          transitionDuration: '900ms',
                          transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
                          transform,
                          opacity,
                          zIndex,
                        }}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                          style={{ objectPosition: '50% 50%' }}
                        />
                        <div
                          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                            isCenter ? 'bg-gradient-to-t from-black/20 via-transparent to-white/10' : 'bg-black/15'
                          }`}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="flex justify-center items-center gap-2 mt-4">
                {GALLERY_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to photo ${idx + 1}`}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      idx === activePhotoIdx
                        ? 'w-7 bg-[#640e1b]'
                        : 'w-2 bg-[#ab7a45]/35 hover:bg-[#ab7a45]/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 4: RECEPTION COUNTDOWN & ROYAL CALENDAR FRAME    */}
        {/* ======================================================== */}
        <section className="relative isolate z-10 w-full px-[8%] pt-[13%] md:px-[12%] md:pt-[9%]">
          {/* Parallax Castle 2 Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat -z-10 opacity-10 top-0 left-[-103.2%] mt-[71.7%] w-[244%] md:w-[170%]"
            style={{
              willChange: 'transform',
              aspectRatio: '1448/1086',
              backgroundImage: 'url(/images/themes/mahal-gold/castle2.webp)',
              transform: `translateY(${scrollY * 0.08}px) scaleX(-1)`,
            }}
          />
          {/* Top Pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[6.1%] mt-[-5.9%] z-[1] w-[87.5%]"
            style={{
              aspectRatio: '1302/253',
              backgroundImage: 'url(/images/themes/mahal-gold/pattern.webp)',
            }}
          />
          {/* Parallax Sandstone Flower Right */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[83%] mt-[-6.1%] z-[1] w-[56.7%] md:w-[42%]"
            style={{
              willChange: 'transform',
              aspectRatio: '837/1843',
              backgroundImage: 'url(/images/themes/mahal-gold/sandstone-flower.webp)',
              transform: `translateY(${scrollY * 0.05}px) scaleX(-1)`,
            }}
          />
          {/* Parallax Flower 3 Left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 md:top-[-15%] left-[-30%] md:left-[-17%] mt-[41.0%] z-[1] w-[52.4%] md:w-[40%]"
            style={{
              willChange: 'transform',
              aspectRatio: '806/1254',
              backgroundImage: 'url(/images/themes/mahal-gold/flower3-decoration.webp)',
              transform: `translateY(${-scrollY * 0.035}px) scaleX(-1)`,
            }}
          />

          <div className="relative z-10 flex w-full flex-col items-center">
            <h2
              className="font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em]"
              style={{
                color: '#640e1b',
                fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <span dir="auto">WEDDING CELEBRATIONS</span>
            </h2>

            {/* Event 1 (First): Reception */}
            <div
              className="mt-6 flex w-full flex-col items-center gap-3 md:mt-8"
              style={{
                fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                color: '#ab7a45',
              }}
              data-landing-screenshot-id="invite-reception"
            >
              <h3
                className="text-[16px] md:text-[20px] uppercase flex flex-col items-center text-center tracking-[0.04em]"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                  color: '#640e1b',
                  fontWeight: 600,
                }}
              >
                <span dir="auto">The reception will take place at:</span>
              </h3>
              <div
                className="text-[20px] md:text-[28px]"
                style={{
                  color: '#ab7a45',
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                6:00 PM
              </div>

              <div
                className="flex items-center gap-6"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                <span
                  className="text-[12px] md:text-[16px] uppercase"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    textAlign: 'right',
                  }}
                >
                  <span dir="auto">THURSDAY</span>
                </span>
                <div className="h-6 w-[1px] md:h-8" style={{ backgroundColor: '#ab7a45' }} />
                <span
                  className="text-[30px] md:text-[40px]"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    color: '#640e1b',
                  }}
                >
                  19
                </span>
                <div className="h-6 w-[1px] md:h-8" style={{ backgroundColor: '#ab7a45' }} />
                <span
                  className="text-[12px] md:text-[16px] uppercase"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    textAlign: 'left',
                  }}
                >
                  <span dir="auto">NOVEMBER</span>
                </span>
              </div>

              <div
                className="text-[18px] md:text-[24px]"
                style={{
                  color: '#ab7a45',
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                2026
              </div>
            </div>

            {/* Elegant Divider between Reception and Wedding Ceremony */}
            <div className="flex items-center justify-center gap-3 my-5">
              <div className="w-12 h-px" style={{ background: 'linear-gradient(to right, transparent, #ab7a45)' }} />
              <span className="text-sm select-none" style={{ color: '#ab7a45' }}>❦</span>
              <div className="w-12 h-px" style={{ background: 'linear-gradient(to left, transparent, #ab7a45)' }} />
            </div>

            {/* Event 2 (Second): Wedding Ceremony */}
            <div
              className="flex w-full flex-col items-center gap-3"
              style={{
                fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                color: '#ab7a45',
              }}
            >
              <h3
                className="text-[16px] md:text-[20px] uppercase flex flex-col items-center text-center tracking-[0.04em]"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                  color: '#640e1b',
                  fontWeight: 600,
                }}
              >
                <span dir="auto">The wedding ceremony will take place at:</span>
              </h3>
              <div
                className="text-[20px] md:text-[28px]"
                style={{
                  color: '#ab7a45',
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                4:00 AM – 6:00 AM (MUHURTHAM)
              </div>

              <div
                className="flex items-center gap-6"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                <span
                  className="text-[12px] md:text-[16px] uppercase"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    textAlign: 'right',
                  }}
                >
                  <span dir="auto">FRIDAY</span>
                </span>
                <div className="h-6 w-[1px] md:h-8" style={{ backgroundColor: '#ab7a45' }} />
                <span
                  className="text-[30px] md:text-[40px]"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    color: '#640e1b',
                  }}
                >
                  20
                </span>
                <div className="h-6 w-[1px] md:h-8" style={{ backgroundColor: '#ab7a45' }} />
                <span
                  className="text-[12px] md:text-[16px] uppercase"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    textAlign: 'left',
                  }}
                >
                  <span dir="auto">NOVEMBER</span>
                </span>
              </div>

              <div
                className="text-[18px] md:text-[24px]"
                style={{
                  color: '#ab7a45',
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                2026
              </div>
            </div>

            {/* Highlighted Royal Countdown Timer Plaque */}
            <div className="w-full max-w-[370px] md:max-w-[460px] mx-auto mt-7 mb-2">
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#ab7a45]/30 via-[#d4af37]/70 to-[#ab7a45]/30 shadow-[0_12px_32px_rgba(100,14,27,0.14)] animate-royal-glow">
                <div className="rounded-[14px] bg-[#fff9f0]/95 backdrop-blur-xs px-3.5 py-4 md:px-5 md:py-5 border border-[#ab7a45]/35">
                  {/* Header with Fleur-de-lis / Royal Accents */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-[#ab7a45] text-xs">⚜</span>
                    <h2
                      className="text-[11px] md:text-[13px] font-bold tracking-[0.2em] uppercase text-center"
                      style={{
                        fontFamily: '"Cinzel", "Times New Roman", serif',
                        color: '#640e1b',
                      }}
                    >
                      Countdown to the Big Day
                    </h2>
                    <span className="text-[#ab7a45] text-xs">⚜</span>
                  </div>

                  {/* 4 Regal Counter Boxes */}
                  <div className="grid grid-cols-4 gap-2 md:gap-3">
                    {/* Days */}
                    <div className="relative rounded-xl bg-gradient-to-b from-[#640e1b] via-[#520b16] to-[#3a070f] p-2 md:p-3 text-center shadow-md border border-[#ab7a45]/50 overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />
                      <span className="block text-2xl md:text-3xl font-bold text-white font-serif tracking-tight drop-shadow-sm">
                        {String(countdown.days).padStart(2, '0')}
                      </span>
                      <span className="block text-[9px] md:text-[10px] uppercase tracking-wider font-semibold text-[#ffd700] mt-0.5">
                        Days
                      </span>
                    </div>

                    {/* Hours */}
                    <div className="relative rounded-xl bg-gradient-to-b from-[#640e1b] via-[#520b16] to-[#3a070f] p-2 md:p-3 text-center shadow-md border border-[#ab7a45]/50 overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />
                      <span className="block text-2xl md:text-3xl font-bold text-white font-serif tracking-tight drop-shadow-sm">
                        {String(countdown.hours).padStart(2, '0')}
                      </span>
                      <span className="block text-[9px] md:text-[10px] uppercase tracking-wider font-semibold text-[#ffd700] mt-0.5">
                        Hours
                      </span>
                    </div>

                    {/* Minutes */}
                    <div className="relative rounded-xl bg-gradient-to-b from-[#640e1b] via-[#520b16] to-[#3a070f] p-2 md:p-3 text-center shadow-md border border-[#ab7a45]/50 overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />
                      <span className="block text-2xl md:text-3xl font-bold text-white font-serif tracking-tight drop-shadow-sm">
                        {String(countdown.minutes).padStart(2, '0')}
                      </span>
                      <span className="block text-[9px] md:text-[10px] uppercase tracking-wider font-semibold text-[#ffd700] mt-0.5">
                        Mins
                      </span>
                    </div>

                    {/* Seconds (Active Gold Highlight) */}
                    <div className="relative rounded-xl bg-gradient-to-b from-[#7a1223] via-[#640e1b] to-[#450a13] p-2 md:p-3 text-center shadow-md border-2 border-[#d4af37] overflow-hidden">
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent animate-gold-shimmer" />
                      <span className="block text-2xl md:text-3xl font-bold text-[#ffd700] font-serif tracking-tight drop-shadow-sm">
                        {String(countdown.seconds).padStart(2, '0')}
                      </span>
                      <span className="block text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-white mt-0.5">
                        Secs
                      </span>
                    </div>
                  </div>

                  {/* Auspicious Date Subtitle */}
                  <div className="text-center mt-2.5 pt-2 border-t border-[#ab7a45]/20">
                    <span
                      className="text-[11px] md:text-[12px] italic text-[#640e1b]/80"
                      style={{
                        fontFamily: '"Baskerville", "Times New Roman", serif',
                      }}
                    >
                      19 Nov: Reception (6:00 PM) • 20 Nov: Muhurtham (4:00 AM)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Authentic Royal Calendar Frame */}
            <div
              className="relative mx-auto mt-8 w-full max-w-[330px] md:mt-10 md:max-w-[470px]"
              style={{ aspectRatio: '359/339' }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(/images/themes/mahal-gold/calendar-frame.webp)',
                }}
              />
              <div className="relative flex h-full w-full items-center justify-center px-[11%] py-[9%]">
                <div
                  dir="ltr"
                  data-showcase-keep=""
                  className="w-full max-w-[280px] md:max-w-[310px] mx-auto rounded-lg overflow-hidden !max-w-none !rounded-none !border-0"
                  style={{
                    borderColor: 'color-mix(in srgb, #640e1b 27%, transparent)',
                    color: '#640e1b',
                  }}
                >
                  {/* Calendar Title */}
                  <div
                    className="text-center py-2 text-[15px] md:text-[18px] font-bold border-b"
                    style={{
                      borderColor: 'color-mix(in srgb, #640e1b 27%, transparent)',
                      fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                      color: '#640e1b',
                    }}
                  >
                    November 2026
                  </div>

                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 border-b text-center font-medium" style={{ borderColor: 'color-mix(in srgb, #640e1b 27%, transparent)' }}>
                    {weekdays.map((w) => (
                      <div key={w} className="py-1 text-[11px] md:text-[12px] opacity-70">
                        {w}
                      </div>
                    ))}
                  </div>

                  {/* Month Grid */}
                  <div className="grid grid-cols-7 text-center">
                    {/* Padding slots before Nov 1 */}
                    {Array.from({ length: calendarPadding }).map((_, p) => (
                      <div key={`pad-${p}`} className="h-[28px] md:h-[32px]" />
                    ))}

                    {/* Days */}
                    {novDays.map((d) => {
                      if (d === 19 || d === 20) {
                        return (
                          <div key={d} className="flex items-center justify-center h-[28px] md:h-[32px]">
                            <div className="relative w-[26px] h-[24px] md:w-[30px] md:h-[28px] flex items-center justify-center">
                              <svg viewBox="0 0 24 22" className="absolute inset-0 w-full h-full drop-shadow-sm" fill="#640e1b">
                                <path d="M12 21C12 21 1.5 13.5 1.5 7.5C1.5 4.46 3.96 2 7 2C8.76 2 10.35 2.81 11.4 4.09L12 4.8L12.6 4.09C13.65 2.81 15.24 2 17 2C20.04 2 22.5 4.46 22.5 7.5C22.5 13.5 12 21 12 21Z" />
                              </svg>
                              <span className="relative z-10 text-[11px] md:text-[12px] font-bold" style={{ color: '#fff' }}>
                                {d}
                              </span>
                            </div>
                          </div>
                        )
                      }
                      return (
                        <div key={d} className="flex items-center justify-center h-[28px] md:h-[32px]">
                          <span className="text-[12px] md:text-[13px]">{d}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Calendar Link */}
            <div className="mt-3 flex justify-center">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Swetha%20%26%20Deepak%20Kumar%27s%20Wedding&dates=20261119T123000Z/20261120T153000Z&details=Join%20us%20to%20celebrate%20the%20wedding%20of%20Swetha%20%26%20Deepak%20Kumar%20on%2019%20%26%2020%20November%202026%20at%20AVVS%20Mahal%20%26%20Senraya%20Perumal%20Temple%2C%20Salem.&location=13%2C%20Military%20Rd%2C%20Ammapet%2C%20Salem%2C%20Tamil%20Nadu%20636003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[13px] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70 md:text-[15px]"
                style={{
                  color: '#ab7a45',
                  fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                }}
              >
                <span dir="auto">Add to Calendar</span>
              </a>
            </div>

            {/* CONFIRM ATTENDANCE Button */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full mt-7 md:mt-9" data-landing-screenshot-id="invite-rsvp">
              <button
                type="button"
                onClick={onRsvpClick}
                className="text-[13px] md:text-[15px] tracking-wider inline-flex items-center justify-center rounded-full px-7 py-2 transition-transform hover:scale-[1.03] shadow-md"
                style={{
                  backgroundColor: '#640e1b',
                  color: '#ffffff',
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                <span className="relative z-10 flex min-h-0 items-center justify-center gap-2">
                  <span dir="auto">CONFIRM ATTENDANCE</span>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 5: MODERN WEDDING EVENTS & VENUE MAP MODAL       */}
        {/* ======================================================== */}
        <div className="relative isolate z-10 w-full pt-[4%] md:pt-[2%]">
          <ModernWeddingEvents />
          <img
            src="/images/themes/mahal-gold/gold-line.webp"
            alt=""
            aria-hidden="true"
            className="mx-auto block h-auto max-w-[300px] object-contain w-[53.7%] mt-4 md:mt-6 mb-8"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* ======================================================== */}
        {/* SECTION 6: GUESTBOOK & AUTHENTIC FOOTER                  */}
        {/* ======================================================== */}
        <section
          className="relative z-10 px-[9%] pt-[6%] pb-[5%] md:px-[14%]"
          style={{
            backgroundColor: 'transparent',
            color: '#ab7a45',
            fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
          }}
          data-landing-screenshot-id="invite-guestbook"
          data-showcase-keep=""
        >
          <div className="text-center">
            <h2
              className="font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em] mb-5"
              style={{
                color: '#640e1b',
                fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <span dir="auto">Guestbook</span>
            </h2>
          </div>

          <form onSubmit={handleGuestSubmit} className="flex flex-col gap-4 max-w-[420px] mx-auto text-left">
            <div>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg border border-[#ab7a45]/40 bg-white/70 text-[#640e1b] text-sm focus:outline-none focus:ring-1 focus:ring-[#640e1b]"
              />
            </div>
            <div>
              <textarea
                required
                rows={3}
                value={guestMsg}
                onChange={(e) => setGuestMsg(e.target.value)}
                placeholder="Send a wish to Swetha & Deepak..."
                className="w-full px-4 py-2 rounded-lg border border-[#ab7a45]/40 bg-white/70 text-[#640e1b] text-sm focus:outline-none focus:ring-1 focus:ring-[#640e1b] resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 rounded-full text-xs md:text-sm font-semibold text-white bg-[#640e1b] hover:bg-[#7d1222] self-center shadow transition-all active:scale-95"
            >
              Send wish
            </button>
          </form>

          {/* Wishes List */}
          {wishes.length > 0 && (
            <div className="mt-8 space-y-3 max-w-[420px] mx-auto text-left">
              {wishes.map((w) => (
                <div
                  key={w.id}
                  className="p-3.5 rounded-lg border border-[#ab7a45]/25 bg-white/50 text-xs md:text-sm shadow-sm"
                >
                  <div className="flex justify-between items-center mb-1">
                    <strong className="text-[#640e1b]">{w.name}</strong>
                    <span className="text-[10px] text-[#ab7a45]/70">{w.date}</span>
                  </div>
                  <p className="text-[#640e1b]/80">&ldquo;{w.message}&rdquo;</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* FOOTER THANK YOU SECTION (REVERSIBLE TOGGLE) */}
        {SHOW_TRADITIONAL_MANDAPAM_THANK_YOU ? (
          <MahalMandapamThankYou />
        ) : (
          <div className="relative isolate z-10">
            <footer className="relative z-20 flex flex-col items-center px-[9%] pb-[62%] text-center md:px-[14%] md:pb-[44%]">
              <span
                className="whitespace-pre-line flex flex-col items-center gap-1 text-[11px] md:text-[14px] mx-auto md:max-w-[560px]"
                style={{
                  color: '#640e1b',
                  fontFamily: '"Roboto", system-ui, ChungDoiIndic, sans-serif',
                  fontWeight: 500,
                }}
              >
                <span dir="auto">
                  With love and gratitude, we invite you to be part of our special day. Your presence,
                  blessings, and good wishes will make our celebration even more memorable.
                  {'\n\n'}
                  Thank you for being a part of our happiness and for showering us with your love and
                  blessings. ❤️
                </span>
              </span>
            </footer>

            {/* Bottom Castle Layer */}
            <img
              src="/images/themes/mahal-gold/castle.webp"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-15%] left-[-40.6%] z-0 h-auto w-[176.6%] max-w-none object-contain md:left-[-18%] md:w-[136%]"
              loading="eager"
              decoding="async"
            />
          </div>
        )}

        {/* Fullscreen Lightbox Dialog */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-between p-4"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Top Bar with Counter and Close */}
            <div className="w-full flex justify-between items-center text-white px-2 pt-2">
              <span className="bg-black/50 px-3 py-1 rounded-full text-xs">
                {lightboxIdx + 1} / {GALLERY_IMAGES.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="text-white hover:text-white/70 text-2xl p-1"
                aria-label="Close lightbox"
              >
                ✕
              </button>
            </div>

            {/* Main Center Image */}
            <div
              className="relative max-h-[72vh] max-w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES[lightboxIdx].src}
                alt={GALLERY_IMAGES[lightboxIdx].alt}
                className="max-h-[70vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
            </div>

            {/* Thumbnail Strip */}
            <div
              className="flex gap-2 overflow-x-auto py-2 px-3 bg-black/40 rounded-xl backdrop-blur-md max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {GALLERY_IMAGES.map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={() => setLightboxIdx(tIdx)}
                  className={`h-12 w-12 rounded-lg overflow-hidden shrink-0 transition-transform ${
                    tIdx === lightboxIdx ? 'ring-2 ring-[#640e1b] scale-105' : 'opacity-60'
                  }`}
                >
                  <img src={thumb.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

