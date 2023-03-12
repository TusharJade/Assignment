import React, { createContext, useContext, useState } from "react";

const OrdersContext = createContext(null);

const OrdersContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};

const useOrderContext = () => useContext(OrdersContext);

export { OrdersContextProvider, useOrderContext };
