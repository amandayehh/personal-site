import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Name from "../components/name/name"
import Sticky from "../components/sticky/sticky"
import Window from "../components/window/window"
import Poster from "../components/poster/poster"
import Book from "../components/book/book"
import Colophon from "../components/colophon/colophon"
import Footer from "../components/footer/footer"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"
import "../css/index.css"

import voicesAndVoids from "../images/index/voicesandvoids.png"
import typeMirror from "../images/index/type-mirror.png"
import kilotype from "../images/index/kilotype.png"
import sel from "../images/index/sel.png"
import sema from "../images/index/sema.png"
import audioVisualizer from "../images/index/audio-visualizer.webm"
import poster1 from "../images/index/poster1.png"
import poster2 from "../images/index/poster2.png"
import poster3 from "../images/index/poster3.png"
import canvas from "../images/index/canvas.png"
import ditto from "../images/index/ditto.png"
import pixel from "../images/index/pixel.png"
import cat from "../images/cat.gif"


const Index = () => (
  <div className="index">
    <SEO title="Amanda Yeh" />
    <div className="index__wrapper">
      <Name />
      <Sticky />
      <div className="index__voices">
        <Window sizeW={"72vw"} sizeH={"120vw"} src={voicesAndVoids} title={"Voices and Voids"} alt="Screen shot of Voices and Voids website" isScroll={true} />
      </div>

      <div className="index__type-mirror">
        <Window sizeW={"50vw"} sizeH={"36vw"} src={typeMirror} title={"Type Mirror"} alt="Screen shot of type mirror's website" />
      </div>

      <div className="index__kilotype">
        <Window sizeW={"85vw"} sizeH={"200px"} src={kilotype} title={"Kilotype"} alt="Screen shot of Kilotype's website" isScroll={true} />
      </div>

      <div className="index__sel">
        <Window sizeW={"120vw"} sizeH={"350px"} src={sel} title={"Explore SEL"} alt="Screen shot of Explore SEL's website" isScroll={true} />
      </div>

      <div className="index__semaphore">
        <Window sizeW={"70vw"} sizeH={"57vw"} src={sema} title={"Learn Semaphore"} alt="Screen shot of learnsemaphore.com" />
      </div>

      <div className="index__audio-visualizer">
        <Window sizeW={"88vw"} sizeH={"58vw"} isVideo={true} src={audioVisualizer} title={"Audio Visualizer"} alt="Video of music animation" />
      </div>
      <div className="index__posters">
        <div className="index__posters__1">
          <Poster sizeW={"45vw"} src={poster1} alt="Poster for photo exhibition" />
        </div>

        <div className="index__posters__2">
          <Poster sizeW={"40vw"} src={poster3} alt="Poster for photo a machine learning workshop" />
        </div>

        <div className="index__posters__3">
          <Poster sizeW={"48vw"} src={poster2} alt="Poster for the all mighty pumpkin spice cult" />
        </div>

      </div>

      <div className="index__canvas">
        <Book sizeH={"55vw"} src={canvas} title={"Beyond a Blank Canvas"} alt="Book cover for beyond a blank canvas" />
      </div>

      <div className="index__ditto">
        <Window sizeW={"60vw"} sizeH={"50vw"} src={ditto} title={"Ditto"} alt="Screeonshot of Ditto's website" isScroll={true} />
      </div>

      <div className="index__pixel">
        <Window sizeW={"75vw"} sizeH={"57vw"} src={pixel} title={"Pixelation"} alt="Screeonshot of Pixelation's website" isScroll={true} />
      </div>

    </div>
    <div className="index__colophon">
      <Colophon />
    </div>
    <div className="index__bottom">
      <div className="index__cat" >
        <img className="index__cat__img" src={cat} alt="vibing cat" />
      </div>
      <div className="index__footer">
        <Footer />
      </div>
    </div>


  </div>
)

export default Index
