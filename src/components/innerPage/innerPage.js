import { Link } from "gatsby"
import React, { Component } from "react"


import "./innerPage.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class InnerPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementsByClassName("innerPage__window")[0].classList.add("popUp")
    document.getElementsByClassName("innerPage__back")[0].classList.add("fadeIn")
  }

  closeWindow(e) {
    document.getElementsByClassName("index__filter")[0].classList.remove("fadeIn")
    document.getElementsByClassName("index__filter")[0].classList.add("fadeOut")

    document.getElementsByClassName("innerPage__window")[0].classList.remove("popUp")
    document.getElementsByClassName("innerPage__window")[0].classList.add("popOut")

    document.getElementsByClassName("innerPage__back")[0].classList.add("popOut")
    document.getElementsByClassName("innerPage__back")[0].classList.remove("fadeIn")


    // setTimeout(function () {
    //   document.getElementsByClassName("innerPage")[0].remove()
    // }, 1500);



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
              <img className="innerPage__window__display__img" src={this.props.img1} alt="" />
              <img className="innerPage__window__display__img" src={this.props.img2} alt="" />
              <img className="innerPage__window__display__img" src={this.props.img3} alt="" />
              <img className="innerPage__window__display__img" src={this.props.img4} alt="" />

            </section>
          </main>

        </div>
        <div className="innerPage__back" onClick={(e) => this.closeWindow(e)}>
          <div className="innerPage__back__glyph">←</div>
        </div>
      </div>
    )
  }
}


export default InnerPage
