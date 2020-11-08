import { Link } from "gatsby"
import React, { Component } from "react"

import "./innerPage.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import google from "../../images/voices/google.png"


class InnerPage extends Component {

  render() {
    return (
      <div className="innerPage">
        <div className="innerPage__window">
          <div className="innerPage__window__bar" style={{ width: this.width }} >
            <div className="innerPage__window__circles">
              <div className="innerPage__window__circle"></div>
              <div className="innerPage__window__circle"></div>
              <div className="innerPage__window__circle"></div>
              <p className="innerPage__window__bar__info" id="small-title">Voices and Voids</p>
            </div>
            {/* <img src={google} alt="" /> */}
          </div>

        </div>
      </div>
    )
  }
}


export default InnerPage
