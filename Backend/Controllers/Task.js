const Task = require('./../Models/TaskModel')
exports.addTask = async (req, res, next) => {
    try {

        const { id } = req.user
        const completionDate = req.body.date
        const task = await Task.create({ ...req.body, userId: id, date: completionDate })
        const saveTask = task.save()
        res.status(201).json({
            mssg: 'sucess',
            saveTask

        })
    } catch (err) {
        next(err)
    }
}
exports.updateTask = async (req, res, next) => {
    try {
        const { id } = req.params

        const task = await Task.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(201).json({
            mssg: 'sucess',
            task
        })
    } catch (err) {
        next(err)
    }
}

exports.deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params.id
        const task = await Task.findByIdAndDelete(id, ...req.body)
        return res.status(203).json({
            mssg: 'deleted'
        })
    } catch (err) {
        next(err)
    }
}

exports.getTask = async (req, res, next) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        return res.status(200).json({
            mssg: 'sucess',
            task
        })
    } catch (err) {
        next(err)
    }
}

exports.getTasks = async (req, res, next) => {
    try {
        const type = req.query?.type
        const day = req.query?.day
        const { id } = req.user
        var min, max
        if (day === 'today') {
            min = dayjs().format('YYYY-MM-DD')
            max = dayjs().format('YYYY-MM-DD')
        }
        else if (day === 'seven') {
            min = dayjs().subtract(7, 'day').format('YYYY-MM-DD')
            max = dayjs().format('YYYY-MM-DD')
        }
        else if (day === 'thirty') {
            min = dayjs().subtract(30, 'day').format('YYYY-MM-DD')
            max = dayjs().format('YYYY-MM-DD')
        }
        if (type) {
            var tasks = await Task.find({ userId: id, type, ...(day && { date: { $lte: new Date(max), $gte: new Date(min) } }) })
        }
        else {
            var tasks = await Task.find({ userId: id, ...(day && { date: { $lte: new Date(max), $gte: new Date(min) } }) })
        }
        return res.status(201).json({ tasks })
    } catch (err) {
        next(err);
    }
}