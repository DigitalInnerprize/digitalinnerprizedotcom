import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const { bannerImage } = useStaticQuery(graphql`
  query {
    bannerImage: file(relativePath: { eq: "undraw_web_developer_p3e5_recolor.png" }) {
      childImageSharp {
        sizes(maxWidth: 949) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`)

  const onClick = () => {
    window.location.href = 'mailto:digitalinnerprize@gmail.com';
  }

  return (
    <div id="bannerContainer">
      <div className="bannerContent">
        <h1 className="bannerTitle">
          We create content that stands out.
        </h1>
        <p className="bannerDescription">
        We think smart businesses and entrepreneurs must fully embrace modern ways of reaching their customers to succeed in today’s crowded marketplace your customers are online… and you need to meet them there.
        </p>
        <button className="bannerBtn" onClick={onClick}>Contact Us</button>
      </div>
      <div className="imageContainer bannerImage">
        <Img
          sizes={bannerImage.childImageSharp.sizes}
        />
      </div>
    </div>
  )
}

export default Banner
