import PropTypes from "prop-types";
import React from "react";

const ServiceFeatureSingle = ({ data }) => {
  return (
    <div className="service__2">
      <div className="icon">
        <img src={process.env.PUBLIC_URL + data.icon} alt="service icon" />
      </div>
      <div className="content">
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

ServiceFeatureSingle.propTypes = {
  data: PropTypes.object
};

export default ServiceFeatureSingle;
