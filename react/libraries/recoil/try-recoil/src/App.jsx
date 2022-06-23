import { useState } from 'react';
import TodoList from './TodoList';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { todoListLengthState, todoListState } from './recoil';

const INITIAL_TODOLIST = ['밥먹기', '공부하기', '놀기'];

function App() {
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);
  const todoListLength = useRecoilValue(todoListLengthState);

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodo = e.target.todo.value;

    setTodoList((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <TodoList todoList={todoList} />
      <form onSubmit={handleAddTodo}>
        <input name="todo" />
        <button type="submit">할 일 추가</button>
      </form>
      {todoListLength}개
    </>
  );
}

export default App;
