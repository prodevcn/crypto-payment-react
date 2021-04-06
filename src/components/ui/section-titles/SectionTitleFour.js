import PropTypes from "prop-types";
import React from "react";

const SectionTitleFour = ({ title }) => {
  return <h3 className="section__title--4">{title}</h3>;
};

SectionTitleFour.propTypes = {
  title: PropTypes.string
};

export default SectionTitleFour;
