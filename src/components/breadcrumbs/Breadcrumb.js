import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import ParticleTwo from "../particles/ParticleTwo";

const Breadcrumb = ({ title }) => {
  return (
    <div
      className="ht__bradcaump__area"
      style={{
        background: `rgba(0, 0, 0, 0) url(${process.env.PUBLIC_URL +
          "/images/bg/7.jpg"}) repeat scroll center center/105% 100%`
      }}
    >
      <div className="ht__bradcaump__container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcaump__inner text-center">
                <h2 className="bradcaump-title">{title}</h2>
                <nav className="bradcaump-inner">
                  <Link
                    className="breadcrumb-item"
                    to={process.env.PUBLIC_URL + "/"}
                  >
                    Home
                  </Link>
                  <span className="brd-separetor">/</span>
                  <span className="breadcrumb-item active">{title}</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* particle */}
      <ParticleTwo />
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string
};

export default Breadcrumb;
