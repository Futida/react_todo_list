import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

class Todos extends React.Component{
  render() {
    return (
        this.props.todos.map(todo =>
            <TodoItem
                key={todo.id}
                todo={todo}
                completeTodo={this.props.completeTodo}
                deleteTodo={this.props.deleteTodo}
            />
        )
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todos;