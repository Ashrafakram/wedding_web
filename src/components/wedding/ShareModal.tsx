import React, { useState } from 'react'
import { Check, Copy, MessageCircle, QrCode, Share2, Wifi } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenNetworkShare: () => void
}

export function ShareModal({ isOpen, onClose, onOpenNetworkShare }: ShareModalProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = React.useMemo(() => {
    if (typeof window === 'undefined') return 'http://192.168.1.6:5174/'
    const hostname = window.location.hostname
    const port = window.location.port ? `:${window.location.port}` : ''
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return `http://192.168.1.6${port}/`
    }
    return `${window.location.protocol}//${window.location.host}${window.location.pathname}`
  }, [isOpen])

  const shareText = `💍 Swetha & Deepak Kumar Wedding Invitation\n\nWe cordially invite you to join our wedding celebration on 19 & 20 November 2026.\n\n✨ Reception: 19 Nov, 6:00 PM @ AVVS Mahal, Ammapet, Salem\n✨ Muhurtham: 20 Nov, 4:00 AM @ Senraya Perumal Temple, Odayapatti, Salem\n\nView details & live invitation: ${shareUrl}`

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`
    window.open(url, '_blank')
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Swetha & Deepak Kumar Wedding Invitation',
          text: shareText,
          url: shareUrl,
        })
        .catch(() => {})
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-6 bg-[#FAF5EB] border-[#D8C7A9]">
        <DialogHeader className="text-center">
          <div className="mx-auto size-12 rounded-full bg-[#EAF2ED] text-[#25D366] flex items-center justify-center mb-1">
            <Share2 className="w-6 h-6 text-[#163224]" />
          </div>
          <DialogTitle className="font-serif text-3xl text-[#163224]">
            Share Invitation
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7A6D5E]">
            Share the joyful wedding invitation with friends and family.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2">
          {/* WhatsApp Direct Share */}
          <Button
            onClick={handleWhatsAppShare}
            variant="default"
            className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full flex items-center justify-center gap-2 font-medium shadow-sm transition-transform active:scale-98"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span>Share via WhatsApp</span>
          </Button>

          {/* Wi-Fi / Mobile Network QR Code Option */}
          <Button
            onClick={() => {
              onClose()
              onOpenNetworkShare()
            }}
            variant="creamOutline"
            className="w-full py-3 rounded-full flex items-center justify-center gap-2 border-[#C59B27] bg-[#FAF4E4] hover:bg-[#F3EACB] text-xs uppercase tracking-wider text-[#163224] transition-transform active:scale-98"
          >
            <QrCode className="w-4 h-4 text-[#C59B27]" />
            <span>Open on Mobile via QR Code / Wi-Fi</span>
          </Button>

          {/* Copy Full Invite & Link */}
          <Button
            onClick={handleCopyLink}
            variant="creamOutline"
            className="w-full py-3 rounded-full flex items-center justify-center gap-2 border-[#D8C7A9] text-xs uppercase tracking-wider text-[#163224] transition-transform active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#227B4E]" />
                <span className="text-[#227B4E] font-semibold">Invitation Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C59B27]" />
                <span>Copy Invitation Message &amp; Link</span>
              </>
            )}
          </Button>

          {/* Web Share (if available) */}
          {'share' in navigator && (
            <Button
              onClick={handleNativeShare}
              variant="ghost"
              className="w-full py-2 text-xs uppercase tracking-wider text-[#7A6D5E] hover:text-[#163224]"
            >
              More Share Options...
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
