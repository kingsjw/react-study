import React, {useEffect} from "react";
import { animated } from 'react-spring';
import styled from 'styled-components';

const MenuWrapper = styled(animated.div)`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  ul{
    li{
      width: 100%;
      padding: 1.3rem 2rem;
      border-bottom: 1px solid #ebecf1;
      font-size: 0.9rem;
      cursor: pointer;
      &:last-of-type{
        border-bottom: none;
      }
    }
  }
`;

const TodoMenu = ({ menuOnClick, style }) => {
  useEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    return () => window.document.body.style.overflowY = '';
  }, []);
  return (
    <MenuWrapper style={style}>
      <ul>
        <li onClick={() => menuOnClick('edit')} className='edit'>수정하기</li>
        <li onClick={() => menuOnClick('remove')} className='remove'>삭제하기</li>
      </ul>
    </MenuWrapper>
  );
};

export default TodoMenu;
