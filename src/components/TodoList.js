import React, { Component } from 'react';

import TodoListItem from './TodoListItem';

class TodoList extends Component {
  constructor() {
    super();

    console.log('Lifecycle: constructor()');
  };

  componentWillMount() {
    console.log('Lifecycle: componentWillMount()');
  };

  componentDidMount() {
    console.log('Lifecycle: componentDidMount()');
  };

  componentWillReceiveProps(props) {
    console.log('Lifecycle: componentWillReceiveProps()', { props });
  };

  componentDidUpdate(previousProps) {
    console.log('Lifecycle: componentDidUpdate()', { previousProps });
  };

  componentWillUnmount() {
    console.log('Lifecycle: componentWillUnmount()');
  };

  render() {
    console.log('Lifecycle: render()');

    const { items, removeFn, doneFn } = this.props;

    return (
      <ul className='list-group'>
        {
          items.map((item, i) => (
            <TodoListItem
              key={i}
              item={item}
              itemRemove={removeFn}
              itemDone={doneFn}
            />
          ))
        }
      </ul>
    );
  };
};


export default TodoList;
