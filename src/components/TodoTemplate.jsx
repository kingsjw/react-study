import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoMenu from './TodoMenu';
import { useTransition, animated } from 'react-spring';

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

const Mask = styled(animated.div)`
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

  const menuOnClick = (type) => {
    console.log(type);
    handleMenuToggle(false);
  } ;

  useEffect(() => {
    window.addEventListener("contextmenu", (e) => e.preventDefault());
    return window.removeEventListener("contextmenu", (e) => e.preventDefault());
  });

  const menuTransform = useTransition(isMenuOpen, null, {
    from: { transform: 'translateY(100%)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(100%)' },
    config: { duration: 200 },
    delay: 100,
  });

  const maskTransition = useTransition(isMenuOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
      { maskTransition.map(({ item, key, props}) => item && <Mask style={props} key={key} onClick={() => handleMenuToggle(false)}/>) }
      { menuTransform.map(({ item, key, props}) => item && <TodoMenu menuOnClick={menuOnClick} style={props} key={key} />) }
    </Wrapper>
  );
};

export default TodoTemplate;
