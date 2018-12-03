import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
console.log(store, "hello")
window.store = store

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	// your root component here...
});
