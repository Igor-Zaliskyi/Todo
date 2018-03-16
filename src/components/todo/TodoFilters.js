import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoFilters extends Component {
  constructor(props) {
    super(props);
    this.heandleTodoDone = this.heandleTodoDone.bind(this);
    this.heandleTodoUndone = this.heandleTodoUndone.bind(this);
    this.heandleTodoAll = this.heandleTodoAll.bind(this);
    
    this.state = {
      filterTodos: []
    }
  }
  heandleTodoDone(){
    const { doneTodo } = this.props;
    return this.setState({
        filtersTodos: doneTodo
    })
  }

  heandleTodoUndone() {
    const { unDoneTodo } = this.props;
    return this.setState({
      filtersTodos: unDoneTodo
    }) 
  }

  heandleTodoAll() {
    const { activeTodo } = this.props;
    return this.setState({
      filtersTodos: activeTodo
    })
  }

  render() {
    const { filtersTodos } = this.state;
   
    return (
      <div className="wrapper-filters">
      <b>Filters:</b>
      <ul className="list-status-filters">
        <li>
          <button className="active" onClick={() => this.heandleTodoAll()} >All</button>
        </li>
        <li>
          <button onClick={() => this.heandleTodoDone()}>Done</button>
        </li>
        <li>
          <button onClick={() => this.heandleTodoUndone()}>Undone</button>
        </li>
      </ul>
        {filtersTodos}
    </div>
    );
  }
}

export default TodoFilters;

  
