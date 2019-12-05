import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

  getStyle = () => {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.complete ?
          'line-through' : 'none'
    }
  };

  render() {
    const { id, title, complete } = this.props.todo;
    const {completeTodo, deleteTodo} = this.props;

    return (
        <div style={this.getStyle()}>
          <p>
            <input type="checkbox" onChange={completeTodo.bind(this, id)} checked={complete}/>
            {title}
          </p>
          <div style={btnStyle} onClick={deleteTodo.bind(this, id)}>
            <span>x</span>
          </div>
        </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  fontSize: '10px',
  backgroundColor: 'red',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer'
};

export default TodoItem;