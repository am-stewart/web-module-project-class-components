import React from 'react';

class Todo extends React.Component {
  constructor() {
    super();
  }

handleClick = () => {
  this.props.handleToggleTask(this.props.item)
}

render() {
  return (<li onClick={this.handleClick} className={`item${this.props.completed ? 'completed' : ''}`}>{this.props.task}</li>);
  }
}

export default Todo;