import React, { Component } from 'react';

import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      items: [],
    };
  };

  componentDidMount() {
    const defaultValues = [
      { id: 1, value: 'Buy milk', done: false },
      { id: 2, value: 'Visit grandma', done: true },
      { id: 3, value: 'Pay bills', done: false },
    ];

    this.setState({
      counter: defaultValues.length,
      items: defaultValues,
    });
  };

  changeDone = itemId => {
    const { items } = this.state;

    this.setState({
      items: items.map(item => (item.id === itemId) ? { ...item, done: !item.done } : item),
    });
  };

  removeItem = itemId => {
    const { items } = this.state;

    this.setState({
      items: items.filter(item => item.id !== itemId),
    });
  };

  addItem = value => {
    const { items, counter } = this.state;

    const id = counter + 1;
    this.setState({
      counter: id,
      items: [{ id, value, done: false }, ...items],
    });
  };

  render() {
    const { items } = this.state;

    return (
      <div id='main'>
        <TodoHeader />
        <TodoForm addFn={this.addItem} />
        <TodoList
          items={items}
          removeFn={this.removeItem}
          doneFn={this.changeDone}
        />
      </div>
    );
  };
};

export default TodoApp;

