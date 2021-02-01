import styled from 'styled-components';

const ListItem = styled.div`
  padding: 1rem;
`;

const TodoItem = ({ id, title, status, timestamp }) => {
  return (
    <ListItem idx={id}>
      <div className="id">{ id }</div>
      <div className="title">{ title }</div>
      <div className="status">{ status }</div>
      <div className="timestamp">{ timestamp }</div>
    </ListItem>
  );
};

export default TodoItem;