const express = require ("express")

const router = express.Router()

const { getOceanConsignor, createOceanConsignor } = require ("../controllers/oceanConsignorControllers")

// const requireAuth = require('../middleware/requireAuth')



// router.use(requireAuth)

router.get("/", getOceanConsignor) 

router.get("/:id" , getOceanConsignor)

router.post("/", createOceanConsignor)


module.exports = router