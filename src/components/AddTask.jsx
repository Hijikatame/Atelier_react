import { useState } from "react";

function AddTask({ addTask }) {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim() !== "") {
			addTask(inputValue);
			setInputValue("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add your task here"
				value={inputValue}
				onChange={handleChange}
			/>
		</form>
	);
}

export default AddTask;
