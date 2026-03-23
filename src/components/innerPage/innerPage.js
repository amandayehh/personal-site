import React, { Component, createRef } from "react"

import "./innerPage.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class InnerPage extends Component {
  constructor(props) {
    super(props)
    this.windowRef = createRef()
    this.backRef = createRef()
    this.backgroundRef = createRef()
    this.displayRef = createRef()
  }

  componentDidMount() {
    this.backgroundRef.current.style.height = `${document.body.scrollHeight}px`
    this.windowRef.current.classList.add("popUp")
    this.backRef.current.classList.add("fadeIn")
  }

  componentDidUpdate(prevProps) {
    const { isOpen, title } = this.props

    if (prevProps.title !== title || (!prevProps.isOpen && isOpen)) {
      this.windowRef.current.scrollTo(0, 0)
      this.displayRef.current.scrollTo(0, 0)
    }

    if (!prevProps.isOpen && isOpen) {
      this.windowRef.current.classList.add("popUp")
      this.windowRef.current.classList.remove("popOut")
      this.backRef.current.classList.add("fadeIn")
      this.backRef.current.classList.remove("popOut")
      this.backgroundRef.current.classList.remove("remove")
    } else if (prevProps.isOpen && !isOpen) {
      this.windowRef.current.classList.add("popOut")
      this.windowRef.current.classList.remove("popUp")
      this.backRef.current.classList.add("popOut")
      this.backRef.current.classList.remove("fadeIn")
      this.backgroundRef.current.classList.add("remove")
    } else if (isOpen) {
      this.backgroundRef.current.classList.remove("remove")
    }
  }

  renderImages() {
    return (this.props.images || []).map(({ src, alt }, i) => (
      <img key={i} className="innerPage__window__display__img" src={src} alt={alt} />
    ))
  }

  render() {
    const { onClose, title, summary, mainLink, linkText, scope, tech1, collaborator1 } = this.props

    return (
      <div className="innerPage">
        <div className="innerPage__background" ref={this.backgroundRef} onClick={onClose} />
        <div className="innerPage__window" ref={this.windowRef}>
          <div className="innerPage__window__bar">
            <div className="innerPage__window__circles">
              <div className="innerPage__window__circle innerPage__window__circle__close" onClick={onClose} />
              <div className="innerPage__window__circle" />
              <div className="innerPage__window__circle" />
              <p className="innerPage__window__bar__info" id="small-title">{title}</p>
            </div>
          </div>

          <main className="innerPage__window__main">
            <div className="innerPage__window__main__text">
              <div className="innerPage__window__main__text__container">
                <h3 className="innerPage__window__main__text__sum">{summary}</h3>
                <h3 className="serif innerPage__window__main__text__link">
                  <a className="innerPage__window__main__text__link__a" href={mainLink} target="_blank" rel="noopener">{linkText}</a>
                </h3>
                <section className="innerPage__window__main__text__info">
                  <div className="innerPage__window__main__text__info__sec">
                    <p className="innerPage__window__main__text__info__sec__content"><span className="innerPage__window__main__text__info__sec__label bold">Scope: </span>{scope}</p>
                  </div>
                  <div className="innerPage__window__main__text__info__sec">
                    <p className="innerPage__window__main__text__info__sec__content"><span className="innerPage__window__main__text__info__sec__label bold">Technology: </span>{tech1}</p>
                  </div>
                  <div className="innerPage__window__main__text__info__sec">
                    <p className="innerPage__window__main__text__info__sec__content"><span className="innerPage__window__main__text__info__sec__label bold">Collaborators: </span>{collaborator1}</p>
                  </div>
                </section>
              </div>
            </div>
            <section className="innerPage__window__display" ref={this.displayRef}>
              {this.renderImages()}
            </section>
          </main>
        </div>

        <div className="innerPage__back" ref={this.backRef} onClick={onClose}>
          <div className="innerPage__back__glyph">←</div>
        </div>
      </div>
    )
  }
}

export default InnerPage
