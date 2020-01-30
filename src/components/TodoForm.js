import React, { useState } from 'react';

const TodoForm = ({ addFn }) => {
  const [input, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (!input.length) return;

    addFn(input);

    setInput('');
  };

  const changeInputValue = e => {
    const { value } = e.target;

    setInput(value);
  };

  return (
    <form onSubmit={onSubmit} className="form-inline">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new todo..."
        value={input}
        onChange={changeInputValue}
      />

      <button type="submit" className="btn btn-success">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
