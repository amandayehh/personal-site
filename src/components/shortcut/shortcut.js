import React, { Component } from "react"

import { BubbleContainer, BubbleText } from "../../utils/bubble"
import "./shortcut.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"



class Shortcut extends Component {

  render() {
    return (
      <div className="shortcut">
        <BubbleContainer as="a" href={this.props.href} rel="noopener" target="_blank" className="shortcut__link" variant="dramatic" leaveDuration={1300}>
          <img className="shortcut__img" src={this.props.src} alt={this.props.alt} width="48px" height="48px"/>
          <BubbleText as="p" className="shortcut__link__text">{this.props.text}</BubbleText>
        </BubbleContainer>
      </div>
    )
  }
}



export default Shortcut
