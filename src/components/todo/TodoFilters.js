import React from 'react'

const TodoFilters = ({activeTodo, doneTodo, unDoneTodo}) => {
  return (
    <div className="wrapper-filters" >
        <b>Filters:</b>
        <ul className="list-status-filters">
            <li>
                <button className="active" onClick={() => activeTodo()}>All</button>
            </li>
            <li>
                <button onClick={() => doneTodo()}>Done</button>
            </li>
            <li>
                <button onClick={() => unDoneTodo()}>Undone</button>
            </li>
        </ul>
    </div>
  )
}


export default TodoFilters;
