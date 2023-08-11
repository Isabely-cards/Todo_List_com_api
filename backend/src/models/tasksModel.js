const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {
    
    const {title} = task;

    const dateUTC = new Date(Date.now()).toUTCString()

    //const esta recebendo o cod de inserir dados 
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)';
    // esta inserindo valores
    const createTask =await connection.execute(query, [title, 'pendente', 'asdasdas'])

};

module.exports = {
    getAll
};