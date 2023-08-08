const express = require('express')
const router = express.Router()

const tasksController = require('./controllers/tasksController')

router.get('/tasks', tasksController.getll )


module.exports = router