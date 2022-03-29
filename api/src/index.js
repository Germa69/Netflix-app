const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 8000;

// HTTP logger
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Welcome to everyone!!')
})

app.listen(PORT, () => {
    console.log("Backend server is running on port " + PORT);
})