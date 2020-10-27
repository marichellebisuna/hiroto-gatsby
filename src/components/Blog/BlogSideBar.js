import React from "react"
import styled from "styled-components"

const BlogSideBar = () => {
  return (
    <BlogSideBarWrapper>
      <div className="blog__sidebar">
        <div className="blog__sidebar__search">
          <h4>Search</h4>
          <form action="#">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="blog__sidebar__recent">
          <h4>Recent Posts</h4>
          <a href="#" className="blog__sidebar__recent__item">
            <div className="blog__sidebar__recent__item__pic">
              <img src="img/blog/sidebar/recent-1.jpg" alt="" />
            </div>
            <div className="blog__sidebar__recent__item__text">
              <h6>Smart HVAC Solutions Keep It</h6>
              <div className="time">
                <i className="far fa-clock"></i> 01th March, 2019
              </div>
            </div>
          </a>
          <a href="#" className="blog__sidebar__recent__item">
            <div className="blog__sidebar__recent__item__pic">
              <img src="img/blog/sidebar/recent-2.jpg" alt="" />
            </div>
            <div className="blog__sidebar__recent__item__text">
              <h6>Guests think these services</h6>
              <div className="time">
                <i className="far fa-clock"></i> 02th March, 2019
              </div>
            </div>
          </a>
          <a href="#" className="blog__sidebar__recent__item">
            <div className="blog__sidebar__recent__item__pic">
              <img src="img/blog/sidebar/recent-3.jpg" alt="" />
            </div>
            <div className="blog__sidebar__recent__item__text">
              <h6>Europe's 2018 hotel strengths</h6>
              <div className="time">
                <i className="far fa-clock"></i> 03th March, 2019
              </div>
            </div>
          </a>
        </div>
        <div className="blog__sidebar__categories">
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="#">Life Style</a>
            </li>
            <li>
              <a href="#">Photography</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Sport</a>
            </li>
          </ul>
        </div>
        <div className="blog__sidebar__comment">
          <h4>Recent Comments</h4>
          <p>
            Attending a trade show can be a very effective method of promoting
            your company and its
          </p>
          <span>Smart HVAC Solutions Keep It Comfortable</span>
          <p>
            When I was just starting 6th grade I got my first job. Paperboy!
            Boy, was I excited. At that
          </p>
          <span>Guests think these services would be easier</span>
          <p>
            Classifieds are usually the first place you think of when you are
            getting ready to make a
          </p>
          <span>Europe's 2018 hotel strengths belie</span>
        </div>
        <div className="blog__sidebar__tags">
          <h4>Popular Tags</h4>
          <a href="#">Creative</a>
          <a href="#">Unique</a>
          <a href="#">Travel</a>
          <a href="#">Restaurant</a>
          <a href="#">Workpress Template</a>
          <a href="#">Idea</a>
          <a href="#">Hotel</a>
        </div>
      </div>
    </BlogSideBarWrapper>
  )
}
export default BlogSideBar
const BlogSideBarWrapper = styled.div`
  .blog__sidebar {
    padding-left: 40px;
  }

  .blog__sidebar__search {
    margin-bottom: 65px;
  }

  .blog__sidebar__search h4 {
    color: #1d1c1c;
    font-weight: 500;
    margin-bottom: 25px;
  }

  .blog__sidebar__search form {
    position: relative;
  }

  .blog__sidebar__search form input {
    height: 48px;
    width: 100%;
    font-size: 16px;
    color: #777c81;
    padding-left: 20px;
    border: none;
    background: #ffffff;
  }

  .blog__sidebar__search form input::-webkit-input-placeholder {
    color: #8d8d8d;
  }

  .blog__sidebar__search form input::-moz-placeholder {
    color: #8d8d8d;
  }

  .blog__sidebar__search form input:-ms-input-placeholder {
    color: #8d8d8d;
  }

  .blog__sidebar__search form input::-ms-input-placeholder {
    color: #8d8d8d;
  }

  .blog__sidebar__search form input::placeholder {
    color: #8d8d8d;
  }

  .blog__sidebar__search form button {
    font-size: 16px;
    color: #ffffff;
    background: #e9ad28;
    border: none;
    font-weight: 500;
    letter-spacing: 2px;
    padding: 0 15px 0 25px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }

  .blog__sidebar__recent {
    margin-bottom: 60px;
  }

  .blog__sidebar__recent h4 {
    color: #1d1c1c;
    font-weight: 500;
    margin-bottom: 35px;
  }

  .blog__sidebar__recent__item {
    display: block;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .blog__sidebar__recent__item:last-child {
    margin-bottom: 0;
  }

  .blog__sidebar__recent__item__pic {
    float: left;
    margin-right: 20px;
  }

  .blog__sidebar__recent__item__text {
    overflow: hidden;
  }

  .blog__sidebar__recent__item__text h6 {
    color: #1d1c1c;
    font-weight: 500;
    margin-bottom: 38px;
  }

  .blog__sidebar__recent__item__text .time {
    font-size: 12px;
    color: #777c81;
  }

  .blog__sidebar__recent__item__text .time i {
    margin-right: 2px;
  }

  .blog__sidebar__categories {
    margin-bottom: 52px;
  }

  .blog__sidebar__categories h4 {
    color: #1d1c1c;
    font-weight: 500;
    margin-bottom: 24px;
  }

  .blog__sidebar__categories ul li {
    list-style: none;
    position: relative;
    padding-left: 18px;
  }

  .blog__sidebar__categories ul li:hover a {
    color: #e9ad28;
  }

  .blog__sidebar__categories ul li:hover:before {
    background: #e9ad28;
  }

  .blog__sidebar__categories ul li:before {
    position: absolute;
    left: 0;
    top: 14px;
    height: 5px;
    width: 5px;
    background: #bfc7ce;
    content: "";
    border-radius: 50%;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .blog__sidebar__categories ul li a {
    font-size: 16px;
    color: #1d1c1c;
    line-height: 36px;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
  }

  .blog__sidebar__comment {
    margin-bottom: 55px;
  }

  .blog__sidebar__comment h4 {
    color: #1d1c1c;
    font-weight: 500;
    margin-bottom: 26px;
  }

  .blog__sidebar__comment p {
    line-height: 28px;
    margin-bottom: 8px;
  }

  .blog__sidebar__comment span {
    display: block;
    color: #1d1c1c;
    line-height: 28px;
    margin-bottom: 12px;
  }

  .blog__sidebar__comment span:last-child {
    margin-bottom: 0;
  }

  .blog__sidebar__tags h4 {
    color: #1d1c1c;
    font-weight: 500;
    margin-bottom: 25px;
  }

  .blog__sidebar__tags a {
    display: inline-block;
    font-size: 14px;
    color: #777c81;
    padding: 8px 25px 6px 20px;
  }
`
