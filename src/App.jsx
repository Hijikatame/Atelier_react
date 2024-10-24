import React, { useState } from 'react';
import Task from './components/Task';
import Input from './components/Input';
import Nub from './components/Nub';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Acheter du lait', completed: false },
    { id: 2, text: 'Finir le projet React', completed: false },
    { id: 3, text: 'Sortir les poubelles', completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (newTaskText) => {
    const newTask = { id: tasks.length + 1, text: newTaskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Ma ToDo List</h1>
      <Input addTask={addTask} />
      {/* Boucle sur tasks pour afficher chaque tâche avec le composant Task */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={toggleTaskCompletion} />
      ))}
      <Nub tasks={tasks} />
    </div>
  );
}

export default App;