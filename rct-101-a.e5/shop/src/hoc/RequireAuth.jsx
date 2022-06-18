import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  //   there is a problem in our code that we have to use back button twice to go to previous page --> to solve this refer lecture from 1h 40 min to 1 hr 55 min --> how to skip unwanted pages while using back button
  const { pathname } = useLocation();
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: pathname }} replace />;
    // note --> in react code we cannot use navigate() [navigate functionality] --> instead we have to use Navigate component
  }
};

export default RequireAuth;
