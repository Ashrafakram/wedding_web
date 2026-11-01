import React, { useState, useEffect } from 'react'
import { Send, Heart, Sparkles } from 'lucide-react'

interface Wish {
  id: string
  name: string
  relation: string
  message: string
  date: string
}

const DEFAULT_WISHES: Wish[] = [
  {
    id: 'w1',
    name: 'Karthik & Family',
    relation: 'Friend',
    message: 'Wishing both Deepak and Swetha a glorious journey of love, laughter, and lifelong togetherness! May God bless you both abundant happiness.',
    date: 'Just now',
  },
  {
    id: 'w2',
    name: 'Suresh Kumar',
    relation: 'Family Elder',
    message: 'இனிய திருமண நல்வாழ்த்துகள்! தீபக் - ஸ்வேதா தம்பதியினர் பல்லாண்டு காலம் நோயற்ற வாழ்வும் குறைவற்ற செல்வமும் பெற்று வாழ வாழ்த்துகிறேன்.',
    date: '1 hour ago',
  },
  {
    id: 'w3',
    name: 'Priya & Vignesh',
    relation: 'Cousin',
    message: 'So incredibly happy for you both! Can’t wait to celebrate the grand reception at AVVS Mahal.',
    date: '3 hours ago',
  },
]

export const MahalGuestbookWishes: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>(() => {
    try {
      const saved = localStorage.getItem('deepak_swetha_wishes')
      if (saved) return JSON.parse(saved)
    } catch {
      // fallback
    }
    return DEFAULT_WISHES
  })

  const [name, setName] = useState('')
  const [relation, setRelation] = useState('Friend')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('deepak_swetha_wishes', JSON.stringify(wishes))
    } catch {
      // ignore
    }
  }, [wishes])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      relation,
      message: message.trim(),
      date: 'Just now',
    }

    setWishes([newWish, ...wishes])
    setName('')
    setMessage('')
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="relative isolate z-10 w-full px-[6%] py-[8%] md:px-[12%]">
      <div className="relative z-10 max-w-[620px] mx-auto text-center">
        <span
          className="text-xs uppercase tracking-widest text-[#ab7a45] font-semibold block mb-1"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          Send Blessings
        </span>
        <h2
          className="text-[22px] md:text-[28px] font-bold text-[#640e1b] uppercase tracking-[0.05em] mb-3"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          GUESTBOOK &amp; WISHES
        </h2>

        <img
          src="/images/themes/mahal-gold/gold-line.webp"
          alt=""
          aria-hidden="true"
          className="mx-auto block h-auto w-[55%] max-w-[260px] object-contain mb-8"
        />

        {/* Wishes Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#fff8f0]/90 p-5 md:p-6 rounded-2xl border border-[#ab7a45]/30 shadow-md text-left mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-[#640e1b] mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#ab7a45]/35 bg-white text-sm text-[#640e1b] focus:outline-none focus:ring-2 focus:ring-[#ab7a45]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#640e1b] mb-1">Relationship</label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#ab7a45]/35 bg-white text-sm text-[#640e1b] focus:outline-none focus:ring-2 focus:ring-[#ab7a45]"
              >
                <option value="Friend">Friend</option>
                <option value="Family">Family</option>
                <option value="Colleague">Colleague</option>
                <option value="Well-wisher">Well-wisher</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-[#640e1b] mb-1">
              Your Blessings &amp; Message *
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your wishes for Deepak & Swetha..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#ab7a45]/35 bg-white text-sm text-[#640e1b] focus:outline-none focus:ring-2 focus:ring-[#ab7a45] resize-none"
            />
          </div>

          <div className="flex items-center justify-between">
            {isSubmitted && (
              <span className="text-xs text-green-700 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Blessings submitted!
              </span>
            )}
            <button
              type="submit"
              className="ml-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold text-white bg-[#640e1b] hover:bg-[#7e1423] shadow-md transition-all active:scale-95"
            >
              <Send className="w-4 h-4" />
              Send Wishes
            </button>
          </div>
        </form>

        {/* Wishes Feed */}
        <div className="space-y-4 text-left">
          {wishes.map((item) => (
            <div
              key={item.id}
              className="p-4 md:p-5 rounded-xl border border-[#ab7a45]/25 bg-[#fff8f0]/60 shadow-sm transition-all hover:bg-[#fff8f0]"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#ab7a45]/20 text-[#640e1b] flex items-center justify-center font-bold text-xs">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#640e1b] leading-tight">{item.name}</h4>
                    <span className="text-[11px] text-[#ab7a45] font-medium">{item.relation}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#640e1b]/60">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>{item.date}</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-[#640e1b]/80 leading-relaxed pl-10">
                &ldquo;{item.message}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

