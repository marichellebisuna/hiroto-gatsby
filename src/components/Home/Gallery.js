import React from "react"
import styled from "styled-components"

import gallery1 from "../../images/gallery/gallery-1.jpg"
import gallery2 from "../../images/gallery/gallery-2.jpg"
import gallery3 from "../../images/gallery/gallery-3.jpg"
import gallery4 from "../../images/gallery/gallery-4.jpg"

const Gallery = () => {
  return (
    <GalleryWrapper>
      {/* <!-- Gallery Section Begin --> */}
      <section className="gallery spad">
        <div className="gallery__text">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="section-title">
                  <h5>OUR GALLERY</h5>
                  <h2>Explore The Most Beautiful In The Hotel</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="gallery__title">
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Sunt in culpa
                    qui officia deserunt mollit anim.
                  </p>
                  <a href="#" className="primary-btn">
                    View Gallery <i class="fas fa-arrow-right pl-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="gallery__slider">
          <OwlCarousel
            className="product-slider "
            items={3}
            margin={30}
            data-aos="fade-up"
            loop={false}
            nav
            autoplay
            dots
            options={options}
            autoplayTimeout={5000}
          >
            <div className="gallery__item small__item">
              <img src={gallery1} alt="" />
            </div>
            <div className="gallery__item set-bg">
              <img src={gallery2} alt="" />
            </div>
            <div className="gallery__item set-bg">
              <img src={gallery3} alt="" />
            </div>
            <div className="gallery__item set-bg">
              <img src={gallery4} alt="" />
            </div>
          </OwlCarousel>
        </div>
      */}
      </section>
      {/* <!-- Gallery Section End --> */}
    </GalleryWrapper>
  )
}
export default Gallery
const GalleryWrapper = styled.div`
  .gallery {
    padding-bottom: 0;
  }

  .gallery__text {
    margin-bottom: 60px;
  }

  .gallery__text .section-title {
    text-align: left;
    margin-bottom: 0;
  }

  .gallery__text .gallery__title p {
    margin-bottom: 35px;
  }

  .gallery__text .gallery__title a span {
    font-size: 20px;
    position: relative;
    top: 5px;
  }

  .gallery__item {
    height: 700px;
  }
`
