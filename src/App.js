import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import axios from 'axios'
// import uuid from 'uuid'

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      busy: false
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
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
    this.setState({ busy: true })
    axios.delete(`https://jsonplaceholder.typicode.com/todos/{id}`)
      .then(() => {
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
          todos,
          busy: false
        })
      })
  };

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      comlete: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {
                  this.state.busy ? (
                    <div className="busy"> Deleting todo... </div>
                      ) : (
                    <Todos
                        todos={this.state.todos}
                        completeTodo={this.completeTodo}
                        deleteTodo={this.deleteTodo}
                      />
                      )
                   }
              </React.Fragment>
                      )} />
            <Route path="/about" component={About} />
                    </div>
        </div>
      </Router>
            );
            }
          }
          
          export default App;
