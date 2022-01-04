export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: string) => void;
};

export interface props {
  children: JSX.Element | JSX.Element[];
}

export interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}

export interface TodoState {
  todoCount: number;
  todos: Todo[];
  completed: number;
  pending: number;
}

export interface TodoProps {
  todo: Todo;
}
