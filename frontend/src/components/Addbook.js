import React, { useState } from "react";
import "./styles/AddBook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./subComponents/Loading.js";
import Backbutton from "./subComponents/Backbutton.js";

const Addbook = () => {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const hadleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    await axios
      .post("http://localhost:8080/book", { title, author, publishYear })
      .then((response) => {
        if (response.data) {
          setloading(false);
          navigate("/");
        } else {
          setloading(false);
          setError("Complete Your Data");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <form>
      {loading ? <Loading /> : ""}
      <fieldset>
        <h1>Add Book</h1>
        <div className="Backbutton">
          <Backbutton />
        </div>

        <input
          type="text"
          id="title"
          placeholder="Title..."
          required
          onChange={(e) => settitle(e.target.value)}
        />

        <input
          type="text"
          id="author"
          placeholder="Author..."
          required
          onChange={(e) => setauthor(e.target.value)}
        />

        <input
          type="date"
          id="publishYear"
          placeholder="Publish Year..."
          required
          onChange={(e) => setpublishYear(e.target.value)}
        />
        <p style={{ color: "red" }}>{error}</p>
        <button onClick={hadleSubmit}>add</button>
      </fieldset>
    </form>
  );
};

export default Addbook;
