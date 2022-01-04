import { Todo, TodoState } from "../interfaces/interfaces";

type TodoActions =
  | { type: "addTodo"; payload: Todo }
  | { type: "toggleTodo"; payload: { id: string } };

export const TodoReducer = (
  state: TodoState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "toggleTodo":
      //   const todos = state.todos.map(({ ...todo }) => {
      //     if (todo.id === action.payload.id) {
      //       todo.completed = !todo.completed;
      //       console.log(todo);
      //     }

      //     return todo;
      //   });
      //   return {
      //     ...state,
      //     todos: todos,
      //   };

      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
