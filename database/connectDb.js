import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27107/todo")
    if (conn.connection) {
      console.log("Databse Connected")
    }
  }
  catch (err) {
    console.log(err)
  }
}

export default connectDb;
