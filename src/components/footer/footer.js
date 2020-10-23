import { Link } from "gatsby"
import React, { Component } from "react"

import "./footer.css"
import "../../css/global.css"
import "../../css/reset.css"
import "../../css/type.css"


class Footer extends Component {
  constructor(props) {
    super(props);
    this.height = props.sizeH
  }

  render() {
    return (
    <footer className="footer">

    </footer>
    )
  }
}


export default Footer
