const tbody = document.querySelector('tbody')
const addForm = document.querySelector('.add-form')
const inputTask = document.querySelector('.input-task')

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks')
    const tasks = await response.json()
    return tasks

};

const addTask = async (e) => {
    e.preventDefault()

    const task = { title: inputTask.value}

    await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
    })
}


const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag)

    if(innerText){
        element.innerText = innerText
    }

    if(innerHTML){
        element.innerHTML = innerHTML
    }

    return element
}

const createSelect = (value) => {
    const options = `
        <option value="pendente">pendente</option>
        <option value="em andamento">em andamento</option>
        <option value="concluída">concluída</option>
    `
    const select = createElement('select', '', options)
    select.value = value

    return select
}

const createRow = async(task) => {

    const { id, title, created_at, status} = task

    const tr = createElement('tr')
    const tdTitle = createElement('td', title)
    const tdCreatedAt = createElement('td', created_at)
    const tdStatus = createElement('td')
    const tdActions = createElement('td')

    const select = createSelect(status)

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit_note</span>')
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>')
    
    editButton.classList.add('btn-action')
    deleteButton.classList.add('btn-action')

    tdStatus.appendChild(select)

    tdActions.appendChild(editButton)
    tdActions.appendChild(deleteButton)

    tr.appendChild(tdTitle)
    tr.appendChild(tdCreatedAt)
    tr.appendChild(tdStatus)
    tr.appendChild(tdActions)

    tbody.appendChild(tr)
    
    return tr

}

const loadTasks = async () => {
    const tasks = await fetchTasks()

    tasks.forEach((task) => {
        const tr = createRow(task)
        tbody.appendChild(tr)
    });
}

addForm.addEventListener('submit', addTask)

loadTasks()