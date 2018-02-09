import React, { Fragment } from 'react'
import { Counter } from 'components'

const TodoCounts = ({ todos }) => {
    const allTodos = todos.length
    const doneTodos = todos.filter(todo => todo.isChecked).length
    const undoneTodos = allTodos - doneTodos
    return (
        <Fragment>
            <Counter />
            <p>General count of todos - <span>{allTodos}</span></p>
            <p>Count of done - <span>{doneTodos}</span></p>
            <p>Count of undone - <span>{undoneTodos}</span></p>
        </Fragment>
    )
}

export default TodoCounts
