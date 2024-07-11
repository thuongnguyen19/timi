require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
import 'dotenv/config'

const app = express()
const port = process.env.PORT

// Kết nối tới MongoDB
 mongoose.connect(process.env.CONNECTION_STRING_MONGODB)
    .then(() => console.log('Connected!'));
    app.use(express.json());



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})