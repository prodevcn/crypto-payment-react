import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Logo from "../../components/header/Logo";
import Navigation from "../../components/header/Navigation";
import HeaderBtn from "../../components/header/HeaderBtn";
import MobileMenu from "../../components/header/MobileMenu";
import {connect} from 'react-redux';
const Header = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <header
      className={`dg__header header--absolute space-right-left ${
        scroll > headerTop ? "stick" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2 col-xl-2 col-6">
            <Logo
              image={
                theme === "white" ? "/images/logo/logo2.png" : "/images/logo/logo2.png"
              }
            />
          </div>
          <div className="col-lg-7 col-xl-6 d-none d-lg-block">
            <Navigation />
          </div>
          <div className="col-lg-3 col-xl-4 col-6">
            <HeaderBtn />
          </div>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string
};
const mapStateToProps = (store) => {
  const {auth, authenticated, user} = store.auth;
  return {auth, authenticated, user};
}

export default connect (mapStateToProps)(Header);
