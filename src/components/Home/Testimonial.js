import React from "react"
import styled from "styled-components"

// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel()
// })
const Testimonial = () => {
  return (
    <TestimonialWrapper>
      {/* <!-- Testimonial Section Begin --> */}
      <section className="testimonial spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="testimonial__pic">
                <img src="img/testimonial-left.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial__text">
                <div className="section-title">
                  <h5>Testimonials</h5>
                  <h2>What do customers say about us?</h2>
                </div>
                <div className="testimonial__slider__content">
                  <div className="testimonial__slider owl-carousel">
                    <div className="testimonial__item">
                      <h5>Detailed Review:</h5>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-o"></i>
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                      </p>
                      <div className="testimonial__author">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="testimonial__author__title">
                              <h5>Ridchard Houston</h5>
                              <span>Director Colorlib</span>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="testimonial__author__social">
                              <a href="#">
                                <i className="fab fa-facebook"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial__item">
                      <h5>Detailed Review:</h5>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-o"></i>
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                      </p>
                      <div className="testimonial__author">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="testimonial__author__title">
                              <h5>John Smith</h5>
                              <span>Director Colorlib</span>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="testimonial__author__social">
                              <a href="#">
                                <i className="fab fa-facebook"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial__item">
                      <h5>Detailed Review:</h5>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-o"></i>
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                      </p>
                      <div className="testimonial__author">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="testimonial__author__title">
                              <h5>Jack Kelly</h5>
                              <span>Director Colorlib</span>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="testimonial__author__social">
                              <a href="#">
                                <i className="fab fa-facebook"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial__item">
                      <h5>Detailed Review:</h5>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-o"></i>
                      </div>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                      </p>
                      <div className="testimonial__author">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="testimonial__author__title">
                              <h5>Richard Hobson</h5>
                              <span>Director Colorlib</span>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="testimonial__author__social">
                              <a href="#">
                                <i className="fab fa-facebook"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-num" id="snh-1"></div>
                  <div className="slider__progress">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial Section End --> */}
    </TestimonialWrapper>
  )
}
export default Testimonial

const TestimonialWrapper = styled.div`
  .testimonial {
    padding-top: 0;
  }

  .testimonial__pic img {
    min-width: 100%;
  }

  .testimonial__text {
    padding-left: 70px;
    padding-top: 35px;
  }

  .testimonial__text .section-title {
    text-align: left;
    margin-bottom: 45px;
  }

  .testimonial__slider__content {
    position: relative;
  }

  .testimonial__slider.owl-carousel .owl-stage-outer {
    margin-bottom: 50px;
  }

  .testimonial__slider.owl-carousel .owl-nav {
    position: absolute;
    right: 0;
    bottom: -70px;
  }

  .testimonial__slider.owl-carousel .owl-nav button {
    font-size: 20px;
    color: #19191a;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .testimonial__slider.owl-carousel .owl-nav button:last-child {
    margin-right: 0;
  }

  .testimonial__slider.owl-carousel .owl-nav button:hover {
    background: #19191a;
    color: #ffffff;
  }

  .testimonial__slider.owl-carousel .owl-dots {
    display: none;
  }

  .testimonial__item {
    position: relative;
  }

  .testimonial__item h5 {
    color: #1a1a1a;
    margin-bottom: 20px;
  }

  .testimonial__item .rating {
    position: absolute;
    right: 0;
    top: 0;
  }

  .testimonial__item .rating i {
    font-size: 14px;
    color: #e9ad28;
    margin-left: -4px;
  }

  .testimonial__item p {
    margin-bottom: 28px;
  }

  .testimonial__author {
    overflow: hidden;
  }

  .testimonial__author__title h5 {
    color: #e9ad28;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .testimonial__author__title span {
    font-size: 16px;
    color: #777c81;
  }

  .testimonial__author__social {
    text-align: right;
    padding-top: 10px;
  }

  .testimonial__author__social a {
    font-size: 14px;
    color: #777c81;
    margin-right: 28px;
  }

  .testimonial__author__social a:last-child {
    margin-right: 0;
  }

  .slide-num {
    position: absolute;
    left: 0;
    bottom: -70px;
  }

  .slide-num span {
    font-size: 24px;
    color: #1a1a1a;
    font-weight: 500;
  }

  .slide-num span:last-child {
    position: absolute;
    left: 135px;
  }

  .slider__progress {
    position: absolute;
    width: 85px;
    height: 4px;
    left: 41px;
  }

  .slider__progress span {
    display: block;
    height: 4px;
    background: #e9ad28;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }
`
