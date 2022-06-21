const asyncHandler = require('express-async-handler')

const bcrypt = require('bcryptjs')

const User = require('../models/userModels')

//@desc Register new user
//@route api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  //validation
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  //Find if user exists
  const userExists = User.findOne({ email: email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  res.send('register route')
})

//@desc Login user
//@route api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('login route')
})

module.exports = {
  registerUser,
  loginUser,
}
