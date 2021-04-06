import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Header from "../containers/headers/Header";
// import BrandLogo from "../containers/brand-logos/BrandLogo";
// import Newsletter from "../components/newsletters/Newsletter";
import Footer from "../containers/footers/Footer";

const Layout = ({ children, theme }) => {
  return (
    <Fragment>
      <Header theme={theme} />
      {children}
      {/* <BrandLogo /> */}
      {/* <Newsletter /> */}
      <Footer theme={theme} />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default Layout;