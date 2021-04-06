import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ image }) => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img
          src={process.env.PUBLIC_URL + image}
          alt="logo images"
          className="img-fluid"
        />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string
};

export default Logo;
