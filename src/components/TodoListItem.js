import React from 'react';

const TodoListItem = ({
  item,
  itemRemove,
  itemDone,
}) => (
    <li className='list-group-item'>
      <p
        onClick={() => itemDone(item.id)}
        className={item.done ? 'done' : 'undone'}
      >
        {item.value}
      </p>
      <button
        type='button'
        className='close'
        onClick={() => itemRemove(item.id)}
      >
        &times;
      </button>
    </li>
  );

export default TodoListItem;
