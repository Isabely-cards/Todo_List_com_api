const tasksModel = require('../models/tasksModel');

const getAll = async (_request, response) => {
  const tasks = await tasksModel.getAll();
  return response.status(200).json(tasks);
};

<<<<<<< HEAD
};

const createTask = async (req, res) => {
    const createTask = await tasksModel.createTask(req.body);
    return res.status(201).json(createTask);
};

const deleteTask = async (req, res) => {
    const { id } = req.params

    await tasksModel.deleteTask(id)
    return res.status(204).json()

}

const updateTask = async (req, res) => {
    const { id } = req.params;

    await tasksModel.updateTask(id, req.body);
    return res.status(204).json()

}

module.exports = {
    getll,
    createTask,
    deleteTask,
    updateTask
}
=======
const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.deleteTask(id);
  return response.status(204).json();
};

const updateTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.updateTask(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
>>>>>>> 9208a473711cc1055da15ea65e655e7facbcf537
