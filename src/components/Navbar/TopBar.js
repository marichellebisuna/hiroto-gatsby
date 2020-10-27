import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.png"
import lan from "../../images/lan.png"
const TopBar = () => {
  return (
    <TopWrapper>
      {/* <!-- Offcanvas Menu Begin --> */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__logo">
          <a href="./index.html">
            <img src={logo} alt="" />
          </a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__btn__widget">
          <a href="#">
            Book Now <span className="arrow_right"></span>
          </a>
        </div>
        <div className="offcanvas__widget">
          <ul>
            <li>
              <span className="icon_pin_alt"></span> 96 Ernser Vista Suite 437,
              NY, US
            </li>
            <li>
              <span className="icon_phone"></span> (123) 456-78-910
            </li>
          </ul>
        </div>
        <div className="offcanvas__language">
          <img src={lan} alt="" />
          <span>English</span>
          <i className="fa fa-angle-down"></i>
          <ul>
            <li>English</li>
            <li>Bangla</li>
          </ul>
        </div>
        <div className="offcanvas__auth">
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- Offcanvas Menu End --> */}
    </TopWrapper>
  )
}
export default TopBar

const TopWrapper = styled.div`
  .offcanvas-menu-wrapper {
    /* display: none; */
  }
`
