import React from "react"
import { Helmet } from "react-helmet-async"

const siteMetadata = {
  description: "Amanda Yeh's website",
  author: "Amanda Yeh",
}

function SEO({ description, lang = "en", title }) {
  const metaDescription = description || siteMetadata.description

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

export default SEO
