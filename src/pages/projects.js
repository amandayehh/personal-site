import React, { Component } from "react"
import * as Tone from "tone"

import SEO from "../components/seo"

const SCALE = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5', 'G5', 'A5']
const LEAVE_DURATION_MS = 2100 // matches synth envelope: attack(0.1) + decay(0.8) + release(1.2)

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"
import "../css/projects.css"

const sections = [
  {
    title: "Web",
    items: [
      { name: "Elicit", description: "Website for AI research tool", tools: ["Framer"], domain: ["Research", "AI"], url: "https://elicit.com" },
      { name: "Quanta", description: "Website for accounting service", tools: ["Framer"], domain: ["Finance"], url: "https://usequanta.com" },
      { name: "Serif", description: "Website for writing app", tools: ["Framer"], domain: ["Productivity", "Writing"] },
      { name: "Voices and Voices", description: "Website for voice assistant vignettes", tools: ["React"], domain: ["Audio", "Interaction"] },
      { name: "Synesthetic perceptions", description: "Website with audio and visual compositions", tools: ["React"], domain: ["Audio", "Interaction"] },
      { name: "Type West 2022", description: "Website for Type West 2021 exhibit", tools: ["React"], typographic: ["Education", "Specimen"] },
      { name: "MICA WebX 2020", description: "Website for graphic design BFA thesis show", tools: ["React"], domain: ["Education", "Graphic design"] },
    ],
  },
  {
    title: "Games",
    items: [
      { name: "BOY♡GAME", description: "Analog and digital boy-dating game", tools: ["Print"], domain: ["Boardgame", "Video game"] },
      { name: "Say no more, Semaphore", description: "Semaphore education game", tools: ["React"], domain: ["Education"] },
      { name: "Buncho the Lost Bird", description: "UI/UX for 3D adventure game", tools: ["Unity"], domain: ["3D"] },
    ],
  },
  {
    title: "Plugins",
    items: [
      { name: "Keyboard Doodler", description: "Keyboard-based vectorizer", tools: ["Figma"], domain: ["Design tools"] },
    ],
  },
  {
    title: "Typefaces",
    items: [
      { name: "Cork", description: "Original display typeface", tools: ["Glyphs"], typographic: ["Variable", "Display"] },
      { name: "Cloister Revival", description: "Old-style serif typeface revival", tools: ["Glyphs"], typographic: ["Serif", "Old-style"] },
      { name: "Cycle", description: "Cafe font digitization", tools: ["Glyphs"], typographic: ["Grotesque", "Display"] },
    ],
  },
  {
    title: "Products",
    items: [
      { name: "Figma", description: "Design for web-based canvas", tools: ["Figma"], domain: ["Design tools"] },
      { name: "Google Docs", description: "Website for mobile app", tools: ["Figma"], domain: ["Productivity"] },
    ],
  },
]

const allItems = sections.flatMap(s => s.items)

