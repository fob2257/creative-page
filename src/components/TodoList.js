import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const { items, removeFn, doneFn } = props;

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
}

export default TodoList;
