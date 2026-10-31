/**
 * Royal Indian Wedding Audio System
 * Procedural Indian Classical Bansuri / Shehnai & Tanpura Drone Synthesizer
 * Built with Web Audio API — 100% reliable, zero buffering, runs offline & on all mobile devices.
 */

class RoyalWeddingAudio {
  private audioCtx: AudioContext | null = null
  public isPlaying: boolean = false
  private masterGain: GainNode | null = null
  private delay: DelayNode | null = null
  private delayFeedback: GainNode | null = null
  private filter: BiquadFilterNode | null = null
  private droneOscillators: OscillatorNode[] = []
  private melodyTimer: any = null
  private scheduledNoteTimers: any[] = []
  private listeners: Array<(playing: boolean) => void> = []

  constructor() {}

  public subscribe(listener: (playing: boolean) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  private notify() {
    this.listeners.forEach((l) => l(this.isPlaying))
  }

  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext
      this.audioCtx = new AudioCtxClass()

      this.masterGain = this.audioCtx.createGain()
      this.masterGain.gain.setValueAtTime(0.35, this.audioCtx.currentTime)

      // Reverb simulation via delay & lowpass filter
      this.delay = this.audioCtx.createDelay()
      this.delay.delayTime.value = 0.38

      this.delayFeedback = this.audioCtx.createGain()
      this.delayFeedback.gain.value = 0.45

      this.filter = this.audioCtx.createBiquadFilter()
      this.filter.type = 'lowpass'
      this.filter.frequency.value = 2200

      this.delay.connect(this.delayFeedback)
      this.delayFeedback.connect(this.delay)
      this.delay.connect(this.filter)

      this.masterGain.connect(this.audioCtx.destination)
      this.filter.connect(this.audioCtx.destination)
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume()
    }
  }

  public start() {
    try {
      this.initAudioContext()
      this.isPlaying = true

      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume()
      }

      if (this.masterGain && this.audioCtx) {
        this.masterGain.gain.setValueAtTime(0.35, this.audioCtx.currentTime)
      }

      this.notify()
      this.startTanpuraDrone()
      this.startBansuriMelody()
    } catch (e) {
      console.warn('Audio start error:', e)
    }
  }

  public stop() {
    this.isPlaying = false
    this.notify()

    // 1. Immediately mute master volume to 0
    if (this.masterGain && this.audioCtx) {
      try {
        this.masterGain.gain.setValueAtTime(0, this.audioCtx.currentTime)
      } catch (_) {}
    }

    // 2. Clear all scheduled melody timeouts
    this.scheduledNoteTimers.forEach((timer) => clearTimeout(timer))
    this.scheduledNoteTimers = []

    if (this.melodyTimer) {
      clearTimeout(this.melodyTimer)
      this.melodyTimer = null
    }

    // 3. Stop all drone oscillators
    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop()
      } catch (_) {}
    })
    this.droneOscillators = []

    // 4. Suspend audio context to guarantee 100% immediate silence on hardware
    if (this.audioCtx && this.audioCtx.state === 'running') {
      try {
        this.audioCtx.suspend()
      } catch (_) {}
    }
  }

  public toggle() {
    if (this.isPlaying) {
      this.stop()
    } else {
      this.start()
    }
  }

  // Tanpura Drone (Sa - Pa - Sa fundamental resonance)
  private startTanpuraDrone() {
    if (!this.audioCtx || !this.masterGain || !this.delay) return

    // Stop existing drone if any
    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop()
      } catch (_) {}
    })
    this.droneOscillators = []

    const baseFreq = 138.59 // C#
    const pitches = [
      baseFreq * 0.75, // Pa (low)
      baseFreq, // Sa
      baseFreq, // Sa
      baseFreq * 0.5, // Kharaj Sa
    ]

    pitches.forEach((freq, idx) => {
      if (!this.audioCtx || !this.masterGain || !this.delay) return
      const osc = this.audioCtx.createOscillator()
      const droneGain = this.audioCtx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime)

      // Subtle vibrato
      const lfo = this.audioCtx.createOscillator()
      lfo.frequency.value = 0.2 + idx * 0.05
      const lfoGain = this.audioCtx.createGain()
      lfoGain.gain.value = 0.8
      lfo.connect(osc.frequency)
      lfo.start()

      droneGain.gain.setValueAtTime(0.04, this.audioCtx.currentTime)

      osc.connect(droneGain)
      droneGain.connect(this.masterGain)
      droneGain.connect(this.delay)

      osc.start()
      this.droneOscillators.push(osc)
    })
  }

  // Auspicious Wedding Raga (Kalyani / Yaman melody)
  private startBansuriMelody() {
    const root = 277.18 // C#4
    const scale = [
      root * 1, // Sa
      (root * 9) / 8, // Re
      (root * 5) / 4, // Ga
      (root * 45) / 32, // Teevra Ma
      (root * 3) / 2, // Pa
      (root * 27) / 16, // Dha
      (root * 15) / 8, // Ni
      root * 2, // Taar Sa
      (root * 9) / 4, // Taar Re
      (root * 5) / 2, // Taar Ga
    ]

    const melodyPhases = [
      [2, 3, 4, 3, 2, 1, 0], // Ga Ma Pa Ma Ga Re Sa
      [0, 1, 2, 4, 3, 2, 1], // Sa Re Ga Pa Ma Ga Re
      [4, 5, 6, 7, 6, 5, 4], // Pa Dha Ni Sa' Ni Dha Pa
      [7, 8, 9, 8, 7, 6, 4, 2, 0], // Sa' Re' Ga' Re' Sa' Ni Pa Ga Sa
      [4, 2, 1, 2, 0], // Pa Ga Re Ga Sa
    ]

    let phraseIdx = 0

    const playPhrase = () => {
      if (!this.isPlaying) return

      const phrase = melodyPhases[phraseIdx % melodyPhases.length]
      let noteDelay = 0

      phrase.forEach((noteIdx, i) => {
        const noteDuration = i === phrase.length - 1 ? 1.8 : 0.65

        const noteTimer = setTimeout(() => {
          if (!this.isPlaying) return
          this.playBansuriNote(scale[noteIdx], noteDuration)
        }, noteDelay * 1000)

        this.scheduledNoteTimers.push(noteTimer)
        noteDelay += noteDuration + 0.12
      })

      phraseIdx++
      this.melodyTimer = setTimeout(playPhrase, (noteDelay + 1.6) * 1000)
    }

    playPhrase()
  }

  private playBansuriNote(freq: number, duration: number) {
    if (!this.isPlaying || !this.audioCtx || this.audioCtx.state === 'suspended' || !this.masterGain || !this.delay)
      return

    const osc = this.audioCtx.createOscillator()
    const gain = this.audioCtx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime)

    // Breath vibrato
    const vibrato = this.audioCtx.createOscillator()
    vibrato.frequency.value = 5.2
    const vibratoGain = this.audioCtx.createGain()
    vibratoGain.gain.value = 2.5
    vibrato.connect(osc.frequency)
    vibrato.start()

    const now = this.audioCtx.currentTime
    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.18, now + 0.15)
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration)

    osc.connect(gain)
    gain.connect(this.masterGain)
    gain.connect(this.delay)

    osc.start(now)
    osc.stop(now + duration + 0.1)
  }

  /**
   * Synthesizes an authentic auspicious South Indian brass temple bell chime
   * with natural metallic strike and lingering resonant hum.
   */
  public playTempleBellChime() {
    try {
      this.initAudioContext()
      if (!this.audioCtx) return

      const now = this.audioCtx.currentTime
      const baseFreq = 587.33 // D5 auspicious temple fundamental

      // Non-harmonic metallic partials of a sacred bronze/brass bell
      const bellPartials = [
        { ratio: 1.0, gain: 0.35, decay: 2.8 },
        { ratio: 1.503, gain: 0.22, decay: 2.2 },
        { ratio: 2.0, gain: 0.28, decay: 1.6 },
        { ratio: 2.76, gain: 0.18, decay: 1.2 },
        { ratio: 3.42, gain: 0.12, decay: 0.8 },
        { ratio: 5.15, gain: 0.08, decay: 0.4 },
      ]

      bellPartials.forEach((p) => {
        if (!this.audioCtx) return
        const osc = this.audioCtx.createOscillator()
        const gain = this.audioCtx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(baseFreq * p.ratio, now)

        // Instant metallic strike, exponential natural decay
        gain.gain.setValueAtTime(0, now)
        gain.gain.linearRampToValueAtTime(p.gain, now + 0.005)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay)

        osc.connect(gain)
        if (this.masterGain) gain.connect(this.masterGain)
        if (this.delay) gain.connect(this.delay)

        osc.start(now)
        osc.stop(now + p.decay + 0.05)
      })
    } catch (e) {
      console.warn('Temple bell chime error:', e)
    }
  }
}

export const weddingAudio = new RoyalWeddingAudio()

