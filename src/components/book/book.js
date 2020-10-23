import { Link } from "gatsby"
import React, { Component } from "react"

import "./book.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"


class Poster extends Component {
  constructor(props) {
    super(props);
    this.height = props.sizeH
  }

  render() {
    return (
      <div className="book">
        <div className="book__spine" style={{ height: this.height }}>
          <p className="book__spine__title">{this.props.title}</p>
        </div>
        <div className="book__wrapper" style={{ height: this.height }}>
          <img className="book__img" src={this.props.src} alt={this.props.alt} style={{ height: this.height }} />
        </div>
      </div>
    )
  }
}


export default Poster
