import React from 'react';

const TodoList = (props) => {
  // debugger
  return(
    <>
      <h3>Todo List goes here!</h3>
      <ul>
        {props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </>
  )
};

export default TodoList
