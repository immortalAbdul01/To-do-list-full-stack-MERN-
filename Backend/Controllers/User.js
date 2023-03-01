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
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email }).select('+password')
        if (!await user.checkPassword(password, user.password)) {
            res.status(400).json({
                mssg: 'failed',

            })
        }
        res.status(201).json({
            mssg: 'sucess',
            user
        })
    } catch (err) {
        res.status(404).json({
            mssg: err.message,

        })

    }

}