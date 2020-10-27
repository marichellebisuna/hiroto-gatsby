import React from "react"
import Layout from "../components/layout"
import Feature from "../components/Blog/FeatureBlog"
import BlogHero from "../components/Blog/BlogHero"
import BlogDetails from "../components/Blog/BlogDetails"

const blog_details = () => {
  return (
    <Layout>
      <BlogHero />
      <BlogDetails />
      <Feature />
    </Layout>
  )
}
export default blog_details
