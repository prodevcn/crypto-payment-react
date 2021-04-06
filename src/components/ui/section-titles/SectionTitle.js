import PropTypes from "prop-types";
import React from "react";

const SectionTitle = ({ title, text }) => {
  return (
    <div className="section__title text-center">
      <h2 className="with__line">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

export default SectionTitle;
