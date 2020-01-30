import React, { useEffect, useLayoutEffect } from 'react';

import TodoListItem from './TodoListItem';

const willMount = { current: true };

const TodoList = ({ items, removeFn, doneFn }) => {
  if (willMount.current) console.log('Lifecycle: componentWillMount()');

  useEffect(() => {
    willMount.current = false;
    console.log('Lifecycle: componentDidMount()');

    return () => {
      console.log('Lifecycle: componentWillUnmount()');
    };
  }, []);

  useEffect(() => {
    console.log('Lifecycle: componentWillReceiveProps()', { items });

    return () => {
      console.log('Lifecycle: componentDidUpdate()', { previousItems: items });
    };
  }, [items]);

  useLayoutEffect(() => {
    console.log('Lifecycle: render()');
  }, []);

  return (
    <ul className="list-group">
      {items.map((item, i) => (
        <TodoListItem
          key={i}
          item={item}
          itemRemove={removeFn}
          itemDone={doneFn}
        />
      ))}
    </ul>
  );
};

export default TodoList;
