import mongoose from "mongoose";
const DBConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/library-managment")
    .then(() => {
      console.log("connected to database");
    })
    .catch((e) => {
      console.log(e.message);
    });
};

export default DBConnection;