const filterGroups = [
  { label: "Tools", key: "tools" },
  { label: "Domain", key: "domain" },
  { label: "Typographic", key: "typographic" },
].map(group => ({
  ...group,
  tags: [...new Set(allItems.flatMap(item => item[group.key] || []))],
}))

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      activeFilter: null,
      soundEnabled: false,
    }
  }

  getDrums() {
    if (!this._drums) {
      const reverb = new Tone.Reverb({ decay: 3.5, wet: 0.55 }).toDestination()

      // Analog kick — membrane body + noise transient layered, Chebyshev saturation for lo-fi warmth
      const kickSat = new Tone.Chebyshev(2).connect(reverb)
      const kickFilter = new Tone.Filter({ frequency: 320, type: 'lowpass', rolloff: -12 }).connect(kickSat)
      const kick = new Tone.MembraneSynth({
        pitchDecay: 0.25, octaves: 1,
        envelope: { attack: 0.04, decay: 0.8, sustain: 0, release: 2.5 },
        volume: -4,
      }).connect(kickFilter)
      // Beater click — short noise transient layered on top for organic attack
      const kickClickFilter = new Tone.Filter({ frequency: 180, type: 'lowpass' }).connect(kickSat)
      const kickClick = new Tone.NoiseSynth({
        noise: { type: 'brown' },
        envelope: { attack: 0.001, decay: 0.03, sustain: 0, release: 0.03 },
        volume: -16,
      }).connect(kickClickFilter)

      // Mid bell — sine tuned to G3, soft mallet feel
      const clap = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.005, decay: 0.25, sustain: 0, release: 1.0 },
        volume: -9.7,
      }).connect(reverb)

      // Lo-fi jazz tock — dry sine thud + dark brown-noise knock, heavily saturated and low-passed for a grounded dead-wood feel
      const tockSat = new Tone.Chebyshev(5).connect(reverb)
      const tockBodyFilter = new Tone.Filter({ frequency: 380, type: 'lowpass', rolloff: -24 }).connect(tockSat)
      const tock = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.3 },
        volume: -11,
      }).connect(tockBodyFilter)
      // Dead knock — broad brown-noise burst in low-mid for heavy, grounded texture
      const tockKnockFilter = new Tone.Filter({ frequency: 480, type: 'bandpass', Q: 1.5 }).connect(tockSat)
      const tockKnock = new Tone.NoiseSynth({
        noise: { type: 'brown' },
        envelope: { attack: 0.001, decay: 0.06, sustain: 0, release: 0.06 },
        volume: -15,
      }).connect(tockKnockFilter)

      // Ambient jazz shimmer — soft metallic, long airy tail like a distant cymbal
      const shaker = new Tone.MetalSynth({
        frequency: 280,
        envelope: { attack: 0.008, decay: 0.3, release: 1.8 },
        harmonicity: 3.1,
        modulationIndex: 8,
        octaves: 0.8,
        resonance: 800,
        volume: -35,
      }).connect(reverb)

      // Bell tone — sine tuned to A4, pentatonic friendly
      const snap = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.3, sustain: 0, release: 1.2 },
        volume: -11.7,
      }).connect(reverb)

      this._drums = [
        { name: 'kick',   synth: kick,   play: (s, note, vel) => { s.triggerAttackRelease('C2', '4n', Tone.now(), vel); kickClick.triggerAttack(Tone.now()); kickClick.triggerRelease(Tone.now() + 0.03) } },
        { name: 'clap',   synth: clap,   play: (s, note, vel) => s.triggerAttackRelease('G3', '8n', Tone.now(), vel) },
        { name: 'tock',   synth: tock,   play: (s, note, vel) => { s.triggerAttackRelease(note || 'D4', '8n', Tone.now(), vel); tockKnock.triggerAttack(Tone.now()); tockKnock.triggerRelease(Tone.now() + 0.04) } },
        { name: 'shaker', synth: shaker, play: (s, note, vel) => { if (note) s.frequency.value = Tone.Frequency(note).toFrequency(); s.triggerAttackRelease(Tone.now(), vel) } },
        { name: 'snap',   synth: snap,   play: (s, note, vel) => s.triggerAttackRelease(note || 'A4', '8n', Tone.now(), vel) },
      ]
    }
    return this._drums
  }

  playDrum(tag, note = null, velocity = 0.5) {
    if (!this.state.soundEnabled) return
    Tone.start().then(() => {
      const drums = this.getDrums()
      const index = tag.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % drums.length
      const { name, synth, play } = drums[index]
      console.log(name)
      play(synth, note, velocity)
    })
  }

  handleTagMouseEnter(tag, note = null) {
    this.playDrum(tag, note, 0.5)
  }

  handleFilterClick(tag) {
    this.playDrum(tag, null, 1.0)
    this.setState(prev => ({
      activeFilter: prev.activeFilter === tag ? null : tag,
    }))
  }

  async handleItemMouseEnter(e, note) {
    const item = e.currentTarget

    if (!this.state.soundEnabled) return

    Tone.start().then(() => {
      if (!this._synth) {
        const reverb = new Tone.Reverb({ decay: 5.5, wet: 0.6 }).toDestination()
        const chorus = new Tone.Chorus({ frequency: 0.8, delayTime: 5, depth: 0.6, wet: 0.3 }).connect(reverb).start()
        const vibrato = new Tone.Vibrato({ frequency: 3, depth: 0.08, wet: 0.6 }).connect(chorus)
        const phaser = new Tone.Phaser({ frequency: 0.25, octaves: 3, wet: 0.2 }).connect(vibrato)
        this._synth = new Tone.PolySynth(Tone.FMSynth, { maxPolyphony: 64,
          harmonicity: 3,
          modulationIndex: 8,
          oscillator: { type: 'sine' },
          envelope: { attack: 0.04, decay: 0.8, sustain: 0.08, release: 1.2 },
          modulation: { type: 'triangle' },
          modulationEnvelope: { attack: 0.01, decay: 0.6, sustain: 0, release: 1.5 },
          volume: -11,
        }).connect(phaser)
        this._nextNoteTime = 0
      }
      const MIN_STAGGER = 0.08
      const time = Math.max(Tone.now(), this._nextNoteTime)
      this._nextNoteTime = time + MIN_STAGGER
      this._synth.triggerAttackRelease(note, '8n', time)
    })
    if (item._leaveRAF) {
      cancelAnimationFrame(item._leaveRAF)
      item._leaveRAF = null
    }
    item.classList.add('projects__item--bubbling')
    const startAmp = parseFloat(item.style.getPropertyValue('--bubble-amp') || 0)
    if (startAmp >= 1) return
    const duration = 300
    const start = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = startAmp + (1 - startAmp) * (1 - Math.pow(1 - progress, 2))
      item.style.setProperty('--bubble-amp', eased)
      if (progress < 1) {
        item._enterRAF = requestAnimationFrame(animate)
      } else {
        item.style.setProperty('--bubble-amp', 1)
        item._enterRAF = null
      }
    }
    item._enterRAF = requestAnimationFrame(animate)
  }

  handleItemMouseLeave(e) {
    const item = e.currentTarget
    if (item._enterRAF) {
      cancelAnimationFrame(item._enterRAF)
      item._enterRAF = null
    }
    const duration = LEAVE_DURATION_MS
    item.style.setProperty('--leave-duration', `${LEAVE_DURATION_MS}ms`)
    const start = performance.now()
    const startAmp = parseFloat(item.style.getPropertyValue('--bubble-amp') || 1)

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = startAmp * Math.pow(1 - progress, 2)
      item.style.setProperty('--bubble-amp', eased)
      if (progress < 1) {
        item._leaveRAF = requestAnimationFrame(animate)
      } else {
        item.style.removeProperty('--bubble-amp')
        item.classList.remove('projects__item--bubbling')
        item._leaveRAF = null
      }
    }
    item._leaveRAF = requestAnimationFrame(animate)
  }

  handleItemClick(note) {
    if (!this.state.soundEnabled) return
    Tone.start().then(() => {
      if (!this._synth) return
      const time = Tone.now()
      const octaveUp = Tone.Frequency(note).transpose(12).toNote()
      this._synth.triggerAttackRelease(note, '16n', time, 1.0)
      this._synth.triggerAttackRelease(octaveUp, '16n', time, 0.8)
      this._nextNoteTime = time + 0.08
    })
  }

  render() {
    return (
      <div className="projects">
        <SEO title="Index — Amanda Yeh" />
        <button
          className="projects__sound-toggle"
          data-playing={this.state.soundEnabled}
          onClick={() => this.setState(prev => ({ soundEnabled: !prev.soundEnabled }))}
        >
          {this.state.soundEnabled ? 'Pause sound' : 'Play sound'}
          <span className="material-symbols-sharp">{this.state.soundEnabled ? 'pause' : 'play_arrow'}</span>
        </button>
        <div className="projects__header">
          <h1 className="projects__title">Index</h1>
          <p className="projects__subtitle">An incomplete Index of Amanda Yeh’s work</p>
        </div>

        <div className="projects__filters">
          {filterGroups.map((group, gi) => (
            <React.Fragment key={gi}>
              <span className="projects__filters-label">{group.label}</span>
              {group.tags.map((tag, ti) => (
                <button
                  key={ti}
                  className={`projects__filter-tag${this.state.activeFilter === tag ? " projects__filter-tag--active" : ""}`}
                  onClick={() => this.handleFilterClick(tag)}
                  onMouseEnter={() => this.handleTagMouseEnter(tag)}
                >
                  {tag}
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>

        {sections.map((section, si) => {
          const filteredItems = this.state.activeFilter
            ? section.items.filter(item => filterGroups.some(g => (item[g.key] || []).includes(this.state.activeFilter)))
            : section.items
          if (filteredItems.length === 0) return null
          return (
            <div className="projects__section" key={si}>
              <h2 className="projects__section-title">{section.title}</h2>
              {filteredItems.map((item, ii) => {
                const nameLetters = item.name.split('').map((char, ci) =>
                  char === ' ' ? ' ' : <span key={ci} className="projects__letter" style={{ '--i': ci }}>{char}</span>
                )
                const descLetters = item.description.split('').map((char, ci) =>
                  char === ' ' ? ' ' : <span key={ci} className="projects__letter" style={{ '--i': ci }}>{char}</span>
                )
                const note = SCALE[allItems.indexOf(item) % SCALE.length]
                const tags = (
                  <div className="projects__item-tags">
                    {filterGroups.map(g => (item[g.key] || []).map((tag, ti) => (
                      <span
                        className="projects__filter-tag"
                        key={g.key + ti}
                        onClick={e => { e.preventDefault(); this.handleFilterClick(tag) }}
                        onMouseEnter={() => this.handleTagMouseEnter(tag, note)}
                      >{tag}</span>
                    )))}
                  </div>
                )
                return (
                  <div className="projects__item" key={ii} onMouseEnter={e => this.handleItemMouseEnter(e, note)} onMouseLeave={e => this.handleItemMouseLeave(e)} onClick={() => this.handleItemClick(note)}>
                    {item.url ? (
                      <a className="projects__item-link" href={item.url} target="_blank" rel="noopener noreferrer">
                        <span className="projects__item-name">
                          {nameLetters}
                          {item.note && <span className="projects__item-note"> {item.note}</span>}
                        </span>
                        <span className="projects__item-description">{descLetters}</span>
                      </a>
                    ) : (
                      <>
                        <span className="projects__item-name">
                          {nameLetters}
                          {item.note && <span className="projects__item-note"> {item.note}</span>}
                        </span>
                        <span className="projects__item-description">{descLetters}</span>
                      </>
                    )}
                    {tags}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Projects
