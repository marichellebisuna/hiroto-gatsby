import React from "react"
import styled from "styled-components"
import room1 from "../../images/home-room/hr-1.jpg"
import room2 from "../../images/home-room/hr-2.jpg"
import room3 from "../../images/home-room/hr-3.jpg"
import room4 from "../../images/home-room/hr-4.jpg"

const HomeRoom = () => {
  return (
    <HomeRoomWrapper>
      {/* <!-- Home Room Section Begin --> */}
      <section className="home-room spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5>OUR ROOM</h5>
                <h2>Explore Our Hotel</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div className="home__room__item set-bg">
                <img src={room1} alt="" />
                <div className="home__room__title">
                  <h4>Deluxe Room</h4>
                  <h2>
                    <sup>$</sup>55<span>/day</span>
                  </h2>
                </div>
                <a href="#">Booking Now</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div className="home__room__item set-bg">
                <img src={room2} alt="" />
                <div className="home__room__title">
                  <h4>Deluxe Room</h4>
                  <h2>
                    <sup>$</sup>85<span>/day</span>
                  </h2>
                </div>
                <a href="#">Booking Now</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div className="home__room__item set-bg">
                <img src={room3} alt="" />
                <div className="home__room__title">
                  <h4>Deluxe Room</h4>
                  <h2>
                    <sup>$</sup>94<span>/day</span>
                  </h2>
                </div>
                <a href="#">Booking Now</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 p-0">
              <div className="home__room__item set-bg">
                <img src={room4} alt="" />
                <div className="home__room__title">
                  <h4>Deluxe Room</h4>
                  <h2>
                    <sup>$</sup>71<span>/day</span>
                  </h2>
                </div>
                <a href="#">Booking Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home__explore">
            <div className="row">
              <div className="col-lg-9 col-md-8">
                <h3>Planning your next trip? Save up to 25% on your hotel</h3>
              </div>
              <div className="col-lg-3 col-md-4 text-center">
                <a href="#" className="primary-btn">
                  Explorer More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Home Room Section End --> */}
    </HomeRoomWrapper>
  )
}
export default HomeRoom

const HomeRoomWrapper = styled.div`
  .home-room .container-fluid {
    padding-right: 0;
    overflow: hidden;
  }

  .home__room__item {
    height: 493px;
    position: relative;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .home__room__item:hover .home__room__title {
    top: 0;
    margin-top: 0;
    padding: 32px 25px 0;
  }

  .home__room__item:hover a {
    bottom: 32px;
    opacity: 1;
    visibility: visible;
  }

  .home__room__item a {
    font-size: 18px;
    color: #ffffff;
    font-family: "Barlow Condensed", sans-serif;
    position: relative;
    padding: 4px 0;
    display: inline-block;
    position: absolute;
    left: 25px;
    bottom: 0px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all, 0.5s;
    -o-transition: all, 0.5s;
    transition: all, 0.5s;
  }

  .home__room__item a:before {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: #e9ad28;
    content: "";
  }

  .home__room__title {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    padding: 0 25px;
    margin-top: -120px;
    -webkit-transition: all, 0.5s;
    -o-transition: all, 0.5s;
    transition: all, 0.5s;
  }

  .home__room__title h4 {
    color: #ffffff;
    margin-bottom: 5px;
  }

  .home__room__title h2 {
    font-size: 48px;
    color: #ffffff;
    position: relative;
    padding-left: 12px;
  }

  .home__room__title h2 sup {
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 15px;
  }

  .home__room__title h2 span {
    font-size: 18px;
  }

  .home__explore {
    padding-top: 65px;
  }

  .home__explore h3 {
    color: #000000;
    line-height: 50px;
  }
`
