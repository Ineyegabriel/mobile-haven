import React from "react";
import Product from "../Product/Product";
import "./Products.scss";

const Products = ({ products }) => {
  const template = products.map(
    (item) => {
      const { id, name, initialPhonePrice, initialPlan, variants, ...rest} = item;
      return (
        <Product
          key={id}
          id ={id}
          name={name}
          price={initialPhonePrice.value}
          plan={initialPlan}
          combinedImage={variants[0].phoneImages[0]}
          frontImage={variants[0].phoneImages[1]}
          variants={variants}
          {...rest}
        />
      );
    }
  );

  return (
    <div className="Products__Grid">
      {template}
    </div>
  );
};
export default Products;
