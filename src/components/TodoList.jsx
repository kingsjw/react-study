import React from "react";
import TodoItem from './TodoItem.jsx';
import styled from 'styled-components';

const ListWrapper = styled.div`
  padding: 0 1rem;
`;

const TodoList = ({ arrTodo, onCreate, onUpdate, onDelete, onToggle }) => {
  return (
    <ListWrapper>
      {
        arrTodo.map(({ id, title, checked, timestamp }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            checked={checked}
            timestamp={timestamp}
            onCreate={onCreate}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      }
    </ListWrapper>
  );
};

export default TodoList;
