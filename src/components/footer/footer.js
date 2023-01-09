import { Link } from "gatsby"
import React, { Component } from "react"

import "./footer.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import me from "../../images/me.png"
import yargle from "../../images/footer/yargle.gif"

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
          <p><a href="https://www.are.na/amanda" target="_blank" rel="noopener">www.are.na/amanda</a></p>
          <p><a href="https://github.com/amandayehh" target="_blank" rel="noopener" >github.com/amandayehh</a></p>
          <p><a href="mailto:amandayeh@proton.me" target="_blank" rel="noopener">amandayeh@proton.me</a></p>
        </div>
        <div className="footer__note">
          <div className="footer__note__heart">
            <p className="footer__note__heart__text">My heart belongs to</p>
            <a href="https://yg.is/" target="_blank" rel="noopener" >
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
