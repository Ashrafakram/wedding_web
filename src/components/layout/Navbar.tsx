import React, { useState, useEffect } from 'react'
import { Calendar, QrCode, Menu, X, Volume2, VolumeX, CalendarCheck, Palette } from 'lucide-react'
import { LotusLogo } from '@/components/common/Ornaments'
import { Button } from '@/components/ui/button'
import { weddingAudio } from '@/lib/weddingAudio'

interface NavbarProps {
  onSaveDateClick: () => void
  onWishesClick: () => void
  onNetworkShareClick: () => void
  onRsvpClick: () => void
  onThemeClick?: () => void
}

export function Navbar({ onSaveDateClick, onWishesClick, onNetworkShareClick, onRsvpClick, onThemeClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(weddingAudio.isPlaying)

  useEffect(() => {
    const unsub = weddingAudio.subscribe((playing) => {
      setIsAudioPlaying(playing)
    })
    return () => unsub()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Wedding', href: '#wedding' },
    { label: 'Venues', href: '#venues' },
    { label: 'RSVP', href: '#rsvp', onClick: onRsvpClick },
    { label: 'Wishes', href: '#wishes', onClick: onWishesClick },
    { label: 'Contact', href: '#contact' },
  ]

  const handleToggleAudio = () => {
    weddingAudio.toggle()
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF5EE]/95 backdrop-blur-md shadow-xs py-2 sm:py-2.5 border-b border-[#E8C5CB]/60'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#home" className="flex items-center gap-2 group">
          <LotusLogo className="w-7 h-7 sm:w-8 sm:h-8 text-[#C59B27] transition-transform duration-300 group-hover:scale-110" />
          <div className="flex items-center text-base sm:text-xl font-serif tracking-widest text-[#7E2E40]">
            <span className="font-semibold">S</span>
            <span className="mx-1 text-[#C59B27] font-light">|</span>
            <span className="font-semibold">D</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault()
                  link.onClick()
                }
              }}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#4A4237] hover:text-[#C59B27] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#C59B27] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Visual Theme Color Palette Button */}
          {onThemeClick && (
            <button
              onClick={onThemeClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E8C5CB] bg-white/85 hover:bg-white text-[#7E2E40] text-xs font-cinzel transition-all shadow-2xs hover:border-[#D4AF37] cursor-pointer active:scale-95"
              title="Preview Wedding Color Palettes"
              aria-label="Change Theme Color"
            >
              <Palette className="w-3.5 h-3.5 text-[#C59B27]" />
              <span className="hidden sm:inline text-[10px] tracking-wider uppercase font-semibold text-[#7E2E40]">
                Colors
              </span>
            </button>
          )}

          {/* Top-Corner Floating Music Toggle Button */}
          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-cinzel shadow-2xs cursor-pointer active:scale-95 ${
              isAudioPlaying
                ? 'bg-[#7E2E40] border-[#E8C5CB] text-[#FFF0F3]'
                : 'bg-white/80 border-[#D8C7A9] text-[#6B5E4F] hover:border-[#D4AF37]'
            }`}
            title={isAudioPlaying ? 'Mute Music' : 'Play Auspicious Music'}
            aria-label={isAudioPlaying ? 'Mute Music' : 'Play Music'}
          >
            {isAudioPlaying ? (
              <>
                <div className="flex items-end gap-0.5 h-3 w-2.5">
                  <span className="w-0.5 bg-[#F3D279] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
                  <span className="w-0.5 bg-[#F3D279] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.15s] h-2/3" />
                  <span className="w-0.5 bg-[#F3D279] rounded-full animate-[pulse_0.75s_ease-in-out_infinite_0.3s] h-4/5" />
                </div>
                <Volume2 className="w-3.5 h-3.5 text-[#F3D279]" />
                <span className="hidden sm:inline text-[10px] tracking-wider uppercase font-semibold">
                  Music
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[10px] tracking-wider uppercase">
                  Muted
                </span>
              </>
            )}
          </button>

          {/* Working RSVP Button */}
          <Button
            onClick={onRsvpClick}
            variant="default"
            size="sm"
            className="hidden sm:inline-flex bg-[#7E2E40] hover:bg-[#9E3D52] text-[#FFF0F3] border border-[#E8C5CB] shadow-xs text-xs tracking-wider uppercase font-semibold py-1.5 px-4 gap-1.5 rounded-full active:scale-95 transition-transform"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-[#F3D279]" />
            <span>RSVP</span>
          </Button>

          {/* QR / Open on Mobile button */}
          <button
            onClick={onNetworkShareClick}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-[#D8C7A9] bg-white/80 hover:bg-white text-[#163224] transition-all flex items-center gap-1.5 text-xs shadow-2xs hover:border-[#C59B27]"
            title="Scan QR Code to open on Mobile"
            aria-label="Scan QR to open on mobile"
          >
            <QrCode className="w-4 h-4 text-[#C59B27]" />
            <span className="hidden lg:inline text-[11px] font-cinzel tracking-wider uppercase font-semibold">

              QR
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#163224] hover:bg-[#EAE0CD]/40 active:scale-90 transition-transform"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF9]/98 backdrop-blur-xl border-b border-[#E8DEC8] px-6 py-6 animate-in slide-in-from-top-4 duration-300 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  if (link.onClick) {
                    e.preventDefault()
                    link.onClick()
                  }
                }}
                className="text-sm font-medium tracking-widest uppercase text-[#163224] hover:text-[#C59B27] py-1 border-b border-[#F0E6D2]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 space-y-2">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onRsvpClick()
                }}
                variant="default"
                className="w-full bg-[#163224] text-[#FBF7F0] py-2.5 rounded-full flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-[#E7C979]" />
                <span>Confirm RSVP</span>
              </Button>

              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onSaveDateClick()
                }}
                variant="creamOutline"
                className="w-full py-2.5 rounded-full flex items-center justify-center gap-2 border-[#D8C7A9] text-xs uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4 text-[#C59B27]" />
                <span>Save the Date</span>
              </Button>

              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onNetworkShareClick()
                }}
                variant="creamOutline"
                className="w-full py-2.5 rounded-full flex items-center justify-center gap-2 border-[#D8C7A9] text-xs uppercase tracking-wider"
              >
                <QrCode className="w-4 h-4 text-[#C59B27]" />
                <span>Share Wi-Fi / QR Code</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
