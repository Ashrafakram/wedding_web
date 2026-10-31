import React, { useState, useEffect } from 'react'
import { Calendar, QrCode, Menu, X } from 'lucide-react'
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
          ? 'bg-[#FAF5EB]/95 backdrop-blur-md shadow-sm py-2 sm:py-2.5 border-b border-[#C59B27]/30'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#home" className="flex items-center gap-2 group">
          <LotusLogo className="w-7 h-7 sm:w-8 sm:h-8 text-[#C59B27] transition-transform duration-300 group-hover:scale-110" />
          <div className="flex items-center text-base sm:text-xl font-serif tracking-widest text-[#5C131E]">
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
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#4A4237] hover:text-[#5C131E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-[#5C131E] hover:after:w-full after:transition-all"
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
            className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-[#C59B27]/40 bg-white/80 hover:bg-white text-[#5C131E] transition-all flex items-center gap-1.5 text-xs shadow-xs hover:border-[#C59B27] cursor-pointer"
            title="Scan QR Code to open on Mobile"
            aria-label="Scan QR to open on mobile"
          >
            <QrCode className="w-4 h-4 text-[#C59B27]" />
            <span className="hidden lg:inline text-[11px] font-cinzel tracking-wider uppercase font-semibold">
              Open on Phone
            </span>
          </button>

          {/* Save Date Button */}
          <button
            onClick={onSaveDateClick}
            className="hidden sm:inline-flex bg-[#5C131E] text-[#FFFDF8] border border-[#C59B27] hover:bg-[#7A1D2B] shadow-sm text-xs tracking-wider uppercase font-cinzel font-semibold py-2 px-4 sm:px-5 gap-2 rounded-full active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F3D279]" />
            <span>Save the Date</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#5C131E] hover:bg-[#FAF0EE] active:scale-90 transition-transform"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5EB]/98 backdrop-blur-xl border-b border-[#C59B27]/30 px-6 py-6 animate-in slide-in-from-top-4 duration-300 shadow-xl">
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
                className="text-sm font-medium tracking-widest uppercase text-[#5C131E] hover:text-[#C59B27] py-1 border-b border-[#E8DEC8]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onSaveDateClick()
                }}
                className="w-full bg-[#5C131E] text-[#FFFDF8] py-2.5 rounded-full flex items-center justify-center gap-2 font-cinzel text-xs tracking-wider uppercase border border-[#C59B27]"
              >
                <Calendar className="w-4 h-4 text-[#F3D279]" />
                <span>Save the Date</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onNetworkShareClick()
                }}
                className="w-full py-2.5 rounded-full flex items-center justify-center gap-2 border border-[#C59B27]/40 text-xs font-cinzel uppercase tracking-wider text-[#5C131E] bg-white/70"
              >
                <QrCode className="w-4 h-4 text-[#C59B27]" />
                <span>Share Wi-Fi / QR Code</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
