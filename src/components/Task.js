import React from "react";
import DeleteButton from "./DeleteButton";
import ReminderButton from './ReminderButton'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
    >
      <h3>
        {task.text}
      </h3>
      <p>{task.day}</p>
      <DeleteButton onDelete={onDelete} task={task} />
      <ReminderButton onToggle={onToggle} task={task}/>
    </div>
  );
};

export default Task;
