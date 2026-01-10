import express from "express"
import authRouter from "./router/auth.router.js";
import connectDb from "./database/connectDb.js";

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

app.listen(port, () => {
  console.log("Server Started")
})
