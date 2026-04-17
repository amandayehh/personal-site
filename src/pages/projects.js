import React, { Component } from "react"
import * as Tone from "tone"

import SEO from "../components/seo"
import { BubbleContainer, BubbleText, handleBubbleEnter, handleBubbleLeave } from "../utils/bubble"

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
import imgSyneExample from "../images/syne/interpretation 2.gif"
import imgAudio from "../images/audio/audio-intro.gif"
import imgQlab from "../images/projects/Qlab.png"
import imgSel from "../images/projects/ExploreSel.png"



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
      { name: "Amanda’s homepage", description: "My personal website", preview: "My current homepage on the internet, inspired by the GUIs I grew up with and use today. The site contains my recent adventures in code and design.", tools: ["React"], domains: ["Graphic", "Interaction"], url: "https://amandayeh.com", image: imgHomepage },
      { name: "Elicit", description: "AI research tool homepage", preview: "Website and branding for Elicit, an AI-assisted research tool for science.", tools: ["Framer"], domains: ["Research", "AI"], url: "https://elicit.com", image: imgElicit },
      { name: "Quanta", description: "Accounting service homepage", preview: "Website design and development for Quanta, a full-service accounting platform.", tools: ["Framer"], domains: ["Finance", "Software"], url: "https://usequanta.com", image: imgQuanta },
      { name: "Type West 2022", description: "Type West 2021 digital exhibit", preview: "Website design in collaboration with my graduating class at Type West, showcasing thesis work of original type families.", tools: ["React"], domains: ["Specimen"], url: "https://typewest.letterformarchive.org/2022/", image: imgTypeWest },
      { name: "Voices and Voices", description: "Voice assistant vignettes", preview: "Website development for a net art project that explores how we might reclaim, transcode, and embody voice assistant interactions and data through performances, artistic research, and interactive vignettes.", tools: ["React"], domains: ["Audio", "Interaction"], url: "https://voicesandvoids.net/", image: imgVoices },
      { name: "Synesthetic perceptions", description: "Audio and visual compositions", preview: "Website development for an interactive experience that explores the relationship between visual and auditory composition. The project features a series of music and their synesthetic interpretations as well as a collection of tangible objects that drive those interpretations.", tools: ["React"], domains: ["Audio", "Interaction"], url: "https://synestheticperceptions.art/", image: imgSyneExample },
      { name: "Audio visualizer", description: "Musical shape experiment", preview: "Audio Visualizer is a program that visualizes music using frequencies and peak detection.", tools: ["P5.js"], domains: ["Audio", "Graphic"], url: "https://amandayehh.github.io/audio-visualizer/", image: imgAudio },
      { name: "Type mirror", description: "A digital mirror made of letters", preview: "Type Mirror is a digital mirror made of letters.", tools: ["P5.js"], domains: ["Interaction", "Graphic"], url: "https://amandayehh.github.io/type-mirror/", image: imgTypose1 },
      { name: "MICA WebX 2020", description: "Graphic Design BFA thesis show", preview: "WebX is a digital exhibition for MICA’s 2020 BFA thesis show.", tools: ["React"], domains: ["Education", "Graphic"], url: "https://web.archive.org/web/20200807235205/https://pixelation.micagraphicdesign.org/", image: imgWebX },
      { name: "Explore SEL", description: "Learning frameworks visualized", preview: "Explore SEL is an interactive hub that helps educators, policymakers, and researchers navigate, compare, and select social and emotional learning (SEL) frameworks. I contributed to the design while working at Friends of the Web.", tools: [], domains: ["Education", "Research"], url: "http://exploresel.gse.harvard.edu/", image: imgSel },
      { name: "Kilotype", description: "Kilotype’s website", preview: "Kilotype.de is a website that I helped design while working at Friends of the Web. The site brings together interactive variable typography and a vibrant color palette to highlight William Montrose and Sebastian Losch's debut typefaces.", tools: [], domains: ["Graphic", "Specimen"], type: ["Typography"], url: "https://kilotype.de/", image: imgKilotype },
      { name: "Frere-Jones Type", description: "Frere-Jone’s website", preview: "Frere-Jones Type is an award winning, independent type design practice in New York City. I contributed to the design of this website while working at Friends of the Web.", tools: [], domains: ["Graphic", "Specimen"], type: ["Typography"], url: "https://frerejones.com/", image: imgFrereJones},
      { name: "QLab", description: "Website for show making software", preview: "QLab is powerful macOS software for designing and playing back sound, video, light, and show control cues. This is another website I helped design while working at Friends of the Web.", tools: [], domains: ["Software"], url: "https://qlab.app/", image: imgQlab },

    ],
  },
  {
    title: "Games",
    items: [
      { name: "BOY♡GAME", description: "Analog and digital dating game", preview: "BOY♡GAME is a couch co-op style party game where players build boys together and vote for their favorites.", tools: [], domains: ["Boardgame", "Video game"], url: "https://instagram.com/b0ygame/", image: imgBoy },
      { name: "Say no more, Semaphore", description: "Semaphore education game", preview: "Semaphore is a perfect way of communicating with others while maintaining social distancing during the pandemic. Say no more! teaches the fundamental poses of semaphore using webcam-enabled pose recognition.", tools: ["P5.js"], domains: ["Education", "Video game"], url: "https://ygev.github.io/semaphore/", image: imgSema },
      { name: "Mad Lads", description: "Camera-based Mad Libs", preview: "MadLads is a mobile web app reinvention of the famous phrasal template word game called Mad Libs, played with your phone's camera.", tools: ["P5.js"], domains: ["Mobile game", "Video game"], url: "https://ygev.github.io/madlads/", image: imgMadlads },
      { name: "Buncho the Lost Bird", description: "UI/UX for 3D adventure game", preview: "Buncho is a game about a baby bird that has been separated from its mother. I worked on the UI/UX of this game for 2019 Global Game Jam.", tools: ["Unity"], domains: ["3D"], url: "https://jamiepark.itch.io/buncho-the-lost-bird", image: imgBuncho },
    ],
  },
  {
    title: "Typefaces",
    items: [
      { name: "Cork", description: "Original display typeface", preview: "Cork is a variable display typeface that features flared terminals, swooping curves, and humanist proportions. Reminiscent of mushrooms, bell bottom jeans, and warm summer breezes, Cork draws its inspiration from art nouveau, psychedelic type, as well as the organic shapes found in nature and those created by swift brush strokes.", tools: ["Glyphs"], type: ["Display", "Typography"], url: "https://typewest.letterformarchive.org/2022/typeface/cork/", image: imgCork },
      { name: "Cloister Revival", description: "Old-style serif typeface revival", preview: "Cycl is inspired by a hand lettered signage at a Seattle cafe and bike shop. With its bold, all-caps design, wide width, ample counter spaces, and slanted terminals, Cycl emanates a playful yet confident vibe that commands attention.", tools: ["Glyphs"], type: ["Serif", "Typography"], url: "https://amandayeh.com/#cloister", image: imgCloister },
      { name: "Cycle", description: "Cafe font digitization", preview: "Cloister is a revival of the 1926 Morris Benton typeface of the same name, which was designed based on Nicolas Jenson's prints from the 1470s.", tools: ["Glyphs"], type: ["Typography", "Display"], url: "https://amandayeh.com/#cycl", image: imgCycl },
    ],
  },
  {
    title: "Plugins",
    items: [
      { name: "Keyboard Doodler", description: "Keyboard-based vectorizer", preview: "Keyboard Doodler is a Figma plugin that turns your keyboard into a canvas. By simply pressing keys, vector nodes in that key's location will appear on the frame.", tools: ["Typescript"], domains: ["Design tool"], url:"https://figma.com/community/plugin/917914510168637203/keyboard-doodler", image: imgDoodler },
    ],
  },
  {
    title: "Products",
    items: [
      { name: "Figma", description: "Design for web-based canvas", preview: "Product design work for Figma. My contributions include editor, design system, typography, sites, and mobile apps.", tools: [], domains: ["Design tool", "Software"], url: "https://docs.google.com/spreadsheets/d/1whP8bzFwvkcDQD66ZhSizF6V3a93LIkv1IqubUQb9sg/edit?gid=0#gid=0", image: imgFigma },
      { name: "Google Docs", description: "Website for mobile app", preview: "Product design for Google docs’s mobile app.", tools: [], domains: ["Productivity", "Software"], url: "https://docs.google.com/", image: imgDocs },
    ],
  },
]

