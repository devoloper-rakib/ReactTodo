import React from 'react';
import './AllTodo.css';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const del = <FontAwesomeIcon icon={faCircleMinus} />;

export const SingleTodo = ({ item, removeData }) => {
	const deleteHandler = (id) => {
		removeData(id);
	};

	return (
		<div className='singleTodo'>
			<span>{item.todo}</span>
			<button onClick={() => deleteHandler(item.id)} name='button'>
				{del}
			</button>
		</div>
	);
};
