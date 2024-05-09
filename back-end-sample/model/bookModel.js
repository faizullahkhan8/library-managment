import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    publishYear: String,
  },
  {
    timestamps: true,
  }
);

const bookModel = mongoose.model("books", bookSchema);

export default bookModel;
