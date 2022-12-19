const mongoose = require("mongoose");

const registrationdataSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    phoneNo: {
        type: Number,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    conformPass: {
        type: String,
        required: true,
        trim: true
    }
})

const regdata = new mongoose.model("regdata", registrationdataSchema);

module.exports = regdata;