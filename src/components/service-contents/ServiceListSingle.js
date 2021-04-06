import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const ServiceListSingle = ({ data }) => {
  return (
    <div className="service__2">
      <div className="icon">
        <img src={process.env.PUBLIC_URL + data.icon} alt="service icon" />
      </div>
      <div className="content">
        <h4>
          <Link to={process.env.PUBLIC_URL + data.url}>{data.title}</Link>
        </h4>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

ServiceListSingle.propTypes = {
  data: PropTypes.object
};

export default ServiceListSingle;
