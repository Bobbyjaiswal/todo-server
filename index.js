import express from "express"

const port = process.env.PORT || 5000;

const test = "This Should Create An Merged Conflict"

app.get("/", (req, res) => {
  return res.status(200).json("This Is Home Page")

})

app.listen(port, () => {
  console.log("Server Started")
})
