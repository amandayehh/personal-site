import React, { Component } from "react"

import { BubbleContainer } from "../../utils/bubble"
import "./footer.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import me from "../../images/me.png"
import yargle from "../../images/footer/yargle.gif"

function BubbleLink({ href, children, ...props }) {
  return (
    <BubbleContainer as="a" href={href} target="_blank" rel="noopener" variant="dramatic" underline leaveDuration={1300} {...props}>
      {children}
    </BubbleContainer>
  )
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.height = props.sizeH
  }

  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__links">
          <div className="footer__links__title">
            <img className="footer__links__title__img" src={me} alt="Pixelated Amanda's face" />
            <p className="bold footer__links__title__text">Find me at</p>
          </div>
          <p><BubbleLink href="https://www.are.na/amanda">www.are.na/amanda</BubbleLink></p>
          <p><BubbleLink href="https://github.com/amandayehh">github.com/amandayehh</BubbleLink></p>
          <p><BubbleLink href="mailto:amandayeh@proton.me">amandayeh@proton.me</BubbleLink></p>
        </div>
        <div className="footer__note">
          <div className="footer__note__heart">
            <p className="footer__note__heart__text">My heart belongs to</p>
            <a href="https://yg.is/" target="_blank" rel="noopener">
              <img className="footer__note__heart__img" src={yargle} alt="bear running" />
            </a>
          </div>
          <p>{this.getYear()} © Amanda Yeh</p>
        </div>
      </footer >
    )
  }
}


export default Footer
