import Todo from "../models/todo";
import TodoListItem from "./TodoListItem";
import classes from './Todos.module.css'

const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void}> = (props) => {

    
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoListItem onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} key={item.id} todoText={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
