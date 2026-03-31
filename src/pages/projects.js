import React, { Component } from "react"
import * as Tone from "tone"

import SEO from "../components/seo"
import { BubbleContainer, BubbleText } from "../utils/bubble"

import imgTypose from "../images/mirror/typose.png"
import imgTypose1 from "../images/mirror/typose_1.gif"

//web
import imgHomepage from "../images/projects/homepage.png"
import imgQuanta from "../images/projects/quanta.png"
import imgElicit from "../images/projects/elicit.png"
import imgVoices from "../images/index/voicesandvoids.png"
import imgSyne from "../images/index/syne.png"
import imgWebX from "../images/projects/pixelation.png"
import imgTypeWest from "../images/projects/type-west.png"
import imgFrereJones from "../images/projects/frerejones.png"
import imgKilotype from "../images/index/kilotype.png"
import imgSel from "../images/sel/home.png"
import imgSyneExample from "../images/syne/interpretation 2.gif"
import imgAudio from "../images/audio/audio-intro.gif"

//games
import imgBoy from "../images/boygame/pk.png"
import imgMadlads from "../images/projects/madlads.png"
import imgBuncho from "../images/projects/buncho.png"
import imgSema from "../images/sema/me.gif"

//plugins
import imgDoodler from "../images/projects/doodler.png"

//type
import imgCloister from "../images/projects/cloister.png"
import imgCork from "../images/projects/cork.png"
import imgCycl from "../images/projects/cycl.png"

//products
import imgDocs from "../images/projects/docs.png"
import imgFigma from "../images/projects/figma.png"

const SCALE = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5', 'D5', 'E5', 'G5', 'A5']

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"
import "../css/projects.css"

const sections = [
  {
    title: "Web",
    items: [
      { name: "Amanda’s homepage", description: "My personal website", tools: ["React"], domain: ["Graphic", "Specimen"], url: "https://amandayeh.com", image: imgHomepage },
      { name: "Elicit", description: "AI research tool homepage", tools: ["Framer"], domain: ["Research", "AI"], url: "https://elicit.com", image: imgElicit },
      { name: "Quanta", description: "Accounting service homepage", tools: ["Framer"], domain: ["Finance"], url: "https://usequanta.com", image: imgQuanta },
      { name: "Type West 2022", description: "Type West 2021 digital exhibit", tools: ["React"], domain: ["Specimen"], url: "https://typewest.letterformarchive.org/2022/", image: imgTypeWest },
      { name: "Voices and Voices", description: "Voice assistant vignettes", tools: ["React"], domain: ["Audio", "Interaction"], url: "https://voicesandvoids.net/", image: imgVoices },
      { name: "Synesthetic perceptions", description: "Audio and visual compositions", tools: ["React"], domain: ["Audio", "Interaction"], url: "https://synestheticperceptions.art/", image: imgSyneExample },
      { name: "MICA WebX 2020", description: "Graphic Design BFA thesis show", tools: ["React"], domain: ["Education", "Graphic"], url: "https://web.archive.org/web/20200807235205/https://pixelation.micagraphicdesign.org/", image: imgWebX },
      { name: "Explore SEL", description: "Learning frameworks visualized", tools: [], domain: ["Education", "Research"], url: "http://exploresel.gse.harvard.edu/", image: imgSel },
      { name: "Kilotype", description: "Kilotype's website", tools: [], domain: ["Graphic", "Specimen"], type: ["Typography"], url: "https://kilotype.de/", image: imgKilotype },
      { name: "Frere Jones Type", description: "Frere Jone's website", tools: [], domain: ["Graphic", "Specimen"], type: ["Typography"], url: "https://frerejones.com/", image: imgFrereJones},
    ],
  },
  {
    title: "Games",
    items: [
      { name: "BOY♡GAME", description: "Analog and digital dating game", tools: [], domain: ["Boardgame", "Video game"], image: imgBoy },
      { name: "Say no more, Semaphore", description: "Semaphore education game", tools: ["P5.js"], domain: ["Education", "Video game"], url: "https://ygev.github.io/semaphore/", image: imgSema },
      { name: "Mad Lads", description: "Camera-based Mad Libs", tools: ["P5.js"], domain: ["Mobile game", "Video game"], url: "https://ygev.github.io/madlads/", image: imgMadlads },
      { name: "Buncho the Lost Bird", description: "UI/UX for 3D adventure game", tools: ["Unity"], domain: ["3D"], url: "https://jamiepark.itch.io/buncho-the-lost-bird", image: imgBuncho },
    ],
  },
  {
    title: "Plugins",
    items: [
      { name: "Keyboard Doodler", description: "Keyboard-based vectorizer", tools: ["Typescript"], domain: ["Design tool"], url:"https://www.figma.com/community/plugin/917914510168637203/keyboard-doodler", image: imgDoodler },
    ],
  },
  {
    title: "Typefaces",
    items: [
      { name: "Cork", description: "Original display typeface", tools: ["Glyphs"], type: ["Display", "Typography"], image: imgCork },
      { name: "Cloister Revival", description: "Old-style serif typeface revival", tools: ["Glyphs"], type: ["Serif", "Typography"], image: imgCloister },
      { name: "Cycle", description: "Cafe font digitization", tools: ["Glyphs"], type: ["Typography", "Display"], image: imgCycl },
    ],
  },
  {
    title: "Products",
    items: [
      { name: "Figma", description: "Design for web-based canvas", tools: [], domain: ["Design tool", "Productivity"], url: "https://docs.google.com/spreadsheets/d/1whP8bzFwvkcDQD66ZhSizF6V3a93LIkv1IqubUQb9sg/edit?gid=0#gid=0", image: imgFigma },
      { name: "Google Docs", description: "Website for mobile app", tools: [], domain: ["Productivity"], url: "https://docs.google.com/", image: imgDocs },
    ],
  },
]

