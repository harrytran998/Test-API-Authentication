import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

dotenv.config()
const app = express()

//middleware
app.use(morgan('combined'))
app.use(bodyParser.json())

//routes


//start the server
app.listen(process.env.PORT, () => {
  console.log(`App listen at port ${process.env.PORT}`);
})