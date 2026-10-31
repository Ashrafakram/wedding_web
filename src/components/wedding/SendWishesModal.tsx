import React, { useState } from 'react'
import { Heart, Send, Sparkles, User, CheckCircle2, MessageSquareHeart } from 'lucide-react'
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

interface SendWishesModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Wish {
  id: string
  name: string
  relation: string
  message: string
  timestamp: string
  likes: number
}

const initialWishes: Wish[] = [
  {
    id: '1',
    name: 'Karthik & Priya',
    relation: 'Family',
    message:
      'Wishing dear Swetha and Deepak a blissful married life filled with endless love and laughter! May Lord Senraya Perumal shower all his blessings upon both of you!',
    timestamp: 'Just now',
    likes: 5,
  },
  {
    id: '2',
    name: 'Venkatesh Raman',
    relation: 'Friend',
    message:
      'Heartiest congratulations Deepak and Swetha! Looking forward to celebrating with you at AVVS Mahal on the 19th!',
    timestamp: '2 hours ago',
    likes: 3,
  },
  {
    id: '3',
    name: 'Anitha & Sundar',
    relation: 'Well-Wisher',
    message:
      'இரு மனங்கள் இணையும் இனிய திருமண நல்வாழ்த்துகள்! Have a prosperous and joyous life together!',
    timestamp: 'Yesterday',
    likes: 8,
  },
]

