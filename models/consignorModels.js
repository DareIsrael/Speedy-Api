const mongoose = require("mongoose")

const Schema = mongoose.Schema

const truckSchema = new Schema ({
    truck: {
        type: String,
        require: true
    },
    commodity: {
        type: String,
        require: true
    },
    distance: {
        type: Number,
        required: true
    },
    
    consignorName: {
        type: String,
        require: true
    },
    consignorEmail: {
        type: String,
        require: true
    },
    consignorPhone: {
        type: Number,
        required: true
    },
    consignorAddress: {
        type: String,
        required: true
    },
    consignorPrefSer: {
        type: String,
        required: true
    },
    consignorPrefSertime: {
        type: Date, 
        default: Date.now
    },
    consigneeName: {
        type: String,
        require: true
    },
    consigneeEmail: {
        type: String,
        require: true
    },
    consigneePhone: {
        type: Number,
        required: true
    },
    consigneeAddress: {
        type: String,
        required: true
    },
    consigneePostcode: {
        type: String,
        required: true
    },
    consigneePrefSertime: {
        type: Date, 
        default: Date.now
    }
    
    


    
    
}, {timestamps: true })


module.exports = mongoose.model("truck", truckSchema)


