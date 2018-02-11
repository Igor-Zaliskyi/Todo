import React, { Component, Fragment } from 'react'
import TodoBase from './TodoBase'
import TodoCounts from './TodoCounts'

export default class TodoWithCounts extends Component {
    constructor() {
        super()
    }

    render() {
        const { todos, onFetchTodos, ActionButton } = this.props
        return (
            <Fragment>
                <TodoCounts todos={todos} />
                <TodoBase todos={todos} onFetchTodos={onFetchTodos} ActionButton={ActionButton} />
            </Fragment>
        )
    }
}
