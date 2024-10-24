import React from 'react';

// Composant Task : fonction fléchée qui retourne le JSX
const Task = ({ task, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? 'gray' : 'black',
        }}
      >
        {task.text}
      </span>
    </div>
  );
};

export default Task;