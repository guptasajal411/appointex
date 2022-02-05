const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    calendar: [{
        date: Date,
        status: String,
        slots: [{
            timeFrom: Date,
            timeTo: Date,
            isBooked: Boolean,
            isBookedBy: {
                email: String,
                name: String,
                description: String
            }
        }]
    }]
});

const User = new mongoose.model("User", userSchema);

module.exports = User;