import { Link } from "gatsby"
import React, { Component } from "react"

import "./book.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"


class Book extends Component {
  constructor(props) {
    super(props);
    this.spineClass = props.spineClass
    this.wrpClass = props.wrpClass
    this.imgClass = props.imgClass
    this.height = props.sizeH
  }

  render() {
    return (
      <div className="book">
        <div className={`book__spine ${this.spineClass}`}>
          <p className="book__spine__title" id="small-title" >{this.props.title}</p>
        </div>
        <div className={`book__wrapper ${this.wrpClass}`}>
          <img className={`book__img ${this.imgClass}`} src={this.props.src} alt={this.props.alt} style={{ height: this.height }} />
        </div>
      </div>
    )
  }
}


export default Book
