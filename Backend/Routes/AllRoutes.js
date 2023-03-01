const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/User')
const TaskController = require('./../Controllers/Task')
router.post('/sign', UserController.singUp)
router.post('/login', UserController.login)
router.post('/create', TaskController.addTask)

module.exports = router