import React, { useState } from 'react'
import { Check, Copy, ExternalLink, QrCode, Smartphone, Wifi } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface NetworkShareModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NetworkShareModal({ isOpen, onClose }: NetworkShareModalProps) {
  const [copied, setCopied] = useState(false)

  // Compute shareable URL: if on localhost use actual active Wi-Fi LAN IP (192.168.1.6)
  // If accessed via LAN IP or public server domain, use window.location.origin
  const networkUrl = React.useMemo(() => {
    if (typeof window === 'undefined') return 'http://192.168.1.6:5174/'
    const hostname = window.location.hostname
    const port = window.location.port ? `:${window.location.port}` : ''
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return `http://192.168.1.6${port}/`
    }
    return `${window.location.protocol}//${window.location.host}${window.location.pathname}`
  }, [isOpen])

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    networkUrl
  )}&color=16-50-36&bgcolor=251-247-240`

  const handleCopy = () => {
    navigator.clipboard.writeText(networkUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md p-6 bg-[#FAF5EB] border-[#D8C7A9]">
        <DialogHeader className="text-center">
          <div className="mx-auto size-12 rounded-full bg-[#E5F0E9] text-[#163224] flex items-center justify-center mb-1">
            <Wifi className="w-6 h-6 text-[#163224]" />
          </div>
          <DialogTitle className="font-serif text-3xl text-[#163224]">
            Open on Mobile &amp; Tablet
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7A6D5E]">
            Connect your phone or tablet to the same Wi-Fi network and scan or open the link.
          </DialogDescription>
        </DialogHeader>

        {/* QR Code Container */}
        <div className="flex flex-col items-center justify-center my-2">
          <div className="relative p-3 rounded-2xl bg-white border-2 border-[#D8C7A9] shadow-sm">
            <img
              src={qrCodeUrl}
              alt="Scan QR code to open on mobile"
              className="w-48 h-48 rounded-xl object-contain"
              onError={(e) => {
                // Fallback icon if offline
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
          <span className="text-[11px] font-cinzel uppercase tracking-[0.2em] text-[#7A6D5E] mt-2">
            Scan with your Phone Camera
          </span>
        </div>

        {/* Local Wi-Fi Network URL Box */}
        <div className="rounded-xl border border-[#D8C7A9] bg-white p-3 flex items-center justify-between gap-2 shadow-xs">
          <div className="overflow-hidden">
            <div className="text-[10px] uppercase font-cinzel text-[#8A7D6C] tracking-wider">
              Network Wi-Fi Address
            </div>
            <div className="text-sm font-mono font-semibold text-[#163224] truncate">
              {networkUrl}
            </div>
          </div>
          <Button
            onClick={handleCopy}
            variant="creamOutline"
            size="sm"
            className="shrink-0 h-8 px-3 rounded-lg border-[#C59B27] text-xs font-medium text-[#163224]"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#227B4E]" />
                <span className="text-[#227B4E]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Copy</span>
              </>
            )}
          </Button>
        </div>

        {/* Helpful Tips */}
        <div className="text-[11px] text-[#7A6D5E] leading-relaxed bg-[#F3ECDD] p-3 rounded-xl border border-[#E4D8C2]">
          💡 <span className="font-semibold text-[#163224]">Tip:</span> Ensure your phone or tablet is connected to the same Wi-Fi network (<span className="font-mono text-[#163224]">hgu_lan</span>) to access the live invitation.
        </div>

        <Button
          onClick={onClose}
          variant="default"
          className="w-full bg-[#163224] text-white rounded-full py-2.5 text-xs uppercase tracking-wider"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
