import React, { Component } from 'react'

class TodoFormAdd extends Component {
    constructor() {
        super()
        this.onInput = this.onInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            inputValue: ''
        }
    }

    onInput(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        this.props.onAddTodo(this.state.inputValue)
    }

    shouldComponentUpdate(){
        return false
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Enter name new todo" onInput={this.onInput} />
                <input type="submit" value="Add todo" />
            </form>
        )
    }
}

export default TodoFormAdd
