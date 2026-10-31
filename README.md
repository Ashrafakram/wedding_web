# Swetha & Deepak Kumar — Royal Wedding Invitation Web App

A high-performance wedding invitation web application built with **React 19**, **TypeScript**, **Vite 8**, **Tailwind CSS v4**, and **shadcn/ui** components.

---

## 🌸 Key Features

- **Royal Traditional Aesthetics**: Tailored South Indian wedding theme inspired by traditional Salem weddings (AVVS Mahal & Senraya Perumal Temple).
- **Anime Couple Illustration**: High-resolution digital artwork of the bride and groom in South Indian wedding silk attire with jasmine garlands and temple backdrop.
- **Bilingual Invitation**: Elegant English and Tamil (`தமிழ்`) invitation letters with floral filigree dividers.
- **Live Countdown Timer**: Real-time ticking counter showing Days, Hours, Minutes, and Seconds until the celebration.
- **Event Schedule Cards**:
  - **Day 1**: 19 November 2026 (Thursday) — Reception / *வரவேற்பு விழா* at AVVS Mahal, Ammapet, Salem (6:00 PM – 9:00 PM).
  - **Day 2**: 20 November 2026 (Friday) — Wedding / *திருமண விழா* Muhurtham at Senraya Perumal Temple, Odayapatti, Salem (4:00 AM – 6:00 AM).
- **Venues with Maps**:
  - **AVVS Mahal** featuring the marquee lawn tent canopy (Vasavi Garden) with instant "Get Directions" Google Maps integration.
  - **Senraya Perumal Temple** with "Find on Maps" navigation.
- **Interactive Modals & Guestbook**:
  - **Interactive Gold Wax Seal**: Tap to open digital envelope with custom petal shower animation.
  - **Send Your Wishes**: Guestbook modal with quick blessings and real-time blessings feed.
  - **Add to Calendar**: Generates and downloads `.ics` calendar invite for Apple/Google Calendar.
  - **Share Invitation**: Instant WhatsApp invite messaging and one-click copy link.
  - **Ambient Floating Petals**: Gentle jasmine and golden petals floating in the background.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
The application will start at `http://localhost:5174/`.

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
wedding-web/
├── public/
│   └── assets/                  # High-res enhanced images & crops
│       ├── couple_anime.jpg     # Couple anime illustration
│       ├── kuthuvilakku_lamp.jpg# Day 1 brass diya lamp
│       ├── senraya_entrance.jpg # Day 2 temple entrance
│       ├── avvs_tent_venue.jpg  # AVVS Mahal lawn tent canopy
│       ├── senraya_temple_venue.jpg # Senraya Perumal Temple
│       ├── seal_stamp.jpg       # Royal gold wax seal
│       └── wax_seal.jpg
├── src/
│   ├── components/
│   │   ├── common/              # Ornaments & FloatingPetals
│   │   ├── layout/              # Navbar
│   │   ├── ui/                  # shadcn button, card, dialog, badge, input
│   │   └── wedding/             # HeroSection, HeartfeltInvitation,
│   │                            # CountdownSection, CelebrationsSection,
│   │                            # VenuesSection, InvitationActionsFooter,
│   │                            # WaxSealIntro, SendWishesModal,
│   │                            # SaveTheDateModal, ShareModal
│   ├── lib/
│   │   ├── calendar.ts          # .ics calendar event generator
│   │   ├── confetti.ts          # Falling petal shower effect
│   │   └── utils.ts             # cn helper
│   ├── styles/
│   │   └── index.css            # Tailwind v4 & typography tokens
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```
