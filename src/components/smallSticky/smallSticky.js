import { Link } from "gatsby"
import React, { Component } from "react"
import { reactLocalStorage } from "reactjs-localstorage"


import "./smallSticky.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class SmallSticky extends Component {

  render() {
    return (
      <div className="smallSticky">
        <p className="smallSticky__text" ><a className="smallSticky__text__link" href="mailto:amandayeh@proton.me">Email me </a> for personal use of typefaces.</p>
        <svg className="smallSticky__svg" width="124" height="89" viewBox="0 0 124 89" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M107.624 73.0729V72.5729H108.124H123.5V0.5H0.5V88.5H107.624V73.0729ZM108.624 73.5729V87.7901L122.796 73.5729H108.624Z" fill="#FFED47" stroke="black" />
        </svg>

      </div>
    )
  }


}

export default SmallSticky

