import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Footer from "./Footer/Footer"
import "./layout.css"
import "../css/bootstrap.min.css"

import "@fortawesome/fontawesome-free/css/all.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
