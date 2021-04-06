import React from "react";
import { Link } from "react-router-dom";
import {FaWallet} from "react-icons/fa";

const HowWorks = () => {
  return (
    <div className="dg__work__area how__work">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/cards/logos.png"}
                alt="computer images"
              />
              
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content">
              <h2 style={{margin: 0}}>10 + e-Currency</h2>
              <h2>in your account</h2>
              <h6>
                cryptocurrency is a digital asset designed to work as a medium
                of exchange
              </h6>
              <p>
              BTC, ETH, LTC, OMNI, XRP, TRX and other e-currency in your free CoinPay account!
              </p>
              <Link
                className="slide__btn dg__btn btn--green btn--them"
                to={process.env.PUBLIC_URL + "/login-register"}
              ><FaWallet /> &nbsp;
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
