import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../containers/headers/Header";
import BrandLogo from "../containers/brand-logos/BrandLogo";
import Newsletter from "../components/newsletters/Newsletter";
import Footer from "../containers/footers/Footer";

const Layout2 = ({ children, theme }) => {
  return (
    <Fragment>
      <Header theme={theme} />
      {children}
      <BrandLogo />
      <Newsletter />
      <Footer theme={theme} />
    </Fragment>
  );
};

Layout2.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default Layout2;