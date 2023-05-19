const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

//Body Parser middleware - allows us to handle raw json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/ideas', require('./routes/ideas'));

//routes - where we handle our endpoints
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to RandomIdeas API ft. MasterJake of TropangCharat64',
  });
});

app.listen(port, () => console.log(`Server listening in port ${port}`));
