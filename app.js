const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config()
const app = express()

//middleware
app.use(morgan('combined'))
app.use(bodyParser.json())

//routes
app.use('/users', require('./routes/users'))

//start the server
app.listen(process.env.PORT, () => {
  console.log(`App listen at port ${process.env.PORT}`);
})
