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
        <a href="" className="shortcut__link">
          <img className="shortcut__img" src={this.props.src} alt={this.props.alt} />
          <p className="shortcut__link__text">
            {this.props.text}
          </p>
        </a>
      </div>
    )
  }
}



export default Shortcut
