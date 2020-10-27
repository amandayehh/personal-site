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
        <Window  src={voicesAndVoids} imgClass={"index__voices-and-voids__img"} wrpClass={"index__voices-and-voids__wrp"} title={"Voices and Voids"} alt="Screen shot of Voices and Voids website" />
      </div>

      <div className="index__type-mirror">
        <Window  imgClass={"index__type-mirror__img"} wrpClass={"index__type-mirror__wrp"} src={typeMirror} title={"Type Mirror"} alt="Screen shot of type mirror's website" />
      </div>

      <div className="index__kilotype">
        <Window imgClass={"index__kilotype__img"} wrpClass={"index__kilotype__wrp"}  src={kilotype} title={"Kilotype"} alt="Screen shot of Kilotype's website"  />
      </div>

      <div className="index__sel">
        <Window  imgClass={"index__sel__img"} wrpClass={"index__sel__wrp"} src={sel} title={"Explore SEL"} alt="Screen shot of Explore SEL's website"  />
      </div>

      <div className="index__semaphore">
        <Window imgClass={"index__semaphore__img"} wrpClass={"index__sempahore__wrp"} src={sema} title={"Learn Semaphore"} alt="Screen shot of learnsemaphore.com" />
      </div>

      <div className="index__audio-visualizer">
        <Window imgClass={"index__audio-visualizer__img"} wrpClass={"index__audio-visualizer__wrp"} isVideo={true} src={audioVisualizer} title={"Audio Visualizer"} alt="Video of music animation" />
      </div>
      <div className="index__posters">
        <div className="index__posters__1">
          <Poster imgClass="index__posters__1_img" src={poster1} alt="Poster for photo exhibition" />
        </div>

        <div className="index__posters__2">
          <Poster  imgClass="index__posters__2_img" src={poster3} alt="Poster for photo a machine learning workshop" />
        </div>

        <div className="index__posters__3">
          <Poster  imgClass="index__posters__3_img"  src={poster2} alt="Poster for the all mighty pumpkin spice cult" />
        </div>

      </div>

      <div className="index__canvas">
        <Book src={canvas} spineClass={"index__canvas__spine"} wrpClass={"index__canvas__wrapper"} imgClass={"index__canvas__img"} title={"Beyond a Blank Canvas"} alt="Book cover for beyond a blank canvas"/>
      </div>

      <div className="index__ditto">
        <Window imgClass={"index__ditto__img"} wrpClass={"index__ditto__wrp"} src={ditto} title={"Ditto"} alt="Screeonshot of Ditto's website"/>
      </div>

      <div className="index__pixel">
        <Window imgClass={"index__pixel__img"} wrpClass={"index__pixel__wrp"}  src={pixel} title={"Pixelation"} alt="Screeonshot of Pixelation's website"/>
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
