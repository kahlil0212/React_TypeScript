import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import classes from './Todos.module.css'
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {

    const todosCtx = useContext(TodosContext)

    
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoListItem onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} key={item.id} todoText={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
