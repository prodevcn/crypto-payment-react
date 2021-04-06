import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import ParticleTwo from "../particles/ParticleTwo";
import { FaWallet } from "react-icons/fa";
// import Particle from "../particles/Particle";
// import { MdGradient, MdBlock } from "react-icons/md";

const HeroSliderSingle = ({ data }) => {
  return (
    <div
      className="slide d-flex align__center poss--relative"
      style={{
        // backgroundImage: `url(${process.env.PUBLIC_URL +
        //   data.backgroundImage})`,
        backgroundImage: `radial-gradient(circle farthest-side at 50% 150%, #001532 7%, #005ad0 17%, #001532 79%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <img 
        src={process.env.PUBLIC_URL + data.globeImage}
        className="bg__globe"
        alt="globe"
      />
      {/* <img 
        src={process.env.PUBLIC_URL + data.mapImage}
        className="bg__small"
        alt="globe"
      /> */}
      {/* <img 
        src={process.env.PUBLIC_URL + data.mapImage}
        style={{
          display: 'block', 
          position: 'absolute', 
          left: '50%',  
          bottom: '0',
          transform: `translate(-50%)`
          }}
      /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
            <div className="slide__inner">
              <h1 style={{margin: '0', padding: '0'}}>{data.title1}</h1>
              <h1 style={{topMargin: '0', padding: '0', color: '#FFA400'}}>{data.title2}</h1>
              <p>{data.text}</p>
              <Link
                className="slide__btn dg__btn btn--green btn--theme"
                to={process.env.PUBLIC_URL + data.url}
              >
                <FaWallet /> &nbsp; My Account
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* particle */}
      <ParticleTwo />
    </div>
  );
};

HeroSliderSingle.propTypes = {
  data: PropTypes.object
};

export default HeroSliderSingle;
