import React, { useState } from 'react';
import './Task.css'

const Task = ({ id, title, description, completed, onEdit, onDelete, onToggleComplete }) => {
    const [isEditing, setEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
    const [isToggled,setToggle] = useState(false)

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        onEdit(id, editedTitle, editedDescription);
        setEditing(false);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    const handleToggle = (e) => {
        let doc = document.getElementById("toggle")
        setToggle(!isToggled)
        doc.classList.toggle("hidden")
    };

    return (
        <>
            <div className='task'>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="buttons" onClick={handleToggle}>
                    <span> {isToggled? <i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>} </span>
                    <ul id='toggle' className='hidden'>
                        <li><button>Edit <i className="fa-solid fa-pen"></i></button></li>
                        <li><button>Delete <i className="fa-solid fa-trash"></i></button></li>
                        <li><button>Mark complete <i className="fa-solid fa-circle-check"></i></button></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Task;
