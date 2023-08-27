const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cargoSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    truckload: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    commodity: {
        type: String,
        required: true
    }
}, {timestamps: true })


module.exports = mongoose.model("cargo", cargoSchema)