const express = require('express')
const router = express.Router()
const { verifyToken } = require('./../Middleware/VerifyToken')
const UserController = require('../Controllers/User')
const TaskController = require('./../Controllers/Task')
router.post('/sign', UserController.singUp)
router.post('/login', UserController.login)
router.post('/create', verifyToken, TaskController.addTask)

module.exports = router