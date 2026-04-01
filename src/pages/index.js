import React, { Component } from "react"

import SEO from "../components/seo"
import Name from "../components/name/name"
import Sticky from "../components/sticky/sticky"
import SmallSticky from "../components/smallSticky/smallSticky"
import Shortcut from "../components/shortcut/shortcut"
import Window from "../components/window/window"
import Colophon from "../components/colophon/colophon"
import Footer from "../components/footer/footer"
import InnerPage from "../components/innerPage/innerPage"
import Transparency from "../components/transparency/transparency"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"
import "../css/index.css"

//shortcuts
import mail from "../images/shortcut/mail.png"
import web from "../images/shortcut/web.png"
import font from "../images/shortcut/font.png"
import desktop from "../images/shortcut/desktop.png"
import notepad from "../images/shortcut/notepad.png"
import computer from "../images/shortcut/computer.png"


//large
import boygame from "../images/index/boygame.png"
import syne from "../images/index/syne.png"
import voicesAndVoids from "../images/index/voicesandvoids.png"
import cork from "../images/index/cork.png"
import cycl from "../images/index/cycle.png"
import cloister from "../images/index/cloister.png"
import typeMirror from "../images/index/type-mirror.png"
import keyboardDoodler from "../images/index/doodler.png"
import kilotype from "../images/index/kilotype.png"
import sema from "../images/index/sema.png"
import audioVisualizer from "../images/index/audio.png"

//small
import syneSmall from "../images/index/small-syne.png"
import voicesAndVoidsSmall from "../images/index/small-voicesandvoids.png"
import corkSmall from "../images/index/small-cork.png"
import typeMirrorSmall from "../images/index/small-type-mirror.png"
import keyboardDoodlerSmall from "../images/index/small-doodler.png"
import kilotypeSmall from "../images/index/small-kilotype.png"
import semaSmall from "../images/index/small-sema.png"
import audioVisualizerSmall from "../images/index/small-audio.png"
import cat from "../images/cat.gif"

//Boygame
import boygame__img1 from "../images/boygame/gameboy.png"
import boygame__img2 from "../images/boygame/home.png"
import boygame__img3 from "../images/boygame/tamagotchi.png"
import boygame__img4 from "../images/boygame/pk.png"

//Syne
import syne__img1 from "../images/syne/interpretation 1.gif"
import syne__img2 from "../images/syne/mobile.png"
import syne__img3 from "../images/syne/interpretation 2.gif"
import syne__img4 from "../images/syne/hover.gif"

//Voices and Voids
import voices__img1 from "../images/voices/google.png"
import voices__img2 from "../images/voices/voices.png"
import voices__img3 from "../images/voices/music.png"
import voices__img4 from "../images/voices/chit.png"

//Cork
import cork__img1 from "../images/cork/Cork_1.png"
import cork__img2 from "../images/cork/Cork_2.png"
import cork__img3 from "../images/cork/Cork_3.png"
import cork__img4 from "../images/cork/Cork_4.png"
import cork__img5 from "../images/cork/Cork_5.png"

//Cycl
import cycl__img1 from "../images/cycl/Cycl_1.png"
import cycl__img2 from "../images/cycl/Cycl_2.png"
import cycl__img3 from "../images/cycl/Cycl_3.png"

//Cloister
import cloister__img1 from "../images/cloister/Cloister_1.png"
import cloister__img2 from "../images/cloister/Cloister_2.png"
import cloister__img3 from "../images/cloister/Cloister_3.png"

//Type Mirror
import mirror__img1 from "../images/mirror/typose_1.gif"
import mirror__img2 from "../images/mirror/typose.png"
import mirror__img3 from "../images/mirror/yana.gif"

//Keyboard Doodler
import doodler__img1 from "../images/doodler/doodler1.png"
import doodler__img2 from "../images/doodler/doodler2.png"
import doodler__img3 from "../images/doodler/doodler3.png"
import doodler__img4 from "../images/doodler/doodler4.png"

//Kilotype
import kilo__img1 from "../images/kilotype/inner-color.png"
import kilo__img2 from "../images/kilotype/home.png"
import kilo__img3 from "../images/kilotype/about.png"

//Semaphore
import sema__img1 from "../images/sema/home.png"
import sema__img2 from "../images/sema/me.gif"
import sema__img3 from "../images/sema/game.png"

