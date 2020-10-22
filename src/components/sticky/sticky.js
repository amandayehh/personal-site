import { Link } from "gatsby"
import React from "react"

import "./sticky.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

const Sticky = ({ siteTitle }) => (

  <div className="sticky">
    <div className="sticky__bio">
      <h3 className="sticky__bio__1" >I’m pretty good at making websites. I sometimes make print designs.</h3>
      <h3 className="sticky__bio__2" >I sometimes make print designs.Open to work on weird things. Just reach out!</h3>
      <div className="sticky__bio__links">
        <p className="sticky__bio__links__1">
          <a href="">aye01@mica.edu</a>
        </p>
        <p className="sticky__bio__links__1">
          <a href="">www.are.na/amanda</a>
        </p>
        <p className="sticky__bio__links__1">
          <a href="">github.com/amandayehh</a>
        </p>
      </div>
    </div>
    <svg  className="sticky__svg" width="247" height="290" viewBox="0 0 247 290" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.4623 255.061V254.561H34.9623H0.5V0.5H246.5V289.5H35.4623V255.061ZM34.4623 255.561V288.793L1.20768 255.561H34.4623Z" fill="#E8DE6F" stroke="black" />
    </svg>


  </div>

)



export default Sticky
