import React from "react"
import styled from "styled-components"
import blog1 from "../../images/latest-blog/lb-1.jpg"
import blog2 from "../../images/latest-blog/lb-2.jpg"
import blog3 from "../../images/latest-blog/lb-3.jpg"
import blog4 from "../../images/latest-blog/lb-4.jpg"

const Blog = () => {
  return (
    <BlogWrapper>
      {/* <!-- Latest Blog Section Begin --> */}
      <section className="latest-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h5>NEWS & EVENT</h5>
                <h2>From Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 p-0 order-lg-1 col-md-6 order-md-1">
              <div className="latest__blog__pic ">
                <img src={blog1} alt="" />
              </div>
            </div>
            <div className="col-lg-3 p-0 order-lg-2 col-md-6 order-md-2">
              <div className="latest__blog__text">
                <div className="label">Hotel</div>
                <h5>Ut enim ad minim veniam, quis nostrud</h5>
                <p>
                  <i class="far fa-clock"></i> 19th March, 2019
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-3 p-0 order-lg-3 col-md-6 order-md-4">
              <div className="latest__blog__pic ">
                <img src={blog2} alt="" />
              </div>
            </div>
            <div className="col-lg-3 p-0 order-lg-4 col-md-6 order-md-3">
              <div className="latest__blog__text">
                <div className="label">Restaurant</div>
                <h5>Ut enim ad minim veniam, quis nostrud</h5>
                <p>
                  <i class="far fa-clock"></i> 22th March, 2019
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-3 p-0 order-lg-6 col-md-6 order-md-5">
              <div className="latest__blog__pic latest__blog__pic__last__row ">
                <img src={blog3} alt="" />
              </div>
            </div>
            <div className="col-lg-3 p-0 order-lg-5 col-md-6 order-md-6">
              <div className="latest__blog__text">
                <div className="label">Travel</div>
                <h5>Ut enim ad minim veniam, quis nostrud</h5>
                <p>
                  <i class="far fa-clock"></i> 25th March, 2019
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-3 p-0 order-lg-8 col-md-6 order-md-8">
              <div className="latest__blog__pic latest__blog__pic__last__row ">
                <img src={blog4} alt="" />
              </div>
            </div>
            <div className="col-lg-3 p-0 order-lg-7 col-md-6 order-md-7">
              <div className="latest__blog__text">
                <div className="label">Booking</div>
                <h5>Ut enim ad minim veniam, quis nostrud</h5>
                <p>
                  <i class="far fa-clock"></i> 29th March, 2019
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Latest Blog Section End --> */}
    </BlogWrapper>
  )
}
export default Blog

const BlogWrapper = styled.div`
  .latest__blog__pic {
    height: 270px;
    position: relative;
    overflow: hidden;
  }

  .latest__blog__pic.latest__blog__pic__last__row:after {
    right: auto;
    left: -45px;
  }

  .latest__blog__pic:after {
    position: absolute;
    right: -45px;
    top: 50%;
    height: 51px;
    width: 51px;
    background: #f9f8f6;
    content: "";
    -webkit-transform: translateY(-25.5px) rotate(45deg);
    -ms-transform: translateY(-25.5px) rotate(45deg);
    transform: translateY(-25.5px) rotate(45deg);
  }

  .latest__blog__text {
    padding: 30px 30px 25px 30px;
    background: #f9f8f6;
  }

  .latest__blog__text .label {
    font-size: 14px;
    color: #ffffff;
    background: #e9ad28;
    border-radius: 2px;
    display: inline-block;
    padding: 4px 16px 2px;
  }

  .latest__blog__text h5 {
    font-size: 20px;
    color: #111111;
    line-height: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .latest__blog__text p {
    font-size: 14px;
    margin-bottom: 35px;
  }

  .latest__blog__text p i {
    margin-right: 6px;
  }

  .latest__blog__text a {
    font-size: 16px;
    color: #19191a;
    font-weight: 500;
    font-family: "Barlow Condensed", sans-serif;
    display: inline-block;
    position: relative;
    padding: 2px 0;
  }

  .latest__blog__text a:after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: #e9ad28;
    content: "";
  }
`
