const express = require('express')
const router = express.Router()
const UserController = require('./../Controllers/User')
router.post('/sign', UserController.singUp)
router.post('/login', UserController.login)

module.exports = router