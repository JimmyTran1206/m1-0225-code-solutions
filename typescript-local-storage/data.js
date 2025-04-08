'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const todosString = localStorage.getItem('todos-storage');
  return todosString ? JSON.parse(todosString) : [];
}
