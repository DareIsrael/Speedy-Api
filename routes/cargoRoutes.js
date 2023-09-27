const express = require ("express")

const router = express.Router()

const {getCargo, createCargo } = require ("../controllers/cargoControllers")
// const requireAuth = require('../middleware/requireAuth')



// router.use(requireAuth)


router.get("/", getCargo)

router.get("/:id", getCargo)


router.post("/", createCargo)




module.exports = router