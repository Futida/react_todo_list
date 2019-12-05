import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Make foodlist',
          complete: false,
        },
        {
          id: 2,
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

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo />
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
