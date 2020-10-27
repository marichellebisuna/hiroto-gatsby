import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import room1 from "../images/rooms/room-1.jpg"
import room2 from "../images/rooms/room-2.jpg"
import room3 from "../images/rooms/room-3.jpg"
import room4 from "../images/rooms/room-4.jpg"

const Rooms = () => {
  return (
    <Layout>
      <RoomsWrapper>
        {/* <!-- Rooms Section Begin --> */}
        <section className="rooms spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 p-0 order-lg-2 order-md-2 col-md-6">
                <div className="room__pic__slider owl-carousel">
                  <div className="room__pic__item set-bg">
                    <img src={room1} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room2} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room3} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-1 order-md-1 col-md-6">
                <div className="room__text">
                  <h3>Premium King Room</h3>
                  <h2>
                    <sup>$</sup>99<span>/day</span>
                  </h2>
                  <ul>
                    <li>
                      <span>Size:</span>30 ft
                    </li>
                    <li>
                      <span>Capacity:</span>Max persion 3
                    </li>
                    <li>
                      <span>Bed:</span>King Beds
                    </li>
                    <li>
                      <span>Services:</span>Wifi, Television, Bathroom,...
                    </li>
                    <li>
                      <span>View:</span>Sea View
                    </li>
                  </ul>
                  <a href="#">View Details</a>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-3 order-md-3 col-md-6">
                <div className="room__pic__slider owl-carousel">
                  <div className="room__pic__item set-bg">
                    <img src={room1} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room2} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room3} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-4 order-md-4 col-md-6">
                <div className="room__text right__text">
                  <h3>Deluxe Room</h3>
                  <h2>
                    <sup>$</sup>86<span>/day</span>
                  </h2>
                  <ul>
                    <li>
                      <span>Size:</span>30 ft
                    </li>
                    <li>
                      <span>Capacity:</span>Max persion 3
                    </li>
                    <li>
                      <span>Bed:</span>King Beds
                    </li>
                    <li>
                      <span>Services:</span>Wifi, Television, Bathroom,...
                    </li>
                    <li>
                      <span>View:</span>Sea View
                    </li>
                  </ul>
                  <a href="#">View Details</a>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-6 order-md-6 col-md-6">
                <div className="room__pic__slider owl-carousel">
                  <div className="room__pic__item set-bg">
                    <img src={room1} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room2} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room3} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-5 order-md-5 col-md-6">
                <div className="room__text">
                  <h3>Double Room</h3>
                  <h2>
                    <sup>$</sup>71<span>/day</span>
                  </h2>
                  <ul>
                    <li>
                      <span>Size:</span>30 ft
                    </li>
                    <li>
                      <span>Capacity:</span>Max persion 3
                    </li>
                    <li>
                      <span>Bed:</span>King Beds
                    </li>
                    <li>
                      <span>Services:</span>Wifi, Television, Bathroom,...
                    </li>
                    <li>
                      <span>View:</span>Sea View
                    </li>
                  </ul>
                  <a href="#">View Details</a>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-7 order-md-7 col-md-6">
                <div className="room__pic__slider owl-carousel">
                  <div className="room__pic__item set-bg">
                    <img src={room1} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room2} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room3} alt="" />
                  </div>
                  <div className="room__pic__item set-bg">
                    <img src={room4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-0 order-lg-8 order-md-8 col-md-6">
                <div className="room__text right__text">
                  <h3>Luxury Room</h3>
                  <h2>
                    <sup>$</sup>79<span>/day</span>
                  </h2>
                  <ul>
                    <li>
                      <span>Size:</span>30 ft
                    </li>
                    <li>
                      <span>Capacity:</span>Max persion 3
                    </li>
                    <li>
                      <span>Bed:</span>King Beds
                    </li>
                    <li>
                      <span>Services:</span>Wifi, Television, Bathroom,...
                    </li>
                    <li>
                      <span>View:</span>Sea View
                    </li>
                  </ul>
                  <a href="#">View Details</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="pagination__number">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">
                    Next <span className="arrow_right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Rooms Section End --> */}
      </RoomsWrapper>
    </Layout>
  )
}
export default Rooms
const RoomsWrapper = styled.div`
  .room__pic__slider {
    margin-bottom: 60px;
  }

  .room__pic__slider.owl-carousel .owl-nav button {
    height: 40px;
    width: 40px;
    background: #ffffff;
    line-height: 48px;
    text-align: center;
    position: absolute;
    left: 20px;
    top: 50%;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .room__pic__slider.owl-carousel .owl-nav button:hover {
    background: #1d1c1c;
  }

  .room__pic__slider.owl-carousel .owl-nav button:hover i {
    color: #ffffff;
  }

  .room__pic__slider.owl-carousel .owl-nav button.owl-next {
    left: auto;
    right: 20px;
  }

  .room__pic__slider.owl-carousel .owl-nav button i {
    font-size: 24px;
    color: #1d1c1c;
  }

  .room__pic__item {
    height: 400px;
  }

  .room__text {
    margin-bottom: 60px;
  }

  .room__text.right__text {
    padding-left: 85px;
  }

  .room__text h3 {
    color: #19191a;
    font-weight: 500;
    margin-bottom: 32px;
  }

  .room__text h2 {
    font-size: 48px;
    color: #e9ad28;
    position: relative;
    padding-left: 12px;
    margin-bottom: 20px;
  }

  .room__text h2 sup {
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 15px;
    color: #1d1c1c;
  }

  .room__text h2 span {
    font-size: 18px;
    color: #1d1c1c;
  }

  .room__text ul {
    margin-bottom: 30px;
  }

  .room__text ul li {
    list-style: none;
    font-size: 18px;
    color: #1d1c1c;
    line-height: 36px;
  }

  .room__text ul li span {
    display: inline-block;
    width: 130px;
  }

  .room__text a {
    font-size: 17px;
    color: #1d1c1c;
    font-family: "Barlow Condensed", sans-serif;
    position: relative;
    padding: 4px 0;
    display: inline-block;
    font-weight: 500;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .room__text a:before {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: #e9ad28;
    content: "";
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
