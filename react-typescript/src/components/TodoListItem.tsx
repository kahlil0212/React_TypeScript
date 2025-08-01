import classes from './TodoListItem.module.css'

const TodoListItem: React.FC<{ todoText: string }> = (props) => {
  return <li className={classes.item}>{props.todoText}</li>;
};

export default TodoListItem;
