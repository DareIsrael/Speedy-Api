const mongoose = require("mongoose")

const Schema = mongoose.Schema

const postSchema = new Schema ({
    image: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        required: true
    }
    
}, {timestamps: true })


module.exports = mongoose.model("post", postSchema)