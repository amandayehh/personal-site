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
          <p>This website is developed with <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a> and <a href="https://reactjs.org/" target="_blank">React</a>. This website is <a href="https://github.com/amandayehh/personal-site" target="_blank">open-source and hosted on Github</a>.</p>
        </div>
        <div className="colophon__group__2">
          <p className="bold">Typography</p>
          <p>This website uses bitmap typefaces  <a href="https://pangrampangram.com/products/bitmap-fonts?variant=32840636858422" target="_blank">Mondwest and Neuebit</a> by Pangram Pangram.</p>
        </div>
      </div>
    )
  }
}


export default Colophon
