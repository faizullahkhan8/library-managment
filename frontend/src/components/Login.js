import React, { useState } from "react";
import Backbutton from "./subComponents/Backbutton.js";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = () => {};
  return (
    <form>
      <fieldset>
        <h1>Login</h1>
        <div className="Backbutton">
          <Backbutton />
        </div>

        <input
          type="text"
          placeholder="username..."
          required
          onChange={(e) => setusername(e.target.value)}
        />

        <input
          type="password"
          placeholder="password..."
          required
          onChange={(e) => setpassword(e.target.value)}
        />
        <p style={{ color: "red" }}></p>
        <button onClick={handleLogin}>Login</button>
        <Link to="/register" style={{ textDecoration: "none" }}>
          Not on Libraty yet / SGIN UP
        </Link>
      </fieldset>
    </form>
  );
};

export default Login;
