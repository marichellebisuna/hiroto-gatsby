import React from "react"
import styled from "styled-components"

const ChooseUs = () => {
  return (
    <ChooseWrapper>
      {/* <!-- Chooseus Section Begin --> */}
      <div className="chooseus spad set-bg" data-setbg="img/chooseus-bg.jpg">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="chooseus__text">
                <div className="section-title">
                  <h5>WHY CHOOSE US</h5>
                  <h2>
                    Contact us now to get the latest deals and for the next
                    booking
                  </h2>
                </div>
                <a href="#" className="primary-btn">
                  Booking Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Chooseus Section End --> */}
    </ChooseWrapper>
  )
}
export default ChooseUs

const ChooseWrapper = styled.div`
  .chooseus {
    padding-top: 80px;
    background: url(./img/chooseus-bg.jpg) no-repeat;
  }

  .chooseus__text .section-title {
    margin-bottom: 50px;
  }

  .chooseus__text .section-title h2 {
    color: #ffffff;
  }

  .chooseus__text a {
    background: #ffffff;
    color: #19191a;
  }
`
