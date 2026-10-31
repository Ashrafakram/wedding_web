/**
 * Romantic Multi-Shape Confetti & Petal System
 * Showers hearts, diamonds, stars, rings, and jasmine petals
 */

export function launchPetalShower() {
  const count = 35
  const container = document.createElement('div')
  container.className = 'fixed inset-0 pointer-events-none z-[99999] overflow-hidden'
  document.body.appendChild(container)

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div')
    const size = Math.random() * 12 + 10
    const left = Math.random() * 100
    const delay = Math.random() * 1.5
    const duration = Math.random() * 3 + 2.5
    const isGold = Math.random() > 0.6

    petal.style.position = 'absolute'
    petal.style.top = '-20px'
    petal.style.left = `${left}%`
    petal.style.width = `${size}px`
    petal.style.height = `${size * 1.3}px`
    petal.style.borderRadius = '50% 0 50% 50%'
    petal.style.backgroundColor = isGold ? '#F3D279' : '#FFFDF5'
    petal.style.boxShadow = isGold
      ? '0 0 10px rgba(243, 210, 121, 0.7)'
      : '0 2px 6px rgba(0,0,0,0.08)'
    petal.style.opacity = '0.9'
    petal.style.transform = `rotate(${Math.random() * 360}deg)`
    petal.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94), top ${duration}s ease-in, opacity ${duration}s ease-out`
    petal.style.transitionDelay = `${delay}s`

    container.appendChild(petal)

    // Trigger animation
    setTimeout(() => {
      petal.style.top = `${window.innerHeight + 50}px`
      petal.style.transform = `translate(${Math.random() * 120 - 60}px, 0) rotate(${Math.random() * 720}deg)`
      petal.style.opacity = '0'
    }, 20)
  }

  setTimeout(() => {
    container.remove()
  }, 6000)
}

/**
 * Spectacular Multi-Shape Heart & Gem Explosion
 * Launches hearts, diamonds, stars, and golden petals radiating from the center
 */
export function launchHeartAndMultiShapeBurst() {
  const shapes = ['❤️', '💖', '💛', '✨', '✦', '🌸', '🪷']
  const count = 48
  const container = document.createElement('div')
  container.className = 'fixed inset-0 pointer-events-none z-[99999] overflow-hidden'
  document.body.appendChild(container)

  const originX = window.innerWidth / 2
  const originY = window.innerHeight / 2

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div')
    const shape = shapes[Math.floor(Math.random() * shapes.length)]
    const size = Math.random() * 18 + 14
    const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.4 - 0.2)
    const distance = Math.random() * (window.innerWidth * 0.45) + 120
    const duration = Math.random() * 1.8 + 1.8
    const delay = Math.random() * 0.2

    el.innerText = shape
    el.style.position = 'absolute'
    el.style.left = `${originX}px`
    el.style.top = `${originY}px`
    el.style.fontSize = `${size}px`
    el.style.opacity = '1'
    el.style.transform = 'translate(-50%, -50%) scale(0.2)'
    el.style.transition = `transform ${duration}s cubic-bezier(0.12, 0.8, 0.32, 1), opacity ${duration}s ease-out`
    el.style.transitionDelay = `${delay}s`
    el.style.filter = 'drop-shadow(0 0 10px rgba(243, 210, 121, 0.8))'

    container.appendChild(el)

    const destX = Math.cos(angle) * distance
    const destY = Math.sin(angle) * distance - 80

    setTimeout(() => {
      el.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(${Math.random() * 0.6 + 0.9}) rotate(${Math.random() * 720 - 360}deg)`
      el.style.opacity = '0'
    }, 25)
  }

  // Also drop falling petals from the top
  launchPetalShower()

  setTimeout(() => {
    container.remove()
  }, 5000)
}
