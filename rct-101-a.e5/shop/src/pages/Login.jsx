import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  // let navigatetoHome = useNavigate();
  const [loginCreds, setLoginCreds] = useState({});

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, "m");
    // console.log(value, "mv");
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    login();
    // navigatetoHome("/feeds");
  };
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Email..."
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password..."
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
