// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo'

class TodoList extends React.Component {

render() {
    console.log('todolistjs', this.props)
  return (
    <div>
      {
        this.props.toDo.map(item => (
            <Todo key={item.id} task={item.task} />
        ))
      }
    </div>
  )
  }
}

export default TodoList;