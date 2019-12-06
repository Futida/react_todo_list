import React from 'react';

class AddTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }
  handlerOnChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input
              type="text"
              name="title"
              placeholder="Add todo..."
              style={{ flex: '10', padding: '10px' }}
              value={this.state.title}
              onChange={this.handlerOnChange}
          />
          <input
              type="submit"
              value="Add todo"
              placeholder="Add todo..."
              style={btn}
          />
        </form>
    );
  }
}

const btn = {
  display: 'inline-block',
  flex: '2',
  border: 'none',
  backgroundColor: '#3c3c3c',
  color: '#fff',
  padding: '8px 18px',
  cursor: 'pointer'
};


export default AddTodo;