// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../store/todoSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt("Edit task:", task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  return (
    <div className={`task-container ${task.isDone ? 'done' : ''}`}>
      <span>{task.description}</span>
      <div>
        <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default Task;
