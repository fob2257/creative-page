import React, { useState, useEffect } from 'react';

import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const defaultValues = [
      { id: 1, value: 'Buy milk', done: false },
      { id: 2, value: 'Visit grandma', done: true },
      { id: 3, value: 'Pay bills', done: false }
    ];

    setCounter(defaultValues.length);
    setItems(defaultValues);
  }, []);

  const changeDone = itemId => {
    setItems(
      items.map(item =>
        item.id === itemId ? { ...item, done: !item.done } : item
      )
    );
  };

  const removeItem = itemId => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const addItem = value => {
    const id = counter + 1;

    setCounter(id);
    setItems([{ id, value, done: false }, ...items]);
  };

  return (
    <div id="main">
      <TodoHeader />
      <TodoForm addFn={addItem} />
      <TodoList items={items} removeFn={removeItem} doneFn={changeDone} />
    </div>
  );
};

export default TodoApp;
