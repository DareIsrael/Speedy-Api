const mongoose = require ("mongoose")
const Ocean = require ("../models/oceanConsignorModels")

const getOceanConsignor = async (req, res) => {
    const oceanconsignors = await Ocean.find({}).sort({createdAt: -1})
    res.status(200).json(oceanconsignors)
}


const createOceanConsignor = async (req, res) => {
    const { container, commodity, distance, consignorName,consignorEmail,
         consignorPhone, consignorAddress, consignorPrefSer, consignorPrefSertime,
         consigneeName, consigneeEmail, consigneePhone,
         consigneeAddress, consigneePostcode, consigneePrefSertime
   } = req.body

    try {
    const oceanconsignor = await Ocean.create({
    container, commodity, distance, consignorName,consignorEmail,
    consignorPhone, consignorAddress, consignorPrefSer, consignorPrefSertime,
    consigneeName, consigneeEmail, consigneePhone,
    consigneeAddress, consigneePostcode, consigneePrefSertime

    
    } )
    res.status(200).json(oceanconsignor)
    } catch (error) {
   res.status(400).json({error: error.message})
    }
}



module.exports = { getOceanConsignor, createOceanConsignor }