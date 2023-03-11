import React, { createContext } from "react";

const AddToCartProvider = ({ children }) => {
  const AddToCartContext = createContext(null);
  return <AddToCartContext.Provider>{children}</AddToCartContext.Provider>;
};

export { AddToCartProvider };
