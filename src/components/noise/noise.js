import { Link } from "gatsby"
import React, { Component } from "react"

import "./noise.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import noise from "../../images/noise.png"


class Noise extends Component {

  render() {
    return (
      <div className="noise">
        {/* <img className="noise__img" src={noise} alt="noise pattern" /> */}
      </div>
    )
  }
}


export default Noise
