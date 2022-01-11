import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
  constructor() {
      super();
  }

render() {
  return (
    <ul>
      {
        this.props.toDo.map(item => (
            <Todo handleToggleTask={this.props.handleToggleTask} key={item.id} task={item.task} />
        ))
      }
    </ul>
  )
  }
}

export default TodoList;