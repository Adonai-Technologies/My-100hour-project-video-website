const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')






app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    