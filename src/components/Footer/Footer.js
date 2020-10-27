import React from "react"
import styled from "styled-components"
import logo1 from "../../images/logo/logo-1.png"
import logo2 from "../../images/logo/logo-2.png"
import logo3 from "../../images/logo/logo-3.png"
import logo4 from "../../images/logo/logo-4.png"
import logo5 from "../../images/logo/logo-5.png"

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <!-- Footer Section Begin --> */}
      <footer className="footer set-bg" data-setbg="img/footer-bg.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo__carousel d-flex justify-content-between">
                <div className="logo__carousel__item ">
                  <a href="#">
                    <img src={logo1} alt="" />
                  </a>
                </div>
                <div className="logo__carousel__item">
                  <a href="#">
                    <img src={logo2} alt="" />
                  </a>
                </div>
                <div className="logo__carousel__item">
                  <a href="#">
                    <img src={logo3} alt="" />
                  </a>
                </div>
                <div className="logo__carousel__item">
                  <a href="#">
                    <img src={logo4} alt="" />
                  </a>
                </div>
                <div className="logo__carousel__item">
                  <a href="#">
                    <img src={logo5} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer__content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__logo">
                    <a href="#">
                      <img src="img/logo.png" alt="" />
                    </a>
                  </div>
                  <h4>(123) 456-78-91096</h4>
                  <ul>
                    <li>Ernser Vista Suite 437, NY</li>
                    <li>Info.colorlib@gmail.com</li>
                  </ul>
                  <div className="footer__social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-5 offset-md-1 col-sm-6">
                <div className="footer__widget">
                  <h4>Quick Link</h4>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Booking</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Review</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Our Room</a>
                    </li>
                    <li>
                      <a href="#">Restaurants</a>
                    </li>
                    <li>
                      <a href="#">Payments</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-8 col-sm-12">
                <div className="footer__newslatter">
                  <h4>Subscribe our newlatester</h4>
                  <form action="#">
                    <input type="text" placeholder="Your E-mail Address" />
                    <button type="submit">Subscribe</button>
                  </form>
                  <div className="footer__newslatter__find">
                    <h5>Find Us:</h5>
                    <div className="footer__newslatter__find__links">
                      <a href="#">
                        <i class="fab fa-tripadvisor"></i>
                      </a>
                      <a href="#">
                        <i className="far fa-map"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-forumbee"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                <div className="footer__copyright__text">
                  <p>
                    Copyright &copy;{" "}
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved.{" "}
                    <span className="hidden">
                      This template is made with{" "}
                      <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                    </span>
                  </p>
                </div>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </div>
              <div className="col-lg-5 col-md-5">
                <ul className="footer__copyright__links">
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}
    </FooterWrapper>
  )
}
export default Footer
const FooterWrapper = styled.div`
  .footer {
    padding-top: 60px;
    background: url(img/footer-bg.jpg);
  }

  .logo__carousel {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 50px;
    margin-bottom: 80px;
  }

  .logo__carousel__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 51px;
  }

  .footer__about {
    margin-bottom: 40px;
  }

  .footer__about .footer__logo {
    margin-bottom: 28px;
  }

  .footer__about .footer__logo a {
    display: inline-block;
  }

  .footer__about h4 {
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .footer__about ul {
    margin-bottom: 22px;
  }

  .footer__about ul li {
    list-style: none;
    font-size: 16px;
    color: #777c81;
    line-height: 28px;
  }

  .footer__about .footer__social a {
    font-size: 16px;
    color: #777c81;
    display: inline-block;
    margin-right: 16px;
  }

  .footer__about .footer__social a:last-child {
    margin-right: 0;
  }

  .footer__widget {
    overflow: hidden;
    margin-bottom: 40px;
  }

  .footer__widget h4 {
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 25px;
  }

  .footer__widget ul {
    width: 46%;
    float: left;
  }

  .footer__widget ul li {
    list-style: none;
  }

  .footer__widget ul li a {
    font-size: 16px;
    color: #777c81;
    line-height: 30px;
  }

  .footer__newslatter {
    margin-bottom: 40px;
  }

  .footer__newslatter h4 {
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 35px;
  }

  .footer__newslatter form {
    position: relative;
    margin-bottom: 28px;
  }

  .footer__newslatter form input {
    width: 100%;
    height: 48px;
    font-size: 16px;
    color: #777c81;
    border: none;
    padding-left: 20px;
  }

  .footer__newslatter form button {
    font-size: 18px;
    color: #ffffff;
    background: #e9ad28;
    border: none;
    font-weight: 500;
    letter-spacing: 2px;
    padding: 0 15px 0 25px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }

  .footer__newslatter__find h5 {
    font-size: 20px;
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .footer__newslatter__find .footer__newslatter__find__links a {
    display: inline-block;
    font-size: 16px;
    color: #777c81;
    margin-right: 16px;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .footer__newslatter__find .footer__newslatter__find__links a:hover {
    color: #e9ad28;
  }

  .footer__newslatter__find .footer__newslatter__find__links a:last-child {
    margin-right: 0;
  }

  .footer__copyright {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 15px 0 12px;
    margin-top: 35px;
  }

  .footer__copyright__text p {
    margin-bottom: 0;
  }

  .footer__copyright__text a {
    color: #777c81;
    text-decoration: underline;
  }

  .footer__copyright__text a:hover {
    color: #e9ad28;
  }

  .footer__copyright__text i {
    color: #c11;
  }

  .footer__copyright__links {
    text-align: right;
  }

  .footer__copyright__links li {
    list-style: none;
    display: inline-block;
    margin-right: 20px;
    position: relative;
  }

  .footer__copyright__links li:after {
    position: absolute;
    right: -13px;
    top: 2px;
    width: 1px;
    height: 20px;
    background: #535357;
    content: "";
  }

  .footer__copyright__links li:last-child {
    margin-right: 0;
  }

  .footer__copyright__links li:last-child:after {
    display: none;
  }

  .footer__copyright__links li a {
    font-size: 16px;
    color: #777c81;
  }
  .hidden {
    display: none;
  }
`
