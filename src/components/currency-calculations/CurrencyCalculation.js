import React from "react";

const CurrencyCalculation = () => {
  return (
    <div className="dg__calculation__area bg__color--1 poss--relative section-padding--xlg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="dg__calculation">
              <h2>Calculation is a perfect way to get dessition</h2>
              <p>
                Lorem Ipsum is simply dummy the printing and typestting
                industry. Lorem Ipsum has been the industry's stndard dummy
                text. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="calculate__box">
                <p>Currency Calculator.</p>
                <input
                  className="btc-conterter"
                  type="text"
                  placeholder={1}
                  data-current-rate="9205.68"
                />
                <span>=</span>
                <input
                  className="btc-coverter-output"
                  type="text"
                  placeholder="8003.23"
                />
                <div className="dg__select__option">
                  <select>
                    <option>Bitcoin (BTC)</option>
                    <option>BUZZ (BUZZ)</option>
                    <option>BVC (BVC)</option>
                    <option>BXT (BXT)</option>
                    <option>BXT (BXT)</option>
                  </select>
                  <select className="space--left">
                    <option>US Dollar (USD)</option>
                    <option>PPT (PPT)</option>
                    <option>PRC (PRC)</option>
                    <option>PRG (PRG)</option>
                    <option>PRO (PRO)</option>
                    <option>PTA (PTA)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape--1">
        <img
          src={process.env.PUBLIC_URL + "/images/about/1.png"}
          alt="images"
        />
      </div>
    </div>
  );
};

export default CurrencyCalculation;
