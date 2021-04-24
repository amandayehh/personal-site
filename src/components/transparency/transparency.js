import React, { Component } from "react"
import { reactLocalStorage } from "reactjs-localstorage"


import "./transparency.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"


import mobile from "../../images/transparency/mobile.png"
import desktop from "../../images/transparency/desktop.png"

class Transparency extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      mobileWidth: 600,
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
        <img src={desktop} className="transparency__desktop" alt=""></img>

      )
    } else {
      return (
        <img src={mobile} className="transparency__mobile" alt=""></img>

      )
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }
  render() {
    return (
      <div className="transparency">

        {this.fillSvg()}
      </div>
    )
  }


}

export default Transparency

