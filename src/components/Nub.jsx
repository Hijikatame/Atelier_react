import React from 'react';

const Nub = ({ tasks }) => {
  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div>
      <p>Il reste {remainingTasks} tâche(s) à faire.</p>
    </div>
  );
};

export default Nub;
