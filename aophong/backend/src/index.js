require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Kết nối tới MongoDB
mongoose.connect(process.env.CONNECTION_STRING_MONGODB)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Endpoint mẫu sử dụng KEY_SECRET
app.get('/token', (req, res) => {
  const token = jwt.sign({ data: 'example' }, process.env.KEY_SECRET);
  res.send({ token });
});

const port = process.env.PORT || 2803;
app.listen(port, () => console.log(`Listening on port ${port}...`));
