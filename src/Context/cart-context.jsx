import React, { createContext, useContext, useReducer } from "react";

const AddToCartContext = createContext(null);

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: [...cartState.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: cartState.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return cartState;
  }
};

const AddToCartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
  return (
    <AddToCartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </AddToCartContext.Provider>
  );
};

const useAddToCart = () => useContext(AddToCartContext);

export { AddToCartProvider, useAddToCart };
