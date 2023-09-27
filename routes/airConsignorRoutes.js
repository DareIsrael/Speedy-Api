const express = require ("express")

const router = express.Router()

const { getAirConsignor, createAirConsignor } = require ("../controllers/airConsignorControllers")

// const requireAuth = require('../middleware/requireAuth')



// router.use(requireAuth)

router.get("/", getAirConsignor) 

router.get("/:id" , getAirConsignor)

router.post("/", createAirConsignor)


module.exports = router