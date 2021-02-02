import React from "react";
import styled from 'styled-components';
import TodoList from './TodoList';

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  padding: 1rem 0;
  background-color: inherit;
  h1{
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const TodoTemplate = ({ arrTodo, onCreate, onUpdate, onDelete, onToggle }) => {
  return (
    <Wrapper>
      <Title>
        <h1>All Tasks</h1>
      </Title>
      <TodoList
        arrTodo={arrTodo}
        onCreate={onCreate}
        onToggle={onToggle}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </Wrapper>
  );
};

export default TodoTemplate;
