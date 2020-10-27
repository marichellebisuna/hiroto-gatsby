import React from "react"
import styled from "styled-components"
import sign from "../../images/home-about/sign.png"
import about from "../../images/home-about/home-about.png"

const AboutSection = () => {
  return (
    <HomeWrapper>
      {/* <!-- Home About Section Begin --> */}
      <section className="home-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="home__about__text">
                <div className="section-title">
                  <h5>ABOUT US</h5>
                  <h2>Welcome Hiroto Hotel In Street L’Abreuvoir</h2>
                </div>
                <p className="first-para">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
                <p className="last-para">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque.
                </p>
                <img src={sign} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home__about__pic">
                <img src={about} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Home About Section End --> */}
    </HomeWrapper>
  )
}
export default AboutSection

const HomeWrapper = styled.section`
  .home-about {
    margin-top: -100px;
  }

  .home__about__pic img {
    min-width: 100%;
  }

  .home__about__text {
    padding-top: 200px;
  }

  .home__about__text .section-title {
    margin-bottom: 26px;
    text-align: left;
    color: #e9ad28;
  }

  .home__about__text p {
    line-height: 28px;
  }

  .home__about__text .first-para {
    margin-bottom: 10px;
  }

  .home__about__text .last-para {
    margin-bottom: 35px;
  }
`
