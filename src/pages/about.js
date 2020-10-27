import React from "react"
import styled from "styled-components"
import History from "../components/About/History"
import ChooseUs from "../components/Home/ChooseUs"
import Layout from "../components/layout"
import service1 from "../images/services/services-1.png"
import service2 from "../images/services/services-2.png"
import service3 from "../images/services/services-3.png"
import service4 from "../images/services/services-4.png"
import service5 from "../images/services/services-5.png"
import service6 from "../images/services/services-6.png"

const about = () => {
  return (
    <Layout>
      <AboutWrapper>
        {/* <!-- About Section Begin --> */}
        <section className="about spad">
          <div className="container">
            <div className="about__content">
              <div className="row">
                <div className="col-lg-5">
                  <div className="section-title">
                    <h5>Our Specialization</h5>
                    <h2>Welcome Hiroto</h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about__text">
                    <p>
                      Metasurfaces are generally designed by placing scatterers
                      in periodic or pseudo-periodic grids.
                    </p>
                    <p>
                      I am convinced the only way to make money online is to
                      have a consistent Advertising plan. A plan you are willing
                      to work hard on and commit to for a selected period of
                      time. When making this plan, you need to do two things.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="services__item">
                  <img src={service1} alt="" />
                  <h4>Free Wi-Fi</h4>
                  <p>
                    The massive investment in a hotel or resort requires
                    constant reviews and control in order to make it a
                    successful investment.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="services__item">
                  <img src={service2} alt="" />
                  <h4>Premium Pool</h4>
                  <p>
                    Choose from 4 unique ready made concepts, let us help you
                    create the concept perfect for you or let HCA.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="services__item">
                  <img src={service3} alt="" />
                  <h4>Coffee Maker</h4>
                  <p>
                    HCA's Owner's Representation is taking care of just these
                    important factors, may it be through regular site visits and
                    spot checks.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="services__item">
                  <img src={service4} alt="" />
                  <h4>Bar Wine</h4>
                  <p>
                    For properties with third party management companies, HCA
                    Consultants will as well administer the terms and
                    conditions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="services__item">
                  <img src={service5} alt="" />
                  <h4>TV HD</h4>
                  <p>
                    We provide a critical analysis of a hotel's marketing
                    strategy, bench-marking it against industry and competitive
                    practices.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="services__item">
                  <img src={service6} alt="" />
                  <h4>Restaurant</h4>
                  <p>
                    A hotel and restaurant investment deserves careful and
                    market oriented financial planning and projections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- About Section End --> */}

        <ChooseUs />
        <History />
      </AboutWrapper>
    </Layout>
  )
}
export default about
const AboutWrapper = styled.div`
  .about {
    padding-bottom: 60px;
  }

  .about__content {
    margin-bottom: 45px;
  }

  .about__content .section-title {
    text-align: left;
  }

  .about__text p {
    color: #707070;
  }

  .about__text p:first-child {
    font-size: 18px;
    color: #111111;
    line-height: 30px;
    margin-bottom: 25px;
  }
`
