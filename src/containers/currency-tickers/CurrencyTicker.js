import PropTypes from "prop-types";
import React from "react";
import tickerData from "../../data/currency-tickers/currency-ticker.json";
import CurrencyTickerSingle from "../../components/currency-tickers/CurrencyTickerSingle";

const CurrencyTicker = ({ theme }) => {
  return (
    <div
      className={`${
        theme && theme === "dark" ? "bg__color--4 tickets--2" : "bg__color--5"
      } bg__ticker__ares`}
    >
      <div className="conteiner-fluid">
        <div className="row">
          {tickerData &&
            tickerData.map((single, key) => {
              return <CurrencyTickerSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

CurrencyTicker.propTypes = {
  theme: PropTypes.string
};

export default CurrencyTicker;
