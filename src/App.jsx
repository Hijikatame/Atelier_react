import { useState } from 'react'
import './App.css'
import './components/Input'
import AddTask from './components/Input';



function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "Faire les courses", completed: false},
    {id: 2, text: "Boire de l'eau", completed: false},
    {id: 3, text: "Faire du sport", completed: false},
  ]);

const addTask = (newTaskText) => {
  const newTask = {
    id: tasks.length + 1,
    text: newTaskText,
    completed: false, 
  };
  setTasks([...tasks, newTask]);
};

	return (
		<div>
			<Input AddTask={addTask} />
		</div>
	);
}

export default App
