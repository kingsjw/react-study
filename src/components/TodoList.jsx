import TodoItem from './TodoItem.jsx';

const TodoList = ({ arrTodo }) => {
  return (
    <div className='listWrapper'>
      {
        arrTodo.map(({ id, title, status, timestamp }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            status={status}
            timestamp={timestamp}
          />
        ))
      }
    </div>
  );
};

export default TodoList;