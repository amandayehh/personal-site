import { Link } from "gatsby"
import React, { Component } from "react"

import "./underConstruction.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import underConstruction from "../../images/under_constructionA.gif"


class UnderConstruction extends Component {
  constructor(props) {
    super(props);
    this.height = props.sizeH
  }

  render() {
    return (
      <div className="underConstruction">
        <div className="underConstruction__wrap">
          <img className="underConstruction__img" src={underConstruction} alt="under construction gif" />
          <h3 className="underConstruction_text" >This site is currently under construction. Feel free to snoop around but things will probably break :^]</h3>
        </div>

      </div>
    )
  }
}


export default UnderConstruction
