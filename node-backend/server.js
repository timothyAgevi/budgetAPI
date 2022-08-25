const express = require('express')

const app = express()

//set port
const port =process.env.PORT ||8081

//parse request of content-type - application/json
app.use(express.json())
