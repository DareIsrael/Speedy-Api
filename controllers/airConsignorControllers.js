const mongoose = require ("mongoose")
const Air = require ("../models/airConsignorModels")

const getAirConsignor = async (req, res) => {
    const airConsignors = await Air.find({}).sort({createdAt: -1})
    res.status(200).json(airConsignors)
}


const createAirConsignor = async (req, res) => {
    const { height, width , depth, commodity, distance, consignorName,consignorEmail,
         consignorPhone, consignorAddress, consignorPrefSer, consignorPrefSertime,
         consigneeName, consigneeEmail, consigneePhone,
         consigneeAddress, consigneePostcode, consigneePrefSertime
   } = req.body

    try {
    const airConsignor = await Air.create({
    height, width, depth, commodity, distance, consignorName,consignorEmail,
    consignorPhone, consignorAddress, consignorPrefSer, consignorPrefSertime,
    consigneeName, consigneeEmail, consigneePhone,
    consigneeAddress, consigneePostcode, consigneePrefSertime

    
    } )
    res.status(200).json(airConsignor)
    } catch (error) {
   res.status(400).json({error: error.message})
    }
}



module.exports = { getAirConsignor, createAirConsignor }