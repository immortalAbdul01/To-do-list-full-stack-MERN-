const express = require('express')
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'complete'],
        default: 'pending'
    },
    type: {
        type: String,

        enum: ['default', 'personal', 'wishlist', 'work', 'shopping'],
        default: 'default'
    },
    time: {
        type: String,
        required: true
    }

})

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task