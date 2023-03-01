const express = require('express')
const router = express.Router()
const UserController = require('./../Controllers/User')
router.post('/sign', UserController.singUp)

module.exports = router