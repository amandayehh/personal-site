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


const Index = () => (
  <div className="index">
    <SEO title="Amanda Yeh" />
    <Name />
    <Sticky />
    <div className="index__voices">
      <Window sizeW={"72vw"} sizeH={"390px"} src={voicesAndVoids} title={"Voices and Voids"} isScroll={true}/>
    </div>

    <div className="index__type-mirror">
      <Window sizeW={"50vw"} sizeH={"36vw"} src={typeMirror} title={"Type Mirror"} />
    </div>
  </div>
)

export default Index
