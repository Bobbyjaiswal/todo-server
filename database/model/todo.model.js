import mongoose from "mongoose";

const todoSchema = new mongoose({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  }
}, {
  timestamp: true
})

const Todo = mongoose.model("Todo", todoSchema)

export default Todo;
