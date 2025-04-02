/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] {
  const todosString: string | null = localStorage.getItem('todos-storage');
  return todosString ? (JSON.parse(todosString) as Todo[]) : [];
}
