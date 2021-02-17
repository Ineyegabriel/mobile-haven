import React from "react";
import "./Tariff.scss";

const Tariff = ({
  planName,
  planPrice,
  phonePrice,
  dataAllowance,
  freeExtra,
}) => {
  return (
    <div className="Tariff__Card">
      <div className="Tariff__Plan--Name">
        <span>{planName}</span>
        <span className="Tariff__Plan--Data">
          <span>{dataAllowance}</span>/mo
        </span>
        <span className="Tariff__Extra">{freeExtra}</span>
      </div>

      <span className="Tariff__Price--Wrapper">
        <span className="Tariff__Price">
          <ul>
            <li>Our price</li>
            <li>&euro;{planPrice}</li>
          </ul>
        </span>
        <span className="Tariff__Price">
          <ul>
            <li>Retail price</li>
            <li>
              {
                (phonePrice === 'Free' || Number(phonePrice) === 0) ?"Free":  <span>&euro;{phonePrice}</span>
              }
            </li>
          </ul>
        </span>
      </span>
      <span className="Tariff__Choice">Choose this plan</span>
    </div>
  );
};
export default Tariff;
