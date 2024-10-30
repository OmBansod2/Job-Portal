const mongoose = require("mongoose");

const mongoURL = '';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log("MongoDB is connected");
});

db.on('error', (err) => {
    console.error("MongoDB connection error:", err);
});

module.exports = mongoose;
