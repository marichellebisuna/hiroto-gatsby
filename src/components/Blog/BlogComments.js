import React from "react"
import styled from "styled-components"
import comment1 from "../../images/blog/details/comment-1.png"
import comment2 from "../../images/blog/details/comment-2.png"
import comment3 from "../../images/blog/details/comment-3.png"

const BlogComments = () => {
  return (
    <BlogCommentsWrapper>
      <div className="blog__details__comment">
        <h3>2 Comments</h3>
        <div className="blog__details__comment__item">
          <div className="blog__details__comment__item__pic">
            <img src={comment1} alt="" />
          </div>
          <div className="blog__details__comment__item__text">
            <span>01th March, 2019</span>
            <h5>Brandon Kelley</h5>
            <p>
              Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora. incidunt ut labore et dolore magnam.
            </p>
            <a href="#">LIKE</a>
            <a href="#">Reply</a>
          </div>
        </div>
        <div className="blog__details__comment__item blog__details__comment__item--reply">
          <div className="blog__details__comment__item__pic">
            <img src={comment2} alt="" />
          </div>
          <div className="blog__details__comment__item__text">
            <span>01th March, 2019</span>
            <h5>Brandon Kelley</h5>
            <p>
              Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora. incidunt ut labore et dolore magnam.
            </p>
            <a href="#">LIKE</a>
            <a href="#">Reply</a>
          </div>
        </div>
        <div className="blog__details__comment__item">
          <div className="blog__details__comment__item__pic">
            <img src={comment3} alt="" />
          </div>
          <div className="blog__details__comment__item__text">
            <span>01th March, 2019</span>
            <h5>Brandon Kelley</h5>
            <p>
              Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora. incidunt ut labore et dolore magnam.
            </p>
            <a href="#">LIKE</a>
            <a href="#">Reply</a>
          </div>
        </div>
      </div>
      <div className="blog__details__comment__form">
        <h3>Leave A Comment</h3>
        <form action="#">
          <div className="row">
            <div className="col-lg-6">
              <input type="text" placeholder="Name" />
            </div>
            <div className="col-lg-6">
              <input type="text" placeholder="Email" />
            </div>
          </div>
          <input type="text" placeholder="Website" />
          <textarea placeholder="Messages"></textarea>
          <button type="submit">Send Messages</button>
        </form>
      </div>
    </BlogCommentsWrapper>
  )
}
export default BlogComments
const BlogCommentsWrapper = styled.div`
  .blog__details__comment {
    margin-bottom: 50px;
    overflow: hidden;
  }

  .blog__details__comment h3 {
    color: #222222;
    font-weight: 500;
    margin-bottom: 40px;
  }

  .blog__details__comment__item {
    margin-bottom: 30px;
    overflow: hidden;
  }

  .blog__details__comment__item.blog__details__comment__item--reply {
    margin-bottom: 50px;
    padding-left: 120px;
  }

  .blog__details__comment__item.blog__details__comment__item--reply
    .blog__details__comment__item__pic {
    margin-right: 35px;
  }

  .blog__details__comment__item__pic {
    float: left;
    margin-right: 50px;
  }

  .blog__details__comment__item__pic img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }

  .blog__details__comment__item__text {
    overflow: hidden;
  }

  .blog__details__comment__item__text span {
    font-size: 14px;
    color: #8b9094;
    display: block;
  }

  .blog__details__comment__item__text h5 {
    color: #1d1c1c;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 9px;
  }

  .blog__details__comment__item__text p {
    color: #8b9094;
    line-height: 24px;
    margin-bottom: 20px;
  }

  .blog__details__comment__item__text a {
    display: inline-block;
    color: #222222;
    padding: 4px 22px 2px 32px;
    border: 1px solid rgba(30, 30, 39, 0.2);
    text-transform: uppercase;
    margin-right: 6px;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
  }

  .blog__details__comment__item__text a:hover {
    background: #e9ad28;
    color: #ffffff;
    border-color: #e9ad28;
  }

  .blog__details__comment__form h3 {
    color: #222222;
    font-weight: 500;
    margin-bottom: 40px;
  }

  .blog__details__comment__form form input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: #777c81;
    padding-left: 20px;
    border: none;
    margin-bottom: 20px;
    border: 2px solid transparent;
    background: #f9f8f6;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .blog__details__comment__form form input::-webkit-input-placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form input::-moz-placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form input:-ms-input-placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form input::-ms-input-placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form input::placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form input:focus {
    color: #1d1c1c;
    background: #ffffff;
    border: 2px solid #e9ad28;
  }

  .blog__details__comment__form form textarea {
    width: 100%;
    height: 115px;
    font-size: 16px;
    color: #777c81;
    padding-left: 20px;
    padding-top: 12px;
    border: none;
    margin-bottom: 42px;
    border: 2px solid transparent;
    background: #f9f8f6;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .blog__details__comment__form form textarea::-webkit-input-placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form textarea::-moz-placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form textarea:-ms-input-placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form textarea::-ms-input-placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form textarea::placeholder {
    color: #777c81;
  }

  .blog__details__comment__form form textarea:focus {
    color: #1d1c1c;
    background: #ffffff;
    border: 2px solid #e9ad28;
  }

  .blog__details__comment__form form button {
    font-size: 16px;
    color: #ffffff;
    background: #e9ad28;
    letter-spacing: 2px;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 500;
    display: inline-block;
    padding: 10px 20px 12px;
    border: none;
  }
`
