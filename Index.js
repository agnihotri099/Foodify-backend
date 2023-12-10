const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const mongoDB = require('./db');

// Load environment variables
const port = process.env.PORT || 5000;

// Use the cors middleware before defining routes
app.use(cors());

// Connect to MongoDB
mongoDB();

// Middleware to parse JSON requests
app.use(express.json());

// Define your API routes
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
