import express from "express"

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.status(200).json("This Is Home Page")

})

app.listen(port, () => {
  console.log("Server Started")
})
