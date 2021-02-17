import React, { useState, Fragment, useContext, useEffect } from "react";
import "./TopSection.scss";
import ProductDetailsImages from "../ProductDetailsImages/ProductDetailsImages";
import { ShopContext } from "../../State/Context/ShopContext";
import AvailableCapacity from "../AvailableCapacity/AvailableCapacity";

const TopSection = ({ name, variants, summary }) => {
  const { setCapacity, setCurrentPhone, setColor} = useContext(ShopContext);
  const { phoneImages, pricingOptions } = variants[0];
  const [selected, setSelected] = useState(phoneImages);
  const [price, setPrice] = useState(pricingOptions);

  useEffect(() => {
    setCurrentPhone(name);
    setCapacity(pricingOptions[0].price);
  }, [pricingOptions, setCapacity, name, setCurrentPhone]);

  const variantImageHandler = (e, val) => {
    setSelected(val[0]);
    setPrice(val[1]);
    setColor(val[2]);
    
  };

  return (
    <section>
      <div className="Top__Section--Wrapper">
        <ProductDetailsImages images={selected} altname={name} />
        <div className="Variant__Row">
          <h3>{name}</h3>
        </div>
        <div className="Variant__Color--Capacity">
          <AvailableCapacity capacities={price} />
          <div className="Variant__Colors--Row ">
            {variants.map((item, index) => {
              return (
                <Fragment key={index}>
                  <button
                    className="Variant__Color"
                    style={{ backgroundColor: `${item.colorCode}` }}
                    onClick={(e) =>
                      variantImageHandler(e, [
                        item.phoneImages,
                        item.pricingOptions,
                        item.colour,
                      ])
                    }
                  />
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="Variant__Summary">
          <h2>Key Features</h2>
          <p dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
