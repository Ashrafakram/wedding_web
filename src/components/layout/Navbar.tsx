import React, { useState, useEffect } from 'react'
import { Calendar, QrCode, Menu, X, Wifi } from 'lucide-react'
import { LotusLogo } from '@/components/common/Ornaments'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  onSaveDateClick: () => void
  onWishesClick: () => void
  onNetworkShareClick: () => void
}

export function Navbar({ onSaveDateClick, onWishesClick, onNetworkShareClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    { label: 'Wishes', href: '#wishes', onClick: onWishesClick },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF7F0]/95 backdrop-blur-md shadow-xs py-2 sm:py-2.5 border-b border-[#E8DEC8]'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#home" className="flex items-center gap-2 group">
          <LotusLogo className="w-7 h-7 sm:w-8 sm:h-8 text-[#C59B27] transition-transform duration-300 group-hover:scale-110" />
          <div className="flex items-center text-base sm:text-xl font-serif tracking-widest text-[#163224]">
            <span className="font-semibold">S</span>
            <span className="mx-1 text-[#C59B27] font-light">|</span>
            <span className="font-semibold">D</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* QR / Open on Mobile button */}
          <button
            onClick={onNetworkShareClick}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-[#D8C7A9] bg-white/80 hover:bg-white text-[#163224] transition-all flex items-center gap-1.5 text-xs shadow-2xs hover:border-[#C59B27]"
            title="Scan QR Code to open on Mobile"
            aria-label="Scan QR to open on mobile"
          >
            <QrCode className="w-4 h-4 text-[#C59B27]" />
            <span className="hidden lg:inline text-[11px] font-cinzel tracking-wider uppercase font-semibold">
              Open on Phone
            </span>
          </button>

          {/* Save Date Button */}
          <Button
            onClick={onSaveDateClick}
            variant="default"
            size="sm"
            className="hidden sm:inline-flex bg-[#163224] text-[#FBF7F0] border border-[#2B543D] hover:bg-[#1E4532] shadow-xs text-xs tracking-wider uppercase font-medium py-2 px-4 sm:px-5 gap-2 rounded-full active:scale-95 transition-transform"
          >
            <Calendar className="w-3.5 h-3.5 text-[#E7C979]" />
            <span>Save the Date</span>
          </Button>

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
                  onSaveDateClick()
                }}
                variant="default"
                className="w-full bg-[#163224] text-[#FBF7F0] py-2.5 rounded-full flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#E7C979]" />
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
