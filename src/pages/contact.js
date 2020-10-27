import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const contact = () => {
  return (
    <ContactWrapper>
      <Layout>
        {/* <!-- Map Begin --> */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5524090066037!2d-71.10245469994108!3d42.47980730490846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3748250c43a43%3A0xe1b9879a5e9b6657!2sWinter%20Street%20Public%20Parking%20Lot!5e0!3m2!1sen!2sbd!4v1577299251173!5m2!1sen!2sbd"
            height="600"
            style={{ border: 0 }}
            allowfullscreen=""
          ></iframe>
        </div>
        {/* <!-- Map End -->

    <!-- Contact Section Begin --> */}
        <section className="contact spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-5">
                <div className="contact__widget">
                  <div className="contact__widget__item">
                    <h4>Contact Us</h4>
                    <ul>
                      <li>(123) 456-78-910</li>
                      <li>Info.colorlib@gmail.com</li>
                    </ul>
                  </div>
                  <div className="contact__widget__item">
                    <h4>Address</h4>
                    <p>
                      96 Ernser Vista Suite 437, NY, <br />
                      United Stated
                    </p>
                  </div>
                  <div className="contact__widget__time">
                    <h4>Opentime</h4>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="contact__widget__time__item">
                          <ul>
                            <li>Monday - Friday</li>
                            <li>
                              <span>8 am - 9 pm</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="contact__widget__time__item">
                          <ul>
                            <li>Saturday - Sunday</li>
                            <li>
                              <span>8 am - 9 pm</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 col-md-6 col-sm-7">
                <div className="contact__form">
                  <h2>Your question?</h2>
                  <form action="#">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Contact Section End --> */}
      </Layout>
    </ContactWrapper>
  )
}
export default contact

const ContactWrapper = styled.div`
  .map {
    height: 600px;
  }

  .map iframe {
    width: 100%;
  }

  .contact__widget__item {
    margin-bottom: 42px;
  }

  .contact__widget__item h4 {
    color: #19191a;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .contact__widget__item ul li {
    list-style: none;
    font-size: 16px;
    color: #777c81;
    line-height: 26px;
  }

  .contact__widget__item p {
    margin-bottom: 0;
  }

  .contact__widget__time h4 {
    color: #19191a;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .contact__widget__time__item ul li {
    list-style: none;
    font-size: 16px;
    color: #777c81;
    line-height: 26px;
  }

  .contact__widget__time__item ul li span {
    font-weight: 700;
    color: #19191a;
  }

  .contact__form h2 {
    color: #1d1c1c;
    font-weight: 500;
    margin-bottom: 34px;
  }

  .contact__form form input {
    border: none;
    border-bottom: 1px solid #e4e4e4 !important;
    width: 100%;
    font-size: 16px;
    color: #777c81;
    border: none;
    padding-bottom: 20px;
    margin-bottom: 30px;
  }

  .contact__form form input:last-child {
    color: #777c81;
  }

  .contact__form form textarea {
    border: none;
    border-bottom: 1px solid #e4e4e4 !important;
    width: 100%;
    font-size: 16px;
    color: #777c81;
    border: none;
    height: 85px;
    resize: none;
    margin-bottom: 40px;
  }

  .contact__form form textarea:last-child {
    color: #777c81;
  }

  .contact__form form button {
    font-size: 17px;
    font-weight: 500;
    display: inline-block;
    border: none;
    background: transparent;
    padding: 2px 0;
    position: relative;
  }

  .contact__form form button::before {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: #e9ad28;
    content: "";
  }
`