export function SendWishesModal({ isOpen, onClose }: SendWishesModalProps) {
  const [activeTab, setActiveTab] = useState<'form' | 'wall'>('form')
  const [wishes, setWishes] = useState<Wish[]>(initialWishes)
  const [name, setName] = useState('')
  const [relation, setRelation] = useState('Friend')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const quickWishes = [
    'May your love grow stronger with each passing day! 🌸',
    'Wishing you a lifetime of health, prosperity & endless joy! 💫',
    'இரு மனங்கள் இணையும் இனிய திருமண நல்வாழ்த்துகள்! 💐',
    'Congratulations on beginning this beautiful journey together! ✨',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      relation,
      message: message.trim(),
      timestamp: 'Just now',
      likes: 1,
    }

    setWishes([newWish, ...wishes])
    setSubmitted(true)
    launchPetalShower()

    setTimeout(() => {
      setName('')
      setMessage('')
      setSubmitted(false)
      setActiveTab('wall')
    }, 1500)
  }

  const handleLike = (id: string) => {
    setWishes(
      wishes.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md sm:max-w-lg p-5 sm:p-6 no-scrollbar max-h-[85vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <div className="mx-auto size-11 rounded-full bg-[#FAF3DE] text-[#C59B27] flex items-center justify-center mb-1">
            <Heart className="w-5 h-5 fill-[#C59B27] animate-pulse" />
          </div>
          <DialogTitle className="font-serif text-2xl sm:text-3xl text-[#163224]">
            Wedding Blessings &amp; Wishes
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7A6D5E]">
            Share your heartfelt love and blessings for Swetha &amp; Deepak Kumar
          </DialogDescription>
        </DialogHeader>

        {/* Tab Switcher */}
        <div className="flex rounded-full bg-[#F3ECDD] p-1 my-1 border border-[#E5DAC3]">
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-1.5 text-xs font-cinzel uppercase tracking-wider font-semibold rounded-full transition-all duration-300 ${
              activeTab === 'form'
                ? 'bg-[#163224] text-white shadow-xs'
                : 'text-[#6B5E4F] hover:text-[#163224]'
            }`}
          >
            Send Wishes
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('wall')}
            className={`flex-1 py-1.5 text-xs font-cinzel uppercase tracking-wider font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 ${
              activeTab === 'wall'
                ? 'bg-[#163224] text-white shadow-xs'
                : 'text-[#6B5E4F] hover:text-[#163224]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E7C979]" />
            <span>Blessings Wall ({wishes.length})</span>
          </button>
        </div>

        {/* Tab 1: Form View */}
        {activeTab === 'form' && (
          <div className="animate-in fade-in-50 duration-200">
            {submitted ? (
              <div className="py-8 text-center space-y-2 animate-in zoom-in-95 duration-300">
                <CheckCircle2 className="w-12 h-12 text-[#227B4E] mx-auto animate-bounce" />
                <h4 className="font-serif text-2xl text-[#163224]">Blessings Received!</h4>
                <p className="text-xs text-[#5E5244] max-w-sm mx-auto">
                  Thank you for your heartfelt love and prayers.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-medium text-[#4A4237] mb-1">
                      Your Name
                    </label>
                    <Input
                      required
                      placeholder="e.g. Anand & Family"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-9 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-[#4A4237] mb-1">
                      Relationship
                    </label>
                    <select
                      value={relation}
                      onChange={(e) => setRelation(e.target.value)}
                      className="w-full h-9 rounded-xl border border-[#DCD0BA] bg-white px-2.5 text-xs text-[#163224] focus:outline-hidden focus:border-[#C59B27]"
                    >
                      <option value="Friend">Friend</option>
                      <option value="Family">Family</option>
                      <option value="Colleague">Colleague</option>
                      <option value="Well-Wisher">Well-Wisher</option>
                    </select>
                  </div>
                </div>

                {/* Quick Blessing Buttons */}
                <div>
                  <label className="block text-[11px] font-medium text-[#4A4237] mb-1">
                    Quick Blessings
                  </label>
                  <div className="flex flex-wrap gap-1">
                    {quickWishes.map((q, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setMessage(q)}
                        className="text-[10px] px-2.5 py-1 rounded-full border border-[#E2D5BE] bg-[#FAF6EE] text-[#5A5044] hover:bg-[#FAF0D8] hover:border-[#C59B27] active:scale-95 transition-all text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#4A4237] mb-1">
                    Your Heartfelt Message
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Write your wishes and blessings for the couple..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-[#DCD0BA] bg-white p-2.5 text-xs text-[#163224] placeholder:text-[#A09585] focus:outline-hidden focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  className="w-full py-2.5 bg-[#163224] text-white rounded-full flex items-center justify-center gap-2 hover:bg-[#1E4331] text-xs font-semibold uppercase tracking-wider active:scale-98 transition-transform"
                >
                  <Send className="w-3.5 h-3.5 text-[#E7C979]" />
                  <span>Send Blessings</span>
                </Button>
              </form>
            )}
          </div>
        )}

        {/* Tab 2: Wall View */}
        {activeTab === 'wall' && (
          <div className="animate-in fade-in-50 duration-200">
            <div className="space-y-2.5 max-h-[50vh] overflow-y-auto no-scrollbar pr-1 pt-1">
              {wishes.map((w) => (
                <div
                  key={w.id}
                  className="p-3 rounded-2xl bg-[#FAF6EE] border border-[#EAE0CD] text-left text-xs space-y-1.5 transition-all duration-300 hover:border-[#C59B27]/60 shadow-2xs"
                >
                  <div className="flex items-center justify-between text-[#163224]">
                    <span className="font-semibold text-xs text-[#163224]">{w.name}</span>
                    <span className="text-[9px] uppercase font-cinzel text-[#8A7D6C] bg-white/90 px-2 py-0.5 rounded-full border border-[#E5DAC6]">
                      {w.relation}
                    </span>
                  </div>
                  <p className="text-[#554A3E] leading-relaxed font-sans text-xs">{w.message}</p>
                  <div className="flex items-center justify-between pt-1 border-t border-[#F0E6D4]">
                    <span className="text-[10px] text-[#A69784]">{w.timestamp}</span>
                    <button
                      type="button"
                      onClick={() => handleLike(w.id)}
                      className="flex items-center gap-1 text-[11px] text-[#9A7516] hover:text-[#C59B27] active:scale-125 transition-transform"
                    >
                      <Heart className="w-3 h-3 fill-[#C59B27] text-[#C59B27]" />
                      <span>{w.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => setActiveTab('form')}
              variant="creamOutline"
              className="w-full mt-3 py-2 text-xs uppercase tracking-wider rounded-full border-[#C59B27] text-[#163224]"
            >
              + Write Another Blessing
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
