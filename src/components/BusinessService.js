import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const BusinessService = () => {
  const { businessServiceImage } = useStaticQuery(graphql`
    query {
      businessServiceImage: file(relativePath: { eq: "undraw_personal_website_recolor.png" }) {
        childImageSharp {
          sizes(maxWidth: 983) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  `)

  return (
    <div className='businessService'>
      <div className="businessServiceContainer paddingContainer">
      <div className="imageContainer businessImage">
        <Img sizes={businessServiceImage.childImageSharp.sizes} />
      </div>
      <div className="textContainer">
        <h3 className="businessTitle">
          Launch or grow your business.
        </h3>
        <p>
        Level up your business with a unique digital presence that stands out.
        </p>
      </div>
      </div>
    </div>
  )
}

export default BusinessService
