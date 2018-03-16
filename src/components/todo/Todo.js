import React, { Component } from 'react'
import TodoCounts from './TodoCounts'
import TodoFormAdd from './TodoFormAdd'
import TodoItem from './TodoItem'
import TodoFilters from './TodoFilters'
import  TodoDone  from './TodoDone'
import { addTodo, removeTodo, updateTodo } from 'api'

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
        const isValidValue = value => /^[\wа-яії0-9\s]+$/i.test(value)
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
        const { todos } = this.props;

        const activeTodo = (
            <ul className="todo-list">
                {this.props.todos.map(todo => (
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdateStatus={this.handleUpdateStatus}
                    onUpdateTitle={this.handleUpdateTitle}
                    onRemoveTodo={this.handleRemoveTodo}
                    /> ))}
            </ul> 
        )

        const doneTodo = (
            <ul className="todo-list">
                {this.props.todos.map(todo => (
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdateTitle={this.handleUpdateTitle}
                    onRemoveTodo={this.handleRemoveTodo}
                    /> ))
                    .filter(todo => console.log(todo.isChecked))
                }
            </ul> 
        )

        const unDoneTodo = (
            <ul className="todo-list">
                {this.props.todos.map(todo => (
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdateTitle={this.handleUpdateTitle}
                    onRemoveTodo={this.handleRemoveTodo}
                    /> ))
                    .filter(todo => !todo.isChecked)
                }
            </ul> 
        )
       
        return (
            <div>
                <TodoCounts todos={todos} />
                <TodoFormAdd
                    onAddTodo={this.handleAddTodo}
                />
                <TodoFilters activeTodo={activeTodo}
                             doneTodo={doneTodo}
                             unDoneTodo={unDoneTodo}/>
                {activeTodo}
            </div>
        )
    }
}
