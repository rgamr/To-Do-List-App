import React , { useState } from "react";

export default function ToDoList() {
  
  const [tasks , setTasks] = useState(['Eat breakfast', 'Go to work', 'Read a book' , 'Exercise', 'Cook dinner']);
  const [newTask , setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask(){

    if(newTask.trim() === ""){
    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTask("");
    }

  }

  function deleteTask(index){  
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index){
     if(index > 0){
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index - 1];
      updatedTasks[index - 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      setTasks(updatedTasks);
     }
  }

  function moveTaskDown(index){ 
      if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index + 1];
      updatedTasks[index + 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      setTasks(updatedTasks);
     }
  }

  return(
    <div className="todo-list">

      <h1>To-Do List</h1>
      
      <div>
        <input 
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleInputChange}
          className="task-input"
          />
        <button onClick={addTask}className="add-btn">Add Task</button>
      </div>

      <ol>
        {tasks.map((task, index) => (
        <li key={index}>
          <span className="task-text">{task}</span>
          <button onClick={() => deleteTask(index)} className="delete-btn">
            Delete Task
          </button>
          <button onClick={() => moveTaskUp(index)} className="move-btn">
            ☝️
          </button>
          <button onClick={() => moveTaskDown(index)} className="move-btn">
           👇
          </button>
  
        </li>
      ))}
      
      </ol>
      
    </div>
  );
}
