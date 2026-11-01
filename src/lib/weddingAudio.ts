/**
 * Royal Indian Wedding Audio System
 * Plays ONLY the iconic "Tum Tum" Wedding BGM from Enemy.
 * Completely ad-free, 100% offline, zero buffering, instant looping playback.
 */

class RoyalWeddingAudio {
  private audioElement: HTMLAudioElement | null = null
  public isPlaying: boolean = false
  private listeners: Array<(playing: boolean) => void> = []
  private hasInitializedInteractivity: boolean = false

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudioElement()
      this.setupAutoPlayOnFirstInteraction()
    }
  }

  private initAudioElement() {
    if (typeof window === 'undefined') return
    if (!this.audioElement) {
      const audio = new Audio('/audio/tum_tum.mp3')
      audio.loop = true
      audio.volume = 0.8
      audio.preload = 'auto'

      audio.addEventListener('play', () => {
        this.isPlaying = true
        this.notify()
      })

      audio.addEventListener('pause', () => {
        this.isPlaying = false
        this.notify()
      })

      audio.addEventListener('ended', () => {
        this.isPlaying = false
        this.notify()
      })

      this.audioElement = audio
    }
  }

  /**
   * Browser Autoplay Policy Handler:
   * Modern browsers (Chrome, Edge, Safari) require a user gesture before unmuted audio plays.
   * This listener guarantees that the very first touch/click/scroll on the screen immediately starts Tum Tum.
   */
  private setupAutoPlayOnFirstInteraction() {
    if (this.hasInitializedInteractivity || typeof window === 'undefined') return
    this.hasInitializedInteractivity = true

    const unlockAndPlay = () => {
      if (!this.isPlaying) {
        this.start()
      }
      cleanup()
    }

    const cleanup = () => {
      window.removeEventListener('click', unlockAndPlay)
      window.removeEventListener('touchstart', unlockAndPlay)
      window.removeEventListener('pointerdown', unlockAndPlay)
      window.removeEventListener('keydown', unlockAndPlay)
      window.removeEventListener('scroll', unlockAndPlay)
    }

    window.addEventListener('click', unlockAndPlay, { passive: true })
    window.addEventListener('touchstart', unlockAndPlay, { passive: true })
    window.addEventListener('pointerdown', unlockAndPlay, { passive: true })
    window.addEventListener('keydown', unlockAndPlay, { passive: true })
    window.addEventListener('scroll', unlockAndPlay, { passive: true })
  }

  public subscribe(listener: (playing: boolean) => void) {
    this.listeners.push(listener)
    // Send immediate initial state
    listener(this.isPlaying)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  private notify() {
    this.listeners.forEach((l) => l(this.isPlaying))
  }

  public start() {
    try {
      this.initAudioElement()
      if (this.audioElement) {
        const playPromise = this.audioElement.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              this.isPlaying = true
              this.notify()
            })
            .catch((err) => {
              // Expected if user has not yet interacted with the page
              console.log('Autoplay waiting for initial tap/gesture:', err.name)
            })
        }
      }
    } catch (e) {
      console.warn('Audio start error:', e)
    }
  }

  public stop() {
    try {
      if (this.audioElement) {
        this.audioElement.pause()
      }
    } catch (e) {
      console.warn('Audio pause error:', e)
    }
    this.isPlaying = false
    this.notify()
  }

  public toggle() {
    if (this.isPlaying) {
      this.stop()
    } else {
      this.start()
    }
  }

  /**
   * Only Tum Tum music is allowed — other sounds removed as requested
   */
  public playTempleBellChime() {
    // Disabled: only Tum Tum MP3 is played
  }
}

export const weddingAudio = new RoyalWeddingAudio()

// Try starting immediately on file evaluation
if (typeof window !== 'undefined') {
  weddingAudio.start()
}
