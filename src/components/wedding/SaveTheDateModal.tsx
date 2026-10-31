import React from 'react'
import { Calendar, Download, MapPin, Share2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { LotusLogo } from '@/components/common/Ornaments'
import { launchPetalShower } from '@/lib/confetti'

interface SaveTheDateModalProps {
  isOpen: boolean
  onClose: () => void
  onAddToCalendar: () => void
}

export function SaveTheDateModal({
  isOpen,
  onClose,
  onAddToCalendar,
}: SaveTheDateModalProps) {
  const handleSave = () => {
    launchPetalShower()
    onAddToCalendar()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-6 bg-[#FAF5EB] border-[#D8C7A9]">
        <DialogHeader className="text-center">
          <div className="mx-auto flex items-center justify-center mb-1">
            <LotusLogo className="w-10 h-10 text-[#C59B27]" />
          </div>
          <DialogTitle className="font-serif text-3xl text-[#163224]">
            Save The Date
          </DialogTitle>
          <DialogDescription className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#9A7516]">
            Swetha &amp; Deepak Kumar Wedding
          </DialogDescription>
        </DialogHeader>

        {/* Digital Pass Card */}
        <div className="rounded-2xl border border-[#D8C7A9] bg-white p-5 shadow-sm text-center relative overflow-hidden my-2">
          {/* Couple Image Thumbnail */}
          <div className="w-full h-40 rounded-xl overflow-hidden mb-3 border border-[#E8DEC8]">
            <img
              src="/assets/couple_anime.jpg"
              alt="Swetha & Deepak Kumar"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="font-serif text-2xl text-[#163224] mb-1">
            19 &amp; 20 November 2026
          </div>
          
          <div className="text-xs text-[#6B5E4F] space-y-1 my-2">
            <div className="flex items-center justify-center gap-1.5 font-medium text-[#163224]">
              <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>AVVS Mahal &amp; Senraya Perumal Temple</span>
            </div>
            <div className="text-[11px] text-[#8A7D6C]">Ammapet &amp; Odayapatti, Salem, Tamil Nadu</div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-2">
          <Button
            onClick={handleSave}
            variant="default"
            className="w-full py-2.5 bg-[#163224] text-[#FBF7F0] rounded-full flex items-center justify-center gap-2 hover:bg-[#1E4532]"
          >
            <Calendar className="w-4 h-4 text-[#E7C979]" />
            <span>Add Event to My Calendar</span>
          </Button>

          <Button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Swetha & Deepak Wedding Invitation',
                  text: 'Save the Date! Swetha & Deepak Kumar Wedding on 19 & 20 November 2026 at AVVS Mahal, Salem.',
                  url: window.location.href,
                }).catch(() => {})
              }
            }}
            variant="creamOutline"
            className="w-full py-2.5 rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
          >
            <Share2 className="w-4 h-4 text-[#C59B27]" />
            <span>Share Invitation Card</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
