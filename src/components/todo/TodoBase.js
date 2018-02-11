import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { updateTodo } from 'reducers/todoReducer'

class TodoBase extends Component {
    constructor() {
        super()
        this.handleUpdateStatus = this.handleUpdateStatus.bind(this)
        this.handleUpdateTitle = this.handleUpdateTitle.bind(this)
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

    onUpdateTodo(todo) {
        return this.props.updateTodo(todo)
    }

    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdateStatus={this.handleUpdateStatus}
                        onUpdateTitle={this.handleUpdateTitle}
                        ActionButton={this.props.ActionButton}
                    />
                ))}
            </ul>
        )
    }
}

const mapDispatchToProps = {
    updateTodo
}

export default connect(
    null, mapDispatchToProps
)(TodoBase)
