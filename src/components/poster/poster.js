import { Link } from "gatsby"
import React, { Component } from "react"

import "./poster.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"


class Poster extends Component {
  constructor(props) {
    super(props);
    this.imgClass=props.imgClass
    this.width = props.sizeW
    this.height = props.sizeH
    this.left = props.left
    this.top = props.top

  }

  render() {
    return (
      <div className="poster">
        <img  className={`poster__img ${ this.props.imgClass }`} src={this.props.src} alt={this.props.alt} style={{ width: this.width, marginTop: this.top, marginLeft: this.left }}/>
      </div>
    )
  }
}


export default Poster
