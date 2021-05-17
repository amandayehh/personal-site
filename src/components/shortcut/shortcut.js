import { Link } from "gatsby"
import React, { Component } from "react"
import { reactLocalStorage } from "reactjs-localstorage"

import "./shortcut.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"



class Shortcut extends Component {

  render() {
    return (
      <div className="shortcut">
        <a href={this.props.href} rel="noopener" target="_blank" className="shortcut__link">
          <img className="shortcut__img" src={this.props.src} alt={this.props.alt} width="48px" height="48px"/>
          <p className="shortcut__link__text">
            {this.props.text}
          </p>
        </a>
      </div>
    )
  }
}



export default Shortcut
