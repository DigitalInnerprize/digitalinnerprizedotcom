import React from "react"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Services from "../components/Services"
import BusinessService from "../components/BusinessService"
import ServiceCards from "../components/ServiceCards"
import Contact from "../components/Contact"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout page='home'>
    <SEO title="Home" />
    <Banner />
    <Services />
    <BusinessService />
    <ServiceCards />
    <Contact />
  </Layout>
)

export default IndexPage
