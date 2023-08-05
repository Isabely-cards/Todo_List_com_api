const express = require('express')
const tasksController = require('./controllers/tasksController')

const router = express.Router()

router.get('/tasks', tasksController.getll )


module.exports = router