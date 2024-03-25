import React, { createContext, useContext, useState } from "react";
import Products from "../../products";

const ContextContainer = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const [cardAmount, setCardAmount] = useState(0);
  const [cardQuantity, setCardQuantity] = useState(products.length);


  
  return (
    <ContextContainer.Provider
      value={{
        products,
        setProducts,
        cardQuantity,
        setCardQuantity,
        setCardAmount,
        cardAmount
      }}
    >
      {children}
    </ContextContainer.Provider>
  );
};

export const useUserContext = () => {
  return useContext(ContextContainer);
};