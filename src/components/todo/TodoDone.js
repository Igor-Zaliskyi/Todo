import React from 'react'

const TodoDone = ({todos}) => {
    console.log(todos);
    
    const todosCheced = todos.filter(todo => todo.isChecked)    
    const todosId = todos.map(todo => todo.id)    
    const todosValue = todos.map(todo => todo.value)    
    return (
        <ul className="todo-list">
                <li key={todosId}>
                    <input type="checkbox"
                        checked={todosCheced}
                        id={'todoDone'}
                        readOnly
                    />
                    <label htfor="todoDone">{todosValue}</label>
                    <button>X</button>
                </li>
        </ul>
    )
}

export default TodoDone