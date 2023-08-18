import { conectaApi } from "./conectaApi"


const tbody = document.querySelector('tbody')


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

const task = {
    id: 1,
    title: 'ler livro',
    created_at: '00 de janeiro de 2023',
    status: 'concluída'
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

    //tr.appendChild(tdTitle)
    return tr

}

createRow(task)