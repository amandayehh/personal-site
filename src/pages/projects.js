import React, { Component } from "react"

import SEO from "../components/seo"

import "../css/global.css"
import "../css/reset.css"
import "../css/type.css"
import "../css/projects.css"

const sections = [
  {
    title: "Web",
    items: [
      { name: "Elicit", description: "Website for AI research tool", tags: ["Framer", "Framer", "Framer"], url: "https://elicit.com" },
      { name: "Quanta", description: "Website for accounting service", tags: ["Framer", "Framer", "Framer"], url: "https://usequanta.com" },
      { name: "Serif", description: "Website for writing app", tags: ["Framer", "Framer", "Framer"] },
      { name: "Voices and Voices", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
      { name: "Synesthetic perceptions", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
      { name: "Synesthetic perceptions", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
      { name: "Synesthetic perceptions", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
      { name: "Synesthetic perceptions", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
      { name: "Synesthetic perceptions", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
      { name: "Synesthetic perceptions", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
      { name: "Synesthetic perceptions", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
      { name: "Synesthetic perceptions", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
      { name: "Homepage", description: "Website for interactive vignettes", tags: ["Framer", "Framer", "Framer"] },
    ],
  },
  {
    title: "Games",
    items: [
      { name: "Boygame", description: "Website for AI research tool", tags: ["Framer", "Framer", "Framer"] },
      { name: "Boygame boardgame", description: "Website for accounting service", tags: ["Framer", "Framer", "Framer"] },
      { name: "Boy zine", description: "Website for accounting service", tags: ["Framer", "Framer", "Framer"] },
    ],
  },
  {
    title: "Plugins",
    items: [
      { name: "Name", description: "Website for AI research tool", tags: ["Framer", "Framer", "Framer"] },
      { name: "Boygame boardgame", description: "Website for accounting service", tags: ["Framer", "Framer", "Framer"] },
    ],
  },
  {
    title: "Typefaces",
    items: [
      { name: "Name", description: "Website for AI research tool", tags: ["Framer", "Framer", "Framer"] },
      { name: "Boygame boardgame", description: "Website for accounting service", tags: ["Framer", "Framer", "Framer"] },
    ],
  },
  {
    title: "Products",
    items: [
      { name: "Figma editor", description: "Website for AI research tool", tags: ["Framer", "Framer", "Framer"] },
      { name: "Figma sites", description: "Website for accounting service", tags: ["Framer", "Framer", "Framer"] },
      { name: "Google Docs", description: "Website for accounting service", tags: ["Framer", "Framer", "Framer"] },
    ],
  },
]

const filterGroups = [
  {
    label: "Type",
    tags: ["Framer", "Marketing", "CMS", "Branding", "Product design", "Typography", "Framer", "Marketing"],
  },
  {
    label: "Tools",
    tags: ["Typography", "Framer", "Marketing", "CMS", "Branding"],
  },
  {
    label: "Industry",
    tags: ["Marketing", "CMS", "Branding", "Product design", "Typography", "Marketing", "CMS", "Branding", "Product design"],
  },
]

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      activeFilter: null,
    }
  }

  handleFilterClick(tag) {
    this.setState(prev => ({
      activeFilter: prev.activeFilter === tag ? null : tag,
    }))
  }

  render() {
    return (
      <div className="projects">
        <SEO title="Index — Amanda Yeh" />
        <div className="projects__header">
          <h1 className="projects__title">Index</h1>
          <p className="projects__subtitle">An incomplete Index of Amanda Yeh’s work</p>
        </div>

        <div className="projects__filters">
          {filterGroups.map((group, gi) => (
            <React.Fragment key={gi}>
              <span className="projects__filters-label">{group.label}</span>
              {group.tags.map((tag, ti) => (
                <button
                  key={ti}
                  className={`projects__filter-tag${this.state.activeFilter === tag ? " projects__filter-tag--active" : ""}`}
                  onClick={() => this.handleFilterClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>

        {sections.map((section, si) => (
          <div className="projects__section" key={si}>
            <h2 className="projects__section-title">{section.title}</h2>
            {section.items.map((item, ii) => item.url ? (
              <a className="projects__item" key={ii} href={item.url} target="_blank" rel="noopener noreferrer">
                <span className="projects__item-name">
                  {item.name}
                  {item.note && <span className="projects__item-note"> {item.note}</span>}
                </span>
                <span className="projects__item-description">{item.description}</span>
                <div className="projects__item-tags">
                  {item.tags.map((tag, ti) => (
                    <span className="projects__item-tag" key={ti}>{tag}</span>
                  ))}
                </div>
              </a>
            ) : (
              <div className="projects__item" key={ii}>
                <span className="projects__item-name">
                  {item.name}
                  {item.note && <span className="projects__item-note"> {item.note}</span>}
                </span>
                <span className="projects__item-description">{item.description}</span>
                <div className="projects__item-tags">
                  {item.tags.map((tag, ti) => (
                    <span className="projects__item-tag" key={ti}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default Projects
