import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.png"
import lan from "../../images/lan.png"
import { Link } from "gatsby"

const Header = () => {
  return (
    <HeaderWrapper>
      {/* <!-- Header Section Begin --> */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <ul className="header__top__widget">
                  <li>
                    <span className="icon_pin_alt">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>{" "}
                    96 Ernser Vista Suite 437, NY, US
                  </li>
                  <li>
                    <span className="icon_phone">
                      <i class="fas fa-phone"></i>
                    </span>{" "}
                    (123) 456-78-910
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="header__top__right">
                  <div className="header__top__auth">
                    <ul>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Register</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__language">
                    <img src={lan} alt="" />
                    <span>English</span>
                    <i className="fa fa-angle-down"></i>
                    <ul>
                      <li>English</li>
                      <li>Bangla</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__nav__option">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="header__logo">
                  <a href="./index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="header__nav">
                  <nav className="header__menu">
                    <ul className="menu__className">
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/rooms">Rooms</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <Link to="/room_details">Room Details</Link>
                          </li>
                          <li>
                            <Link to="/blog_details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="header__nav__widget">
                    <a href="#">
                      Book Now{" "}
                      <span className="arrow_right">
                        <i class="fas fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="canvas__open">
              <span className="fa fa-bars">
                <i class="fas fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End --> */}
    </HeaderWrapper>
  )
}
export default Header

const HeaderWrapper = styled.div`
  .header__top__widget {
    padding: 14px 0 12px;
  }

  .header__top__widget li {
    font-size: 15px;
    color: #19191a;
    display: inline-block;
    margin-right: 50px;
    list-style: none;
  }

  .header__top__widget li:last-child {
    margin-right: 0;
  }

  .header__top__widget li span {
    color: #e9ad28;
    margin-right: 5px;
  }

  .header__top__right {
    text-align: right;
  }

  .header__top__auth {
    display: inline-block;
    margin-right: 45px;
    padding: 12px 0 14px;
  }

  .header__top__auth ul li {
    display: inline-block;
    list-style: none;
    margin-right: 25px;
    position: relative;
  }

  .header__top__auth ul li:last-child {
    margin-right: 0;
  }

  .header__top__auth ul li:last-child::after {
    display: none;
  }

  .header__top__auth ul li::after {
    position: absolute;
    right: -16px;
    top: 0;
    width: 1px;
    height: 20px;
    background: #e5e5e5;
    content: "";
  }

  .header__top__auth ul li a {
    font-size: 15px;
    color: #19191a;
  }

  .header__top__language {
    display: inline-block;
    padding: 12px 0 12px;
    position: relative;
    cursor: pointer;
  }

  .header__top__language:hover ul {
    opacity: 1;
    top: 45px;
    visibility: visible;
  }

  .header__top__language img {
    display: inline-block;
    margin-right: 6px;
  }

  .header__top__language span {
    display: inline-block;
    font-size: 15px;
    color: #1d1c1c;
  }

  .header__top__language i {
    display: inline-block;
    font-size: 15px;
    color: #1d1c1c;
    font-weight: 500;
  }

  .header__top__language ul {
    position: absolute;
    left: 13px;
    top: 65px;
    width: 80px;
    background: #ffffff;
    text-align: left;
    z-index: 9;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .header__top__language ul li {
    font-size: 15px;
    color: #19191a;
    padding: 5px 10px;
    list-style: none;
    cursor: pointer;
  }

  .header__nav__option {
    background: #1a1a1a;
  }

  .header__nav {
    text-align: right;
    padding: 20px 0 20px;
  }

  .header__logo {
    padding: 20px 0;
  }

  .header__logo a {
    display: inline-block;
  }

  .header__menu {
    display: inline-block;
  }

  .header__menu ul li {
    list-style: none;
    display: inline-block;
    margin-right: 60px;
    position: relative;
  }

  .header__menu ul li.active a {
    color: #e9ad28;
  }

  .header__menu ul li:hover a {
    color: #e9ad28;
  }

  .header__menu ul li:hover .dropdown {
    top: 36px;
    opacity: 1;
    visibility: visible;
  }

  .header__menu ul li .dropdown {
    position: absolute;
    left: 0;
    top: 56px;
    width: 150px;
    background: #e9ad28;
    text-align: left;
    padding: 2px 0;
    z-index: 9;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .header__menu ul li .dropdown li {
    display: block;
    margin-right: 0;
  }

  .header__menu ul li .dropdown li a {
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
    padding: 8px 20px;
    text-transform: capitalize;
  }

  .header__menu ul li .dropdown li a:after {
    display: none;
  }

  .header__menu ul li a {
    font-size: 18px;
    color: #ffffff;
    display: block;
    padding: 5px 0;
    -webkit-transition: all, 0.5s;
    -o-transition: all, 0.5s;
    transition: all, 0.5s;
  }

  .header__menu ul li a:hover {
    color: #e9ad28;
  }

  .header__nav__widget {
    display: inline-block;
  }

  .header__nav__widget a {
    display: inline-block;
    font-size: 16px;
    color: #1d1c1c;
    letter-spacing: 2px;
    background: #ffffff;
    padding: 13px 20px 11px;
  }

  .header__nav__widget a span {
    font-size: 20px;
    color: #e9ad28;
    position: relative;
    top: 4px;
  }

  .offcanvas-menu-wrapper {
    display: none;
  }

  .canvas__open {
    display: none;
  }
`
