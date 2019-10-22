import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { useStaticQuery, graphql } from "gatsby"
import Project from '../components/Project';


const OurWorkPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            projectData {
              title,
              desc,
              link,
              urlText
              imageFile
            }
          }
        }
      }
    `
  )

  return (
  <Layout>
    <SEO title="Our Work" />
    <div id="ourWorkContainer">
    <ul className='projectCards'>
     {site.siteMetadata.projectData.map(({ title, desc, link, urlText, imageFile }, index) => {
       return <Project key={index} title={title} desc={desc} link={link} urlText={urlText} imageFile={imageFile} />})}
    </ul>
    </div>
  </Layout>
  )
};

export default OurWorkPage
