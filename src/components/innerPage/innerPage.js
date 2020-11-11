import { Link } from "gatsby"
import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./innerPage.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

import google from "../../images/voices/google.png"


class InnerPage extends Component {
  constructor(props) {
    super(props);
    console.log(props.collabLinks);
  }


  render() {
    return (
      <div className="innerPage">
        <a name="chapter4"></a>
        <div className="innerPage__window">
          <div className="innerPage__window__bar" style={{ width: this.width }} >
            <div className="innerPage__window__circles">
              <div className="innerPage__window__circle"></div>
              <div className="innerPage__window__circle"></div>
              <div className="innerPage__window__circle"></div>
              <p className="innerPage__window__bar__info" id="small-title">{this.props.title}</p>
            </div>
          </div>

          <main className="innerPage__window__main">
            <div className="innerPage__window__main__text">
              <h3 className="innerPage__window__main__text__sum" >{this.props.summary}</h3>
              <a href={this.props.mainLink} target="_blank">
                <h3 className="serif innerPage__window__main__text__link">voicesandvoids.net</h3>
              </a>
              <section className="innerPage__window__main__text__info">
                <div className="innerPage__window__main__text__info__sec" >
                  <p className="innerPage__window__main__text__info__sec__content" > <span className="innerPage__window__main__text__info__sec__label bold" >Scope</span> Front-end Development, Net Art</p>
                </div>
                <div className="innerPage__window__main__text__info__sec" >
                  <p className="innerPage__window__main__text__info__sec__content" >  <span className="innerPage__window__main__text__info__sec__label bold" >Technology</span> React, Gatsby, JSX, View source code on Github</p>
                </div>
                <div className="innerPage__window__main__text__info__sec" >
                  <p className="innerPage__window__main__text__info__sec__content" >  <span className="innerPage__window__main__text__info__sec__label bold" >Collaborators</span> Audrey Desjardins, Afroditi Psarra, Bonnie Whiting</p>
                </div>
              </section>
            </div>
            <section className="innerPage__window__display" >
              <img className="innerPage__window__display__img" src={google} alt="" />
              <img className="innerPage__window__display__img" src={google} alt="" />
              <img className="innerPage__window__display__img" src={google} alt="" />
            </section>
          </main>



        </div>
      </div>
    )
  }
}


export default InnerPage
