import PropTypes from "prop-types";
import React from "react";

const MerchantSingle = ({ data }) => {
  return (
    <div className="merchants">
      <div className="thumb">
        <a
          href={process.env.PUBLIC_URL + data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + data.image}
            alt="merchants images"
          />
        </a>
      </div>
    </div>
  );
};

MerchantSingle.propTypes = {
  data: PropTypes.object
};

export default MerchantSingle;
