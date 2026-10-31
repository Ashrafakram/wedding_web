import React, { useState, useEffect } from 'react'
import { X, Check, Palette, Sparkles, Wand2 } from 'lucide-react'
import { WEDDING_THEMES, type WeddingTheme, getInitialTheme, applyTheme } from '@/lib/theme'
import { launchHeartAndMultiShapeBurst } from '@/lib/confetti'
import { weddingAudio } from '@/lib/weddingAudio'

interface ThemeColorModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ThemeColorModal({ isOpen, onClose }: ThemeColorModalProps) {
  const [activeTheme, setActiveTheme] = useState<WeddingTheme>(getInitialTheme())

  useEffect(() => {
    if (isOpen) {
      const current = getInitialTheme()
      setActiveTheme(current)
      applyTheme(current)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSelectTheme = (theme: WeddingTheme) => {
    setActiveTheme(theme)
    applyTheme(theme)
    launchHeartAndMultiShapeBurst()
    try {
      weddingAudio.playTempleBellChime()
    } catch (_) {}
  }

  const handleApplyAndDone = () => {
    applyTheme(activeTheme)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl sm:rounded-3xl border-2 border-[#E8C5CB] shadow-2xl overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header in Royal Rosewood & Blush Pink */}
        <div className="bg-gradient-to-r from-[#7E2E40] via-[#9E3D52] to-[#7E2E40] px-6 py-5 text-center relative border-b border-[#E8C5CB]/60">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 size-8 rounded-full bg-black/30 hover:bg-black/50 text-[#FFF0F3] flex items-center justify-center transition-all cursor-pointer border border-[#E8C5CB]/40"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>

          <div className="inline-flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full border border-[#E8C5CB]/40 text-[#FFF0F3] text-[10px] sm:text-xs font-cinzel uppercase tracking-widest mb-1.5">
            <Palette className="size-3 text-[#F3D279]" />
            <span>Visual Wedding Color Palettes</span>
          </div>

          <h2 className="text-lg sm:text-2xl font-cinzel font-bold text-[#FFF7DC] tracking-wide">
            Select Your Wedding Theme Color
          </h2>
          <p className="text-xs sm:text-sm text-[#F7D6DC] font-serif tracking-wider mt-0.5">
            Click any palette below to instantly preview the live colors across the entire website &amp; invitation
          </p>
        </div>

        {/* Theme Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[68vh] overflow-y-auto">
          {WEDDING_THEMES.map((theme) => {
            const isSelected = activeTheme.id === theme.id

            return (
              <div
                key={theme.id}
                onClick={() => handleSelectTheme(theme)}
                className={`relative rounded-2xl p-4 transition-all duration-300 cursor-pointer border-2 text-left group ${
                  isSelected
                    ? 'border-[#D4AF37] ring-4 ring-[#D4AF37]/30 shadow-xl bg-white'
                    : 'border-zinc-200 hover:border-[#D4AF37]/70 bg-zinc-50/70 hover:bg-white'
                }`}
              >
                {/* Active Selection Badge */}
                {isSelected && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#D4AF37] text-[#7E2E40] px-2.5 py-0.5 rounded-full text-[10px] font-cinzel font-bold shadow-sm">
                    <Check className="size-3" />
                    <span>ACTIVE</span>
                  </div>
                )}

                {/* Theme Title */}
                <div className="pr-16">
                  <h3 className="text-sm sm:text-base font-cinzel font-bold text-[#2D261E] leading-snug">
                    {theme.name}
                  </h3>
                  <p className="text-[11px] font-serif text-[#C59B27] mt-0.5 font-medium">
                    {theme.tamilName}
                  </p>
                </div>

                {/* Visual Color Palette Swatches */}
                <div className="my-3 flex items-center gap-2">
                  <div className="flex -space-x-1.5 items-center">
                    {/* Primary Color Swatch */}
                    <div
                      className="size-7 sm:size-8 rounded-full border-2 border-white shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: theme.colors.primary }}
                      title={`Primary: ${theme.colors.primary}`}
                    />
                    {/* Secondary Color Swatch */}
                    <div
                      className="size-7 sm:size-8 rounded-full border-2 border-white shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: theme.colors.secondary }}
                      title={`Secondary: ${theme.colors.secondary}`}
                    />
                    {/* Gold Accent Swatch */}
                    <div
                      className="size-7 sm:size-8 rounded-full border-2 border-white shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: theme.colors.gold }}
                      title={`Gold Accent: ${theme.colors.gold}`}
                    />
                    {/* Light Gold Swatch */}
                    <div
                      className="size-7 sm:size-8 rounded-full border-2 border-white shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: theme.colors.goldLight }}
                      title={`Light Gold: ${theme.colors.goldLight}`}
                    />
                    {/* Silk Cream Swatch */}
                    <div
                      className="size-7 sm:size-8 rounded-full border-2 border-zinc-300 shadow-md transition-transform group-hover:scale-110"
                      style={{ backgroundColor: theme.colors.cream }}
                      title={`Silk Cream: ${theme.colors.cream}`}
                    />
                  </div>

                  <span className="text-[10px] font-mono font-medium text-zinc-500 uppercase ml-auto">
                    {theme.colors.primary}
                  </span>
                </div>

                {/* Mini Mockup Visual Preview Card */}
                <div
                  className="rounded-xl p-3 border shadow-inner flex items-center justify-between transition-transform duration-300 group-hover:scale-[1.01]"
                  style={{
                    backgroundColor: theme.colors.primary,
                    borderColor: theme.colors.gold,
                  }}
                >
                  <div className="space-y-0.5">
                    <p
                      className="text-[9px] font-serif uppercase tracking-wider font-semibold"
                      style={{ color: theme.colors.goldLight }}
                    >
                      Swetha &amp; Deepak
                    </p>
                    <p className="text-[11px] font-cinzel font-bold text-white">
                      Wedding Invitation
                    </p>
                  </div>
                  <div
                    className="size-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm"
                    style={{
                      backgroundColor: theme.colors.gold,
                      color: theme.colors.primary,
                    }}
                  >
                    ௐ
                  </div>
                </div>

                {/* Description */}
                <p className="text-[11px] text-zinc-600 mt-2.5 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Footer Actions */}
        <div className="bg-zinc-50 px-6 py-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-zinc-600">
            <Sparkles className="size-4 text-[#D4AF37]" />
            <span>Theme persists automatically on your browser.</span>
          </div>

          <button
            onClick={handleApplyAndDone}
            className="w-full sm:w-auto px-6 py-2 rounded-full bg-[#7E2E40] hover:bg-[#9E3D52] text-[#FFF0F3] font-cinzel font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer border border-[#E8C5CB]"
          >
            Apply &amp; Done
          </button>
        </div>
      </div>
    </div>
  )
}
export default ThemeColorModal
