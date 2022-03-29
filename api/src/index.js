const express = require('express');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');
const db = require('./config/db');

// Configure .env
dotenv.config();

const PORT = process.env.PORT;

// Connect DB
db.connect();

// HTTP logger
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Welcome to everyone!!')
})

app.listen(PORT, () => {
    console.log("Backend server is running on port " + PORT);
})