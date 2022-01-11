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
  },
  {
    task: 'make bed',
    id: 1256,
    completed: true
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
  handleAddItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    
    this.setState({
      ...this.state,
      toDo: [...this.state.toDo, newItem]
    });
  }

  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      toDo: this.state.toDo.filter(item => {
        return !item.completed;
      })
    });
  }

  handleToggleTask = (selectedItem) => {
    this.setState({
      ...this.state,
      toDo: this.state.toDo.map(item => {
        console.log('appjs map toDo item', item)
        console.log('appjs selecteditem', selectedItem)
        if(item.id === selectedItem.id) {
          return ({
            ...item,
            completed: !item.completed
          })
        } else {
          return item;
        }
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoList handleToggleTask={this.handleToggleTask} toDo={this.state.toDo} />
        <TodoForm handleAddItem={this.handleAddItem}/>
        <button onClick={this.handleClearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
