import React, { Component, Fragment } from 'react'
import TodoBase from './TodoBase'
import TodoWithCounts from './TodoWithCounts'
import { getTodos } from 'api'

export default class Todos extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
        this.fetchTodos = this.fetchTodos.bind(this)
    }

    fetchTodos() {
        getTodos()
            .then(todos => this.setState({ todos }))
    }

    componentWillMount() {
        this.fetchTodos()
    }

    render() {
        return (
            <Fragment>
                <TodoBase todos={this.state.todos} onFetchTodos={this.fetchTodos} />
                <hr />
                <TodoWithCounts todos={this.state.todos} onFetchTodos={this.fetchTodos} />
            </Fragment>
        )
    }
}
