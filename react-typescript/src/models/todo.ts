import { v4 as uuid4 } from "uuid";

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = uuid4();
    this.text = todoText;
  }
}

export default Todo;
