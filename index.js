import express from "express"

const port = process.env.PORT || 5000;

<<<<<<< HEAD
const test = "This Is Merged Conflict"
=======
const test = "This Should Create An Merged Conflict"
>>>>>>> main

app.get("/", (req, res) => {
  return res.status(200).json("This Is Home Page")

})

app.listen(port, () => {
  console.log("Server Started")
})
