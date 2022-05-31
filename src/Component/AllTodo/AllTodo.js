import React from 'react';
import './AllTodo.css';
import { SingleTodo } from './SingleTodo';
export const AllTodo = ({ AllTodo, removeData }) => {
	return (
		<div className='all_todo'>
			{AllTodo.map((item) => (
				<SingleTodo removeData={removeData} key={item.id} item={item} />
			))}
		</div>
	);
};
