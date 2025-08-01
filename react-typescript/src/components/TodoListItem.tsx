import classes from './TodoListItem.module.css'

const TodoListItem: React.FC<{ todoText: string, onRemoveTodo: () => void }> = (props) => {
  return <li onClick={props.onRemoveTodo} className={classes.item}>{props.todoText}</li>;
};

export default TodoListItem;
