import React, { useState } from 'react';
import './App.css';
import { AddTodo } from './Component/AddTodo/AddTodo';
import { AllTodo } from './Component/AllTodo/AllTodo';
function App() {
	const [data, setData] = useState([]);

	const removeData = (id) => {
		setData((prev) => {
			const todoFilter = prev.filter((item) => item.id !== id);
			return todoFilter;
		});
	};

	console.log(data);

	return (
		<div className='main_app'>
			<div className='main_todo'>
				<h1>Todo List</h1>
				<AddTodo setData={setData} />
				<AllTodo removeData={removeData} AllTodo={data} />
			</div>
		</div>
	);
}
export default App;
