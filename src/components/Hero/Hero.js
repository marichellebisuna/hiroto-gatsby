import React from "react"
import styled from "styled-components"

const Hero = () => {
  return (
    <HeroWrapper>
      {/* <!-- Hero Section Begin --> */}
      <section className="hero spad set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__text">
                <h5>WELCOME HIROTO</h5>
                <h2>Experience the greatest for you holidays.</h2>
              </div>
              <form action="#" className="filter__form">
                <div className="filter__form__item filter__form__item--search">
                  <p>Location</p>
                  <div className="filter__form__input">
                    <input type="text" placeholder="Search Location" />
                    <span>
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </div>
                <div className="filter__form__item">
                  <p>Check In</p>
                  <div className="filter__form__datepicker">
                    <span>
                      <i className="far fa-calendar"></i>
                    </span>
                    <input
                      type="text"
                      className="datepicker_pop check__in"
                      placeholder="27 Oct 2020"
                    />
                    <i className="fas fa-angle-down"></i>
                  </div>
                </div>
                <div className="filter__form__item">
                  <p>Check Out</p>
                  <div className="filter__form__datepicker">
                    <span>
                      <i className="far fa-calendar"></i>
                    </span>
                    <input
                      type="text"
                      className="datepicker_pop check__out"
                      placeholder="27 Oct 2020"
                    />
                    <i className="fas fa-angle-down"></i>
                  </div>
                </div>
                <div className="filter__form__item ">
                  <p>Person</p>
                  <div className="filter__form__select">
                    <span>
                      <i className="fas fa-user-friends"></i>
                    </span>
                    <select style={{ display: "none" }}>
                      <option value="">2 Adult, 1 Children</option>
                      <option value="">2 Adult</option>
                      <option value="">1 Adult</option>
                    </select>
                    <div class="nice-select" tabindex="0">
                      <span class="current">2 Adult, 1 Children</span>
                      <i className="fas fa-angle-down"></i>
                      {/* <ul class="list">
                        <li data-value="" class="option selected">
                          2 Adult, 1 Children
                        </li>
                        <li data-value="" class="option">
                          2 Adult
                        </li>
                        <li data-value="" class="option">
                          1 Adult
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
                <button type="submit">BOOK NOW</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}
    </HeroWrapper>
  )
}
export default Hero

const HeroWrapper = styled.div`
  .hero {
    padding-top: 145px;
    padding-bottom: 190px;
    background: url(./img/hero.jpg) no-repeat;
  }

  .hero__text {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 65px;
  }

  .hero__text h5 {
    color: #e9ad28;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 35px;
  }

  .hero__text h2 {
    font-size: 72px;
    color: #ffffff;
    line-height: 82px;
  }

  .filter__form {
    background: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 30px 0 30px 30px;
    position: relative;
  }

  .filter__form button {
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    background: #1d1c1c;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: none;
    width: 160px;
    float: left;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    line-height: 100%;
  }

  .filter__form__item {
    width: 175px;
    float: left;
    margin-right: 30px;
  }

  .filter__form__item.filter__form__item--search {
    width: 260px;
  }

  .filter__form__item.filter__form__item--select {
    width: 230px;
  }

  .filter__form__item p {
    font-size: 18px;
    color: #777c81;
    margin-bottom: 24px;
  }

  .filter__form__item .filter__form__input {
    position: relative;
  }

  .filter__form__item .filter__form__input span {
    font-size: 18px;
    color: #e9ad28;
    position: absolute;
    right: 17px;
    top: 15px;
  }

  .filter__form__item .filter__form__input input {
    border: 1px solid #e4e4e4;
    font-size: 20px;
    color: #1d1c1c;
    width: 100%;
    height: 48px;
    padding-left: 15px;
    padding-right: 40px;
    font-family: "Barlow Condensed", sans-serif;
  }

  .filter__form__item .filter__form__datepicker {
    position: relative;
  }

  .filter__form__item .filter__form__datepicker span {
    font-size: 18px;
    color: #e9ad28;
    position: absolute;
    left: 40px;
    top: 0px;
  }
  .filter__form__item .filter__form__datepicker span i {
    color: #e9ad28;
  }

  .filter__form__item .filter__form__datepicker input {
    border: 1px solid #e4e4e4;
    font-size: 20px;
    color: #1d1c1c;
    width: 100%;
    padding-left: 48px;
    height: 48px;
    font-family: "Barlow Condensed", sans-serif;
  }

  .filter__form__item .filter__form__datepicker i {
    font-size: 22px;
    color: #1d1c1c;
    position: absolute;
    right: 10px;
    top: 13px;
  }

  .filter__form__item .filter__form__select {
    position: relative;
    height: 48px;
    border: 1px solid #e4e4e4;
    width: 200px;
  }

  .filter__form__item .filter__form__select span {
    font-size: 18px;
    color: #e9ad28;
    position: absolute;
    left: 10px;
    top: 13px;
    z-index: 1;
  }
  .filter__form__item .filter__form__select i {
    font-size: 22px;
  }

  .filter__form__item .filter__form__select .nice-select {
    float: none;
    border: none;
    border-radius: 0;
    padding-left: 40px;
    padding-top: 8px;
    width: 100%;
    font-family: "Barlow Condensed", sans-serif;
  }

  .filter__form__item .filter__form__select .nice-select .current {
    font-size: 20px;
    color: #1d1c1c;
    position: relative;
    top: 0;
    padding-right: 15px;
    /* display: none; */
  }

  .filter__form__item .filter__form__select .nice-select:after {
    border-bottom: 1.5px solid #1d1c1c;
    border-right: 1.5px solid #1d1c1c;
    height: 8px;
    width: 8px;
    right: 20px;
    top: 23px;
  }

  .filter__form__item .filter__form__select .nice-select .list {
    margin-top: 0;
    width: 100%;
    border-radius: 0;
  }
`
