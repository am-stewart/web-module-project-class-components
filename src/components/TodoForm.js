import React from 'react';

class TodoForm extends React.Component {

  handleChanges = e => {
      this.setState({
        ...this.state,
        input: e.target.value
      });
  };

  handleSubmit = e => {
      e.preventDefault();
      this.props.handleAddItem(this.state.input);
  }

render() {
  return (
    <form >
      <input onChange={this.handleChanges} type='text' name='item' />
      <button onClick={this.handleSubmit}>Add Task</button>
    </form>
  )
  }
}

export default TodoForm;