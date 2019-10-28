import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"


const AboutUsPage = () => (
  <Layout page='aboutUs'>
    <SEO title="About Us" />
    <div id="aboutUsContainer">
        <h3>At Digital InnerPrize we focus on bringing a digital presence to any platform for any business. From working on enterprise level consumer facing applications to custom websites for individuals looking to grow their brand or small business.</h3>
        <h3> We offer a wide variety of services from web design to developing mobile applications that fits our clients needs. Our aim is to have our clients stand out from the rest of the crowd and make their presence known.</h3>
    </div>
  </Layout>
);

export default AboutUsPage
