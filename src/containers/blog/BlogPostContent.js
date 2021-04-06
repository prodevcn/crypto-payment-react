import React from "react";
import BlogSidebar from "../../components/blog/BlogSidebar";
import { Link } from "react-router-dom";
import { FaRss, FaPinterestP, FaVimeoV, FaGoogle } from "react-icons/fa";

const BlogPostContent = () => {
  return (
    <div className="dg__blog__area bg--white section-padding--xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="dg__blog__details right--sidebar">
              <div className="dg__blog__dtl">
                <div className="thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/list/bd3.jpg"}
                    alt="blog images"
                  />
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est.
                  </p>
                </div>
              </div>
              <div className="dg__blog__dtl blog__related">
                <div className="thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/list/bd1.png"}
                    alt="blog images"
                  />
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est.
                  </p>
                </div>
              </div>
              <blockquote>
                I am a kind of paranoid in reverse. I suspect people of plotting
                to make me happy.
                <span>J. D. Salinger</span>
              </blockquote>
              <p className="blog__pra">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est.
              </p>
              <div className="blog__pagination">
                <ul className="bl__dtl__tag">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/blog"}>Cleaning</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/blog"}>Print</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/blog"}>Creative</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/blog"}>Support</Link>
                  </li>
                </ul>
                <ul className="blog__page">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>Prev</Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>Next</Link>
                  </li>
                </ul>
              </div>
              {/* Start Blog Author */}
              <div className="blog__author">
                <div className="thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/comment/4.png"}
                    alt="author images"
                  />
                </div>
                <div className="content">
                  <h2>Lauren Wallace</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which.
                  </p>
                  <ul>
                    <li>
                      <a
                        href="//rss.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaRss />
                      </a>
                    </li>
                    <li>
                      <a
                        href="//pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPinterestP />
                      </a>
                    </li>
                    <li>
                      <a
                        href="//vimeo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaVimeoV />
                      </a>
                    </li>
                    <li>
                      <a
                        href="//gogole.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGoogle />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Blog Author */}
              {/* Start Blog Comment */}
              <div className="blog__comment">
                <h2 className="blog__title">Comments</h2>
                <div className="comment">
                  <div className="thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/blog/comment/1.png"
                      }
                      alt="comment images"
                    />
                  </div>
                  <div className="content">
                    <h4>Alvaro Santos</h4>
                    <div className="comment__action">
                      <span>08 Jun 2020</span>
                      <button className="reply__btn">reply</button>
                    </div>
                    <p>
                      But I must explain to you how all this mistaken ide a of
                      denouncing pleasure and ising pain borand I will give you
                      a complete account of the system
                    </p>
                  </div>
                </div>
                <div className="comment cmment__reply">
                  <div className="thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/blog/comment/2.png"
                      }
                      alt="comment images"
                    />
                  </div>
                  <div className="content">
                    <h4>Julia thomas</h4>
                    <div className="comment__action">
                      <span>08 Jun 2020</span>
                      <button className="reply__btn">reply</button>
                    </div>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denounng pleasure and ising pain borand I will give you a
                      complete
                    </p>
                  </div>
                </div>
                <div className="comment">
                  <div className="thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/blog/comment/1.png"
                      }
                      alt="comment images"
                    />
                  </div>
                  <div className="content">
                    <h4>NICOLUS SMITH</h4>
                    <div className="comment__action">
                      <span>08 Jun 2020</span>
                      <button className="reply__btn">reply</button>
                    </div>
                    <p>
                      But I must explain to you how all this mistaken ide a of
                      denouncing pleasure and ising pain borand I will give you
                      a complete account of the system
                    </p>
                  </div>
                </div>
              </div>
              {/* End Blog Comment */}
              {/* Start Comment Form */}
              <div className="comment__form__area">
                <h2 className="blog__title">Leave a Comment</h2>
                <form action="#">
                  <div className="comment__box">
                    <div className="input__box name">
                      <input type="text" placeholder="Name" />
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="input__box">
                      <textarea placeholder="Massage" defaultValue={""} />
                    </div>
                    <div className="submit__btn">
                      <button>SEND Now</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Comment Form */}
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            {/* sidebar */}
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
