import React from "react"
import styled from "styled-components"
import BlogSideBar from "../components/Blog/BlogSideBar"
import Layout from "../components/layout"

const blog = () => {
  return (
    <Layout>
      <BlogWrapper>
        {/* <!-- Blog Section Begin --> */}
        <section className="blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="blog__item__large">
                  <div className="blog__item__large__pic">
                    <img src="img/blog/blog-large.jpg" alt="" />
                    <div className="tag">Hotel</div>
                  </div>
                  <div className="blog__item__large__text">
                    <p>
                      <i className="far fa-clock"></i>01th March, 2019
                    </p>
                    <h4>
                      <a href="#">
                        Classifieds are usually the first place you think of
                        when you are
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-1.jpg" alt="" />
                        <div className="tag">Event</div>
                      </div>
                      <div className="blog__item__text">
                        <p>
                          <i className="far fa-clock"></i> 02th March, 2019
                        </p>
                        <h5>
                          <a href="#">Guests think these services would be</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-2.jpg" alt="" />
                        <div className="tag">Travel</div>
                      </div>
                      <div className="blog__item__text">
                        <p>
                          <i className="far fa-clock"></i> 03th March, 2019
                        </p>
                        <h5>
                          <a href="#">Europe's 2018 hotel strengths belie</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-3.jpg" alt="" />
                        <div className="tag">Restaurant</div>
                      </div>
                      <div className="blog__item__text">
                        <p>
                          <i className="far fa-clock"></i> 04th March, 2019
                        </p>
                        <h5>
                          <a href="#">Tribute Portfolio opens The Alida in</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-4.jpg" alt="" />
                        <div className="tag">Hotel</div>
                      </div>
                      <div className="blog__item__text">
                        <p>
                          <i className="far fa-clock"></i> 05th March, 2019
                        </p>
                        <h5>
                          <a href="#">Rocco Forte Hotels unveils its second</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-5.jpg" alt="" />
                        <div className="tag">Travel</div>
                      </div>
                      <div className="blog__item__text">
                        <p>
                          <i className="far fa-clock"></i> 07th March, 2019
                        </p>
                        <h5>
                          <a href="#">The Ritz-Carlton, St. Louis renovates</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-4.jpg" alt="" />
                        <div className="tag">Restaurant</div>
                      </div>
                      <div className="blog__item__text">
                        <p>
                          <i className="far fa-clock"></i> 08th March, 2019
                        </p>
                        <h5>
                          <a href="#">NexPoint Hospitality Trust to acquire</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="pagination__number blog__pagination">
                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">
                        Next{" "}
                        <span className="arrow_right">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                {/* <!-- Blog Side Bar --> */}
                <BlogSideBar />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Blog Section End --> */}
      </BlogWrapper>
    </Layout>
  )
}
export default blog
const BlogWrapper = styled.div`
  .blog__item__large {
    margin-bottom: 68px;
  }

  .blog__item__large__pic {
    position: relative;
  }

  .blog__item__large__pic .tag {
    font-size: 14px;
    color: #ffffff;
    background: #e9ad28;
    border-radius: 2px;
    display: inline-block;
    padding: 4px 16px 2px;
    position: absolute;
    left: 20px;
    top: 20px;
  }

  .blog__item__large__pic img {
    min-width: 100%;
  }

  .blog__item__large__text {
    padding-top: 25px;
  }

  .blog__item__large__text p {
    margin-bottom: 12px;
  }

  .blog__item__large__text p i {
    margin-right: 2px;
  }

  .blog__item__large__text h4 a {
    font-size: 26px;
    color: #171717;
    font-weight: 500;
  }

  .blog__item__large__text h4 a:hover {
    text-decoration: underline;
  }

  .blog__item {
    margin-bottom: 70px;
  }

  .blog__item__pic {
    position: relative;
  }

  .blog__item__pic .tag {
    font-size: 14px;
    color: #ffffff;
    background: #e9ad28;
    border-radius: 2px;
    display: inline-block;
    padding: 4px 16px 2px;
    position: absolute;
    left: 20px;
    top: 20px;
  }

  .blog__item__pic img {
    min-width: 100%;
  }

  .blog__item__text {
    padding-top: 28px;
  }

  .blog__item__text p {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .blog__item__text p i {
    margin-right: 2px;
  }

  .blog__item__text h5 a {
    font-size: 22px;
    color: #171717;
    font-weight: 500;
  }

  .blog__item__text h5 a:hover {
    text-decoration: underline;
  }

  .pagination__number.blog__pagination {
    text-align: left;
  }

  .pagination__number {
    text-align: center;
  }

  .pagination__number a {
    font-size: 16px;
    display: inline-block;
    padding: 10px 16px 8px;
    color: #777c81;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .pagination__number a span {
    font-size: 16px;
    position: relative;
    top: 3px;
    margin-left: 3px;
  }

  .pagination__number a:hover {
    background: #e9ad28;
    color: #ffffff;
  }
`
