const express = require('express')
const router = express.Router()

const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware')

router.get('/tasks', tasksController.getll );
router.post('/tasks', tasksMiddleware.validadeTitle, tasksController.createTask );
router.delete('/tasks/:id', tasksController.deleteTask );
router.put('/tasks/:id',
    tasksMiddleware.validadeTitle, 
    tasksMiddleware.validadeStatus, 
    tasksController.updateTask,

);



module.exports = router