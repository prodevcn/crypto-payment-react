import React from "react";

const GetCurrency = () => {
  return (
    <div className="dg__get__currency__area section-padding--xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="get__currency">
              <h2>Get Currency,</h2>
              <h3>Integrated gateway for cryptocurrencies</h3>
              <div className="currency__wrapper">
                <form action="#">
                  <div className="currency__box">
                    <div className="currency__form">
                      <div className="input__box name">
                        <span>First Name*</span>
                        <input type="text" />
                      </div>
                      <div className="input__box name">
                        <span>Last Name*</span>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="input__box">
                      <span>Email Address*</span>
                      <input type="email" />
                    </div>
                    <div className="input__box">
                      <span>A/C No 15 Digit*</span>
                      <input type="text" />
                    </div>
                    <div className="input__box">
                      <span>Wallet Details (Optional)</span>
                      <input type="text" />
                    </div>
                    <div className="submit__btn">
                      <button>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="images-2">
            <img
              src={process.env.PUBLIC_URL + "/images/about/wallet-2.png"}
              alt="wallet images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCurrency;