const allItems = sections.flatMap(s => s.items)

const filterGroups = [
  { label: "Tools", key: "tools" },
  { label: "Domains", key: "domains" },
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
      previewBgColor: null,
      previewUrlColor: null,
      previewInfoTextColor: null,
      previewInfoSubTextColor: null,
      previewExiting: false,
    }
    this._colorCache = {}
    this.soundButtonRef = React.createRef()
    this.handleSoundToggle = this.handleSoundToggle.bind(this)
  }

  componentDidMount() {
    handleBubbleEnter(this.soundButtonRef.current)
  }

  extractDominantColor(imageSrc) {
    if (this._colorCache[imageSrc]) {
      const { color, urlColor, infoTextColor, infoSubTextColor } = this._colorCache[imageSrc]
      this.setState({ previewBgColor: color, previewUrlColor: urlColor, previewInfoTextColor: infoTextColor, previewInfoSubTextColor: infoSubTextColor })
      return
    }
    const img = new Image()
    img.onload = () => {
      const size = 100
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, size, size)
      const data = ctx.getImageData(0, 0, size, size).data

      const toLinear = c => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      const toOKLab = (pr, pg, pb) => {
        const r = toLinear(pr), g = toLinear(pg), b = toLinear(pb)
        const lms_l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b)
        const lms_m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b)
        const lms_s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b)
        return {
          L: 0.2104542553 * lms_l + 0.7936177850 * lms_m - 0.0040720468 * lms_s,
          a: 1.9779984951 * lms_l - 2.4285922050 * lms_m + 0.4505937099 * lms_s,
          b: 0.0259040371 * lms_l + 0.7827717662 * lms_m - 0.8086757660 * lms_s,
        }
      }

      // Detect frame hue from the 4 edge midpoints (not corners, which may be transparent/white on rounded mockups)
      // Only exclude frame hue if the edges are DARK (L < 0.5) — actual device mockup frames.
      const es = 8, mid = Math.floor(size / 2)
      let fSin = 0, fCos = 0, fLSum = 0, fCount = 0
      // left, right, top, bottom edge midpoints
      ;[[0, mid - es/2],[size - es, mid - es/2],[mid - es/2, 0],[mid - es/2, size - es]].forEach(([cx, cy]) => {
        for (let y = cy; y < cy + es; y++) for (let x = cx; x < cx + es; x++) {
          const i = (y * size + x) * 4
          const { L, a, b } = toOKLab(data[i]/255, data[i+1]/255, data[i+2]/255)
          const C = Math.sqrt(a*a + b*b)
          fLSum += L; fCount++
          if (C > 0.01) { fSin += b/C; fCos += a/C }
        }
      })
      const avgEdgeL = fLSum / fCount
      const frameH = avgEdgeL < 0.5 ? Math.atan2(fSin, fCos) : null

      // Two-pass bucketing: first try vivid colors (C > 0.06) so vivid pinks beat skin tones;
      // if not enough vivid pixels found, fall back to muted colors (C > 0.015) to catch blue-gray backgrounds
      const runBuckets = (minC, minL) => {
        const buckets = Array.from({ length: 36 }, () => ({ sum: 0, sinSum: 0, cosSum: 0 }))
        for (let i = 0; i < data.length; i += 4) {
          const { L, a, b } = toOKLab(data[i]/255, data[i+1]/255, data[i+2]/255)
          const C = Math.sqrt(a*a + b*b)
          if (C < minC || L < minL || L > 0.95) continue
          const H = Math.atan2(b, a)
          if (frameH !== null) {
            const diff = Math.abs(H - frameH)
            if (Math.min(diff, 2 * Math.PI - diff) < 0.44) continue
          }
          const idx = Math.floor(((H * 180 / Math.PI + 360) % 360) / 10)
          buckets[idx].sum += 1
          buckets[idx].sinSum += Math.sin(H)
          buckets[idx].cosSum += Math.cos(H)
        }
        return buckets.reduce((a, b) => b.sum > a.sum ? b : a)
      }
      let best = runBuckets(0.06, 0.35)   // vivid pass: lower L to catch dark purples/blues
      if (best.sum < 80) best = runBuckets(0.015, 0.42) // muted pass: higher L to filter JPEG artifacts
      const winHue = (((Math.atan2(best.sinSum, best.cosSum) * 180 / Math.PI) + 360) % 360).toFixed(1)
      const hasHue = best.sum > 10
      const color = hasHue ? `oklch(90% 0.06 ${winHue})` : 'oklch(85% 0 0)'
      const urlColor = hasHue ? `oklch(50% 0.08 ${winHue})` : 'oklch(0% 0 0 / 0.65)'
      const infoTextColor = 'var(--black)'
      const infoSubTextColor = 'var(--color-description)'
      this._colorCache[imageSrc] = { color, urlColor, infoTextColor, infoSubTextColor }
      this.setState({ previewBgColor: color, previewUrlColor: urlColor, previewInfoTextColor: infoTextColor, previewInfoSubTextColor: infoSubTextColor })
    }
    img.src = imageSrc
  }

  handleSoundToggle() {
    const enabling = !this.state.soundEnabled
    this.setState({ soundEnabled: enabling })
    const el = this.soundButtonRef.current
    if (el) {
      if (enabling) {
        handleBubbleLeave(el, { leaveDuration: 300 })
      } else {
        handleBubbleEnter(el)
      }
    }
    if (enabling) {
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
        const now = Tone.now()
        this._synth.triggerAttackRelease('F3', '8n', now, 1)
        this._synth.triggerAttackRelease('C3', '8n', now + 0.12, 1)
        this._synth.triggerAttackRelease('G3', '8n', now + 0.24, 1)
      })
    }
  }

  getDrums() {
    if (!this._drums) {
      const reverb = new Tone.Reverb({ decay: 3.5, wet: 0.55 }).toDestination()

      // Analog kick — membrane body + noise transient layered, lowpass filtered for clean reproduction on small speakers
      const kickFilter = new Tone.Filter({ frequency: 200, type: 'lowpass', rolloff: -24 }).connect(reverb)
      const kick = new Tone.MembraneSynth({
        pitchDecay: 0.25, octaves: 1,
        envelope: { attack: 0.04, decay: 0.8, sustain: 0, release: 2.5 },
        volume: 10,
      }).connect(kickFilter)
      // Beater click — quiet noise transient for subtle attack texture
      const kickClickFilter = new Tone.Filter({ frequency: 120, type: 'lowpass' }).connect(reverb)
      const kickClick = new Tone.NoiseSynth({
        noise: { type: 'brown' },
        envelope: { attack: 0.001, decay: 0.02, sustain: 0, release: 0.02 },
        volume: -5,
      }).connect(kickClickFilter)

      // Mid bell — sine tuned to G3, soft mallet feel
      const clap = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.005, decay: 0.25, sustain: 0, release: 1.0 },
        volume: -6,
      }).connect(reverb)

      // Lo-fi jazz tock — dry sine thud + dark brown-noise knock, heavily saturated and low-passed for a grounded dead-wood feel
      const tockSat = new Tone.Chebyshev(5).connect(reverb)
      const tockBodyFilter = new Tone.Filter({ frequency: 380, type: 'lowpass', rolloff: -24 }).connect(tockSat)
      const tock = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.1, sustain: 0, release: 0.3 },
        volume: -5,
      }).connect(tockBodyFilter)
      // Dead knock — broad brown-noise burst in low-mid for heavy, grounded texture
      const tockKnockFilter = new Tone.Filter({ frequency: 480, type: 'bandpass', Q: 1.5 }).connect(tockSat)
      const tockKnock = new Tone.NoiseSynth({
        noise: { type: 'brown' },
        envelope: { attack: 0.001, decay: 0.06, sustain: 0, release: 0.06 },
        volume: -2,
      }).connect(tockKnockFilter)

      // giving a pitched rattle that resonates with the melody
      const shakerReverb = new Tone.Reverb({ decay: 2.5, wet: 0.4 }).toDestination()
      const shakerFilter = new Tone.Filter({ frequency: 800, type: 'bandpass', Q: 4 }).connect(shakerReverb)
      const shaker = new Tone.NoiseSynth({
        noise: { type: 'pink' },
        envelope: { attack: 0.001, decay: 0.12, sustain: 0, release: 0.08 },
        volume: 12,
      }).connect(shakerFilter)

      // Bell tone — sine tuned to A4, pentatonic friendly
      const snap = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.3, sustain: 0, release: 1.2 },
        volume: -8,
      }).connect(reverb)

      this._drums = [
        { name: 'kick',   synth: kick,   play: (s, note, vel) => { s.triggerAttackRelease('C2', '4n', Tone.now(), vel); kickClick.triggerAttack(Tone.now()); kickClick.triggerRelease(Tone.now() + 0.03) } },
        { name: 'clap',   synth: clap,   play: (s, note, vel) => s.triggerAttackRelease('G3', '8n', Tone.now(), vel) },
        { name: 'tock',   synth: tock,   play: (s, note, vel) => { s.triggerAttackRelease('D4', '8n', Tone.now(), vel); tockKnock.triggerAttack(Tone.now()); tockKnock.triggerRelease(Tone.now() + 0.04) } },
        { name: 'shaker', synth: shaker, play: (s, note, vel) => { shakerFilter.frequency.value = Tone.Frequency(note || 'E4').transpose(7).toFrequency(); s.triggerAttackRelease('16n', Tone.now(), vel) } },
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
    clearTimeout(this._exitTimeout)
    this.setState({ hoveredItem: itemData, previewExiting: false })
    if (itemData.image) this.extractDominantColor(itemData.image)

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
    this.setState({ previewExiting: true })
    clearTimeout(this._exitTimeout)
    this._exitTimeout = setTimeout(() => {
      this.setState({ hoveredItem: null, previewBgColor: null, previewUrlColor: null, previewInfoTextColor: null, previewInfoSubTextColor: null, previewExiting: false })
    }, 700)
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
          ref={this.soundButtonRef}
          className="projects__sound-toggle"
          data-playing={this.state.soundEnabled}
          onClick={this.handleSoundToggle}
        >
                <span data-bl="" style={{ '--i': -4, position: 'relative', top: '3px' }}>
                  {this.state.soundEnabled ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99999 4.03742C8.99999 3.20657 8.04552 2.7381 7.38826 3.24636L4.77018 5.27092C4.59503 5.40637 4.37987 5.47986 4.15846 5.47986L2.49999 5.47987C1.94771 5.47987 1.5 5.92759 1.5 6.47987V9.50852C1.5 10.0608 1.94772 10.5085 2.5 10.5085H4.15755C4.37952 10.5085 4.59519 10.5824 4.77056 10.7184L7.38699 12.7485C8.04402 13.2583 9 12.79 9 11.9584L8.99999 4.03742Z" stroke="currentColor" strokeWidth="1"/>
                      <path d="M11 9.74451C11.4186 9.1874 11.6667 8.49491 11.6667 7.74451C11.6667 6.9941 11.4186 6.30161 11 5.74451" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M12.834 11.7445C13.6712 10.6303 14.1673 9.24531 14.1673 7.74451C14.1673 6.2437 13.6712 4.85872 12.834 3.74451" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.99999 4.72469L8.99999 4.03742C8.99999 3.20657 8.04552 2.7381 7.38826 3.24636L4.77018 5.27092C4.59503 5.40637 4.37987 5.47986 4.15846 5.47986L2.49999 5.47987C1.94771 5.47987 1.5 5.92759 1.5 6.47987V9.50852C1.5 10.0608 1.94772 10.5085 2.5 10.5085H3.25" stroke="currentColor" strokeWidth="1"/>
                      <path d="M8.99985 7.5L8.99985 11.9584C8.99985 12.79 8.04387 13.2583 7.38684 12.7485L5.99951 11.6721L5.56641 11.336" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M10.6357 3.03027L1.50098 12.165" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <BubbleText>{this.state.soundEnabled ? "Mute" : "Better with sound"}</BubbleText>
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
                      <div className="projects__item-content">
                        <span className="projects__item-name">
                          <BubbleText>{item.name}</BubbleText>
                          {item.note && <span className="projects__item-note"> {item.note}</span>}
                        </span>
                        <BubbleText className="projects__item-description">{item.description}</BubbleText>
                      </div>
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
          <div className="projects__preview-wrapper">
            <div className={`projects__preview-info${this.state.previewExiting ? ' projects__preview-info--exit' : ''}`} style={this.state.previewInfoTextColor ? { color: this.state.previewInfoTextColor } : undefined}>
              <h2 className="projects__preview-info-name">{this.state.hoveredItem.name}</h2>
              {(this.state.hoveredItem.preview || this.state.hoveredItem.description) && (
                <span className="projects__preview-info-description" style={this.state.previewInfoSubTextColor ? { color: this.state.previewInfoSubTextColor } : undefined}>{this.state.hoveredItem.preview || this.state.hoveredItem.description}</span>
              )}
              <div className="projects__preview-info-tags" style={this.state.previewInfoSubTextColor ? { color: this.state.previewInfoSubTextColor } : undefined}>
                {filterGroups.map(group => {
                  const tags = this.state.hoveredItem[group.key]
                  if (!tags || tags.length === 0) return null
                  return (
                    <div key={group.key} className="projects__preview-info-tag-row">
                      <span className="projects__preview-info-tag-label">{group.label}:</span>
                      <span>{tags.join(', ')}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={`projects__preview-image${this.state.previewExiting ? ' projects__preview-image--exit' : ''}`} style={this.state.previewBgColor ? { background: this.state.previewBgColor } : undefined}>
              <div className="projects__preview-image-bar">
                {this.state.hoveredItem.url && (
                  <span className="projects__preview-image-url" style={{ color: this.state.previewUrlColor || 'oklch(0% 0 0 / 0.65)' }}>{new URL(this.state.hoveredItem.url).hostname}</span>
                )}
              </div>
              <div className="projects__preview-image-screen">
                {this.state.hoveredItem.image && (
                  <img src={this.state.hoveredItem.image} alt={this.state.hoveredItem.name} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Projects
