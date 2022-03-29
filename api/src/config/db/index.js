const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URI = process.env.DATABASE_URL;

const connect = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            UseUnifiedTopology: true,
        })
        console.log('Connect Successfully!');
    } catch (err) {
        console.log('Connect failure!' + err);
    }
}

module.exports = { connect }
    