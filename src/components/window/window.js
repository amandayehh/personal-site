import { Link } from "gatsby"
import React, { Component } from "react"

import "./window.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import voicesAndVoids from "../../images/index/voicesandvoids.png"


class Window extends Component {
  constructor(props) {
    super(props);
    this.width = props.sizeW
    this.height = props.sizeH
    if(props.isScroll==true){
      this.scroll = "auto"
    }else{
      this.scroll = "hidden"
    }

    if(props.isVideo == true){
      this.isVideo = true;
    }else{
      this.isVideo = false;
    }

  }

  renderSrc(){
    if(this.isVideo == false){
      return( <img className="window__image-wrapper__image" src={this.props.src} alt={this.props.alt} style={{ width: this.width }} />);
    }
    else{
    return(<video src={this.props.src}  alt={this.props.alt} style={{ width: this.width }} preload="yes" autoPlay="autoplay" loop muted playsInline></video>      )
    }
  }






  // getImageSize() {
  //   if (this.props.colorMode == "on-dark") {
  //     return "back-nav__on-dark-stroke "
  //   } else if (this.props.colorMode == "is-red") {
  //     return "back-nav__red-stroke"
  //   } else {
  //     return "back-nav__on-light-stroke"
  //   }
  // }
  render() {
    return (
      <div className="window">
        <div className="window__bar" style={{ width: this.width }} >
          <div className="window__circles">
            <div className="window__circle"></div>
            <div className="window__circle"></div>
            <div className="window__circle"></div>
            <p className="window__bar__info"id="small-title">{this.props.title}</p>
          </div>
        </div>
        <div className="window__image-wrapper" style={{ width: this.width, height: this.height, overflow:this.scroll}} >
      
       {this.renderSrc()}
        </div>
      </div>
    )
  }
}


export default Window
