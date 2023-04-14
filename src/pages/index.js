// import React from "react"
import React, { Component } from "react"

import { Link } from "gatsby"


import SEO from "../components/seo"
import Name from "../components/name/name"
import Sticky from "../components/sticky/sticky"
import SmallSticky from "../components/smallSticky/smallSticky"

import Shortcut from "../components/shortcut/shortcut"
import Window from "../components/window/window"
import Book from "../components/book/book"
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


//large
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

//Keyboard doodler
import doodler__img1 from "../images/doodler/doodler1.png"
import doodler__img2 from "../images/doodler/doodler2.png"
import doodler__img3 from "../images/doodler/doodler3.png"
import doodler__img4 from "../images/doodler/doodler4.png"

//Kilotype
import kilo__img1 from "../images/kilotype/inner-color.png"
import kilo__img2 from "../images/kilotype/home.png"
import kilo__img3 from "../images/kilotype/about.png"

//Semapore
import sema__img1 from "../images/sema/home.png"
import sema__img2 from "../images/sema/me.gif"
import sema__img3 from "../images/sema/game.png"

//Audio Visualizer
import audio__img1 from "../images/audio/audio-intro.gif"
import audio__img2 from "../images/audio/example2.png"
import audio__img3 from "../images/audio/example.gif"


class Index extends Component {
  constructor() {
    super();
    this.state = {
      openWindow: false,
      mainLink: "/",
      linkText: "/",
      title: "/",
      summary: "/",
      scope: "/",
      tech1: "/",
      collaborator1: "/",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
      img6: "",
      img7: "",
      img8: "",
      alt1: "",
      alt2: "",
      alt3: "",
      alt4: "",
      alt5: "",
      alt6: "",
      alt7: "",
      alt8: ""
    }
    this.openWindow = this.openWindow.bind(this);

  }

  openWin = (e) => { console.log("hi") }


  openWindow(e, title, summary, mainLink, linkText, scope, tech1, collaborator1, img1, alt1, img2, alt2, img3, alt3, img4, alt4, img5, alt5, img6, alt6, img7, alt7, img8, alt8) {
    this.setState({ openWindow: true, title: title, summary: summary, mainLink: mainLink, linkText: linkText, scope: scope, tech1: tech1, collaborator1: collaborator1, img1: img1, alt1: alt1, img2: img2, alt2: alt2, img3: img3, alt3: alt3, img4: img4, alt4: alt4, img5: img5, alt5: alt5, img6: img6, alt6: alt6, img7: img7, alt7: alt7, img8: img8, alt8: alt8 })
    document.getElementsByClassName("index__filter")[0].classList.add("fadeIn")
    document.getElementsByClassName("index__filter")[0].classList.remove("fadeOut")

    document.getElementsByTagName("body")[0].classList.add("noScroll")

    console.log("hi")


    if (document.getElementsByClassName("index__filter")[0].classList.contains("fadeOut")) {
      document.getElementsByClassName("index__filter")[0].classList.remove("fadeOut")
    }

    if (document.getElementsByClassName("innerPage")[0] != undefined) {
      document.getElementsByClassName("innerPage__window")[0].scrollTo(0, 0)
      document.getElementsByClassName("innerPage__window")[0].classList.add("popUp")
      document.getElementsByClassName("innerPage__window")[0].classList.remove("popOut")
    }

    if (document.getElementsByClassName("innerPage__back")[0] != undefined) {
      document.getElementsByClassName("innerPage__back")[0].classList.add("fadeIn")
      document.getElementsByClassName("innerPage__back")[0].classList.remove("popOut")
    }


    // .remove__window

  }

