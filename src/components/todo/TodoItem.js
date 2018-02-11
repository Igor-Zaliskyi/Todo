import React from 'react'

const TodoItem = ({ todo, onUpdateStatus, onUpdateTitle, ActionButton }) => {
    let label
    return (
        <li className={todo.isChecked ? 'active' : ''}>
            <input type="checkbox"
                   checked={todo.isChecked}
                   onChange={() => onUpdateStatus(todo.id, !todo.isChecked)} />
            <label contentEditable="true"
                   suppressContentEditableWarning="true"
                   ref={labelEl => label = labelEl}
                   onBlur={() => onUpdateTitle(todo.id, label.textContent)}>{todo.value}</label>
            <ActionButton id={todo.id}/>
        </li>
    )
}

export default TodoItem
