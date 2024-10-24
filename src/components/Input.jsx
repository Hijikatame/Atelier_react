import React, { useState } from 'react';

const Input = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');  // Réinitialiser le champ après l'ajout de la tâche
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleAddTask}>Ajouter</button>
    </div>
  );
};

export default Input;