import React, { Component, Fragment } from 'react'
import TodoFormAdd from './TodoFormAdd'
import TodoItem from './TodoItem'
import { addTodo, removeTodo, updateTodo } from 'api'

export default class TodoBase extends Component {
    constructor() {
        super()
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleUpdateStatus = this.handleUpdateStatus.bind(this)
        this.handleUpdateTitle = this.handleUpdateTitle.bind(this)
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
    }

    handleUpdateStatus(id, isChecked) {
        return this.onUpdateTodo({
            id,
            isChecked
        })
    }

    handleUpdateTitle(id, value) {
        return this.onUpdateTodo({
            id,
            value
        })
    }

    handleRemoveTodo(todoId) {
        return removeTodo(todoId)
            .then(this.props.onFetchTodos)
    }

    handleAddTodo(value) {
        return addTodo({ value })
            .then(this.props.onFetchTodos)
    }

    onUpdateTodo(todo) {
        return updateTodo(todo)
            .then(this.props.onFetchTodos)
    }

    render() {
        return (
            <Fragment>
                <TodoFormAdd
                    onAddTodo={this.handleAddTodo}
                />
                <ul className="todo-list">
                    {this.props.todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onUpdateStatus={this.handleUpdateStatus}
                            onUpdateTitle={this.handleUpdateTitle}
                            onRemoveTodo={this.handleRemoveTodo}
                        />
                    ))}
                </ul>
            </Fragment>
        )
    }
}
