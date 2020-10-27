import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import AboutSection from "../components/Home/AboutSection"
import Services from "../components/Home/Services"
import Room from "../components/Home/HomeRoom"
import Testimonial from "../components/Home/Testimonial"
import ChooseUs from "../components/Home/ChooseUs"
import Gallery from "../components/Home/Gallery"
import Blog from "../components/Home/Blog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <AboutSection />
    <Services />
    <Room />
    <Testimonial />
    <ChooseUs />
    <Gallery />
    <Blog />
  </Layout>
)

export default IndexPage
