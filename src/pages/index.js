// import React from "react"
import React, { Component } from "react"

import { Link } from "gatsby"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import SEO from "../components/seo"
import Name from "../components/name/name"
import Sticky from "../components/sticky/sticky"
import Shortcut from "../components/shortcut/shortcut"
import Window from "../components/window/window"
import Book from "../components/book/book"
import Colophon from "../components/colophon/colophon"
import Footer from "../components/footer/footer"

import InnerPage from "../components/innerPage/innerPage"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"
import "../css/index.css"

import mail from "../images/shortcut/mail.png"
import web from "../images/shortcut/web.png"
import voicesAndVoids from "../images/index/voicesandvoids.png"
import typeMirror from "../images/index/type-mirror.png"
import keyboardDoodler from "../images/index/doodler.png"

import kilotype from "../images/index/kilotype.png"
import sel from "../images/index/sel.png"
import sema from "../images/index/sema.png"
import audioVisualizer from "../images/index/audio.png"
import poster1 from "../images/index/poster1.png"
import poster2 from "../images/index/poster2.png"
import poster3 from "../images/index/poster3.png"
import canvas from "../images/index/canvas.png"
import ditto from "../images/index/ditto.png"
import pixel from "../images/index/pixel.png"
import cat from "../images/cat.gif"

import noise from "../images/noise.png"


//Voices and Voids
import voices__img1 from "../images/voices/google.png"
import voices__img2 from "../images/voices/voices.png"
import voices__img3 from "../images/voices/music.png"
import voices__img4 from "../images/voices/chit.png"


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

//SEL
import sel__img1 from "../images/sel/compare.png"
import sel__img2 from "../images/sel/casel.png"
import sel__img3 from "../images/sel/word.png"
import sel__img4 from "../images/sel/home.png"

//Semapore
import sema__img1 from "../images/sema/home.png"
import sema__img2 from "../images/sema/me.gif"
import sema__img3 from "../images/sema/game.png"

//Audio Visualizer
import audio__img1 from "../images/audio/audio-intro.gif"
import audio__img2 from "../images/audio/example2.png"
import audio__img3 from "../images/audio/example.gif"

//Canvas
import canvas__img1 from "../images/canvas/canvas1.png"
import canvas__img2 from "../images/canvas/canvas2.png"
import canvas__img3 from "../images/canvas/canvas3.png"
import canvas__img4 from "../images/canvas/canvas4.png"
import canvas__img5 from "../images/canvas/canvas5.png"
import canvas__img6 from "../images/canvas/canvas6.png"
import canvas__img7 from "../images/canvas/canvas7.png"
import canvas__img8 from "../images/canvas/cover.png"

