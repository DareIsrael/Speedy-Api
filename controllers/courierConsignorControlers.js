const mongoose = require ("mongoose")
const Courier = require ("../models/courierConsignorModels")

const getCourierConsignor = async (req, res) => {
    const courierConsignors = await Courier.find({}).sort({createdAt: -1})
    res.status(200).json(courierConsignors)
}


const createCourierConsignor = async (req, res) => {
    const { height, width , depth, commodity, distance, consignorName,consignorEmail,
         consignorPhone, consignorAddress, consignorPrefSerdate, consignorPrefSertime,
         consigneeName, consigneeEmail, consigneePhone,
         consigneeAddress, consigneePrefSerdate, consigneePrefSertime
   } = req.body

    try {
    const courierConsignor = await Courier.create({
    height, width, depth, commodity, distance, consignorName,consignorEmail,
    consignorPhone, consignorAddress, consignorPrefSerdate, consignorPrefSertime,
    consigneeName, consigneeEmail, consigneePhone,
    consigneeAddress, consigneePrefSerdate, consigneePrefSertime

    
    } )
    res.status(200).json(courierConsignor)
    } catch (error) {
   res.status(400).json({error: error.message})
    }
}



module.exports = { getCourierConsignor, createCourierConsignor}