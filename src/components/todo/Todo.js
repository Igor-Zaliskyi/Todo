import React, { Component } from 'react'
import TodoCounts from './TodoCounts'
import TodoFormAdd from './TodoFormAdd'
import TodoItem from './TodoItem'
import TodoFilters from './TodoFilters'
import { filtersDone, filtersUnDone } from './helpers'
import { addTodo, removeTodo, updateTodo } from 'api'

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleUpdateStatus = this.handleUpdateStatus.bind(this)
        this.handleUpdateTitle = this.handleUpdateTitle.bind(this)
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
        this.heandleDaneTodos = this.heandleDaneTodos.bind(this)
        this.heandleUnDoneTodos = this.heandleUnDoneTodos.bind(this)
        this.state = {
            filters: []
        }
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
        if (/^[\wа-яії0-9\s]+$/i.test(trimmedValue)) {
            return  addTodo({ value: trimmedValue })
                .then(this.props.onFetchTodos)
        }
    }

    onUpdateTodo(todo) {
        return updateTodo(todo)
            .then(this.props.onFetchTodos)
    }

    heandleDaneTodos(){
        document.querySelector('.todo-list')
            .style.display='none'
        return this.setState({filters: filtersDone})
    }

    heandleUnDoneTodos() {
        document.querySelector('.todo-list')
            .style.visibility='hidden'
        return this.setState({filters: filtersUnDone})
    }


    render() {
        const { todos } = this.props;
        const { filters } = this.state;
        const active = (
            <ul className="todo-list" >
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdateStatus={this.handleUpdateStatus}
                    onUpdateTitle={this.handleUpdateTitle}
                    onRemoveTodo={this.handleRemoveTodo}
                /> ))}
            </ul> 
        )
            
        return (
            <div>
                <TodoCounts todos={todos} />
                <TodoFormAdd
                    onAddTodo={this.handleAddTodo}
                />
                <TodoFilters activeTodo={() => 
                             this.setState({filters: active})}
                             doneTodo={this.heandleDaneTodos}
                             unDoneTodo={this.heandleUnDoneTodos}
                             todos={todos}
                />
                {filters} {active}
            </div>
        )
    }
}
