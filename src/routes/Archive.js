import React, { Component, Fragment } from 'react'
import { TodoBase } from 'components'
import { fetchArchiveTodos, removeTodo } from 'reducers/todoReducer'
import { connect } from 'react-redux'

class Archive extends Component {
    constructor() {
        super()
        this.fetchTodos = this.fetchTodos.bind(this)
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
    }

    fetchTodos() {
        this.props.fetchArchiveTodos()
    }

    handleRemoveTodo(todoId) {
        return this.props.removeTodo(todoId)
    }

    componentWillMount() {
        this.fetchTodos()
    }

    render() {
        return (
            <Fragment>
                <TodoBase
                    todos={this.props.todo.todosArchive}
                    onFetchTodos={this.fetchTodos}
                    ActionButton={({ id }) => <button onClick={() => this.handleRemoveTodo(id)}>Remove from
                        archive</button>} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todo
})

const mapDispatchToProps = {
    fetchArchiveTodos,
    removeTodo
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Archive)
