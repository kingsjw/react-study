import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import TodoList from './TodoList';
import { CSSTransition } from "react-transition-group";
import '../styles/transition.css';

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

const Mask = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const TodoTemplate = ({ arrTodo, onCreate, onUpdate, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  useEffect(() => {
    window.addEventListener("contextmenu", (e) => e.preventDefault());
    return window.removeEventListener("contextmenu", (e) => e.preventDefault());
  });

  const maskRef = useRef(null);

  return (
    <Wrapper>
      <Title>
        <h1>All Tasks</h1>
      </Title>
      <TodoList
        arrTodo={arrTodo}
        onCreate={onCreate}
        onDelete={onDelete}
        onUpdate={onUpdate}
        openMenu={() => handleMenuToggle(true)}
      />
      <CSSTransition
        in={isMenuOpen}
        classNames='fade'
        timeout={300}
        unmountOnExit
        nodeRef={maskRef}
      >
        <Mask ref={maskRef} onClick={() => handleMenuToggle(false)}/>
      </CSSTransition>
    </Wrapper>
  );
};

export default TodoTemplate;
