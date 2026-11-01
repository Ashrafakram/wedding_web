import React, { useState, useEffect, useRef } from 'react'

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
    alt: 'Wedding photo 1',
  },
  {
    src: '/images/gallery/couple-2.jpg',
    alt: 'Wedding photo 2',
  },
  {
    src: '/images/gallery/couple-3.jpg',
    alt: 'Wedding photo 3',
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

  // Countdown timer to November 20, 2026, 18:00
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date('2026-11-20T18:00:00+05:30').getTime()
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
      const saved = localStorage.getItem('deepak_swetha_guestbook')
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
      localStorage.setItem('deepak_swetha_guestbook', JSON.stringify(updated))
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
    <div className="flex w-full justify-center overflow-x-clip bg-white overflow-clip scrollbar-none" data-testid="mahal-gold-template">
      {/* Root Card Container with exact width max-w-[480px] md:max-w-[900px] */}
      <div
        data-showcase-root=""
        className="relative w-full max-w-[480px] md:max-w-[900px] md:mx-auto overflow-hidden md:border md:border-[#ab7a4533] isolate !overflow-hidden shadow-2xl"
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
                    Deepak Kumar
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
                    Swetha
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

            {/* Parents Grid */}
            <div
              className="grid w-full grid-cols-[1fr_auto_1fr] grid-rows-[repeat(4,auto)] justify-center gap-x-3 gap-y-1 md:gap-x-7"
              style={{
                color: '#640e1b',
                fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
              }}
            >
              {/* Groom's Parents */}
              <div className="row-span-4 grid grid-rows-subgrid justify-items-center justify-self-center min-w-0 max-w-[170px] text-center md:max-w-[270px]">
                <span className="text-[12px] md:text-[15px] mb-[2px]" style={{ color: '#ab7a45' }}>
                  <span dir="auto">Mr. &amp; Mrs.</span>
                </span>
                <span
                  className="font-semibold [overflow-wrap:anywhere]"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    color: '#640e1b',
                    fontSize: '12px',
                  }}
                >
                  <span dir="auto">Groom&apos;s Father</span>
                </span>
                <span
                  className="font-semibold [overflow-wrap:anywhere]"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    color: '#640e1b',
                    fontSize: '12px',
                  }}
                >
                  <span dir="auto">Groom&apos;s Mother</span>
                </span>
              </div>

              {/* Vertical Divider */}
              <div
                className="row-span-4 h-[50px] w-[1px] self-center md:h-[70px]"
                style={{ backgroundColor: '#ab7a45', opacity: 0.6 }}
              />

              {/* Bride's Parents */}
              <div className="row-span-4 grid grid-rows-subgrid justify-items-center justify-self-center min-w-0 max-w-[170px] text-center md:max-w-[270px]">
                <span className="text-[12px] md:text-[15px] mb-[2px]" style={{ color: '#ab7a45' }}>
                  <span dir="auto">Mr. &amp; Mrs.</span>
                </span>
                <span
                  className="font-semibold [overflow-wrap:anywhere]"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    color: '#640e1b',
                    fontSize: '12px',
                  }}
                >
                  <span dir="auto">Bride&apos;s Father</span>
                </span>
                <span
                  className="font-semibold [overflow-wrap:anywhere]"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    color: '#640e1b',
                    fontSize: '12px',
                  }}
                >
                  <span dir="auto">Bride&apos;s Mother</span>
                </span>
              </div>
            </div>

            {/* Couple Announcement */}
            <div data-showcase-keep="" className="w-full min-w-0 relative flex flex-col items-center text-center gap-3 md:gap-4">
              <h3
                className="w-[80%] min-h-[80px] flex items-center justify-center leading-[50px] md:leading-[68px] whitespace-nowrap"
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
              <div
                className="text-[30px] md:text-[38px]"
                style={{
                  color: '#640e1b',
                  fontFamily: '"EB Garamond", ChungDoiIndic, serif',
                }}
              >
                &amp;
              </div>
              <h3
                className="w-[80%] min-h-[80px] flex items-center justify-center leading-[50px] md:leading-[68px] whitespace-nowrap"
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
            </div>

            {/* Event 1: Wedding Ceremony */}
            <div className="relative w-full">
              <div
                className="relative flex flex-col items-center gap-4 md:gap-5 text-center"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                <div style={{ color: '#ab7a45' }}>
                  <span dir="auto" className="whitespace-pre-line font-normal text-[16px] md:text-[20px] text-center">
                    WEDDING CEREMONY
                  </span>
                </div>
                <p className="font-normal text-[14px] md:text-[15px] text-center uppercase" style={{ color: '#ab7a45' }}>
                  AT 4:00 AM
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

              {/* Event 2: Wedding Reception */}
              <div
                className="relative flex flex-col items-center gap-4 md:gap-5 text-center mt-8 md:mt-10"
                style={{
                  fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                }}
              >
                <div style={{ color: '#ab7a45' }}>
                  <span dir="auto" className="whitespace-pre-line font-normal text-[16px] md:text-[20px] text-center">
                    WEDDING RECEPTION
                  </span>
                </div>
                <p className="font-normal text-[14px] md:text-[15px] text-center uppercase" style={{ color: '#ab7a45' }}>
                  AT 6:00 PM
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
              <span dir="auto">WEDDING </span>
            </h2>

            <div
              className="mt-6 flex w-full flex-col items-center gap-6 md:mt-8"
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
                className="text-[20px] md:text-[30px]"
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

              {/* Countdown Ticker */}
              <div className="flex items-center justify-center flex-col mt-4">
                <h2
                  className="text-[15px] md:text-[17px] uppercase flex flex-col items-center text-center tracking-[0.06em]"
                  style={{
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                    color: '#ab7a45',
                  }}
                >
                  <span dir="auto">Countdown</span>
                </h2>
                <div
                  className="text-center mt-2 text-sm md:text-lg flex items-center gap-4"
                  style={{
                    color: '#640e1b',
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                  }}
                >
                  <span><strong>{countdown.days}</strong> Days</span>
                  <span><strong>{countdown.hours}</strong> Hrs</span>
                  <span><strong>{countdown.minutes}</strong> Mins</span>
                  <span><strong>{countdown.seconds}</strong> Secs</span>
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
                      if (d === 20) {
                        return (
                          <div key={d} className="flex items-center justify-center h-[28px] md:h-[32px]">
                            <div className="relative w-[26px] h-[24px] md:w-[30px] md:h-[28px] flex items-center justify-center">
                              <svg viewBox="0 0 24 22" className="absolute inset-0 w-full h-full drop-shadow-sm" fill="#640e1b">
                                <path d="M12 21C12 21 1.5 13.5 1.5 7.5C1.5 4.46 3.96 2 7 2C8.76 2 10.35 2.81 11.4 4.09L12 4.8L12.6 4.09C13.65 2.81 15.24 2 17 2C20.04 2 22.5 4.46 22.5 7.5C22.5 13.5 12 21 12 21Z" />
                              </svg>
                              <span className="relative z-10 text-[11px] md:text-[12px] font-bold" style={{ color: '#fff' }}>
                                20
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
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Deepak%20Kumar%20%26%20Swetha%27s%20Wedding&dates=20261120T123000Z/20261120T153000Z&details=Join%20us%20to%20celebrate%20the%20wedding%20of%20Deepak%20Kumar%20%26%20Swetha%20at%2013%2C%20Military%20Rd%2C%20Ammapet%2C%20Salem%2C%20Tamil%20Nadu%20636003&location=13%2C%20Military%20Rd%2C%20Ammapet%2C%20Salem%2C%20Tamil%20Nadu%20636003"
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
        {/* SECTION 5: VENUE, MAP, AND WEDDING DAY SCHEDULE          */}
        {/* ======================================================== */}
        <div className="relative isolate z-10 w-full pt-[9%] md:pt-[5%]">
          <div className="relative z-10 flex w-full flex-col items-center">
            <section className="relative flex w-full flex-col gap-3 px-[10%] pb-6 md:px-[14%]" data-landing-screenshot-id="invite-map">
              <div className="relative text-center">
                <h3
                  className="font-bold text-[18px] md:text-[24px] text-center uppercase tracking-[0.04em]"
                  style={{
                    color: '#640e1b',
                    fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  <span dir="auto">Wedding Reception Venue</span>
                </h3>
                <div
                  className="whitespace-pre-line mx-auto mt-1 max-w-[260px] md:max-w-[400px] text-center text-[12px] md:text-[14px] flex flex-col items-center"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ab7a45',
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                  }}
                >
                  <span dir="auto">13, Military Rd, Ammapet, Salem, Tamil Nadu 636003</span>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="relative flex flex-col items-center gap-4 md:gap-5 w-full" data-showcase-keep="">
                <iframe
                  title="Venue Map"
                  className="w-full mt-3 rounded-[15px] h-[250px] md:h-[330px] overflow-hidden border"
                  style={{ borderColor: '#ab7a45' }}
                  src="https://maps.google.com/maps?q=13,%20Military%20Rd,%20Ammapet,%20Salem,%20Tamil%20Nadu%20636003&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  allowFullScreen
                />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=13%2C%20Military%20Rd%2C%20Ammapet%2C%20Salem%2C%20Tamil%20Nadu%20636003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm md:text-base font-semibold transition-transform hover:scale-[1.03]"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#ab7a45',
                    fontFamily: '"Baskerville", "Libre Baskerville", "Times New Roman", ChungDoiIndic, serif',
                  }}
                >
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <span>Get directions</span>
                </a>
              </div>
            </section>

            <img
              src="/images/themes/mahal-gold/gold-line.webp"
              alt=""
              aria-hidden="true"
              className="mx-auto block h-auto max-w-[300px] object-contain w-[53.7%] mt-2 md:mt-4"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* WEDDING DAY SCHEDULE */}
        <div className="relative isolate z-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat -z-10 opacity-10 top-0 left-[-133.1%] mt-[-53.3%] w-[244%] md:w-[170%]"
            style={{
              willChange: 'transform',
              aspectRatio: '1448/1086',
              backgroundImage: 'url(/images/themes/mahal-gold/castle2.webp)',
              transform: `translateY(${scrollY * 0.08}px)`,
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[80%] mt-[-20.6%] z-[1] w-[52.4%] md:w-[40%]"
            style={{
              willChange: 'transform',
              aspectRatio: '806/1254',
              backgroundImage: 'url(/images/themes/mahal-gold/flower3-decoration.webp)',
              transform: `translateY(${-scrollY * 0.035}px)`,
            }}
          />

          <div className="relative z-10 flex flex-col gap-4 px-4 pt-[8%] pb-[8%] md:gap-6 md:pt-[5%] md:pb-[5%]">
            <h2
              className="font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em]"
              style={{
                color: '#640e1b',
                fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <span dir="auto">WEDDING DAY SCHEDULE</span>
            </h2>

            {/* Timeline list with connecting vertical bar */}
            <ol
              className="relative mx-auto grid w-full max-w-[460px] grid-cols-[minmax(0,1fr)_16px_minmax(0,1fr)] items-center gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10"
              style={{
                fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                paddingTop: '20px',
                paddingBottom: '20px',
              }}
            >
              {/* Event 1: 4:00 AM Welcome */}
              <li className="contents">
                <span
                  className="pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug"
                  style={{
                    color: '#ab7a45',
                    fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                  }}
                >
                  <span className="relative inline-block">
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 flex w-max items-center justify-center -translate-y-1/2 right-full"
                      style={{ marginRight: '39px' }}
                    >
                      <span
                        aria-hidden="true"
                        className="relative z-10 block shrink-0 bg-contain bg-center bg-no-repeat"
                        style={{
                          width: '40px',
                          height: '52px',
                          backgroundImage: 'url(/images/themes/mahal-gold/medallion-coming.webp)',
                        }}
                      />
                    </span>
                    4:00 AM
                  </span>
                </span>
                <span aria-hidden="true" className="relative flex items-center justify-center self-stretch">
                  <span
                    className="absolute left-1/2 -translate-x-1/2 w-px top-1/2 -bottom-8 md:-bottom-10"
                    style={{ backgroundColor: 'color-mix(in srgb, #640e1b 40%, transparent)' }}
                  />
                  <span
                    className="relative block h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: '#640e1b',
                      boxShadow: '0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)',
                    }}
                  />
                </span>
                <span
                  className="text-[13px] md:text-[16px]"
                  style={{
                    color: '#ab7a45',
                    fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                  }}
                >
                  <span dir="auto">Welcome</span>
                </span>
              </li>

              {/* Event 2: 6:00 PM Reception */}
              <li className="contents">
                <span
                  className="pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug"
                  style={{
                    color: '#ab7a45',
                    fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                  }}
                >
                  <span className="relative inline-block">
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 flex w-max items-center justify-center -translate-y-1/2 right-full"
                      style={{ marginRight: '39px' }}
                    >
                      <span
                        aria-hidden="true"
                        className="relative z-10 block shrink-0 bg-contain bg-center bg-no-repeat"
                        style={{
                          width: '40px',
                          height: '52px',
                          backgroundImage: 'url(/images/themes/mahal-gold/medallion-cake.webp)',
                        }}
                      />
                    </span>
                    6:00 PM
                  </span>
                </span>
                <span aria-hidden="true" className="relative flex items-center justify-center self-stretch">
                  <span
                    className="relative block h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: '#640e1b',
                      boxShadow: '0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)',
                    }}
                  />
                </span>
                <span
                  className="text-[13px] md:text-[16px]"
                  style={{
                    color: '#ab7a45',
                    fontFamily: '"Times New Roman", Times, ChungDoiIndic, serif',
                  }}
                >
                  <span dir="auto">Reception</span>
                </span>
              </li>
            </ol>
          </div>
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
                placeholder="Send a wish to Deepak & Swetha..."
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
          <div className="mt-8 space-y-3 max-w-[420px] mx-auto text-left">
            {wishes.length === 0 ? (
              <p className="text-center text-xs md:text-sm text-[#ab7a45]/75 italic py-4">
                No wishes yet. Be the first to send your blessings!
              </p>
            ) : (
              wishes.map((w) => (
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
              ))
            )}
          </div>
        </section>

        {/* FOOTER THANK YOU NOTE & CASTLE BOTTOM SILHOUETTE */}
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

