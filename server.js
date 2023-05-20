const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Body Parser middleware - allows us to handle raw json
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

// for form-data parsing in postman using multer
const multer = require('multer');
const upload = multer();
app.use(upload.array());

app.use('/api/ideas', require('./routes/ideas')); // Ideas Routes

// routes - where we handle our endpoints
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to RandomIdeas API',
  });
});

app.listen(port, () => console.log(`Server listening in port ${port}`));
