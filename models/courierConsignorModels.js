const mongoose = require("mongoose")

const Schema = mongoose.Schema

const courierSchema = new Schema ({

    height: {
        type: String,
        required: true
    },
    width : {
        type: String,
        required: true
    },
    depth : {
        type: String,
        required: true
    },
    commodity: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    
    consignorName: {
        type: String,
        required: true
    },
    consignorEmail: {
        type: String,
        required: true
    },
    consignorPhone: {
        type: Number,
        required: true
    },
    consignorAddress: {
        type: String,
        required: true
    },
    consignorPrefSerdate: {
        type: Date, 
        default: Date.now
    },

    consignorPrefSertime: {
        type: String,
        required: true
    },
    consigneeName: {
        type: String,
        required: true
    },
    consigneeEmail: {
        type: String,
        required: true
    },
    consigneePhone: {
        type: Number,
        required: true
    },
    consigneeAddress: {
        type: String,
        required: true
    },
    consigneePrefSerdate: {
        type: Date, 
        default: Date.now
    },

    consigneePrefSertime: {
        type: String,
        required: true
    }
    
    


    
    
}, {timestamps: true })


module.exports = mongoose.model("courier", courierSchema)


