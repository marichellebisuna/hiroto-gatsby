import React from "react"
import styled from "styled-components"
import Comments from "./BlogComments"
import detail1 from "../../images/blog/details/details-1.jpg"
import detail2 from "../../images/blog/details/details-2.jpg"
import detail3 from "../../images/blog/details/details-3.jpg"
import detail4 from "../../images/blog/details/details-4.jpg"

const BlogDetails = () => {
  return (
    <BlogDetailsWrapper>
      {/* <!-- Blog Details Section Begin --> */}
      <section className="blog-details spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="blog__details__content">
                <div className="blog__details__text">
                  <p>
                    The young woman who turned a style setback into an envious
                    outfit has officially inspired a major clothing retailer
                    with her impromptu ingenuity. Online retailer
                    PrettyLittleThing has officially started selling a
                    pink-and-white jumpsuit inspired by the 19-year-old Eleanor
                    Walton, who went viral for spontaneously dyeing her own
                    PrettyLittleThing jumpsuit pink in order to hide a wine
                    stain.
                  </p>
                  <p>
                    Walton’s flair for fashion began making headlines earlier
                    this month, after she and several friends visited the Ripton
                    Races racetrack in North Yorkshire, England, and a stranger
                    accidentally bumped into her, causing her to spill red wine
                    all over her white jumpsuit. Instead of going home or
                    changing, Walton and her friend Mia Williamson, 18, came up
                    with another idea entirely: Dye the rest of her outfit pink
                    to match — using more red wine.
                  </p>
                  <p>
                    PrettyLittleThing soon took notice, too, and gave Walton a
                    shout-out on Twitter, much to Walton’s delight.
                  </p>
                </div>
                <div className="blog__details__pic">
                  <div className="row">
                    <div className="col-lg-8 col-md-8">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 p-0">
                          <img src={detail1} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 p-0">
                          <img src={detail2} alt="" />
                        </div>
                        <div className="col-lg-12 col-md-12 p-0">
                          <img src={detail3} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 p-0">
                          <img src={detail4} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog__details__desc">
                  <div className="blog__details__desc__item">
                    <h4>
                      1. Follow us on facebook for more fox lifestyle news
                    </h4>
                    <p>
                      And now, the retailer is selling a jumpsuit directly
                      inspired by Walton’s, calling it the “Burgundy Tie Dye
                      Scuba High Neck Tie Waist Jumpsuit.”
                    </p>
                    <p>
                      “It’s every girl’s worst nightmare when you’ve pulled
                      together a killer look and you’re in fear of spilling red
                      wine down yourself,” PrettyLittleThing added in a press
                      release for the item. “Instead of letting it ruin her day,
                      herself and her friends DIY’d her new look, by soaking
                      another 4 glasses of red wine on her jumpsuit, turning
                      this into the look of the summer!”
                    </p>
                  </div>
                  <div className="blog__details__desc__item">
                    <h4>2. Click here to get the Fox News app</h4>
                    <p>
                      A representative for PrettyLittleThing was not immediately
                      available to expand on the details of its and Walton’s
                      collaboration or partnership, if any, but did confirm that
                      both Walton and Williamson “will be visiting our
                      Manchester HQ where they [will] be spoiled and of course
                      given the PLT treatment.”
                    </p>
                  </div>
                </div>
                <div className="blog__details__widget">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="blog__details__tags">
                        <a href="#">Hotel</a>
                        <a href="#">Restaurant</a>
                        <a href="#">Tips</a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="blog__details__share">
                        <span>Share:</span>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-google"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <Comments />
                {/* {<!---comments here-->} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Details Section End --> */}
    </BlogDetailsWrapper>
  )
}

export default BlogDetails
const BlogDetailsWrapper = styled.div`
  .blog-details {
    padding-bottom: 0;
  }

  .blog__details__text {
    margin-bottom: 55px;
  }

  .blog__details__text p {
    font-size: 18px;
    color: #8b9094;
    line-height: 30px;
  }

  .blog__details__pic {
    padding: 0 15px;
    margin-bottom: 50px;
  }

  .blog__details__pic img {
    min-width: 100%;
    margin-bottom: 10px;
    padding-right: 10px;
  }

  .blog__details__desc {
    margin-bottom: 85px;
  }

  .blog__details__desc__item {
    margin-bottom: 50px;
  }

  .blog__details__desc__item:last-child {
    margin-bottom: 0;
  }

  .blog__details__desc__item h4 {
    color: #1d1c1c;
    font-weight: 500;
    margin-bottom: 22px;
  }

  .blog__details__desc__item p {
    font-size: 18px;
    line-height: 30px;
    color: #8b9094;
  }

  .blog__details__widget {
    margin-bottom: 100px;
  }

  .blog__details__tags a {
    display: inline-block;
    font-size: 12px;
    color: #8b9094;
    letter-spacing: 2px;
    padding: 6px 20px 4px;
    border-radius: 2px;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .blog__details__tags a:hover {
    background: #e9ad28;
    color: #ffffff;
  }

  .blog__details__share {
    text-align: right;
  }

  .blog__details__share span {
    font-size: 18px;
    display: inline-block;
    color: #1d1c1c;
    font-weight: 500;
    margin-right: 30px;
  }

  .blog__details__share a {
    display: inline-block;
    font-size: 16px;
    color: #777c81;
    margin-right: 30px;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .blog__details__share a:hover {
    color: #e9ad28;
  }

  .blog__details__share a:last-child {
    margin-right: 0;
  }
`
