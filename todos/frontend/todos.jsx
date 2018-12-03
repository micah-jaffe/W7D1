import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { RECEIVE_TODOS, RECEIVE_TODO, receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';

window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;


document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store}/>, root);
});
