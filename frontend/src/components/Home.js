import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdBrokenImage, MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import Loading from "./subComponents/Loading.js";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setloading] = useState(false);
  console.clear();
  useEffect(() => {
    setloading(true);
    axios.get("http://localhost:8080/book").then((response) => {
      setBooks(response.data);
      setloading(false);
    });
  }, []);

  return (
    <div className="library">
      {loading ? <Loading /> : ""}
      <div className="library_heading">
        <h1>Library</h1>
      </div>
      <div className="library_addBook">
        <h3>Add book</h3>
        <Link to={`/book/add`}>
          <MdOutlineAddBox />
        </Link>
      </div>
      <div className="library_randerBook">
        <table border={1}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 ? (
              <h3 align="center">
                No book to display <MdBrokenImage />
              </h3>
            ) : (
              books.map((book, index) => {
                return (
                  <tr key={book._id}>
                    <td> {index + 1} </td>
                    <td> {book.title} </td>
                    <td> {book.author} </td>
                    <td> {book.publishYear} </td>
                    <td>
                      <Link
                        className="library_randerBook-table-icon"
                        to={`/book/${book._id}`}
                      >
                        <BsInfoCircleFill />
                      </Link>
                      <Link
                        className="library_randerBook-table-icon"
                        to={`/book/update/${book._id}`}
                      >
                        <AiFillEdit />
                      </Link>
                      <Link
                        className="library_randerBook-table-icon"
                        to={`/book/delete/${book._id}`}
                      >
                        <AiFillDelete />
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
