import React from "react";
import { Link } from "react-router-dom";

const BlogContent = () => {
  return (
    <div className="dg__blog__area bg--white pt--110 pb--140">
      <div className="container">
        <div className="row">
          {/* Start Single Blog */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <article className="blog__3">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/3.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <div className="bl__author">
                  <img src="images/blog/sm-img/1.png" alt="author images" />
                  <div className="author__inner">
                    <h6>Farhan</h6>
                    <span>16 Feb, 2020</span>
                  </div>
                </div>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    Large Mining Farm Discovered in Abandoned Russian Factory
                  </Link>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text{" "}
                </p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
          {/* Start Single Blog */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <article className="blog__3">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/4.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <div className="bl__author">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/sm-img/2.png"}
                    alt="author images"
                  />
                  <div className="author__inner">
                    <h6>Alex</h6>
                    <span>16 Feb, 2020</span>
                  </div>
                </div>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    Phasellus semper felisnon imperdiet varius.
                  </Link>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text{" "}
                </p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
          {/* Start Single Blog */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <article className="blog__3">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/5.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <div className="bl__author">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/sm-img/1.png"}
                    alt="author images"
                  />
                  <div className="author__inner">
                    <h6>Maria</h6>
                    <span>16 Feb, 2020</span>
                  </div>
                </div>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    World’s Central Bank: Crypto Could Risk Bank Runs
                  </Link>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text{" "}
                </p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
          {/* Start Single Blog */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <article className="blog__3">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/6.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <div className="bl__author">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/sm-img/1.png"}
                    alt="author images"
                  />
                  <div className="author__inner">
                    <h6>Farhan</h6>
                    <span>16 Feb, 2020</span>
                  </div>
                </div>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    Blogger ‘Bitfinex’ed’ Hires Legal Counsel to Fight Bitfinex
                    Lawsuit
                  </Link>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text{" "}
                </p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
          {/* Start Single Blog */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <article className="blog__3">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/7.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <div className="bl__author">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/sm-img/1.png"}
                    alt="author images"
                  />
                  <div className="author__inner">
                    <h6>James J Trump</h6>
                    <span>16 Feb, 2020</span>
                  </div>
                </div>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    World’s Central Bank: Crypto Could Risk Bank Runs
                  </Link>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text{" "}
                </p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
          {/* Start Single Blog */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <article className="blog__3">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/8.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <div className="bl__author">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/sm-img/2.png"}
                    alt="author images"
                  />
                  <div className="author__inner">
                    <h6>James J Trump</h6>
                    <span>16 Feb, 2020</span>
                  </div>
                </div>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    Phasellus semper felisnon imperdiet varius.
                  </Link>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text{" "}
                </p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
          {/* Start Single Blog */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <article className="blog__3">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/9.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <div className="bl__author">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/sm-img/3.png"}
                    alt="author images"
                  />
                  <div className="author__inner">
                    <h6>John Smith</h6>
                    <span>16 Feb, 2020</span>
                  </div>
                </div>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    World’s Central Bank: Crypto Could Risk Bank Runs
                  </Link>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text{" "}
                </p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
          {/* Start Single Blog */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <article className="blog__3">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/10.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <div className="bl__author">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/sm-img/4.png"}
                    alt="author images"
                  />
                  <div className="author__inner">
                    <h6>Robert</h6>
                    <span>16 Feb, 2020</span>
                  </div>
                </div>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    Phasellus semper felisnon imperdiet varius.
                  </Link>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text{" "}
                </p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
          {/* Start Single Blog */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <article className="blog__3">
              <div className="thumb">
                <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/md-img/11.jpg"}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content">
                <div className="bl__author">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blog/sm-img/5.png"}
                    alt="author images"
                  />
                  <div className="author__inner">
                    <h6>Robert Downey</h6>
                    <span>16 Feb, 2020</span>
                  </div>
                </div>
                <h2>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    Phasellus semper felisnon imperdiet varius.
                  </Link>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text{" "}
                </p>
              </div>
            </article>
          </div>
          {/* End Single Blog */}
        </div>
        <div className="row mt--40">
          <div className="col-lg-12">
            <ul className="dg__pagination d-flex">
              <li>
                <a href={process.env.PUBLIC_URL + "/"}>01</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/"}>02</a>
              </li>
              <li>
                <a className="active" href={process.env.PUBLIC_URL + "/"}>
                  03
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/"}>04</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/"}>05</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/"}>......</a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL + "/"}>10</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
