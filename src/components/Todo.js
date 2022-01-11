import React from 'react';

class Todo extends React.Component {

handleClick = () => {
  this.props.handleToggleTask(this.props.toDo)
}

render() {
  return (<li onClick={this.handleClick}>{this.props.toDo.task} { this.props.toDo.completed?<span>-completed</span> : <span></span> }</li>);
  }
}

export default Todo;