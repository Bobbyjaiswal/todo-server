import express from "express"
import mongoose from "mongoose"
import Todo from "./models/user.js"
const myApp = express()
myApp.use(express.json())
try {
    const conn = mongoose.connect("mongodb://localhost:27017/myDatabase")
    if(conn){
        console.log("Database Connected");
        console.log(conn);
    }else{
        console.log("Database could not be connected successfully");
    }
} catch (error) {
    console.log(error.message);
    
}
myApp.get("/",(req,res)=>{
    return res.send("The initial end point of my main server ")
})

myApp.get("/addTask",(req,res)=>{
    return res.send("To add your task please add you name in the URL")
})


myApp.post("/addTask/:slug",async (req,res)=>{
    let userTask = req.body.Task
    let userDeadline = new Date(req.body.deadline)
    console.log(req.body.deadline);
    
    const newTask = new Todo({
    Name : req.params.slug,
    Task:userTask,
    deadline:userDeadline,
    isDone:false})
    await newTask.save()
    res.send("hey")
})

myApp.get("/seeTask/:slug",async (req,res)=>{
    try {
        const youTask = await Todo.find({Name : req.params.slug})
        res.json(youTask)
    } catch (error) {
        console.log(error);
        res.send("Unable to load Data")
        
    }
})

myApp.listen(3001,()=>{
    console.log("Server started");
    
})