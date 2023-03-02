const jwt = require('jsonwebtoken')

exports.verifyToken = async (req, res, next) => {
    try {

        const token = req.cookies.token.token
        if (!token) res.status(404).json({ mssg: 'unauthorized' })

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.status(404).json({
                    mssg: err.message
                })
            }
            req.user = user

        })
        next()
    } catch (err) {
        next(err)
    }
}