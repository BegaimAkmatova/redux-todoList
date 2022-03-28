import React from 'react';
import Todos from './components/Todos';
import TodoList from './components/TodoList';
import { useSelector } from 'react-redux';


function App() {
	const select = useSelector(state => state.todoList)
	return (
		<>	
			<Todos />
			<TodoList list={select}/>
		</>
	)
}

export default App
