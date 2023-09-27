express = require('express')

const { signupUser, loginUser, getCustomers } = require ('../controllers/userControllers')

const router = express.Router()

router.get('/signup', getCustomers)

router.post('/login', loginUser)

router.post('/signup', signupUser)


module.exports = router