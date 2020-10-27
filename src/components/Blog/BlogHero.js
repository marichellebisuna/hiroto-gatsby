import React from "react"
import styled from "styled-components"

const BlogHero = () => {
  return (
    <BlogHeroWrapper>
      {/* <!-- Blog Hero Begin --> */}
      <section
        className="blog-hero spad set-bg"
        data-setbg="img/blog/details/details-bg.jpg"
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="blog__hero__text">
                <div className="tag">Travel</div>
                <h2>
                  Six Senses Douro Valley to add guestrooms suites and event
                  space
                </h2>
                <ul>
                  <li>
                    <i className="far fa-clock"></i> 03th March, 2019
                  </li>
                  <li>
                    <i className="fas fa-user"></i> By John Smith
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Hero End --> */}
    </BlogHeroWrapper>
  )
}

export default BlogHero

const BlogHeroWrapper = styled.div`
  .blog-hero {
    background: url(./img/blog/details/details-bg.jpg) no-repeat;
  }
  .blog-details-hero {
    padding-top: 145px;
    padding-bottom: 150px;
  }

  .blog__hero__text .tag {
    font-size: 14px;
    color: #ffffff;
    background: #e9ad28;
    border-radius: 2px;
    display: inline-block;
    padding: 4px 16px 2px;
  }

  .blog__hero__text h2 {
    font-size: 48px;
    line-height: 58px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 22px;
    margin-bottom: 18px;
  }

  .blog__hero__text ul li {
    list-style: none;
    font-size: 16px;
    color: #ffffff;
    display: inline-block;
    margin-right: 40px;
  }

  .blog__hero__text ul li:last-child {
    margin-right: 0;
  }

  .blog__hero__text ul li i {
    margin-right: 5px;
  }
`
