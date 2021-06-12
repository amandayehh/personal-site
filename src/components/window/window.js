import { Link } from "gatsby"
import React, { Component } from "react"


import "./window.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class Window extends Component {
  constructor(props) {
    super(props);
    this.imgClass = props.imgClass;
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
      return(<picture>
        <source srcSet={this.props.large} media="(min-width: 500px)" />
        <source srcSet={this.props.small} media="(max-width: 500px)" />
        <img className={`window__image-wrapper__image ${ this.props.imgClass }`} src={this.props.large} alt={this.props.alt}/>
      </picture>)
    }
    else{
    return(<video src={this.props.src}  alt={this.props.alt}  className={`window__image-wrapper__image ${ this.props.imgClass }`} preload="yes" autoPlay="autoplay" loop muted playsInline></video>      )
    }
  }

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
        <div className={`window__image-wrapper ${ this.props.wrpClass }`} style={{ width: this.width, height: this.height, overflow:this.hidden}} >

       {this.renderSrc()}
        </div>
      </div>
    )
  }
}


export default Window
