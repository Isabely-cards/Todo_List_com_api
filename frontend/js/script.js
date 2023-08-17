const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks')
    const tasks = await response.json()
    console.log(tasks)
    return tasks
};


function createRow ( id, title, created_at, status) {

    const tbody = document.querySelector('tbody')
    tbody.innerHTML = `
        <tr>
            <td>${fetchTasks.title}</td> 
            <td>00 de janeiro de 2023 15:00</td> 
            <td>
                <select>
                    <option value="pendente">pendente</option>
                    <option value="em andamento">em andamento</option>
                    <option value="concluída">concluída</option>
                </select>
            </td> 
            <td>
                <button class="btn-action">
                    <span class="material-symbols-outlined">
                        edit_note
                        </span>
                </button>
                <button  class="btn-action"   >
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </td> 
        </tr>`

        return tbody
}
createRow()