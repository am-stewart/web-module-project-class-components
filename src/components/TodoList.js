import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {

render() {
  return (
    <ul>
      {
        this.props.toDo.map(item => (
            <Todo handleToggleTask={this.props.handleToggleTask} key={item.id} toDo={item} />
        ))
      }
    </ul>
  )
  }
}

export default TodoList;