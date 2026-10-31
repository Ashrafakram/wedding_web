export interface WeddingTheme {
  id: 'beige-pink' | 'maroon' | 'emerald' | 'sapphire' | 'peacock'
  name: string
  tamilName: string
  description: string
  colors: {
    primary: string
    secondary: string
    gold: string
    goldLight: string
    cream: string
    cardBg: string
    border: string
    badgeBg: string
    accentPink: string
    accentBeige: string
  }
}

export const WEDDING_THEMES: WeddingTheme[] = [
  {
    id: 'beige-pink',
    name: 'Luxury Blush Pink & Warm French Beige',
    tamilName: 'ரோஜா இளஞ்சிவப்பு • சந்தன பீஜ்',
    description: 'Ultra-romantic royal aesthetic blending soft blush rose petals, warm cashmere beige parchment, and luminous champagne gold.',
    colors: {
      primary: '#7E2E40',
      secondary: '#B5566A',
      gold: '#D4AF37',
      goldLight: '#F3D279',
      cream: '#FAF5EE',
      cardBg: '#FFF7F8',
      border: '#E8C5CB',
      badgeBg: 'rgba(126, 46, 64, 0.88)',
      accentPink: '#E8A5B2',
      accentBeige: '#F3E9DA',
    },
  },
  {
    id: 'maroon',
    name: 'Royal Velvet Maroon & 24K Gold',
    tamilName: 'ராஜ குங்கும சிவப்பு • தங்கம்',
    description: 'Traditional Muhurtham palette with deep royal velvet maroon, vermilion, and shimmering antique gold.',
    colors: {
      primary: '#2B080C',
      secondary: '#5C131E',
      gold: '#D4AF37',
      goldLight: '#F3D279',
      cream: '#FBF7F0',
      cardBg: '#1A0407',
      border: '#D4AF37',
      badgeBg: 'rgba(43, 8, 12, 0.85)',
      accentPink: '#C46D7D',
      accentBeige: '#F5EFE3',
    },
  },
  {
    id: 'emerald',
    name: 'Sacred Emerald Green & Temple Gold',
    tamilName: 'மரகத பச்சை • கோவில் தங்கம்',
    description: 'Matches the bride\'s sacred pattu silk saree and temple ambiance with rich forest emerald and radiant gold.',
    colors: {
      primary: '#0D2E1C',
      secondary: '#1A4D31',
      gold: '#E5C058',
      goldLight: '#F7E4A8',
      cream: '#FAF7F0',
      cardBg: '#081E12',
      border: '#E5C058',
      badgeBg: 'rgba(13, 46, 28, 0.85)',
      accentPink: '#E8A5B2',
      accentBeige: '#FAF7F0',
    },
  },
  {
    id: 'sapphire',
    name: 'Midnight Royal Sapphire & Rose Gold',
    tamilName: 'மின்னும் நீலம் • ரோஸ் கோல்ட்',
    description: 'Modern luxury evening reception vibe with deep midnight sapphire, celestial stars, and warm champagne rose gold.',
    colors: {
      primary: '#081426',
      secondary: '#162C4E',
      gold: '#E6B89C',
      goldLight: '#F8D8C8',
      cream: '#F8F9FA',
      cardBg: '#050D19',
      border: '#E6B89C',
      badgeBg: 'rgba(8, 20, 38, 0.85)',
      accentPink: '#E6B89C',
      accentBeige: '#F8F9FA',
    },
  },
  {
    id: 'peacock',
    name: 'Regal Peacock Teal & Marigold Sunset',
    tamilName: 'மயில் கழுத்து நீலம் • செவ்வந்தி',
    description: 'Vibrant auspicious South Indian festive palette with rich peacock teal, turmeric marigold, and coral accents.',
    colors: {
      primary: '#053742',
      secondary: '#0C5363',
      gold: '#F39C12',
      goldLight: '#F8C471',
      cream: '#FDFBF7',
      cardBg: '#03242B',
      border: '#F39C12',
      badgeBg: 'rgba(5, 55, 66, 0.85)',
      accentPink: '#F8C471',
      accentBeige: '#FDFBF7',
    },
  },
]

const THEME_STORAGE_KEY = 'wedding_chosen_theme'

export function getInitialTheme(): WeddingTheme {
  if (typeof window === 'undefined') return WEDDING_THEMES[0]
  const saved = localStorage.getItem(THEME_STORAGE_KEY)
  if (!saved || saved !== 'beige-pink') {
    localStorage.setItem(THEME_STORAGE_KEY, 'beige-pink')
    return WEDDING_THEMES[0]
  }
  return WEDDING_THEMES[0]
}

export function applyTheme(theme: WeddingTheme) {
  if (typeof window === 'undefined') return
  localStorage.setItem(THEME_STORAGE_KEY, theme.id)

  const root = document.documentElement
  // Remove existing theme classes
  WEDDING_THEMES.forEach((t) => root.classList.remove(`theme-${t.id}`))
  // Add new theme class
  root.classList.add(`theme-${theme.id}`)

  // Set CSS variables
  root.style.setProperty('--theme-primary', theme.colors.primary)
  root.style.setProperty('--theme-secondary', theme.colors.secondary)
  root.style.setProperty('--theme-gold', theme.colors.gold)
  root.style.setProperty('--theme-gold-light', theme.colors.goldLight)
  root.style.setProperty('--theme-cream', theme.colors.cream)
  root.style.setProperty('--theme-card-bg', theme.colors.cardBg)
  root.style.setProperty('--theme-border', theme.colors.border)
  root.style.setProperty('--theme-badge-bg', theme.colors.badgeBg)
  root.style.setProperty('--theme-accent-pink', theme.colors.accentPink)
  root.style.setProperty('--theme-accent-beige', theme.colors.accentBeige)
}
