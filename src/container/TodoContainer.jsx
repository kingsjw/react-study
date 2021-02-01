import TodoTemplate from '../components/TodoTemplate.jsx';

const TodoContainer = () => {
  const arrTestData = [
    {
      id: '1',
      title: 'create react app 해보자',
      status: '',
      timestamp: new Date().getTime(),
    },
    {
      id: '2',
      title: 'reudux를 해보자',
      status: '',
      timestamp: new Date().getTime(),
    },
  ];

  return (
    <TodoTemplate
      arrTodo={ arrTestData }
    />
  );
};

export default TodoContainer;
