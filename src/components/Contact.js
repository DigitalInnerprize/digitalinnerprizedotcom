import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Img from "gatsby-image"

const Contact = () => {
  const { contactImage } = useStaticQuery(graphql`
    query {
      contactImage: file(relativePath: { eq: "undraw_click_here_2li1_recolor.png" }) {
        childImageSharp {
          sizes(maxWidth: 700) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  `)

  return (
    <div className="contactPageContainer">
      <div className='contactContainer'>
        <div className="contactImage">
          <Img
            sizes={contactImage.childImageSharp.sizes}
          />
        </div>
          <div id="contactText">
            <h3 className='contactTitle'>Let's Talk Business!</h3>
            <p>A digital agency for brands that focus on creating great work and that gets phenomenal results along with a unique digital presence.</p>
            <OutboundLink 
              href='mailto:digitalinnerprize@gmail.com'>
              <button className='contactBtn'>
                Contact Us
              </button>
            </OutboundLink>
          </div>
      </div>
    </div>
  )
}

export default Contact
