import React, { useState } from 'react';
import './Modal.css'
const Modal = ({ onSave }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave({ title, description });
		setTitle('');
		setDescription('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={handleTitleChange}
					placeholder="Enter title"
				/>
			</div>
			<div>
				<label htmlFor="description">Description:</label>
				<textarea
					id="description"
					value={description}
					onChange={handleDescriptionChange}
					placeholder="Enter description"
					rows={5}
				/>
			</div>
			<div>
				<button type="submit">Save</button>
			</div>
		</form>
	);
};

export default Modal;
