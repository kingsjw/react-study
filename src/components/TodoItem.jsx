import React, { useState ,memo } from "react";
import styled from 'styled-components';
import useLongPress from '../plugins/useLongPress';

const ListItem = styled.div`
  padding: 1rem;
  background-color: #fff;
  margin-top: 20px;
  border-radius: .75rem;
  box-shadow: 0 1px 11px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
  user-select: none;
  transition: background-color .3s ease;
  &:first-child{
    margin-top: 0;
  }
  &:hover{
    background-color: rgba(0, 0, 0, 0.01);
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
  border: 1px solid #efefef;
  &::after{
    content: '';
    transition: .3s background-color ease;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${props => props.state ? '#4CAF50' : '#fff'};
  }
`;

const TodoItem = ({ id, title, checked, timestamp, onCreate, onUpdate, onDelete, openMenu }) => {
  const [isChange, setIsChange] = useState(checked);

  const update = (objData) => {
    const objUpdateData = {
      id,
      title,
      checked,
      timestamp,
      ...objData,
    };
    onUpdate(objUpdateData);
  };

  const updateCheckedToggle = () => {
    setIsChange(!isChange);
    update({ checked: isChange });
  };

  const onClick = () => {
    updateCheckedToggle();
  };
  const onLongPress = () => {
    openMenu(true);
  };
  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <ListItem { ...longPressEvent }>
      <ItemContent>
        <div className="title">{ title }</div>
        <StatusBadge state={ isChange } />
      </ItemContent>
    </ListItem>
  );
};

export default memo(TodoItem);
