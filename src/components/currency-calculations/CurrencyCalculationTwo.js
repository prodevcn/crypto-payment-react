import React from "react";
import LiveChartTwo from "../live-chart/LiveChartTwo";

const CurrencyCalculationTwo = () => {
  return (
    <div className="dg__converter__area converter__wrapper bg--white section-padding--xl" style={{padding: 0}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            {/* <div className="thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/5.png"}
                alt="converter images"
              />
            </div> */}
            <LiveChartTwo />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content">
              <h2>Todays Converter</h2>
              <p className="first">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="bit__convert">
                <div className="single__convert">
                  <select>
                    <option>BTC</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>LTC</option>
                    <option>RUB</option>
                  </select>
                  <input type="text" placeholder="01" />
                  <span>Bitcoin Number</span>
                </div>
                <div className="single__convert">
                  <select>
                    <option>USD</option>
                    <option>BTC</option>
                    <option>EUR</option>
                  </select>
                  <input type="text" placeholder="11750.55" />
                  <span>USD Number</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCalculationTwo;
