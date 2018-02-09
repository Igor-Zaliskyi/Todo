import React, { Component, Fragment } from 'react'
import TodoBase from './TodoBase'
import TodoCounts from './TodoCounts'

export default class TodoWithCounts extends Component {
    constructor() {
        super()
    }

    render() {
        const { todos, onFetchTodos } = this.props
        return (
            <Fragment>
                <TodoCounts todos={todos} />
                <TodoBase todos={todos} onFetchTodos={onFetchTodos} />
            </Fragment>
        )
    }
}
