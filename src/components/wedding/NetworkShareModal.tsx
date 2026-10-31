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
  const networkUrl = 'http://192.168.1.60:5174/'
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
          <div className="mx-auto size-12 rounded-full bg-[#FFF0F3] text-[#7E2E40] flex items-center justify-center mb-1 border border-[#E8C5CB]">
            <Wifi className="w-6 h-6 text-[#7E2E40]" />
          </div>
          <DialogTitle className="font-serif text-3xl text-[#7E2E40]">
            Open on Mobile &amp; Tablet
          </DialogTitle>
          <DialogDescription className="text-xs text-[#8C3A4F]">
            Connect your phone or tablet to the same Wi-Fi network and scan or open the link.
          </DialogDescription>
        </DialogHeader>

        {/* QR Code Container */}
        <div className="flex flex-col items-center justify-center my-2">
          <div className="relative p-3 rounded-2xl bg-white border-2 border-[#E8C5CB] shadow-sm">
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
          <span className="text-[11px] font-cinzel uppercase tracking-[0.2em] text-[#8C3A4F] mt-2">
            Scan with your Phone Camera
          </span>
        </div>

        {/* Local Wi-Fi Network URL Box */}
        <div className="rounded-xl border border-[#E8C5CB] bg-white p-3 flex items-center justify-between gap-2 shadow-xs">
          <div className="overflow-hidden">
            <div className="text-[10px] uppercase font-cinzel text-[#8A7D6C] tracking-wider">
              Network Wi-Fi Address
            </div>
            <div className="text-sm font-mono font-semibold text-[#7E2E40] truncate">
              {networkUrl}
            </div>
          </div>
          <Button
            onClick={handleCopy}
            size="sm"
            className="shrink-0 h-8 px-3 rounded-lg border border-[#E8C5CB] bg-[#FFF0F3] hover:bg-white text-xs font-medium text-[#7E2E40] font-cinzel cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#B5566A]" />
                <span className="text-[#B5566A]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#B5566A]" />
                <span>Copy</span>
              </>
            )}
          </Button>
        </div>

        {/* Helpful Tips */}
        <div className="text-[11px] text-[#7A6D5E] leading-relaxed bg-[#FFF0F3] p-3 rounded-xl border border-[#E8C5CB]">
          💡 <span className="font-semibold text-[#7E2E40]">Tip:</span> Ensure your phone or tablet is connected to the same Wi-Fi network (<span className="font-mono text-[#7E2E40]">hgu_lan</span>) to access the live invitation.
        </div>

        <Button
          onClick={onClose}
          className="w-full bg-[#7E2E40] hover:bg-[#9E3D52] text-white rounded-full py-2.5 text-xs font-cinzel tracking-wider uppercase border border-[#E8C5CB] shadow-md cursor-pointer"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}
