const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks')
    const tasks = await response.json()
    return tasks
};

const createElement = (tag) => {
    const element = document.createElement(tag)
    return element
}

const createRow =(task) => {

    const { id, title, created_at, status} = task

    const tr = createElement('tr')
    const tdTitle = createElement('td')
    
}