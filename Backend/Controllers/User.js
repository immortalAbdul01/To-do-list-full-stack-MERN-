const User = require('./../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.singUp = async (req, res, next) => {
    try {

        const user = await User.create(req.body)
        user.save()
        res.status(201).json({
            mssg: 'sucess',
            user
        })
    } catch (err) {
        next(err)
    }
}
exports.login = async (req, res, next) => {
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
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        if (user) {

            const { password, ...userRes } = user._doc
            return res.status(201).cookie('token', { token }, { httpOnly: true }).json({ user: userRes })

        }
    } catch (err) {
        next(err)

    }

}