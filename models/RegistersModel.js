const mongoose = require("mongoose")

const Schema = mongoose.Schema

const RegisterSchema = new Schema ({
    fName: {
        type: String,
        require: true
    },
    lName: {
        type: String,
        require: true
    },
    cName: {
        type: String,
        required: true
    },
    
    phone: {
        type: Number,
        require: true
    },
    sAddress: {
        type: String,
        require: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    
    email: {
        type: Date, 
        default: Date.now
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    }
    
    
    


    
    
}, {timestamps: true })


module.exports = mongoose.model("Register", RegisterSchema)


