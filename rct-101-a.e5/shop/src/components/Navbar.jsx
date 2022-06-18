import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // instead of writing it here use it in AuthContext
  const handleLoginClick = () => {
    if (isAuth) {
      logout();
      // navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar:
      <Link to="">HOME</Link>
      {isAuth && <Link to="/cart">Cart</Link>}
      <button onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</button>
      {/* we can use either button or link */}
      {/* <Link to="/login">Login</Link> */}
    </div>
  );
};

export default Navbar;
