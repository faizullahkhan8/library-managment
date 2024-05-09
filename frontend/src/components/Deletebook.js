import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./subComponents/Loading.js";
import axios from "axios";
import { useState } from "react";
import "./styles/Deletebook.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsXCircleFill } from "react-icons/bs";
import {} from "react-icons/md";
import Backbutton from "./subComponents/Backbutton.js";

const Deletebook = () => {
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setloading(false);
    axios.delete(`http://localhost:8080/book/${id}`).then(() => {
      setloading(false);
      navigate("/");
    });
  };
  const handleNo = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="Backbutton">
        <Backbutton />
      </div>
      {loading ? <Loading /> : ""}
      <h1>Are You Sure want to delete !</h1>
      <div className="actions">
        <button className="icon" onClick={handleDelete}>
          <AiFillCheckCircle />
        </button>
        <button className="icon" onClick={handleNo}>
          <BsXCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Deletebook;
