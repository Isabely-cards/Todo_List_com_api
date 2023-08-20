const tbody = document.querySelector('tbody');

async function populateTable() {
    const tasks = await fetchTasks();

    tasks.forEach(async (task) => {
        const row = await createRow(task);
        tbody.appendChild(row);
    });
}

populateTable();

