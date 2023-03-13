import React, { createContext, useContext, useReducer } from "react";

const AddToCartContext = createContext(null);

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cart: cartState.cart.find((item) => item.id === action.payload.id)
          ? [
              ...cartState.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            ]
          : [...cartState.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cart: cartState.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_QUANTITY":
      return {
        ...cartState,
        cart: cartState.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...cartState,
        cart: cartState.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...cartState,
        cart: [],
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
