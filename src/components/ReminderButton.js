import React from 'react'

const ReminderButton = ({ task, onToggle}) => {
    return (
        <button className="btn-reminder" onClick={() => onToggle(task.id)}>Set Reminder</button>
    )
}

export default ReminderButton