const allItems = sections.flatMap(s => s.items)

const filterGroups = [
  { label: "Tools", key: "tools" },
  { label: "Domain", key: "domain" },
  { label: "Type style", key: "type" },
].map(group => ({
  ...group,
  tags: [...new Set(allItems.flatMap(item => item[group.key] || []))].sort((a, b) => a.localeCompare(b)),
}))

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      activeFilter: null,
      soundEnabled: false,
      hoveredItem: null,
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
        volume: 6,
      }).connect(kickFilter)
      // Beater click — short noise transient layered on top for organic attack
      const kickClickFilter = new Tone.Filter({ frequency: 180, type: 'lowpass' }).connect(kickSat)
      const kickClick = new Tone.NoiseSynth({
        noise: { type: 'brown' },
        envelope: { attack: 0.001, decay: 0.03, sustain: 0, release: 0.03 },
        volume: -4,
      }).connect(kickClickFilter)

      // Mid bell — sine tuned to G3, soft mallet feel
      const clap = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.005, decay: 0.25, sustain: 0, release: 1.0 },
        volume: 0,
      }).connect(reverb)

      // Lo-fi jazz tock — dry sine thud + dark brown-noise knock, heavily saturated and low-passed for a grounded dead-wood feel
      const tockSat = new Tone.Chebyshev(5).connect(reverb)
      const tockBodyFilter = new Tone.Filter({ frequency: 380, type: 'lowpass', rolloff: -24 }).connect(tockSat)
      const tock = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.3 },
        volume: 0,
      }).connect(tockBodyFilter)
      // Dead knock — broad brown-noise burst in low-mid for heavy, grounded texture
      const tockKnockFilter = new Tone.Filter({ frequency: 480, type: 'bandpass', Q: 1.5 }).connect(tockSat)
      const tockKnock = new Tone.NoiseSynth({
        noise: { type: 'brown' },
        envelope: { attack: 0.001, decay: 0.06, sustain: 0, release: 0.06 },
        volume: -3,
      }).connect(tockKnockFilter)

      // Ambient jazz shimmer — soft metallic, long airy tail like a distant cymbal
      const shaker = new Tone.MetalSynth({
        frequency: 2,
        envelope: { attack: 0.008, decay: 0.3, release: 1.8 },
        harmonicity: 3.1,
        modulationIndex: 8,
        octaves: 0.8,
        resonance: 800,
        volume: -20,
      }).connect(reverb)

      // Bell tone — sine tuned to A4, pentatonic friendly
      const snap = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.3, sustain: 0, release: 1.2 },
        volume: 0,
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

  async handleItemMouseEnter(note, itemData) {
    this.setState({ hoveredItem: itemData })

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
  }

  handleItemMouseLeave() {
    this.setState({ hoveredItem: null })
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
          <p className="projects__subtitle">An incomplete index of Amanda Yeh’s work</p>
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
                const note = SCALE[allItems.indexOf(item) % SCALE.length]
                return (
                  <BubbleContainer className="projects__item" key={ii} onMouseEnter={() => this.handleItemMouseEnter(note, item)} onMouseLeave={() => this.handleItemMouseLeave()} onClick={() => this.handleItemClick(note)}>
                    {item.url ? (
                      <a className="projects__item-link" href={item.url} target="_blank" rel="noopener noreferrer">
                        <span className="projects__item-name">
                          <BubbleText>{item.name}</BubbleText>
                          <span className="projects__item-arrow"> →</span>
                          {item.note && <span className="projects__item-note"> {item.note}</span>}
                        </span>
                        <BubbleText className="projects__item-description">{item.description}</BubbleText>
                      </a>
                    ) : (
                      <>
                        <span className="projects__item-name">
                          <BubbleText>{item.name}</BubbleText>
                          <span className="projects__item-arrow"> →</span>
                          {item.note && <span className="projects__item-note"> {item.note}</span>}
                        </span>
                        <BubbleText className="projects__item-description">{item.description}</BubbleText>
                      </>
                    )}
                    <div className="projects__item-tags">
                      {filterGroups.flatMap(g => (item[g.key] || []).map(tag => ({ tag, key: g.key }))).sort((a, b) => a.tag.localeCompare(b.tag)).map(({ tag, key }, ti) => (
                        <span
                          className="projects__filter-tag"
                          key={key + ti}
                          onClick={e => { e.preventDefault(); this.handleFilterClick(tag) }}
                          onMouseEnter={() => this.handleTagMouseEnter(tag, note)}
                        >{tag}</span>
                      ))}
                    </div>
                  </BubbleContainer>
                )
              })}
            </div>
          )
        })}

        {this.state.hoveredItem && (
          <div className="projects__preview">
            <div className="projects__preview-bar">
              <span className="projects__preview-name">{this.state.hoveredItem.name}</span>
              {this.state.hoveredItem.url && (
                <span className="projects__preview-url">{new URL(this.state.hoveredItem.url).hostname}</span>
              )}
            </div>
            <div className="projects__preview-image">
              {this.state.hoveredItem.image && (
                <img src={this.state.hoveredItem.image} alt={this.state.hoveredItem.name} />
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Projects
