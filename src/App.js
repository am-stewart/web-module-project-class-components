import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: 'laundry',
    id:123,
    completed: false
  },
  {
    task: 'dishes',
    id: 124,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: tasks
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDo={this.state.toDo} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
