const express = require('express');

<<<<<<< HEAD
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

=======
const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
>>>>>>> 9208a473711cc1055da15ea65e655e7facbcf537

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
  tasksMiddleware.validateFieldTitle,
  tasksMiddleware.validateFieldStatus,
  tasksController.updateTask,
);

module.exports = router;