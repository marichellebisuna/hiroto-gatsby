import React from "react"
import styled from "styled-components"
import blog1 from "../../images/blog/blog-6.jpg"
import blog2 from "../../images/blog/blog-1.jpg"
import blog3 from "../../images/blog/blog-2.jpg"

const FeatureBlog = () => {
  return (
    <FeatureWrapper>
      {/* <!-- Fetured Blog Section Begin --> */}
      <section className="feature-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title bd-title">
                <h2>Feature Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={blog1} alt="" />
                  <div className="tag">Hotel</div>
                </div>
                <div className="blog__item__text">
                  <p>
                    <i className="fa fa-clock-o"></i> 01th March, 2019
                  </p>
                  <h5>
                    <a href="#">Smart HVAC Solutions Keep It</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={blog2} alt="" />
                  <div className="tag">Event</div>
                </div>
                <div className="blog__item__text">
                  <p>
                    <i className="fa fa-clock-o"></i> 02th March, 2019
                  </p>
                  <h5>
                    <a href="#">Guests think these services would be</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={blog3} alt="" />
                  <div className="tag">Travel</div>
                </div>
                <div className="blog__item__text">
                  <p>
                    <i className="fa fa-clock-o"></i> 03th March, 2019
                  </p>
                  <h5>
                    <a href="#">Europe's 2018 hotel strengths belie</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Fetured Blog Section End --> */}
    </FeatureWrapper>
  )
}
export default FeatureBlog
const FeatureWrapper = styled.div`
  .feature-blog {
    padding-bottom: 60px;
  }

  .section-title.bd-title {
    margin-bottom: 60px;
  }

  .section-title.bd-title h2 {
    margin-top: 0;
  }
`
