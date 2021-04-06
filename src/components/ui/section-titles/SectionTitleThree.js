import PropTypes from "prop-types";
import React from "react";

const SectionTitleThree = ({ title, text }) => {
  return (
    <div className="section__title--3 text-center">
      <h2 className="with__line">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

SectionTitleThree.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

export default SectionTitleThree;
