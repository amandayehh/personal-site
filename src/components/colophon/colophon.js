import React, { Component } from "react"

import { BubbleContainer } from "../../utils/bubble"
import "./colophon.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

function BubbleLink({ href, children, ...props }) {
  return (
    <BubbleContainer as="a" href={href} target="_blank" rel="noopener" variant="dramatic" underline leaveDuration={1300} {...props}>
      {children}
    </BubbleContainer>
  )
}

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
          <p>This webiste is open source and hosted on <BubbleLink href="https://github.com/amandayehh/personal-site">Github.</BubbleLink></p>
        </div>
        <div className="colophon__group__2">
          <p className="bold">Typography</p>
          <p>This website uses bitmap typefaces <BubbleLink href="https://pangrampangram.com/products/bitmap-fonts?variant=32840636858422">Mondwest and Neuebit</BubbleLink> by Pangram Pangram.</p>
        </div>
      </div>
    )
  }
}


export default Colophon
