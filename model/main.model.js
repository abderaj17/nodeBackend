//data modeling
//data validation

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,

        required: [true, `Email is required`],
        unique: [true, `Email already exists`],

        trim: true,
        lowercase: true,
    }
})