//Audio Visualizer
import audio__img1 from "../images/audio/audio-intro.gif"
import audio__img2 from "../images/audio/example2.png"
import audio__img3 from "../images/audio/example.gif"


const projects = [
  {
    className: "index__boygame",
    large: boygame, small: boygame,
    imgClass: "index__boygame__img", wrpClass: "index__boygame__img",
    windowTitle: "BOY♡GAME", windowAlt: "Screen shot of BOYGAME's start screen showing input for user name and small canvas for drawing.",
    title: "BOY♡GAME — Info",
    summary: "BOY♡GAME is a couch co-op style party game where players build boys together and vote for their favorites.",
    mainLink: "https://www.instagram.com/b0ygame/", linkText: "@B0YGAME",
    scope: "Game design, front end development", tech1: "React", collaborator1: "Melissa Liu",
    images: [
      { src: boygame__img1, alt: "Gameboy showing the logo of Boygame" },
      { src: boygame__img2, alt: "Screen shot of BOYGAME's start screen showing input for user name and small canvas for drawing" },
      { src: boygame__img3, alt: "Boygame branded Tamagotchi" },
      { src: boygame__img4, alt: "Screenshot showing 2 boy profiles" },
    ],
  },
  {
    className: "index__syne",
    large: syne, small: syneSmall,
    imgClass: "index__syne__img", wrpClass: "index__syne__wrp",
    windowTitle: "Synesthetic Perceptions", windowAlt: "Screen shot of Synesthetics perception's music visualizer",
    title: "Synesthetic Perceptions — Info",
    summary: "Synesthetic Perceptions explores the relationship between visual and auditory composition. The project features a series of music and their synesthetic interpretations as well as a collection of tangible objects that drive those interpretations.",
    mainLink: "https://synestheticperceptions.art/", linkText: "synestheticperceptions.art",
    scope: "Music visualization, Front-end Development", tech1: "P5 sound", collaborator1: "Verli Chen",
    images: [
      { src: syne__img3, alt: "screen recording of audio visualizer" },
      { src: syne__img2, alt: "mobile version of synesthetic perceptions" },
      { src: syne__img4, alt: "screen recordings of exhibits and their hover states" },
      { src: syne__img1, alt: "screen recording of audio visualizer" },
    ],
  },
  {
    className: "index__voices",
    large: voicesAndVoids, small: voicesAndVoidsSmall,
    imgClass: "index__voices-and-voids__img", wrpClass: "index__voices-and-voids__wrp",
    windowTitle: "Voices and Voids", windowAlt: "Screen shot of Voices and Voids website",
    title: "Voices and Voids — Info",
    summary: "Voices and Voids is a net art project that explores how we might reclaim, transcode, and embody voice assistant interactions and data through performances, artistic research, and interactive vignettes.",
    mainLink: "https://voicesandvoids.net/", linkText: "voicesandvoids.net",
    scope: "Net Art, Front-end Development", tech1: "React", collaborator1: "Audrey Desjardins, Afroditi Psarra, Bonnie Whiting",
    images: [
      { src: voices__img1, alt: "screenshot of AI generated google assistant text" },
      { src: voices__img2, alt: "screenshot of numerous voice assistant inputs" },
      { src: voices__img3, alt: "screenshot of artists and musicians and artists performing with voice assistances" },
      { src: voices__img4, alt: "screenshot of Alexa poem overlayed on alexas" },
    ],
  },
  {
    className: "index__cork",
    large: cork, small: corkSmall,
    imgClass: "index__cork__img", wrpClass: "index__cork__wrp",
    windowTitle: "Cork", windowAlt: "A word Denïm shown in the Typeface cork",
    title: "Cork — Info",
    summary: "Cork is a variable display typeface that features flared terminals, swooping curves, and humanist proportions. Reminiscent of mushrooms, bell bottom jeans, and warm summer breezes, Cork draws its inspiration from art nouveau, psychedelic type, as well as the organic shapes found in nature and those created by swift brush strokes.",
    mainLink: "https://typewest.letterformarchive.org/2022/typeface/cork/", linkText: "Type test",
    scope: "Type Design", tech1: "Glyphs App", collaborator1: "Type West at the Letterform Archive",
    images: [
      { src: cork__img1, alt: "White on red text showing the entire glyph set of Cork, which includes upper and lowercase latin alphabet, various diacritics, numbers, punctuation, and special characters." },
      { src: cork__img2, alt: "3 poster of the same design showing a flower bouquet that looks like an octopus, and the text 'Overgrown Dreamwever', set in Cork." },
      { src: cork__img3, alt: "White on red text showing Cork's preset styles, which includes regular, book, medium, bold, black, narrow black, and condensed black." },
      { src: cork__img4, alt: "red on white text set in Cork showing the word 'tempo', with the 'o' repeated numerous times to fill up the page." },
      { src: cork__img5, alt: "The text 'Denim', set in Cork Black and Book." },
    ],
  },
  {
    className: "index__cycl",
    large: cycl, small: cycl,
    imgClass: "index__cycl__img", wrpClass: "index__cycl__wrp",
    windowTitle: "Cycl", windowAlt: "Ampersand shown in the typeface Cycl",
    title: "Cycl — Info",
    summary: "Cycl is inspired by a hand lettered signage at a Seattle cafe and bike shop. With its bold, all-caps design, wide width, ample counter spaces, and slanted terminals, Cycl emanates a playful yet confident vibe that commands attention.",
    mainLink: "", linkText: "",
    scope: "Type Design", tech1: "Glyphs App", collaborator1: "Just me",
    images: [
      { src: cycl__img1, alt: "Black text showing the entire glyph set of Cycl, which includes the uppercase latin alphabet and ampersand." },
      { src: cycl__img2, alt: "light yellow words set in Cycl over a green background." },
      { src: cycl__img3, alt: "A picture of a signage that reads 'Racing and Coffee' is juxtaposed next to the same text set to Cycl, comparing the inspiration and the typeface." },
    ],
  },
  {
    className: "index__cloister",
    large: cloister, small: cloister,
    imgClass: "index__cloister__img", wrpClass: "index__cloister__wrp",
    windowTitle: "Cloister", windowAlt: "W glyph shown in the typeface Cloister",
    title: "Cloister — Info",
    summary: "Cloister is a revival of the 1926 Morris Benton typeface of the same name, which was designed based on Nicolas Jenson's prints from the 1470s.",
    mainLink: "", linkText: "",
    scope: "Type Design", tech1: "Glyphs App", collaborator1: "Type West at the Letterform Archive",
    images: [
      { src: cloister__img3, alt: "Red title case and uppercase text, as well as short phrases, set in Cloister over a pink background. Cloister is a light weight, serif, translational font." },
      { src: cloister__img2, alt: "Text set in Cloister showing the range entire glyph set, which includes uppercase, lowercase, numbers, and punctuation." },
      { src: cloister__img1, alt: "A diagram of the text 'Kindle805' set in Cloister, highlighting 11.5 degree pen angle, medium contrast, and offset number and letter heights." },
    ],
  },
]

