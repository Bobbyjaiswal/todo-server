import express from "express"
import User from "../database/model/user.model.js"

const authRouter = express.Router()

authRouter.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  }
  catch (err) {
    console.log(err)
    return res.status(500).json(err.message)
  }
})


authRouter.post('/register', async (req, res) => {

  const { username, email, password } = req.body

  try {
    const user = await User.create({ username, email, password })
    return res.status(200).json(user)
  }
  catch (err) {
    console.log(err)
    return res.status(500).json(err.message)
  }
})


authRouter.post('/login', async (req, res) => {

  const { email, password } = req.body

  try {

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json("User Not Found")
    }

    if (user.password === password) {
      return res.status(200).json(user)
    }

    return res.status(400).json("Invalid Credentials")
  }
  catch (err) {
    console.log(err)
    return res.status(500).json(err.message)
  }
})

export default authRouter;
