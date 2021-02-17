import React, { Fragment,useEffect,useContext } from "react";
import { useLocation } from "react-router-dom";
import BottomSection from "../Components/BottomSection/BottomSection";
import MiddleSection from "../Components/MiddleSection/MiddleSection";
import TopSection from "../Components/TopSection/TopSection";
import {ShopContext} from '../State/Context/ShopContext';
const ProductDetails = () => {
  
  const location = useLocation();
  const {
    name,
    variants,
    summary,
    fieldItems,
    specifications,
    brand,
    model,
  } = location.state;
const {setAnnouncePage} = useContext(ShopContext)
  useEffect(() =>{
    setAnnouncePage("/phonedetails")
  },[setAnnouncePage])



  return (
    <Fragment>
      <TopSection name={name} variants={variants} summary={summary} />
      <MiddleSection />
      <BottomSection
        fieldItems={fieldItems}
        specifications={specifications}
        brand={brand}
        model={model}
      />
    </Fragment>
  );
};

export default ProductDetails;
