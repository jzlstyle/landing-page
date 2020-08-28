import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/styles.css"
import logoSrc from "../images/jzl.png"

const Button = () => <a href="https://www.jzlvip.tv/" className="block-button">Enter site</a>
const Logo = () => (
  <div
    className="header"
    style={{ zIndex: 1, position: "fixed", width: "100%" }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        class="center logo"
        src={logoSrc}
        alt="Logo" />
    </div>
  </div>
)

export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <>
      <Logo />
      <section className="page-section">
        <div className="section-background">
          <Img
            style={{
              width: "100%",
              height: "100%",
              objectPosition: "50% 50%",
              objectFit: "cover",
            }}
            fluid={data.file.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
          <div className="overlay" style={{ opacity: 0.4 }} />
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="row">
              <h1
                style={{
                  textAlign: "center",
                  whiteSpace: "pre-wrap",
                }}
              >
                Exclusive videos, behind the scenes, interviews and full
                episodes of the hottest Instagram models!
              </h1>
            </div>
            <div className="row center">
              <Button />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
