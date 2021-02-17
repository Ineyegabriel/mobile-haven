import React, { useContext, memo } from "react";
import { ShopContext } from "../../State/Context/ShopContext";
import Tariff from "../Tariff/Tariff";
import "./MiddleSection.scss";

const MiddleSection = memo(() => {
  const { capacity, setTariff } = useContext(ShopContext);
  const tariffHandler = (e,val) =>{
    setTariff(val);
   
  }
  if (capacity.length !== 0) {
    return (
      <section className="Section_Tariff">
        <div className="Middle__Section">
          {capacity.map((item, index) => {
            const {
              planName,
              planPrice,
              phonePrice,
              dataAllowance,
              freeExtra,
            } = item;
            return (
              <div key={index} className="Middle__Section--Item">
                <input
                  type="radio"
                  className="Tariff__Check"
                  name="tariff-check"
                  id={`tariff-check` + index}
                  
                  onClick={(e) => tariffHandler(e, item)}
                />
                <label
                  htmlFor={`tariff-check` + index}
                  className="Tariff__Label"
                  tabIndex={index}
                >
                  <Tariff
                    planName={planName}
                    planPrice={planPrice}
                    phonePrice={phonePrice}
                    dataAllowance={dataAllowance}
                    freeExtra={freeExtra}
                  />
                </label>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  return <p>Loading...</p>;
});

export default MiddleSection;
