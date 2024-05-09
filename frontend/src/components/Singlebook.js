import React, { useEffect, useState } from "react";
import Backbutton from "./subComponents/Backbutton.js";
import Loading from "./subComponents/Loading.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import "./styles/Singlebook.css";

const Singlebook = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/book/${id}`)
      .then((response) => {
        settitle(response.data.title);
        setauthor(response.data.author);
        setpublishYear(response.data.publishYear);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="container">
      <div>
        <div className="Backbutton">
          <Backbutton />
        </div>
        {loading ? <Loading /> : ""}
      </div>
      <div className="title">
        <BsBook />
        <h2>{title}</h2>
      </div>
      <div className="author">
        <AiOutlineUser />
        <h2>{author}</h2>
      </div>
      <div className="publishYear">
        <MdDateRange />
        <h2>{publishYear}</h2>
      </div>
    </div>
  );
};

export default Singlebook;
