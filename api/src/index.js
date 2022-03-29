const express = require('express');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');
const db = require('./config/db');
const route = require('./routes')

// Configure .env
dotenv.config();

const PORT = process.env.PORT;

// Connect DB
db.connect();

// HTTP logger
app.use(morgan('combined'));

// Express middleware to get the json data submitted to the client side
app.use(express.json());

// Configure route
route(app);

app.listen(PORT, () => {
    console.log("Backend server is running on port " + PORT);
})