import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'TodoList',
  default: [],
});

export const todoListLengthState = selector({
  key: 'TodoListLength',
  get: ({ get }) => {
    const todoList = get(todoListState);

    return todoList.length;
  },
});
