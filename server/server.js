const express = require('express')
const bodyParser = require('body-parser')  
require('dotenv').config()


const app = express();

app.use(bodyParser.json())

app.use(express.static( `${__dirname}/../build`))

app.listen(process.env.SERVER_PORT, () =>  console.log(`Server listening on ${process.env.SERVER_PORT}`))

