import Todo from './Todo';

function TodoList({ todoList }) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo key={todo} content={todo} />
      ))}
    </>
  );
}

export default TodoList;
