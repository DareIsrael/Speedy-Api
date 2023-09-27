const express = require ("express")

const router = express.Router()

const { getCourierConsignor, createCourierConsignor } = require ("../controllers/courierConsignorControlers")

// const requireAuth = require('../middleware/requireAuth')



// router.use(requireAuth)

router.get("/", getCourierConsignor) 

router.get("/:id" , getCourierConsignor)

router.post("/", createCourierConsignor)


module.exports = router