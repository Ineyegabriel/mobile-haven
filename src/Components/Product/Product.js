import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

const Product = ({
  name,
  plan,
  price,
  frontImage,
  combinedImage,
  products,
  variants,
  ...rest
}) => {

  const addDefaultSrc = (ev) => {
    ev.target.src = frontImage;
  };
 
  return (
    <Link
      className="link"
      to={{
        pathname: "/phonedetails",
        state: {
          name,
          plan,
          price,
          frontImage,
          combinedImage,
          products,
          variants,
          ...rest,
        },
      }}
    >
      <div className="Card">
        <div className="Card__Image--Wrapper Card__item">
          <img
            className="Card__Image"
            src={combinedImage}
            alt={name}
            onError={addDefaultSrc}
          />
        </div>
        <div className="Card__Info--Wrapper Card__item">
          <div className="Card__Product--Plan">
            <span>
              <ul>
                <li>{plan.planName}</li>
                <li>€{plan.planPrice} monthly</li>
              </ul>
            </span>
          </div>
          <h4 className="Card__Product--Name">{name}</h4>
          <span className="Card__Product--Price">
            {(price !== "0.00" && <span>€{price}</span>) || <span>Free</span>}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default Product;
