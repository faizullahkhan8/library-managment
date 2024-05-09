// import express from "express";
const express = require("express");
// import cors from "cors";
const cors = require("cors");

// import DBConnection from "./database/index.js";
const DBConnection = require("./database/index");
// import bookModel from "./model/bookModel.js";
const bookModel = require("./model/bookModel");
// import userModel from "./model/userModel.js";
const userModel = require("./model/userModel");

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

//route for save a book
app.post("/book", async (req, res) => {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
        return res.status(204).json("In-complete Data");
    }

    const exsitedBook = await bookModel.findOne({ title, author, publishYear });
    if (exsitedBook) {
        return res.status(201).json("Record Already existed");
    }

    try {
        const createdBook = await bookModel.create({
            title,
            author,
            publishYear,
        });
        return res.status(200).json(createdBook);
    } catch (error) {
        console.log(error);
    }
});

//route to get book by id
app.get("/book/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(204).json("In-complete Data");
    }

    const bookByID = await bookModel.findOne({ _id: id });
    if (!bookByID) {
        return res.status(404).json("Book Not Found");
    }
    return res.status(200).json(bookByID);
});

//route to get all books
app.get("/book", async (req, res) => {
    const allBooks = await bookModel.find({});

    if (!allBooks) {
        return res.status(204).json("No book to display");
    }

    res.status(200).json(allBooks);
});

//route to delete a book
app.delete("/book/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(204).json("In-complete data");
    }

    const deletedBook = await bookModel.findOneAndDelete({ _id: id });

    if (!deletedBook) {
        return res.status(504).json(`book not found wrt given id = ${id}`);
    }

    return res.status(200).json(deletedBook);
});

//route for update a book
app.put("/book/:id", async (req, res) => {
    const { id } = req.params;
    const data = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
    };

    if (!id) {
        return res.json("In-complete document");
    }

    const updatedBook = await bookModel.findByIdAndUpdate(id, data);
    if (!updatedBook) {
        return res.status(504).json("Book update failed");
    }
    return res.status(200).json("book updated succesfully");
});

app.post("/register", async (req, res) => {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
        return res.status(404).json("in-complete data");
    }

    const isUserAlreadyExist = userModel.findOne({ name, username, password });

    if (isUserAlreadyExist) {
        return res.json("User already existed");
    }

    const userCreated = userModel.create({
        name,
        username,
        password,
    });

    return res.status(200).json(userCreated);
});

app.listen(PORT, (e) => {
    console.log(`Running on port ${PORT}`);
});

DBConnection();
