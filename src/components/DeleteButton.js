import React from 'react'

const DeleteButton = ({ task, onDelete}) => {
    return <button className="btn-delete" onClick={() => onDelete(task.id)}>Delete Task</button>
}

export default DeleteButton;