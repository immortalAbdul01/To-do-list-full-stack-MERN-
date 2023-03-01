const User = require('./../Models/userModel')
const bcrypt = require('bcrypt')

exports.singUp = async (req, res) => {
    try {

        const user = await User.create(req.body)

        res.status(201).json({
            mssg: 'sucess',
            user
        })
    } catch (err) {
        res.status(404).json({
            mssg: err.message
        })
    }
}