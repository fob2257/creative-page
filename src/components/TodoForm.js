import React, { Component } from 'react'

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  };

  onSubmit = e => {
    e.preventDefault();

    const { addFn } = this.props;
    const { inputValue } = this.state;

    if (!inputValue.length) return;

    addFn(inputValue);

    this.setState({
      inputValue: '',
    });
  };

  changeInputValue = e => {
    const { value } = e.target;

    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form onSubmit={this.onSubmit} className='form-inline'>
        <input
          type='text'
          className='form-control'
          placeholder='Add a new todo...'
          value={inputValue}
          onChange={this.changeInputValue}
        />

        <button type='submit' className='btn btn-success'>
          Add
        </button>
      </form>
    )
  }
};

export default TodoForm;
