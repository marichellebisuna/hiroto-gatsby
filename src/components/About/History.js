import React from "react"
import styled from "styled-components"

const History = () => {
  return (
    <AboutWrapper>
      {/* <!-- History Section Begin --> */}
      <section className="history spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title history-title">
                <h5>Our History</h5>
                <h2>Explore Our Hotel</h2>
              </div>
            </div>
          </div>
          <div className="history__content">
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <div className="history__item left__item">
                  <div className="history__date"></div>
                  <span>11 Dec 1990</span>
                  <h4>Start Up Building Hotel</h4>
                  <img src="img/history/history-1.jpg" alt="" />
                  <p>
                    The young woman who turned a style setback into an envious
                    outfit has officially inspired a major clothing retailer
                    with her impromptu ingenuity
                  </p>
                </div>
                <div className="history__item left__item mb-0">
                  <div className="history__date"></div>
                  <span>29 Jan 1990</span>
                  <h4>Building Pool In The Beach</h4>
                  <img src="img/history/history-3.jpg" alt="" />
                  <p>
                    The young woman who turned a style setback into an envious
                    outfit has officially inspired a major clothing retailer
                    with her impromptu ingenuity
                  </p>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-2 col-md-5 offset-md-2">
                <div className="history__item right__first__item">
                  <div className="history__date"></div>
                  <span>08 March 1990</span>
                  <h4>Best Hotel Award Of The Year</h4>
                  <img src="img/history/history-2.jpg" alt="" />
                  <p>
                    The young woman who turned a style setback into an envious
                    outfit has officially inspired a major clothing retailer
                    with her impromptu ingenuity
                  </p>
                </div>
                <div className="history__item mb-0">
                  <div className="history__date"></div>
                  <span>06 July 1990</span>
                  <h4>Open New Hotel In New York</h4>
                  <img src="img/history/history-4.jpg" alt="" />
                  <p>
                    The young woman who turned a style setback into an envious
                    outfit has officially inspired a major clothing retailer
                    with her impromptu ingenuity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- History Section End --> */}
    </AboutWrapper>
  )
}
export default History
const AboutWrapper = styled.div`
  .section-title.history-title {
    margin-bottom: 95px;
  }

  .history__content {
    position: relative;
  }

  .history__content::after {
    position: absolute;
    left: 50%;
    top: -40px;
    width: 2px;
    height: 1100px;
    background: rgba(29, 28, 28, 0.3);
    -webkit-transform: translateX(-1px);
    -ms-transform: translateX(-1px);
    transform: translateX(-1px);
    content: "";
  }

  .history__item {
    margin-bottom: 220px;
    position: relative;
  }

  .history__item .history__date {
    position: absolute;
    left: -104px;
    top: 10px;
    height: 2px;
    width: 80px;
    background: rgba(29, 28, 28, 0.3);
    content: "";
    z-index: 9;
  }

  .history__item .history__date:before {
    position: absolute;
    left: -18px;
    top: -9px;
    height: 20px;
    width: 20px;
    background: #ffffff;
    border-radius: 50%;
    content: "";
  }

  .history__item .history__date:after {
    position: absolute;
    left: -15px;
    top: -6px;
    height: 14px;
    width: 14px;
    background: #e9ad28;
    border-radius: 50%;
    content: "";
  }

  .history__item.left__item {
    text-align: right;
  }

  .history__item.left__item .history__date {
    left: auto;
    right: -104px;
  }

  .history__item.left__item .history__date:before {
    left: auto;
    right: -18px;
  }

  .history__item.left__item .history__date:after {
    left: auto;
    right: -15px;
  }

  .history__item.right__first__item {
    margin-top: 220px;
  }

  .history__item.mb-0 {
    margin-bottom: 0;
  }

  .history__item span {
    font-size: 16px;
    color: #777c81;
  }

  .history__item h4 {
    color: #202020;
    font-weight: 500;
    margin-bottom: 25px;
    margin-top: 6px;
  }

  .history__item img {
    margin-bottom: 20px;
    min-width: 100%;
  }

  .history__item p {
    margin-bottom: 0;
    line-height: 28px;
  }
`
