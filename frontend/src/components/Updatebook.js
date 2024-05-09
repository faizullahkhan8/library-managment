import React, { useEffect, useState } from "react";
import "./styles/AddBook.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./subComponents/Loading.js";
import Backbutton from "./subComponents/Backbutton.js";

const Addbook = () => {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/book/${id}`).then((response) => {
      settitle(response.data.title);
      setauthor(response.data.author);
      setpublishYear(response.data.publishYear);
    });
  }, []);

  const hadleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    await axios
      .put(`http://localhost:8080/book/${id}`, { title, author, publishYear })
      .then(() => {
        setloading(false);
        navigate("/");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <form>
      {loading ? <Loading /> : ""}
      <fieldset>
        <h1>Update Book</h1>
        <div className="Backbutton">
          <Backbutton />
        </div>
        <input
          type="text"
          id="title"
          placeholder="Title..."
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <input
          type="text"
          id="author"
          placeholder="Author..."
          value={author}
          onChange={(e) => setauthor(e.target.value)}
        />

        <input
          type="text"
          id="publishYear"
          placeholder="Publish Year..."
          value={publishYear}
          onChange={(e) => setpublishYear(e.target.value)}
        />
        <p>Error</p>
        <button onClick={hadleSubmit}>Update</button>
      </fieldset>
    </form>
  );
};

export default Addbook;
