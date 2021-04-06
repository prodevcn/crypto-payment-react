import PropTypes from "prop-types";
import React from "react";

const SectionTitleTwo = ({ title }) => {
  return (
    <div className="section__title--2">
      <h2>{title}</h2>
    </div>
  );
};

SectionTitleTwo.propTypes = {
  title: PropTypes.string
};

export default SectionTitleTwo;
