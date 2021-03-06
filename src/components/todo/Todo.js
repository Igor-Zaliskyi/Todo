import React, { Component } from 'react'
import TodoCounts from './TodoCounts'
import TodoFormAdd from './TodoFormAdd'
import TodoItem from './TodoItem'
import { addTodo, removeTodo, updateTodo } from 'api'
import { isValidValue } from './helpers'

export class Todo extends Component {
    constructor(props) {
        super(props)
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

    handleAddTodo(event, value ) {
        event.preventDefault()
        const trimmedValue = value.trim()
        if (isValidValue(trimmedValue)) {
           return  addTodo({ value: trimmedValue })
           .then(this.props.onFetchTodos)
        }
    }

    onUpdateTodo(todo) {
        return updateTodo(todo)
            .then(this.props.onFetchTodos)
    }

    render() {
        const { todos } = this.props
        return (
            <div>
                <TodoCounts todos={todos} />
                <TodoFormAdd
                    onAddTodo={this.handleAddTodo}
                />
                <div class="wrapper-filters">
                    <b>Filters:</b>
                    <ul class="list-status-filters">
                        <li>
                            <button class="active">All</button>
                        </li>
                        <li>
                            <button>Done</button>
                        </li>
                        <li>
                            <button>Undone</button>
                        </li>
                    </ul>
                </div>
                <ul className="todo-list">
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onUpdateStatus={this.handleUpdateStatus}
                            onUpdateTitle={this.handleUpdateTitle}
                            onRemoveTodo={this.handleRemoveTodo}

                        />
                    ))}
                </ul>
            </div>
        )
    }
}
