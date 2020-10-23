import { Link } from "gatsby"
import React, { Component } from "react"

import "./colophon.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"


class Colophon extends Component {
  constructor(props) {
    super(props);
    this.height = props.sizeH
  }

  render() {
    return (
      <div className="colophon">
        <h2 className="colophon__title">Colophon</h2>
        <div className="colophon__group__1">
          <p className="bold">Technology</p>
          <p>This website is developed with Gatsby and React. Additional libraries used are GSAP,  Fade. This website is open-source and hosted on Github</p>
        </div>
        <div className="colophon__group__2">
          <p className="bold">Typography</p>
          <p>This website uses bitmap typefaces Mondwest and Neuebit by Pangram Pangram.</p>
        </div>
      </div>
    )
  }
}


export default Colophon
