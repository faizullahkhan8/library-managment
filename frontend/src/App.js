import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Addbook from "./components/Addbook";
import Deletebook from "./components/Deletebook";
import Singlebook from "./components/Singlebook";
import Updatebook from "./components/Updatebook";
import Login from "./components/Login";
import Register from "./components/Register";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/allBook" element={<Home />} />
      <Route path="/book/add" element={<Addbook />} />
      <Route path="/book/delete/:id" element={<Deletebook />} />
      <Route path="/book/:id" element={<Singlebook />} />
      <Route path="/book/update/:id" element={<Updatebook />} />
    </Routes>
  );
};

export default App;
