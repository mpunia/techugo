require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log('server is running...'))