const projectsAfter = [
  {
    className: "index__type-mirror",
    large: typeMirror, small: typeMirrorSmall,
    imgClass: "index__type-mirror__img", wrpClass: "index__type-mirror__wrp",
    windowTitle: "Type Mirror", windowAlt: "Screen shot of type mirror's website",
    title: "Type Mirror — Info",
    summary: "Type Mirror is a mirror made of typography.",
    mainLink: "https://amandayehh.github.io/type-mirror/", linkText: "amandayehh.github.io/type-mirror",
    scope: "Creative coding, Interactive art", tech1: "p5.js", collaborator1: "Just me",
    images: [
      { src: mirror__img1, alt: "gif of my reflection in type mirror" },
      { src: mirror__img2, alt: "ui of type mirror" },
      { src: mirror__img3, alt: "gif of user spinning in type mirror" },
    ],
  },
  {
    className: "index__doodler",
    large: keyboardDoodler, small: keyboardDoodlerSmall,
    imgClass: "index__doodler__img", wrpClass: "index__doodler__wrp",
    windowTitle: "Keyboard Doodler", windowAlt: "Screen shot of Keyboard Doodler's plugin UI",
    title: "Keyboard Doodler — Info",
    summary: "Keyboard Doodler is a Figma plugin that turns your keyboard into a canvas. By simply pressing keys, vector nodes in that key's location will appear on the frame.",
    mainLink: "https://www.figma.com/community/plugin/917914510168637203/Keyboard-Doodler", linkText: "Try it out!",
    scope: "Design tool", tech1: "Typescript, Figma plugin API", collaborator1: "Josh Shi",
    images: [
      { src: doodler__img1, alt: "Generative drawings created with Keyboard Doodler" },
      { src: doodler__img2, alt: "A bunch of keys with a different keyboard doodle drawing on it. One key group spells out WHY" },
      { src: doodler__img3, alt: "Keyboard Doodler UI" },
      { src: doodler__img4, alt: "Drawings superimposed over a keyboard" },
    ],
  },
  {
    className: "index__semaphore",
    large: sema, small: semaSmall,
    imgClass: "index__semaphore__img", wrpClass: "index__sempahore__wrp",
    windowTitle: "Learn Semaphore", windowAlt: "Screen shot of learnsemaphore.com",
    title: "Learn Semaphore — Info",
    summary: "Semaphore is a perfect way of communicating with others while maintaining social distancing during the pandemic. Say no more! teaches the fundamental poses of semaphore using webcam-enabled pose recognition.",
    mainLink: "https://ygev.github.io/semaphore/", linkText: "ygev.github.io/semaphore",
    scope: "Game Design, Creative Coding, Machine Learning Application", tech1: "p5.js, poseNet()", collaborator1: "Yana Gevorgyan",
    images: [
      { src: sema__img1, alt: "Game start page for Say no more, Semaphore" },
      { src: sema__img3, alt: "Image of me playing Say no more, Semaphore" },
      { src: sema__img2, alt: "Gif of me playing Say no more, Semaphore" },
    ],
  },
  {
    className: "index__kilotype",
    large: kilotype, small: kilotypeSmall,
    imgClass: "index__kilotype__img", wrpClass: "index__kilotype__wrp",
    windowTitle: "Kilotype", windowAlt: "Screen shot of Kilotype's website",
    title: "Kilotype — Info",
    summary: "Kilotype.de is a website that I helped design while working at Friends of the Web. The site brings together interactive variable typography and a vibrant color palette to highlight William Montrose and Sebastian Losch's debut typefaces.",
    mainLink: "https://kilotype.de/", linkText: "kilotype.de",
    scope: "Web design", tech1: "Sketch", collaborator1: "Friends of the Web, Kilotype",
    images: [
      { src: kilo__img1, alt: "screenshot of Kilotype's type testers" },
      { src: kilo__img2, alt: "screenshot of kilotype's homepage" },
      { src: kilo__img3, alt: "screenshot of kilotype's about page" },
    ],
  },
  {
    className: "index__audio-visualizer",
    large: audioVisualizer, small: audioVisualizerSmall,
    imgClass: "index__audio-visualizer__img", wrpClass: "index__audio-visualizer__wrp",
    windowTitle: "Audio Visualizer", windowAlt: "Video of music animation",
    title: "Audio Visualizer — Info",
    summary: "Audio Visualizer is a program that visualizes music using frequencies and peak detection.",
    mainLink: "https://amandayehh.github.io/audio-visualizer/", linkText: "amandayehh.github.io/audio-visualizer",
    scope: "Creative Coding, Generative Design", tech1: "p5.js", collaborator1: "Just me",
    images: [
      { src: audio__img1, alt: "Dropping a music file into Audio Visualizer" },
      { src: audio__img2, alt: "screenshot of audio visualizer" },
      { src: audio__img3, alt: "screen recording of audio visualizer" },
    ],
  },
]


function toSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

const allProjects = [...projects, ...projectsAfter]

class Index extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      title: "", summary: "", mainLink: "", linkText: "",
      scope: "", tech1: "", collaborator1: "",
      images: [],
    }
    this.openWindow = this.openWindow.bind(this)
    this.closeWindow = this.closeWindow.bind(this)
    this.handlePopState = this.handlePopState.bind(this)
  }

  componentDidMount() {
    window.addEventListener("popstate", this.handlePopState)
    const hash = window.location.hash.slice(1)
    if (hash) {
      const match = allProjects.find(p => toSlug(p.windowTitle) === hash)
      if (match) this.openWindow(null, match, true)
    }
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handlePopState)
  }

  handlePopState() {
    const hash = window.location.hash.slice(1)
    if (!hash) {
      this.setState({ isOpen: false })
      document.body.classList.remove("noScroll")
    } else {
      const match = allProjects.find(p => toSlug(p.windowTitle) === hash)
      if (match) this.openWindow(null, match, true)
    }
  }

  openWindow(e, project, fromHistory = false) {
    const { className, imgClass, wrpClass, large, small, windowTitle, windowAlt, ...projectData } = project
    this.setState({ isOpen: true, ...projectData })
    document.body.classList.add("noScroll")
    if (!fromHistory) {
      history.pushState(null, "", "#" + toSlug(windowTitle))
    }
  }

  closeWindow() {
    this.setState({ isOpen: false })
    document.body.classList.remove("noScroll")
    history.pushState(null, "", window.location.pathname)
  }

  renderComponent() {
    if (!this.state.title) return null
    return (
      <InnerPage
        isOpen={this.state.isOpen}
        onClose={this.closeWindow}
        title={this.state.title}
        summary={this.state.summary}
        mainLink={this.state.mainLink}
        linkText={this.state.linkText}
        scope={this.state.scope}
        tech1={this.state.tech1}
        collaborator1={this.state.collaborator1}
        images={this.state.images}
      />
    )
  }

  renderProject(project) {
    return (
      <div
        key={project.className}
        className={project.className}
        onClick={(e) => this.openWindow(e, project)}
      >
        <Window
          imgClass={project.imgClass}
          wrpClass={project.wrpClass}
          large={project.large}
          small={project.small}
          title={project.windowTitle}
          alt={project.windowAlt}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="index">
        <SEO title="Amanda Yeh" />
        <div className="index_grid">
          <Transparency />
        </div>

        {this.renderComponent()}

        <div className="index__background"></div>
        <div className={`index__filter ${this.state.isOpen ? "fadeIn" : "fadeOut"}`}></div>

        <div className="index__wrapper">
          <Name />
          <Sticky />

          <div className="index__infoShortcuts">
            <Shortcut href={"mailto:amandayeh@proton.me"} className="index__infoShortcuts__1" src={mail} alt={"mail icon"} text={"amandayeh@\nproton.me"} />
            <Shortcut href={"/projects"} className="index__infoShortcuts__5" src={computer} alt={"computer icon"} text={"Projects"} />
<Shortcut href={"https://docs.google.com/spreadsheets/d/1whP8bzFwvkcDQD66ZhSizF6V3a93LIkv1IqubUQb9sg/edit?ouid=117237055574131097484&usp=sheets_home&ths=true"} className="index__infoShortcuts__2" src={desktop} alt={"desktop icon"} text={"Work"} />
            <Shortcut href={"https://www.are.na/amanda"} className="index__infoShortcuts__3" src={web} alt={"website icon"} text={"are.na"} />
            <Shortcut href={"https://github.com/amandayehh"} className="index__infoShortcuts__4" src={web} alt={"website icon"} text={"Github"} />
          </div>

          {projects.map((project) => this.renderProject(project))}

          <SmallSticky className="index__smallSticky" href="mailto:amandayeh@proton.me?subject=Fonts&body=I would like a copy of your typefaces for personal use." />

          <div className="index__fontShortcuts">
            <Shortcut className="index__fontShortcuts__1" src={font} alt={"font icon"} text={"Cork"} href="mailto:amandayeh@proton.me?subject=Snatch me a copy of Cork&body=I would like a copy of Cork for personal use." />
            <Shortcut className="index__fontShortcuts__2" src={font} alt={"font icon"} text={"Cycl"} href="mailto:amandayeh@proton.me?subject=Snatch me a copy of Cycl&body=I would like a copy of Cycl for personal use." />
            <Shortcut className="index__fontShortcuts__3" src={font} alt={"font icon"} text={"Cloister"} href="mailto:amandayeh@proton.me?subject=Snatch me a copy of Cloister&body=I would like a copy of Cloister for personal use." />
          </div>

          {projectsAfter.map((project) => this.renderProject(project))}
        </div>

        <div className="index__colophon">
          <Colophon />
        </div>
        <div className="index__bottom">
          <div className="index__cat">
            <a href="https://amandayehh.github.io/uwu/">
              <img className="index__cat__img" src={cat} alt="vibing cat" />
            </a>
          </div>
          <div className="index__footer">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Index
