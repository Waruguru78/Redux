// src/components/ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../store/todoSlice';

const ListTask = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.todos);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="filter-buttons">
        <button 
          onClick={() => dispatch(setFilter('all'))}
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button 
          onClick={() => dispatch(setFilter('done'))}
          className={filter === 'done' ? 'active' : ''}
        >
          Done
        </button>
        <button 
          onClick={() => dispatch(setFilter('notDone'))}
          className={filter === 'notDone' ? 'active' : ''}
        >
          Not Done
        </button>
      </div>

      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
