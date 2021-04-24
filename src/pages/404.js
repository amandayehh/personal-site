import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Name from "../components/name/name"
import Transparency from "../components/transparency/transparency"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"
import "../css/404.css"


const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Link to="/" aria-label="back to home">
      <Name />
    </Link>
    <div className="landscape fadeIn" >
      <div className="landscape__sky">
        <Transparency />

        <div className="landscape__404">
          <h1 className="landscape__404__text">404</h1>
        </div>
        <div className="landscape__info">
          <p className="landscape__info__text">Nothing found here</p>
        </div>
      </div>

      <div className="landscape__ground">
      </div>
    </div>

  </>
)

export default NotFoundPage
