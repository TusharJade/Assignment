import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({
    token: localStorage.getItem("USER_TOKEN"),
    userName: localStorage.getItem("USER_NAME"),
    isLogin: localStorage.getItem("USER_TOKEN") ? true : false,
  });
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
