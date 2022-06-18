import React, { createContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const login = () => {
    setIsAuth(true);
    if (state.from) {
      navigate(state.from, { replace: true });
    } else {
      navigate("/");
    }
  };
  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };
  return (
    //   its just like writing value = {obj} --> obj = {isAuth:"isAuth",login:"login",logout:"logout"} --> where keys and values are same
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
