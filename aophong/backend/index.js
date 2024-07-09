const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 2803;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/aophong', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
