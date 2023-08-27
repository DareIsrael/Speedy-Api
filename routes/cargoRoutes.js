const express = require ("express")

const router = express.Router()

const {getCargo, createCargo } = require ("../controllers/cargoControllers")

router.get("/", getCargo)

router.get("/:id", getCargo)


router.post("/", createCargo)

module.exports = router