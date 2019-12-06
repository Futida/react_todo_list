import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'Make foodlist',
          complete: false,
        },
        {
          id: uuid.v4(),
          title: 'Tidy room',
          complete: true,
        }
      ]
    };
  }

  completeTodo = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    });

    this.setState({
      todos
    })
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({
      todos
    })
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      comleted: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header/>
            <AddTodo addTodo={this.addTodo}/>
            <Todos
                todos={this.state.todos}
                completeTodo={this.completeTodo}
                deleteTodo={this.deleteTodo}
            />
          </div>
        </div>
    );
  }
}

export default App;
