import React, { useContext } from "react";
import "./BottomSection.scss";
import { ShopContext } from "../../State/Context/ShopContext";

const BottomSection = (props) => {
  const { fieldItems } = props;
  const { tariff, currentPhone, memorysize, color } = useContext(ShopContext);

  return (
    <section className="Bottom__Section--Wrapper">
      <div
        dangerouslySetInnerHTML={{ __html: fieldItems }}
        className="Fieldset__Details"
      />
      {tariff.phonePrice ? (
        <div className="Preview__Wrapper">
          <span className="Preview__Phone--Name">{currentPhone} </span>
          <span className="Preview__Phone--Name">{memorysize} storage </span>
          <span>{color}</span>
          <span className="Preview__Phone--Capacity"></span>
          <span className="Preview__Phone--Tariff">
            {tariff.planName} at {tariff.planPrice} monthly
          </span>
          <span className="Preview__Phone--Tariff">
            Retail price:{" "}
            {tariff.phonePrice === "Free" || Number(tariff.phonePrice) === 0 ? (
              "Free"
            ) : (
              <span>&euro;{tariff.phonePrice}</span>
            )}
          </span>
          <button className="Tariff__Choice">Add to cart</button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default BottomSection;
