const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27017/yelp-camp";

async function connectDB() {
    try {
    await mongoose.connect(mongoURL);
    console.log("Connected to Mongo on port 27017")
    } catch(error) {
        console.log(error)
    }
}

async function closeConnection() {
    mongoose.connection.close()
}

module.exports = { connectDB, closeConnection }