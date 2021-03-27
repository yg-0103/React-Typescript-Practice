import { createAction } from 'typesafe-actions';

export const ADD_TODO = 'todos/ADD_TODO'; //as const typesafe-actions 사용전
export const TOGGLE_TODO = 'todos/TOGGLE_TODO'; // as const;
export const REMOVE_TODO = 'todos/REMOVE_TODO'; // as const;

let nextId = 1;

export const addTodo = createAction(ADD_TODO, (payload: string) => ({
  id: nextId++,
  text: payload,
}))();

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

// typesafe-actions 사용전
// export const addTodo = (text: string) => ({
//   type: ADD_TODO,
//   payload: {
//     id: nextId++,
//     text,
//   },
// });

// export const toggleTodo = (id: number) => ({
//   type: TOGGLE_TODO,
//   payload: id,
// });

// export const removeTodo = (id: number) => ({
//   type: REMOVE_TODO,
//   payload: id,
// });