  renderCompnent() {

    {

      if (this.state.openWindow == true) {
        // console.log("open + render")
        return (<InnerPage className="index__innerPage" title={this.state.title} summary={this.state.summary} mainLink={this.state.mainLink} linkText={this.state.linkText} scope={this.state.scope} tech1={this.state.tech1} collaborator1={this.state.collaborator1} img1={this.state.img1} alt1={this.state.alt1} img2={this.state.img2} alt2={this.state.alt2} img3={this.state.img3} alt3={this.state.alt3} img4={this.state.img4} alt4={this.state.alt4} img5={this.state.img5} alt5={this.state.alt5} img6={this.state.img6} alt6={this.state.alt6} img7={this.state.img7} alt7={this.state.alt7} img8={this.state.img8} alt8={this.state.alt8} />
        )
      }
    }
  }



  render() {

    return (

      <div className="index">
        <div class="index_grid">
          <Transparency />
        </div>

        {/* */}
        {this.renderCompnent()}
        <SEO title="Amanda Yeh" />

        <div className="index__background"></div>
        <div className="index__filter fadeOut">
        </div>

        <div className="index__wrapper">

          <Name />
          <Sticky />

          <div className="index__infoShortcuts">
            <Shortcut href={"mailto:amandayeh@proton.me"} className="index__infoShortcuts__1" src={mail} alt={"mail icon"} text={"amandayeh@proton.me"} />
            <Shortcut href={"https://www.are.na/amanda"} className="index__infoShortcuts__2" src={web} alt={"website icon"} text={"are.na"} />
            <Shortcut href={"https://github.com/amandayehh"} className="index__infoShortcuts__3" src={web} alt={"website icon"} text={"Github"} />
          </div>

          <div className="index__syne" onClick={(e) => this.openWindow(e, "Synesthetic Perceptions — Info", "Synesthetic Perceptions explores the relationship between visual and auditory composition. The project features a series of music and their synesthetic interpretations as well as a collection of  tangible objects that drive those interpretations.", "https://synestheticperceptions.art/", "synestheticperceptions.art", "Music visualization, Front-end Development", "P5 sound", "Verli Chen", syne__img3, "screen recording of audio visualizer", syne__img2, "mobile version of synesthetic perceptions", syne__img4, "screen recordings of exhibits and their hover states", syne__img1, "screen recording of audio visualizer")}>
            <Window imgClass={"index__syne__img"} wrpClass={"index__syne__wrp"} large={syne} small={syneSmall} title={"Synesthetic Perceptions"} alt="Screen shot of Synesthetics perception'music visualizer" />
          </div>

          <div className="index__voices" onClick={(e) => this.openWindow(e, "Voices and Voids — Info", "Voices and Voids is a net art project that explores how we might reclaim, transcode, and embody voice assistant interactions and data through performances, artistic research, and interactive vignettes.", "https://voicesandvoids.net/", "voicesandvoids.net", "Net Art, Front-end Development", "React", "Audrey Desjardins, Afroditi Psarra, Bonnie Whiting", voices__img1, "screenshot of AI generated google assistant text", voices__img2, "screenshot of numerous voice assistant inputs", voices__img3, "screenshot of artists and musicians and artists performing with voice assistances", voices__img4, "screenshot of Alexa poem overlayed on alexas")}>
            <Window imgClass={"index__voices-and-voids__img"} wrpClass={"index__voices-and-voids__wrp"} large={voicesAndVoids} small={voicesAndVoidsSmall} title={"Voices and Voids"} alt="Screen shot of Voices and Voids website" />
          </div>

          <div className="index__cork" onClick={(e) => this.openWindow(e, "Cork — Info", "Cork is a variable display typeface that features flared terminals, swooping curves, and humanist proportions. Reminiscent of mushrooms, bell bottom jeans, and warm summer breezes, Cork draws its inspiration from art nouveau, psychedelic type, as well as the organic shapes found in nature and those created by swift brush strokes.", "https://typewest.letterformarchive.org/2022/typeface/cork/", "Type test", "Type Design", "Glyphs App", "Type West at the Letterform Archive", cork__img1, "White on red text showing the entire glyph set of Cork, which includes upper and lowercase latin alphabet, various diacritics, numbers, punctuation, and special characters.", cork__img2, "3 poster of the same design showing a flower bouquet that looks like an octopus, and the text 'Overgrown Dreamwever', set in Cork. ", cork__img3, "White on red text showing Cork's preset styles, which includes regular, book, medium, bold, black, narrow black, and condensed black.", cork__img4, "red on white text set in Cork showing the word 'tempo', with the 'o' repeeat numerous times to fill up the page. The 'o' is set in a different weight from the previous one to create a wavey texture", cork__img5, "The text 'Denim', set in Cork Black and Book.")}>
            <Window imgClass={"index__cork__img"} wrpClass={"index__cork__wrp"} large={cork} small={corkSmall} title={"Cork"} alt="A word Denïm shown in the Typeface cork" />
          </div>

          <div className="index__cycl" onClick={(e) => this.openWindow(e, "Cycl — Info", "Cycl is inspired by a hand lettered signage at a Seattle cafe and bike shop. With its bold, all-caps design, wide width, ample counter spaces, and slanted terminals, Cycl emanates a playful yet confident vibe that commands attention.", "", "", "Type Design", "Glyphs App", "Just me", cycl__img1, "Black text showing the entire glyph set of Cycl, which includes the uppercase latin alphabet and ampersand.", cycl__img2, "light yellow words set in Cycl over a green background.", cycl__img3, "A picture of a signage that reads 'Racing and Coffee' is juxtaposed next to the same text set to Cycl, comparing the inspiration and the typeface.")}>
            <Window imgClass={"index__cycl__img"} wrpClass={"index__cycl__wrp"} large={cycl} small={cycl} title={"Cycl"} alt="Ampersand shown in the typeface Cycl" />
          </div>

          <div className="index__cloister" onClick={(e) => this.openWindow(e, "Cloister — Info", "Cloister is a revival of the 1926 Morris Benton typeface of the same name, which was designed based on Nicolas Jenson's prints from the 1470s.", "", "", "Type Design", "Glyphs App", "Type West at the Letterform Archive", cloister__img3, "Red title case and uppercase text, as well as short phrases, set in Cloister over a pink background. Cloister is a light weight, serif, translational font.", cloister__img2, "Text set in Cloister showing the range entire glyph set, which inlcudes uppercase, lowercase, numbers, and punctuation.", cloister__img1, "A diagram of the text 'Kindle805' set in Cloister, highlighting 11.5 degree pen angle, medium contrast, and offset number and letter heights.")}>
            <Window imgClass={"index__cloister__img"} wrpClass={"index__cloister__wrp"} large={cloister} small={cloister} title={"Cloister"} alt="W glyph shown in the typeface Cloister" />
          </div>

          <SmallSticky className="index__smallSticky" href="mailto:amandayeh@proton.me?subject=Fonts&body=I would like a copy of your typefaces for personal use." />

          <div className="index__fontShortcuts">
            <Shortcut className="index__fontShortcuts__1" src={font} alt={"font icon"} text={"Cork"} href="mailto:amandayeh@proton.me?subject=Snatch me a copy of Cork&body=I would like a copy of Cork for personal use." />
            <Shortcut className="index__fontShortcuts__2" src={font} alt={"font icon"} text={"Cycl"} href="mailto:amandayeh@proton.me?subject=Snatch me a copy of Cycl&body=I would like a copy of Cycl for personal use." />
            <Shortcut className="index__fontShortcuts__3" src={font} alt={"font icon"} text={"Cloister"} href="mailto:amandayeh@proton.me?subject=Snatch me a copy of Cloister&body=I would like a copy of Cloister for personal use." />
          </div>

          <div className="index__type-mirror" onClick={(e) => this.openWindow(e, "Type Mirror — Info", "Type Mirror is a mirror made of typography.", "https://amandayehh.github.io/type-mirror/", "amandayehh.github.io/type-mirror", "Creative coding, Interactive art", "p5.js", "Just me", mirror__img1, "gif of my reflection in type mirror", mirror__img2, "ui of type mirror", mirror__img3, "gif of user spinning in type mirror")}>
            <Window imgClass={"index__type-mirror__img"} wrpClass={"index__type-mirror__wrp"} large={typeMirror} small={typeMirrorSmall} title={"Type Mirror"} alt="Screen shot of type mirror's website" />
          </div>

          <div className="index__doodler" onClick={(e) => this.openWindow(e, "Keyboard Doodler — Info", "Keyboard Doodler is a Figma plugin that turns your keyboard into a canvas. By simply pressing keys, vector nodes in that key's location will appear on the frame.", "https://www.figma.com/community/plugin/917914510168637203/Keyboard-Doodler", "Try it out!", "Design tool", "Typescript, Figma plugin API", "Josh Shi", doodler__img1, "Generative drawings created with Keyboard Doodler", doodler__img2, "A bunch of keys with a different keyboard doodle drawing on it. One key group spells out WHY", doodler__img3, "Keyboard Doodler UI", doodler__img4, "Drawings superimposed over a keyboard")}>
            <Window imgClass={"index__doodler__img"} wrpClass={"index__doodler__wrp"} large={keyboardDoodler} small={keyboardDoodlerSmall} title={"Keyboard Doodler"} alt="Screen shot of type mirror's website" />
          </div>

          <div className="index__semaphore" onClick={(e) => this.openWindow(e, "Learn Semaphore — Info", "Semaphore is a perfect way of communicating with others while maintaining social distancing during the pandemic. Say no more! teaches the fundamental poses of semaphore using webcam-enabled pose recognition.", "https://ygev.github.io/semaphore/", "ygev.github.io/semaphore", "Game Design, Creative Coding, Machine Learning Application", "p5.js, poseNet()", "Yana Gevorgyan", sema__img1, "Game start page for Say no more, Semaphore", sema__img3, "Image of me playing Say no more, Semaphore", sema__img2, "Gif of me playing Say no more, Semaphore")}>
            <Window imgClass={"index__semaphore__img"} wrpClass={"index__sempahore__wrp"} large={sema} small={semaSmall} title={"Learn Semaphore"} alt="Screen shot of learnsemaphore.com" />
          </div>

          <div className="index__kilotype" onClick={(e) => this.openWindow(e, "Kilotype — Info", "Kilotype.de is a website that I helped design while working at Friends of the Web. The site brings together interactive variable typography and a vibrant color palette to highlight William Montrose and Sebastian Losch’s debut typefaces.", "https://kilotype.de/", "kilotype.de", "Web design", "Sketch", "Friends of the Web, Kilotype", kilo__img1, "screenshot of Kilotype's type testers", kilo__img2, "screenshot of kilotype's homepage", kilo__img3, "screenshot of kilotype's about page")}>
            <Window imgClass={"index__kilotype__img"} wrpClass={"index__kilotype__wrp"} large={kilotype} small={kilotypeSmall} title={"Kilotype"} alt="Screen shot of Kilotype's website" />
          </div>

          <div className="index__audio-visualizer" onClick={(e) => this.openWindow(e, "Audio Visaulizer — Info", "Audio Visualizer is a program that visualizes music using frequencies and peak detection.", "https://amandayehh.github.io/audio-visualizer/", "amandayehh.github.io/audio-visualizer", "Creative Coding, Generative Design", "p5.js", "Just me", audio__img1, "Dropping a music file into Audio Visualizer", audio__img2, "screenshot of audio visualizer", audio__img3, "screen recording of audio visualizer")}>
            <Window imgClass={"index__audio-visualizer__img"} wrpClass={"index__audio-visualizer__wrp"} isVideo={false} large={audioVisualizer} small={audioVisualizerSmall} title={"Audio Visualizer"} alt="Video of music animation" />
          </div>
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


      </div >
    )
  }
}


export default Index