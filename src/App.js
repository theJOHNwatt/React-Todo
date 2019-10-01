import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'


const data = [
  {
    name: 'Clean Room',
    id: 1528817077289,
    completed: false
  },
  {
    name: '30 Minute Run',
    id: 1528817077286,
    completed: false
  },
  {
    name:'Eat',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      name: 'Todo List',
      data:data
    };
  }

  toggleItem = id => {
    console.log(id);
    
    this.setState ({
      data: this.state.data.map(item => {
        console.log(item);
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newItem]
    });
  };

  clearItems = (e) => {
    e.preventDefault();
    this.setState({
      data: this.state.data.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          data={this.state.data}
          toggleItem={this.toggleItem}
          clearItems={this.state.clearItems}
          />
      </div>
    )
  }
  


}

export default App;
