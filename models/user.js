import express from "express"
import mongoose from "mongoose"



const User = new mongoose.Schema({
    Name : String,
    Task :String,
    deadline : Date,
    isComplete : Boolean
})
const Todo = mongoose.model("Todoksadjfb",User)
export default Todo