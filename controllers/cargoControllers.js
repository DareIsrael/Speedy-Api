const mongoose = require ("mongoose")
const Cargo = require ("../models/cargoModels")


const getCargo = async (req, res) => {
    const Cargos = await Cargo.find({}).sort({createdAt: -1})
    res.status(200).json(Cargos)
}

const createCargo = async (req, res) => {
    const {name, truckload, email, commodity} = req.body

    try {
    const person = await Cargo.create({name, truckload, email, commodity} )
    res.status(200).json(person)
    } catch (error) {
   res.status(400).json({error: error.message})
    }
}


module.exports = {getCargo, createCargo }