//Pixelation
import pixel__img1 from "../images/pixel/retro.png"
import pixel__img2 from "../images/pixel/image.png"
import pixel__img3 from "../images/pixel/record.gif"


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

  openWindow(e, title, summary, mainLink, linkText, scope, tech1, collaborator1, img1, alt1, img2, alt2, img3, alt3, img4, alt4, img5, alt5, img6, alt6, img7, alt7, img8, alt8) {
    this.setState({ openWindow: true, title: title, summary: summary, mainLink: mainLink, linkText: linkText, scope: scope, tech1: tech1, collaborator1: collaborator1, img1: img1, alt1: alt1, img2: img2, alt2: alt2, img3: img3, alt3: alt3, img4: img4, alt4: alt4, img5: img5, alt5: alt5, img6: img6, alt6: alt6, img7: img7, alt7: alt7, img8: img8, alt8: alt8 })
    document.getElementsByClassName("index__filter")[0].classList.add("fadeIn")
    document.getElementsByClassName("index__filter")[0].classList.remove("fadeOut")

    document.getElementsByTagName("body")[0].classList.add("noScroll")




    if (document.getElementsByClassName("index__filter")[0].classList.contains("fadeOut")) {
      document.getElementsByClassName("index__filter")[0].classList.remove("fadeOut")
    }

    if (document.getElementsByClassName("innerPage")[0] != undefined) {
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
        {/* */}
        {this.renderCompnent()}
        <SEO title="Amanda Yeh" />

        <div className="index__background"></div>
        {/* <img className="index__noise" src={noise} alt="noise background element" /> */}
        <div className="index__filter fadeOut">
          {/* <img className="index__noise" src={noise} alt="noise background element" /> */}
        </div>

        <div className="index__wrapper">

          <Name />

          <Sticky />

          <div className="shortcuts">
            <Shortcut href={"mailto:ayeh01@mica.edu"} className="shortcuts__1" src={mail} alt={"mail icon"} text={"ayeh@mica.edu"} />
            <Shortcut href={"https://www.are.na/amanda"} className="shortcuts__2" src={web} alt={"website icon"} text={"are.na"} />
            <Shortcut href={"https://github.com/amandayehh"} className="shortcuts__3" src={web} alt={"website icon"} text={"github"} />
          </div>

          <div className="index__voices" onClick={(e) => this.openWindow(e, "Voices and Voids — Info", "Voices and Voids is a net art project that explores how we might reclaim, transcode, and embody voice assistant interactions and data through performances, artistic research, and interactive vignettes.", "https://voicesandvoids.net/", "voicesandvoids.net", "Net Art, Front-end Development", "React, Gatsby, Github", "Audrey Desjardins, Afroditi Psarra, Bonnie Whiting", voices__img1, "screenshot of AI generated google assistant text", voices__img2, "screenshot of numerous voice assistant inputs", voices__img3, "screenshot of artists and musicians and artists performing with voice assistances", voices__img4, "screenshot of Alexa poem overlayed on alexas")}>
            <Window src={voicesAndVoids} imgClass={"index__voices-and-voids__img"} wrpClass={"index__voices-and-voids__wrp"} title={"Voices and Voids"} alt="Screen shot of Voices and Voids website" />
          </div>


          <div className="index__type-mirror" onClick={(e) => this.openWindow(e, "Type Mirror — Info", "Type Mirror is a mirror made of typography.", "https://amandayehh.github.io/type-mirror/", "amandayehh.github.io/type-mirror", "Creative coding, Interactive art", "p5.js", "Just me", mirror__img1, "gif of my reflection in type mirror", mirror__img2, "ui of type mirror", mirror__img3, "gif of user spinning in type mirror")}>
            <Window imgClass={"index__type-mirror__img"} wrpClass={"index__type-mirror__wrp"} src={typeMirror} title={"Type Mirror"} alt="Screen shot of type mirror's website" />
          </div>

          <div className="index__doodler" onClick={(e) => this.openWindow(e, "Keyboard Doodler — Info", "Keyboard Doodler is a Figma plugin that turns your keyboard into a canvas. By simply pressing keys, vector nodes in that key's location will appear on the frame.", "https://www.figma.com/community/plugin/917914510168637203/Keyboard-Doodler", "Try it out!", "Design tool", "Typescript, Figma pluginAPI", "Josh Shi", doodler__img1, "Generative drawings created with Keyboard Doodler", doodler__img2, "A bunch of keys with a different keyboard doodle drawing on it. One key group spells out WHY", doodler__img3, "Keyboard Doodler UI", doodler__img4, "Drawings superimposed over a keyboard")}>
            <Window imgClass={"index__doodler__img"} wrpClass={"index__doodler__wrp"} src={keyboardDoodler} title={"Keyboard Doodler"} alt="Screen shot of type mirror's website" />
          </div>

          <div className="index__semaphore" onClick={(e) => this.openWindow(e, "Learn Semaphore — Info", "Semaphore is a perfect way of communicating with others while maintaining social distancing during the pandemic. Say no more! teaches the fundamental poses of semaphore using webcam-enabled pose recognition.", "https://ygev.github.io/semaphore/", "ygev.github.io/semaphore", "Game Design, Creative Coding, Machine Learning Application", "p5.js, poseNet()", "Yana Gevorgyan", sema__img1, "Game start page for Say no more, Semaphore", sema__img3, "Image of me playing Say no more, Semaphore", sema__img2, "Gif of me playing Say no more, Semaphore")}>
            <Window imgClass={"index__semaphore__img"} wrpClass={"index__sempahore__wrp"} src={sema} title={"Learn Semaphore"} alt="Screen shot of learnsemaphore.com" />
          </div>


          <div className="index__kilotype" onClick={(e) => this.openWindow(e, "Kilotype — Info", "Kilotype.de is a website that I helped design while working at Friends of the Web. The site brings together interactive variable typography and a vibrant color palette to highlight William Montrose and Sebastian Losch’s debut typefaces.", "https://kilotype.de/", "kilotype.de", "Web design", "Sketch", "Friends of the Web, Kilotype", kilo__img1, "screenshot of Kilotype's type testers", kilo__img2, "screenshot of kilotype's homepage", kilo__img3, "screenshot of kilotype's about page")}>
            <Window imgClass={"index__kilotype__img"} wrpClass={"index__kilotype__wrp"} src={kilotype} title={"Kilotype"} alt="Screen shot of Kilotype's website" />
          </div>


          {/* <div className="index__sel" onClick={(e) => this.openWindow(e, "Explore SEL — Info", "Explore SEL is a research site developed in collaboration with Harvard’s Graduate School of Education. The site features research tools and data visualizations that untangle the complexities of social and emotional learning frameworks.", "http://exploresel.gse.harvard.edu/", "exploresel.gse.harvard.edu", "Data Visualization, Web Design", "Sketch", "Harvard’s Graduate School of Education, Friends of the Web", sel__img2, "CASEL framework profile", sel__img4, "Homepage of Explore SEL", sel__img1, "framework comparison tool", sel__img3, "Term definition for peaceful conflict resolution")}>
            <Window imgClass={"index__sel__img"} wrpClass={"index__sel__wrp"} src={sel} title={"Explore SEL"} alt="Screen shot of Explore SEL's website" />
          </div> */}


      

          <div className="index__audio-visualizer" onClick={(e) => this.openWindow(e, "Audio Visaulizer — Info", "Audio Visualizer is a program that visualizes music using frequencies and peak detection.", "https://amandayehh.github.io/audio-visualizer/", "amandayehh.github.io/audio-visualizer", "Creative Coding, Generative Design", "p5.js", "Just me", audio__img1, "Dropping a music file into Audio Visualizer", audio__img2, "screenshot of audio visualizer", audio__img3, "screen recording of audio visualizer")}>
            <Window imgClass={"index__audio-visualizer__img"} wrpClass={"index__audio-visualizer__wrp"} isVideo={false} src={audioVisualizer} title={"Audio Visualizer"} alt="Video of music animation" />
          </div>

          {/* <div className="index__canvas" onClick={(e) => this.openWindow(e, "Beyond a Blank Canvas — Info", "Beyond a Blank Canvas is a collection of essays proposing how non-pixel based and experimental design tools can help us create forms that subvert the graphic design status quo.", "", "", "Print design", "Figma", "Just me", canvas__img8, "Cover of Beyond a Blank Canvas", canvas__img1, "Table of contents of Beyond a Blank Canvas", canvas__img2, "spread of Beyond a Blank Canvas consisting of a title and an article", canvas__img3, "spread of Beyond a Blank Canvas consisting of an article and a frame illustration", canvas__img4, "spread of Beyond a Blank Canvas consisting of a title and an article", canvas__img5, "spread of Beyond a Blank Canvas consisting of 2 posters", canvas__img6, "spread of Beyond a Blank Canvas consisting of an article and a screenshot of a Figma plugin", canvas__img7, "spread of Beyond a Blank Canvas consisting of an article and an illustration")}>
            <Book src={canvas} spineClass={"index__canvas__spine"} wrpClass={"index__canvas__wrapper"} imgClass={"index__canvas__img"} title={"Beyond a Blank Canvas"} alt="Book cover for beyond a blank canvas" />
          </div> */}

          {/* <div className="index__ditto">
            <a href="https://ygev.github.io/ditto/" target="_blank">
              <Window imgClass={"index__ditto__img"} wrpClass={"index__ditto__wrp"} src={ditto} title={"Ditto↗"} alt="Screeonshot of Ditto's website" />
            </a>
          </div> */}

          {/* <div className="index__pixel" onClick={(e) => this.openWindow(e, "Pixelation — Info", "Built for the graduating class of 2020, Pixelation is a virtual exhibition showcasing the degree projects of MICA's 2020 BFA graphic design program.", "https://pixelation.micagraphicdesign.org/", "pixelation.micagraphicdesign.org", "Front-end development, Web design", "Gatsby, React", "Yana Gevorgyan, Tony Kim, Zoey Russomano, Anne Xin", pixel__img1, "The pixelation site displayed on a retro computer", pixel__img2, "2 screenshots of the Pixelation site", pixel__img3, "Hovering over projects on Pixelation")}>
            <Window imgClass={"index__pixel__img"} wrpClass={"index__pixel__wrp"} src={pixel} title={"Pixelation"} alt="Screeonshot of Pixelation's website" />
          </div> */}


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
