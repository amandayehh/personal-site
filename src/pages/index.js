import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Name from "../components/name/name"
import Sticky from "../components/sticky/sticky"
import Window from "../components/window/window"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"
import "../css/index.css"


import voicesAndVoids from "../images/index/voicesandvoids.png"
import typeMirror from "../images/index/type-mirror.png"
import kilotype from "../images/index/kilotype.png"
import sel from "../images/index/sel.png"
import sema from "../images/index/sema.png"


const Index = () => (
  <div className="index">
    <SEO title="Amanda Yeh" />
    <Name />
    <Sticky />
    <div className="index__voices">
      <Window sizeW={"72vw"} sizeH={"390px"} src={voicesAndVoids} title={"Voices and Voids"} alt="Screen shot of Voices and Voids website" isScroll={true}/>
    </div>

    <div className="index__type-mirror">
      <Window sizeW={"50vw"} sizeH={"36vw"} src={typeMirror} title={"Type Mirror"}  alt="Screen shot of type mirror's website"  />
    </div>

    <div className="index__kilotype">
      <Window sizeW={"85vw"} sizeH={"200px"} src={kilotype} title={"Kilotype"}  alt="Screen shot of Kilotype's website"  isScroll={true} />
    </div>

    <div className="index__sel">
      <Window sizeW={"120vw"} sizeH={"350px"} src={sel} title={"Explore SEL"}  alt="Screen shot of Explore SEL's website"  isScroll={true} />
    </div>

    <div className="index__semaphore">
      <Window sizeW={"70vw"} sizeH={"57vw"} src={sema} title={"Learn Semaphore"}  alt="Screen shot of learnsemaphore.com"/>
    </div>
  </div>
)

export default Index
