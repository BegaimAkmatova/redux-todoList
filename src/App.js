import React, { useEffect } from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import { useSelector } from 'react-redux';

function App() {
	const select = useSelector(state => state.todoList)

	useEffect(() => {
		fetch('https://todo-4fe2f-default-rtdb.firebaseio.com/todo.json', {
			method: 'POST',
			body: JSON.stringify(select)
		})
	},[select])

	// useEffect(() => {
	// 	const localTodo = JSON.parse(localStorage.getItem('items'));
		
	// },[])

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(select))
	},[select])

	return (
		<>	
			<Todo />
			<TodoList list={select}/>
		</>
	)
}

export default App
