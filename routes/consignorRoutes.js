const express = require ("express")

const router = express.Router()

const { getConsignor, createConsignor } = require ("../controllers/consignorControllers")

// const requireAuth = require('../middleware/requireAuth')



// router.use(requireAuth)

router.get("/", getConsignor) 

router.get("/:id" , getConsignor)

router.post("/", createConsignor)


module.exports = router