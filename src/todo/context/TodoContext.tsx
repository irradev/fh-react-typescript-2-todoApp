import { createContext, useReducer } from "react";
import { props, TodoContextProps, TodoState } from "../interfaces/interfaces";
import { TodoReducer } from "./TodoReducer";

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);


const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Recolectar las piedras del infinito',
      completed: false
    },
    {
      id: '2',
      desc: 'Recolectar las piedras del alma',
      completed: false
    },
  ],
  completed: 0,
  pending: 2
}

export const TodoProvider = ({ children }: props) => {

  const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  const toggleTodo = ( id: string) => {
    dispatch({ type: 'toggleTodo', payload: { id }}); 
  }

  const data: TodoContextProps = {
    todoState,
    toggleTodo
  };
  
  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>
}