import PropTypes from "prop-types";
import React from "react";

const SectionTitleSix = ({ title, text }) => {
  return (
    <div className="section__title--6">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

SectionTitleSix.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

export default SectionTitleSix;
