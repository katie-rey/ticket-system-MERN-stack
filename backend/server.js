const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const { colors } = require('colors')
const { connectDB } = require('./config/db')

const PORT = 5000
const app = express()
const userRoutes = require('./routes/userRoutes')

//Connect to DB
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
