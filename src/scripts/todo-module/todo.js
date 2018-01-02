// 1. Display counts
// 2. Add/remove class active for li on change status

const getTodoHTML = (item, index, callbacks) => {
    const { changeStatusById, removeTodoById } = callbacks
    const li = document.createElement('li')
    const input = document.createElement('input')
    const id = `todo${index}`
    if (item.isChecked) {
        li.className = 'active'
        input.setAttribute('checked', 'checked')
    }
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', id)
    input.onchange = () => changeStatusById(item.id)
    const label = document.createElement('label')
    label.setAttribute('for', id)
    label.innerText = item.value
    const button = document.createElement('button')
    button.onclick = () => removeTodoById(item.id)
    button.innerText = 'X'
    li.appendChild(input)
    li.appendChild(label)
    li.appendChild(button)
    return li
}


export const Todo = (todos, wrapperTodos) => {
    const todoAppView = document.querySelector(wrapperTodos);
    const generalCount = document.getElementById('generalCount');
    const doneCount = document.getElementById('doneCount');
    const undoneCount = document.getElementById('undoneCount');

    const changeStatusById = todoId => {
        const todo = todos.find(todo => todo.id === todoId)
        todo.isChecked = !todo.isChecked
    }

    const render = () => {
        renderTodoList()
        renderTodoCounts()
    }

    const renderTodoCounts = () => {
        // @todo do it!
        const count = todos.length;
        
        generalCount.textContent = count;
        // doneCount = todos.find(todo => todo. )
        
    }

    const renderTodoList = () => {
        todoAppView.innerHTML = ''
        todos
            .map((item, index) => getTodoHTML(item, index, {
                changeStatusById,
                removeTodoById
            }))
            .forEach(liEelement => todoAppView.appendChild(liEelement))
    }

    const removeTodoById = todoId => {
        const index = todos.findIndex(todo => todo.id === todoId)

        todos.splice(index, 1)
        render()
    }

    const addTodo = todoText => {
        todos.push({
            id:        todos.length + 1,
            value:     todoText,
            isChecked: false
        })

        render()
    }

    render()

    return {
        // addTodo: _addTodo
        addTodo
    }
}
