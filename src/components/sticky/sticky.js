import { Link } from "gatsby"
import React, { Component } from "react"
import { reactLocalStorage } from "reactjs-localstorage"


import "./sticky.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"

class Sticky extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      mobileWidth: 760,
    }
  }

  changeWidth(mobileWidth) {
    reactLocalStorage.set("enterSite", true)

    this.setState({
      mobileWidth: 0,
    })
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount(mobileWidth) {
    window.addEventListener("resize", this.updateDimensions)
    this.setState({ width: window.innerWidth })

    if (reactLocalStorage.getObject("enterSite") == true) {
      this.setState({
        mobileWidth: 0,
      })
    }
  }

  fillSvg() {
    let isMobile = this.state.width <= 600

    if (!isMobile) {
      return (
        <svg width="383" height="368" viewBox="0 0 383 368" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 298.5V298H69.5H0.5V0.5H382.5V367.5H70V298.5ZM69 299V366.793L1.2071 299H69Z" fill="#FFED47" />
          <path d="M70 298.5V298H69.5H0.5V0.5H382.5V367.5H70V298.5ZM69 299V366.793L1.2071 299H69Z" stroke="black" />
        </svg>


      )
    } else {
      return (
        <svg className="sticky__svg" viewBox="0 0 247 290" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.4623 255.061V254.561H34.9623H0.5V0.5H246.5V289.5H35.4623V255.061ZM34.4623 255.561V288.793L1.20768 255.561H34.4623Z" fill="#FFED47" stroke="black" />
        </svg>



      )
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }
  render() {
    return (
      <div className="sticky">
        <div className="sticky__bio">
          <h3 className="sticky__bio__1" >Welcome to my corner of the internet! Here's a collection of my recent adventures in design and code. </h3>
          <h3 className="sticky__bio__2" >Open to work on weird things. Just <span className="serif"> <a id="sticky__bio_a" href="mailto:amandayeh@proton.me" target="_blank" rel="noopener">reach out</a></span>!</h3>

          <div className="sticky__bio__links">

          </div>
        </div>
        {this.fillSvg()}

      </div>
    )
  }


}

export default Sticky

