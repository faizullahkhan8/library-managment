import React, { useState } from "react";
import Backbutton from "./subComponents/Backbutton.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    await axios
      .post("http://127.0.0.1:8080/register", { name, username, password })
      .then((Response) => {
        console.log(Response);
        navigate("/allBook");
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <form>
      <fieldset>
        <h1>Sign Up</h1>
        <div className="Backbutton">
          <Backbutton />
        </div>

        <input
          type="text"
          placeholder="name..."
          onChange={(e) => setname(e.target.value)}
        />

        <input
          type="text"
          placeholder="username..."
          onChange={(e) => setusername(e.target.value)}
        />

        <input
          type="text"
          placeholder="password..."
          onChange={(e) => setpassword(e.target.value)}
        />
        <p style={{ color: "red" }}></p>
        <button onClick={handleSignUp}>Register</button>
        <Link to="/" style={{ textDecoration: "none" }}>
          Already have account / SGIN IN
        </Link>
      </fieldset>
    </form>
  );
};

export default Register;
