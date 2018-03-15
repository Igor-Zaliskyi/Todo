import React from 'react';

const TodoFilters = ({ todoDone, todoUndone }) => 
<div className="wrapper-filters">
  <b>Filters:</b>
  <ul className="list-status-filters">
    <li>
      <button className="active">All</button>
    </li>
    <li>
      <button onClick={() => todoDone()}>Done</button>
    </li>
    <li>
      <button onClick={() => todoUndone()}>Undone</button>
    </li>
  </ul>

</div>

export default TodoFilters;