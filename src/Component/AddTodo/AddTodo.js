import React, { useState } from 'react';
import './AddTodo.css';
import { v4 as uuidv4 } from 'uuid';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const add = <FontAwesomeIcon icon={faCirclePlus} />;

export const AddTodo = ({ setData }) => {
	const [todo, setTodo] = useState({
		id: '',
		todo: '',
	});

	const inputHandler = (event) => {
		const name = event.target.name;

		setTodo((prev) => {
			const data = {
				...prev,
				[name]: event.target.value,
				id: uuidv4(),
			};
			return data;
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		setTodo({
			id: '',
			todo: '',
		});
		setData((prev) => [...prev, todo]);
	};

	return (
		<div className='add_todo'>
			<form action='#' onSubmit={submitHandler}>
				<input
					value={todo.todo}
					onChange={inputHandler}
					type='text'
					name='todo'
					placeholder='Enter Your Message...'
					id=''
				/>
				<button name='button'>{add}</button>
			</form>
		</div>
	);
};
