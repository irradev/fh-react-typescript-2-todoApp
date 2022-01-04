import { useTodos } from "../hooks/useTodos";
import { TodoProps } from "../interfaces/interfaces"

export const TodoItem = ({ todo }: TodoProps) => {

  const { toggleTodo } = useTodos();

  return (
    <li 
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : ''
      }}
      onDoubleClick={() => toggleTodo(todo.id)}>
      {todo.desc}
    </li>
  )
}
