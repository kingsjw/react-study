import React, { useState } from "react";
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import '../styles/transition.css';

const ListItem = styled.div`
  padding: 1rem;
  background-color: #fff;
  margin-top: 20px;
  border-radius: .75rem;
  box-shadow: 0 1px 11px 0 rgb(0 0 0 / 10%);
  &:first-child{
    margin-top: 0;
  }
`;
const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title{
    font-size: 0.8rem;
  }
`;

const StatusBadge = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 1px 11px 0 rgb(0 0 0 / 10%);
  &::after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${props => props.state === 'checked' ? '#4CAF50' : '#fff'};
  }
`;

const TodoItem = ({ id, title, state, timestamp, onCreate, onUpdate, onDelete, onToggle }) => {
  return (
    <ListItem>
      <ItemContent>
        <div className="title">{ title }</div>
        <StatusBadge state={ state } />
      </ItemContent>
    </ListItem>
  );
};

export default TodoItem;
