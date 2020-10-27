import React from "react"
import styled from "styled-components"
import service1 from "../../images/services/services-1.png"
import service2 from "../../images/services/services-2.png"
import service3 from "../../images/services/services-3.png"
import service4 from "../../images/services/services-4.png"
import service5 from "../../images/services/services-5.png"
import service6 from "../../images/services/services-6.png"

const Services = () => {
  return (
    <ServicesWrapper>
      {/* <!-- Services Section Begin --> */}
      <section className="services spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="services__item">
                <img src={service1} alt="" />
                <h4>Free Wi-Fi</h4>
                <p>
                  The massive investment in a hotel or resort requires constant
                  reviews and control in order to make it a successful
                  investment.
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
                  Consultants will as well administer the terms and conditions.
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
                  A hotel and restaurant investment deserves careful and market
                  oriented financial planning and projections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Section End --> */}
    </ServicesWrapper>
  )
}

export default Services

const ServicesWrapper = styled.div`
  .services {
    padding-top: 100px;
    padding-bottom: 60px;
  }

  .services__item {
    margin-bottom: 40px;
  }

  .services__item h4 {
    color: #19191a;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .services__item p {
    margin-bottom: 0;
  }
`
