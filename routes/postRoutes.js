const express = require ("express")

const router = express.Router()

const { getPost, getPostId, createPost  } = require ("../controllers/postControllers")

// const requireAuth = require('../middleware/requireAuth')



// router.use(requireAuth)


router.get("/", getPost)

router.get("/:id", getPost)

router.post("/", createPost)

router.delete("/:id", getPostId)






module.exports = router