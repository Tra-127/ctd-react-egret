import React from 'react';
import "./TodoList"
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
  return (
      <div>
          <h1> Todo List </h1>
          <AddTodoForm></AddTodoForm>
          <TodoList></TodoList>
      </div>
  );
}

export default App;
