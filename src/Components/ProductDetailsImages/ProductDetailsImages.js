import React from "react";
import "./ProductDetailsImages.scss";
import { fallbackUrl } from "../../Utils/js/export";

const ProductDetailsImages = ({ images, altname}) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = fallbackUrl;
  };
  return (
    <div className="grid-item">
      <div className="ProductImage__Wrapper">
        {images.map((item, index) => (
          <div className="Product__container" key={index}>
            <img
              src={item}
              alt={altname}
              className={`Product__Details--Image${index}`}
              onError={addDefaultSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsImages;
