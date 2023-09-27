const mongoose = require ("mongoose")
const Truck = require ("../models/consignorModels")

const getConsignor = async (req, res) => {
    const consignors = await Truck.find({}).sort({createdAt: -1})
    res.status(200).json(consignors)
}


const createConsignor = async (req, res) => {
    const { truck, commodity, distance, consignorName,consignorEmail,
         consignorPhone, consignorAddress, consignorPrefSer, consignorPrefSertime,
         consigneeName, consigneeEmail, consigneePhone,
         consigneeAddress, consigneePostcode, consigneePrefSertime
   } = req.body

    try {
    const consignor = await Truck.create({
    truck, commodity, distance, consignorName,consignorEmail,
    consignorPhone, consignorAddress, consignorPrefSer, consignorPrefSertime,
    consigneeName, consigneeEmail, consigneePhone,
    consigneeAddress, consigneePostcode, consigneePrefSertime

    
    } )
    res.status(200).json(consignor)
    } catch (error) {
   res.status(400).json({error: error.message})
    }
}



module.exports = { getConsignor, createConsignor }