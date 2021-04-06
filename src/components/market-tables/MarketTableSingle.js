import PropTypes from "prop-types";
import React from "react";

const MarketTableSingle = ({ data }) => {
  return (
    <tr>
      <td className="market-no">#{data.id}</td>
      <td className="market-symbol">{data.symbol}</td>
      <td className="market-prize">${data.price}</td>
      <td className="market-volume">${data.volume}</td>
      <td className="market-dat">{data.percent}%</td>
    </tr>
  );
};

MarketTableSingle.propTypes = {
  data: PropTypes.object
};

export default MarketTableSingle;
