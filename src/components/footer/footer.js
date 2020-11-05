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

  render() {
    return (
      <footer className="footer">
        <div className="footer__links">
          <div className="footer__links__title">
            <img className="footer__links__title__img" src={me} alt="Pixelated Amanda's face" />
            <p className="bold footer__links__title__text">Find me at</p>
          </div>
          <p><a href="https://www.are.na/amanda" target="_blank">www.are.na/amanda</a></p>
          <p><a href="https://github.com/amandayehh" >github.com/amandayehh</a></p>
          <p><a href="mailto:ayeh01@mica.edu" target="_blank">aye01@mica.edu</a></p>
        </div>
        <div className="footer__note">
          <div className="footer__note__heart">
            <p className="footer__note__heart__text">My heart belongs to</p>
            <img className="footer__note__heart__img" src={yargle} alt="bear running" />
          </div>
          <p>2020 © Amanda Yeh</p>
        </div>
      </footer>
    )
  }
}


export default Footer
