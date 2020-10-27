import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import rd1 from "../images/rooms/details/rd-1.jpg"
import rd2 from "../images/rooms/details/rd-2.jpg"
import rd3 from "../images/rooms/details/rd-3.jpg"
import rd4 from "../images/rooms/details/rd-4.jpg"
import fac1 from "../images/rooms/details/facilities/fac-1.png"
import fac2 from "../images/rooms/details/facilities/fac-2.png"
import fac3 from "../images/rooms/details/facilities/fac-3.png"
import fac4 from "../images/rooms/details/facilities/fac-4.png"
import fac5 from "../images/rooms/details/facilities/fac-5.png"
import fac6 from "../images/rooms/details/facilities/fac-6.png"
import fac7 from "../images/rooms/details/facilities/fac-7.png"
import fac8 from "../images/rooms/details/facilities/fac-8.png"

const room_details = () => {
  return (
    <Layout>
      <DetailWrapper>
        {/* <!-- Room Details Slider Begin --> */}
        <div className="room-details-slider">
          <div className="container">
            <div className="room__details__pic__slider owl-carousel">
              <div className="room__details__pic__slider__item set-bg">
                <img src={rd1} alt="" />
              </div>
              <div className="room__details__pic__slider__item set-bg">
                <img src={rd2} alt="" />
              </div>
              <div className="room__details__pic__slider__item set-bg">
                <img src={rd3} alt="" />
              </div>
              <div className="room__details__pic__slider__item set-bg">
                <img src={rd4} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Room Details Slider End -->

    <!-- Rooms Details Section Begin --> */}
        <section className="room-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="room__details__content">
                  <div className="room__details__rating">
                    <div className="room__details__hotel">
                      <span>Hotel</span>
                      <div className="room__details__hotel__rating">
                        <span className="icon_star">
                          <i class="fas fa-star"></i>
                        </span>
                        <span className="icon_star">
                          <i class="fas fa-star"></i>
                        </span>
                        <span className="icon_star">
                          <i class="fas fa-star"></i>
                        </span>
                        <span className="icon_star">
                          <i class="fas fa-star"></i>
                        </span>
                        <span className="icon_star-half_alt">
                          <i class="fas fa-star-half"></i>
                        </span>
                      </div>
                    </div>
                    <div className="room__details__advisor">
                      <img src="img/rooms/details/tripadvisor.png" alt="" />
                      <div className="room__details__advisor__rating">
                        <span className="icon_star">
                          <i class="fas fa-star"></i>
                        </span>
                        <span className="icon_star">
                          <i class="fas fa-star"></i>
                        </span>
                        <span className="icon_star">
                          <i class="fas fa-star"></i>
                        </span>
                        <span className="icon_star">
                          <i class="fas fa-star"></i>
                        </span>
                        <span className="icon_star-half_alt">
                          <i class="fas fa-star-half"></i>
                        </span>
                      </div>
                      <span className="review">(1000 Reviews)</span>
                    </div>
                  </div>
                  <div className="room__details__title">
                    <h2>Premium King Room</h2>
                    <a href="#" className="primary-btn">
                      Booking Now
                    </a>
                  </div>
                  <div className="room__details__desc">
                    <h2>Description:</h2>
                    <p>
                      We’re halfway through the summer, but while plenty of
                      people are kicking back and enjoying their vacations, the
                      social media development teams likely aren’t doing the
                      same. In the past two weeks alone, we’ve seen four big new
                      updates that can directly impact the social marketing
                      campaigns of hotels, resorts, and other businesses in the
                      hospitality industry. Let’s take a close look at each one.
                    </p>
                    <p>
                      The new desktop version of the site is significantly
                      improved, which will make it easier for hotels and resorts
                      to navigate the platform.
                    </p>
                    <p>
                      There is one big change though that we want to note, and
                      that’s the more live video and local moments (the latter
                      of which are based on your location). These will be
                      prioritized in users’ feeds, so take advantage of this and
                      create this content to improve your reach and connect with
                      more members of your target audience.
                    </p>
                    <p>
                      We’ve gotten yet another new feature for Instagram
                      Stories, and this time it’s the Chat sticker, which allows
                      you to invite Story followers to join in on a new group
                      chat. Instagram is currently advertising this as a way to
                      jumpstart big group conversations or make plans.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="room__details__facilities">
                        <h2>Others facilities:</h2>
                        <div className="row">
                          <div className="col-lg-6">
                            <ul>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                Takami Bridal Attire
                              </li>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                Esthetic Salon
                              </li>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                Multilingual staff
                              </li>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                Dry cleaning and laundry
                              </li>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                Credit cards accepted
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <ul>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                Rent-a-car
                              </li>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                Reservation & confirmation
                              </li>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                Babysitter upon request
                              </li>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                24-hour currency exchange
                              </li>
                              <li>
                                <span className="icon_check">
                                  <i class="fas fa-check"></i>
                                </span>{" "}
                                24-hour Manager on Duty
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="room__details__more__facilities">
                        <h2>Most popular facilities:</h2>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="room__details__more__facilities__item">
                              <div className="icon">
                                <img src={fac1} alt="" />
                              </div>
                              <h6>Air Conditioning</h6>
                            </div>
                            <div className="room__details__more__facilities__item">
                              <div className="icon">
                                <img src={fac2} alt="" />
                              </div>
                              <h6>Cable TV</h6>
                            </div>
                            <div className="room__details__more__facilities__item">
                              <div className="icon">
                                <img src={fac3} alt="" />
                              </div>
                              <h6>Free drinks</h6>
                            </div>
                            <div className="room__details__more__facilities__item">
                              <div className="icon">
                                <img src={fac4} alt="" />
                              </div>
                              <h6>Unlimited Wifi</h6>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="room__details__more__facilities__item">
                              <div className="icon">
                                <img src={fac5} alt="" />
                              </div>
                              <h6>Restaurant quality</h6>
                            </div>
                            <div className="room__details__more__facilities__item">
                              <div className="icon">
                                <img src={fac6} alt="" />
                              </div>
                              <h6>Service 24/24</h6>
                            </div>
                            <div className="room__details__more__facilities__item">
                              <div className="icon">
                                <img src={fac7} alt="" />
                              </div>
                              <h6>Gym Centre</h6>
                            </div>
                            <div className="room__details__more__facilities__item">
                              <div className="icon">
                                <img src={fac8} alt="" />
                              </div>
                              <h6>Spa & Wellness</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Rooms Details Section End --> */}
      </DetailWrapper>
    </Layout>
  )
}
export default room_details
const DetailWrapper = styled.div`
  .room-details-slider {
    overflow: hidden;
  }

  .room__details__pic__slider .owl-stage-outer {
    overflow: visible;
  }

  .room__details__pic__slider.owl-carousel .owl-nav button {
    height: 60px;
    width: 60px;
    background: #ffffff;
    line-height: 74px;
    text-align: center;
    position: absolute;
    left: -290px;
    top: 50%;
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .room__details__pic__slider.owl-carousel .owl-nav button:hover {
    background: #1d1c1c;
  }

  .room__details__pic__slider.owl-carousel .owl-nav button:hover i {
    color: #ffffff;
  }

  .room__details__pic__slider.owl-carousel .owl-nav button.owl-next {
    left: auto;
    right: -290px;
  }

  .room__details__pic__slider.owl-carousel .owl-nav button i {
    font-size: 30px;
    color: #1d1c1c;
  }

  .room__details__pic__slider__item {
    height: 380px;
  }

  /*---------------------
  Room Details
-----------------------*/

  .room-details {
    padding-bottom: 80px;
  }

  .room__details__rating {
    margin-bottom: 45px;
  }

  .room__details__hotel {
    display: inline-block;
    margin-right: 65px;
  }

  .room__details__hotel span {
    font-size: 14px;
    font-weight: 700;
    color: #19191a;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: inline-block;
  }

  .room__details__hotel .room__details__hotel__rating {
    display: inline-block;
  }

  .room__details__hotel .room__details__hotel__rating span {
    font-size: 14px;
    color: #e9ad28;
    margin-right: -4px;
    display: inline-block;
  }

  .room__details__advisor {
    display: inline-block;
  }

  .room__details__advisor img {
    display: inline-block;
    margin-right: 6px;
  }

  .room__details__advisor .room__details__advisor__rating {
    display: inline-block;
    margin-right: 6px;
  }

  .room__details__advisor .room__details__advisor__rating span {
    font-size: 14px;
    color: #e9ad28;
    margin-right: -4px;
    display: inline-block;
  }

  .room__details__advisor .review {
    font-size: 16px;
    color: #1d1c1c;
  }

  .room__details__title {
    position: relative;
    margin-bottom: 70px;
  }

  .room__details__title h2 {
    font-size: 48px;
    color: #1d1c1c;
    font-weight: 500;
  }

  .room__details__title .primary-btn {
    position: absolute;
    right: 0;
    top: 0;
  }

  .room__details__desc {
    margin-bottom: 70px;
  }

  .room__details__desc h2 {
    font-size: 34px;
    font-weight: 500;
    margin-bottom: 22px;
  }

  .room__details__desc p {
    line-height: 28px;
  }

  .room__details__desc p:last-child {
    margin-top: 42px;
  }

  .room__details__facilities h2 {
    font-size: 34px;
    font-weight: 500;
    margin-bottom: 24px;
  }

  .room__details__facilities ul li {
    list-style: none;
    font-size: 16px;
    color: #1d1c1c;
    line-height: 46px;
  }

  .room__details__facilities ul li span {
    font-size: 18px;
    color: #e9ad28;
    display: inline-block;
    margin-right: 6px;
  }

  .room__details__more__facilities h2 {
    font-size: 34px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .room__details__more__facilities__item {
    margin-bottom: 26px;
  }

  .room__details__more__facilities__item .icon {
    display: inline-block;
    width: 52px;
  }

  .room__details__more__facilities__item h6 {
    color: #1d1c1c;
    font-weight: 500;
    display: inline-block;
  }
`
