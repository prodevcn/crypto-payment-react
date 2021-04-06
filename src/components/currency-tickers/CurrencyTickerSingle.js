import PropTypes from "prop-types";
import React from "react";

const CurrencyTickerSingle = ({ data }) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 col-12 right_border">
      <div className="ticket">
        <h6>{data.title}</h6>
        <span>{data.subtitle}</span>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

CurrencyTickerSingle.propTypes = {
  data: PropTypes.object
}

export default CurrencyTickerSingle;
