import React, { Component } from 'react'
import { TodoBase, TodoFormAdd, TodoWithCounts } from 'components'
import { addTodo, fetchAllTodos, removeTodo, updateTodo } from 'reducers/todoReducer'
import { connect } from 'react-redux'

class Home extends Component {
    constructor() {
        super()
        this.fetchTodos = this.fetchTodos.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.ActionButton = ({ id }) => <button onClick={() => this.handleMoveToArchive(id)}>Move to archive</button>
    }

    fetchTodos() {
        this.props.fetchAllTodos()
    }

    handleAddTodo(value) {
        return this.props.addTodo(value)
    }

    handleMoveToArchive(id) {
        return this.props.updateTodo({ id, archive: true })
    }

    handleRemoveTodo(todoId) {
        return this.props.removeTodo(todoId)
    }

    componentWillMount() {
        this.fetchTodos()
    }

    render() {
        const { todosNotArchive, todosArchive } = this.props.todo
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <TodoFormAdd
                        onAddTodo={this.handleAddTodo}
                    />
                    <TodoBase todos={todosNotArchive} onFetchTodos={this.fetchTodos}
                              ActionButton={this.ActionButton} />
                </div>
                <div>
                    <TodoWithCounts todos={todosNotArchive} onFetchTodos={this.fetchTodos}
                                    ActionButton={this.ActionButton} />
                </div>
                <div>
                    <h2>Archive</h2>
                    <TodoBase todos={todosArchive} onFetchTodos={this.fetchTodos}
                              ActionButton={({ id }) => <button onClick={() => this.handleRemoveTodo(id)}>Remove from
                                  archive</button>} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todo
})

const mapDispatchToProps = {
    fetchAllTodos,
    addTodo,
    updateTodo,
    removeTodo
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home)
