import React from "react";
import TodoTemplate from '../components/TodoTemplate.jsx';

const TodoContainer = () => {
  const arrTestData = [
    {
      id: '1',
      title: 'create react app 해보자',
      state: '',
      timestamp: new Date().getTime(),
    },
    {
      id: '2',
      title: 'reudux를 해보자',
      state: '',
      timestamp: new Date().getTime(),
    },
    {
      id: '3',
      title: '빨리 해보자',
      state: 'checked',
      timestamp: new Date().getTime(),
    },
  ];

  const handleToggle = () => {};

  const handleUpdate = () => {};

  const handleDelete = () => {};

  const handleCreate = () => {};

  return (
    <TodoTemplate
      arrTodo={ arrTestData }
      onCreate={ handleCreate }
      onUpdate={ handleUpdate }
      onDelete={ handleDelete }
      onToggle={ handleToggle }
    />
  );
};

export default TodoContainer;
