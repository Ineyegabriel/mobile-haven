import React, { createContext, useReducer, useState, useEffect } from "react";
import initialState from "../Reducer/initialState";
import ShopReducer from "../Reducer/ShopReducer";
export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [state] = useReducer(ShopReducer, initialState);
  const [currentPhone, setCurrentPhone] = useState(null);
  const [capacity, setCapacity] = useState([]);
  const [memorysize, setMemorySize] = useState(null);
  const [color, setColor] = useState("");
  const [tariff, setTariff] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [searchresult, setSearchResult] = useState([]);
  const [announcedpage, setAnnouncePage] = useState([]);
  useEffect(() => {
    const {
      products: { products },
    } = state;
    if (searchQuery.length > 0) {
      let data = Array.from(products).filter((item) => {
        return item.name.toLowerCase().indexOf(searchQuery) !== -1;
      });
      setSearchResult(data);
    } else {
      return null;
    }
  }, [searchQuery, state]);

  const value = {
    state,
    capacity,
    setCapacity,
    tariff,
    setTariff,
    currentPhone,
    setCurrentPhone,
    memorysize,
    setMemorySize,
    color,
    setColor,
    searchQuery,
    setSearchQuery,
    searchresult,
    setSearchResult,
    announcedpage, 
    setAnnouncePage
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopProvider;
