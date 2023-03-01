const Task = require('./../Models/TaskModel')
exports.addTask = async (req, res) => {
    try {

        const task = await Task.create(req.body)
        res.status(201).json({
            mssg: 'sucess',
            task
        })
    } catch (err) {
        res.status(405).json({
            mssg: err.message
        })
    }
}