import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const EasyStartSingle = ({ data }) => {
  return (
    <div className="service">
      <div className="icon">
        <img src={process.env.PUBLIC_URL + data.icon} alt="icons" />
      </div>
      <h4>
        <Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link>
      </h4>
      <p>{data.text}</p>
    </div>
  );
};

EasyStartSingle.propTypes = {
  data: PropTypes.object
};

export default EasyStartSingle;
