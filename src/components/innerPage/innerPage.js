import { Link } from "gatsby"
import React, { Component } from "react"
import ReactDOM from "react-dom"

import "./innerPage.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class InnerPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    document.getElementsByClassName("innerPage__background")[0].style.height = document.body.scrollHeight + "px"


    document.getElementsByClassName("innerPage__window")[0].classList.add("popUp")
    document.getElementsByClassName("innerPage__back")[0].classList.add("fadeIn")



  }

  componentDidUpdate() {
    console.log(this.props.img5)
    document.getElementsByClassName("innerPage__background")[0].classList.remove("remove")

  }


  renderCompnent() {

    let imgDivs = [<img className="innerPage__window__display__img" src={this.props.img1} alt={this.props.alt1} />, <img className="innerPage__window__display__img" src={this.props.img2} alt={this.props.alt2} />]

    if (this.props.img3 != undefined) {
      imgDivs[2] = <img className="innerPage__window__display__img" src={this.props.img3} alt={this.props.alt3} />
    }
    if (this.props.img4 != undefined) {
      imgDivs[3] = <img className="innerPage__window__display__img" src={this.props.img4} alt={this.props.alt4} />
    }
    if (this.props.img5 != undefined) {
      imgDivs[4] = <img className="innerPage__window__display__img" src={this.props.img5} alt={this.props.alt5} />
    }
    if (this.props.img6 != undefined) {
      imgDivs[5] = <img className="innerPage__window__display__img" src={this.props.img6} alt={this.props.alt6} />
    }
    if (this.props.img7 != undefined) {
      imgDivs[6] = <img className="innerPage__window__display__img" src={this.props.img7} alt={this.props.alt7} />
    }
    if (this.props.img8 != undefined) {
      imgDivs[7] = <img className="innerPage__window__display__img" src={this.props.img8} alt={this.props.alt8} />
    }

    // <img className="innerPage__window__display__img" src={this.props.img3} alt={this.props.alt3} />
    // <img className="innerPage__window__display__img" src={this.props.img4} alt={this.props.alt4} />
    // <img className="innerPage__window__display__img" src={this.props.img6} alt={this.props.alt6} />
    // <img className="innerPage__window__display__img" src={this.props.img7} alt={this.props.alt7} />
    // <img className="innerPage__window__display__img" src={this.props.img8} alt={this.props.alt8} />
    return (
      <div>{imgDivs}

      </div>


    )


  }
  closeWindow(e) {
    document.getElementsByClassName("index__filter")[0].classList.remove("fadeIn")
    document.getElementsByClassName("index__filter")[0].classList.add("fadeOut")

    document.getElementsByClassName("innerPage__background")[0].classList.add("remove")

    document.getElementsByClassName("innerPage__window")[0].classList.remove("popUp")
    document.getElementsByClassName("innerPage__window")[0].classList.add("popOut")

    document.getElementsByClassName("innerPage__back")[0].classList.add("popOut")
    document.getElementsByClassName("innerPage__back")[0].classList.remove("fadeIn")

    document.getElementsByTagName("body")[0].classList.remove("noScroll")

  }



  render() {

    return (
      < div className="innerPage" >
        <div className="innerPage__background" onClick={(e) => this.closeWindow(e)}></div>
        <div className="innerPage__window">
          <div className="innerPage__window__bar" style={{ width: this.width }} >
            <div className="innerPage__window__circles">
              <div className="innerPage__window__circle innerPage__window__circle__close" onClick={(e) => this.closeWindow(e)} ></div>
              <div className="innerPage__window__circle"></div>
              <div className="innerPage__window__circle"></div>
              <p className="innerPage__window__bar__info" id="small-title">{this.props.title}</p>
            </div>
          </div>

          <main className="innerPage__window__main">
            <div className="innerPage__window__main__text">
              <div className="innerPage__window__main__text__container">
                <h3 className="innerPage__window__main__text__sum" >{this.props.summary}</h3>

                <h3 className="serif innerPage__window__main__text__link"><a className="innerPage__window__main__text__link__a" href={this.props.mainLink} target="_blank" rel="noopener" >{this.props.linkText}</a></h3>
                <section className="innerPage__window__main__text__info">
                  <div className="innerPage__window__main__text__info__sec" >
                    <p className="innerPage__window__main__text__info__sec__content" > <span className="innerPage__window__main__text__info__sec__label bold" >Scope: </span>{this.props.scope}</p>
                  </div>
                  <div className="innerPage__window__main__text__info__sec" >
                    <p className="innerPage__window__main__text__info__sec__content" >  <span className="innerPage__window__main__text__info__sec__label bold" >Technology: </span> {this.props.tech1}</p>
                  </div>
                  <div className="innerPage__window__main__text__info__sec" >
                    <p className="innerPage__window__main__text__info__sec__content" >  <span className="innerPage__window__main__text__info__sec__label bold" >Collaborators: </span> {this.props.collaborator1}</p>
                  </div>

                </section>
              </div>
            </div>
            <section className="innerPage__window__display" >
              {this.renderCompnent()}



            </section>
          </main>

        </div>
        <div className="innerPage__back" onClick={(e) => this.closeWindow(e)}>
          <div className="innerPage__back__glyph">←</div>
        </div>

      </div >

    )


  }

}


export default InnerPage
