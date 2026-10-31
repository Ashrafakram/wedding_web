import React, { useState } from 'react'
import { CalendarCheck, Users, Mail, Phone, Send, CheckCircle2, Heart, Sparkles } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { launchPetalShower } from '@/lib/confetti'

interface RsvpModalProps {
  isOpen: boolean
  onClose: () => void
}

interface RsvpSubmission {
  id: string
  name: string
  phone: string
  guests: number
  eventAttending: 'both' | 'reception' | 'muhurtham' | 'declined'
  note: string
  submittedAt: string
}

export function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [guests, setGuests] = useState('2')
  const [eventAttending, setEventAttending] = useState<'both' | 'reception' | 'muhurtham' | 'declined'>('both')
  const [note, setNote] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    setIsSubmitting(true)

    const submission: RsvpSubmission = {
      id: Date.now().toString(),
      name: name.trim(),
      phone: phone.trim(),
      guests: parseInt(guests, 10) || 1,
      eventAttending,
      note: note.trim(),
      submittedAt: new Date().toISOString(),
    }

    // 1. Save to localStorage for instant persistence
    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]')
      existing.unshift(submission)
      localStorage.setItem('wedding_rsvps', JSON.stringify(existing))
    } catch (_) {}

    // 2. Optional webhook dispatch (Google Apps Script / Webhook endpoint if configured)
    const webhookUrl = (window as any).WEDDING_RSVP_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission),
          mode: 'no-cors',
        })
      } catch (err) {
        console.warn('Webhook post notice:', err)
      }
    }

    // 3. Celebratory feedback
    launchPetalShower()
    setIsSubmitting(false)
    setSubmitted(true)

    setTimeout(() => {
      setName('')
      setPhone('')
      setNote('')
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md sm:max-w-lg p-5 sm:p-7 no-scrollbar max-h-[88vh] overflow-y-auto bg-[#FFFDF9] border-2 border-[#D8C7A9] rounded-3xl shadow-2xl">
        <DialogHeader className="text-center">
          <div className="mx-auto size-12 rounded-full bg-[#FAF3DE] text-[#C59B27] flex items-center justify-center mb-1.5 border border-[#E8DEC8] shadow-xs">
            <CalendarCheck className="w-6 h-6 text-[#C59B27] animate-pulse" />
          </div>
          <DialogTitle className="font-serif text-2xl sm:text-3xl text-[#7E2E40]">
            Wedding RSVP
          </DialogTitle>
          <DialogDescription className="text-xs text-[#8C3A4F] font-cinzel tracking-wider">
            Kindly confirm your presence for Swetha &amp; Deepak Kumar's Wedding
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-300">
            <div className="mx-auto size-16 rounded-full bg-[#FFF0F3] text-[#7E2E40] flex items-center justify-center border border-[#E8C5CB] shadow-sm animate-bounce">
              <CheckCircle2 className="w-9 h-9 text-[#B5566A]" />
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#7E2E40]">RSVP Confirmed!</h4>
            <p className="text-xs sm:text-sm text-[#5E5244] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#7E2E40]">{name}</span>. Your attendance has been warmly recorded. We eagerly await celebrating with you in Salem!
            </p>
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#9A7516] font-cinzel">
              <Sparkles className="size-3.5 text-[#D4AF37]" />
              <span>See you on 19 &amp; 20 November 2026</span>
              <Sparkles className="size-3.5 text-[#D4AF37]" />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-cinzel uppercase tracking-wider font-semibold text-[#4A4237] mb-1">
                  Your Full Name *
                </label>
                <Input
                  required
                  placeholder="e.g. Anand Kumar & Family"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-10 text-xs rounded-xl bg-white border-[#E8C5CB] focus:border-[#B5566A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-cinzel uppercase tracking-wider font-semibold text-[#4A4237] mb-1">
                  Mobile / WhatsApp
                </label>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-10 text-xs rounded-xl bg-white border-[#E8C5CB] focus:border-[#B5566A]"
                />
              </div>
            </div>

            {/* Attendance & Guest Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-cinzel uppercase tracking-wider font-semibold text-[#4A4237] mb-1">
                  Events Attending *
                </label>
                <select
                  value={eventAttending}
                  onChange={(e) => setEventAttending(e.target.value as any)}
                  className="w-full h-10 rounded-xl border border-[#E8C5CB] bg-white px-3 text-xs text-[#7E2E40] font-medium focus:outline-hidden focus:border-[#B5566A]"
                >
                  <option value="both">Both Events (Reception &amp; Wedding)</option>
                  <option value="reception">Reception Only (19 Nov, 6:00 PM)</option>
                  <option value="muhurtham">Wedding Muhurtham Only (20 Nov, 4:00 AM)</option>
                  <option value="declined">Regretfully Cannot Attend</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-cinzel uppercase tracking-wider font-semibold text-[#4A4237] mb-1">
                  Number of Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full h-10 rounded-xl border border-[#E8C5CB] bg-white px-3 text-xs text-[#7E2E40] font-medium focus:outline-hidden focus:border-[#B5566A]"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5">5+ Persons (Family)</option>
                </select>
              </div>
            </div>

            {/* Dietary or Well Wishes Note */}
            <div>
              <label className="block text-[11px] font-cinzel uppercase tracking-wider font-semibold text-[#4A4237] mb-1">
                Personal Note / Dietary Requirements
              </label>
              <textarea
                rows={2}
                placeholder="Vegetarian meal count, travel inquiries, or heartfelt blessings..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full rounded-xl border border-[#E8C5CB] bg-white p-2.5 text-xs text-[#7E2E40] placeholder:text-[#A09585] focus:outline-hidden focus:border-[#B5566A] focus:ring-1 focus:ring-[#B5566A]"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#7E2E40] hover:bg-[#9E3D52] text-white rounded-full flex items-center justify-center gap-2 text-xs font-cinzel font-semibold uppercase tracking-[0.16em] shadow-md active:scale-98 transition-all cursor-pointer border border-[#E8C5CB]"
            >
              <Send className="w-4 h-4 text-[#F3D279]" />
              <span>{isSubmitting ? 'Recording RSVP...' : 'Submit RSVP Confirmation'}</span>
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default RsvpModal
