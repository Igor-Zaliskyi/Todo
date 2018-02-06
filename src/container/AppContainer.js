import React, { Component } from 'react'
import { Todo } from 'components'
import { getTodos } from 'components/todo/todo.service'

export default class AppContainer extends Component {
    constructor(props) {
        super(props)
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
        const { todos } = this.state
        return (
            <div>
                <Todo todos={todos} fetchTodos={this.fetchTodos} />
                <Todo todos={todos} fetchTodos={this.fetchTodos} />
            </div>
        )
    }
}
