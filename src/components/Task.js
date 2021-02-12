import React from "react";
import DeleteButton from "./DeleteButton";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
      </h3>
      <p>{task.day}</p>
      <DeleteButton onDelete={onDelete} task={task} />
    </div>
  );
};

export default Task;
