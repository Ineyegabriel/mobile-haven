import React, {useContext} from "react";
import "./AvailableCapacity.scss";
import { ShopContext } from "../../State/Context/ShopContext";


const AvailableCapacity = ({ capacities }) => {
  const {setCapacity,setMemorySize} = useContext(ShopContext);
  const priceHandler = (e, val) => {
    setCapacity(val);
  };
  const capacityHandler = (e, value) => {
    setMemorySize(value)
  }
  return (
    <div className="Capacity__Container">
      <h2>Which phone is right for you ? </h2>
      <div className="Capacity__Choice">
        {capacities.map((item, index) => {
          return (
            <span className="Capacity__Option" key={index}>
              <input
                type="radio"
                id={`check` + index}
                className="Capacity__Select"
                name="capacity"
                onClick={(e) => priceHandler(e, item.price)}
              />
              
              <label
                htmlFor={`check` + index}
                className={`Capacity__Label ${
                  item.outOfStock ? "Out__Of--Stock" : ""
                }`}
                value={item.price}
                onClick={(e) => capacityHandler(e, item.capacity)}
              >
                {item.capacity}
              </label>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableCapacity;
