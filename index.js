import express from "express"
import authRouter from "./router/auth.router.js";
import connectDb from "./database/connectDb.js";
import User from "./database/model/user.model.js"
import Todo from "./database/model/todo.model.js"

const port = process.env.PORT || 4000;
const app = express()

// database connected
await connectDb()

// middleware
app.use(express.json())


// Router
app.use("/api/auth", authRouter)

app.get("/", (req, res) => {
  return res.status(200).json("This Is Home Page")
})

app.post("/addTask",async (req,res)=>{
    let emailId = req.body.emailId
    let userTask = req.body.Task
    let userDeadline = new Date(req.body.deadline)
    try {
      const user = User.findOne({email : emailId}).select("username")
      if(!user){
        res.send("User not fouund ")
      }
      const newTask = new Todo({
      username : user.username ,
      title:userTask,
      deadline:userDeadline,
      isDone:false})
      await newTask.save()
      res.send("hey")
    } catch (error) {
        console.log(error);
        log
    }
    
})

app.listen(port, () => {
  console.log("Server Started")
})
