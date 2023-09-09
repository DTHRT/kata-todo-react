import { Component } from 'react';
import './tasks-filter.css';
import classNames from 'classnames';

const TasksFilter = ({ onUpdateShowData, filter }) => {
  return (
    <ul className="filters">
      <li>
        <button
          onClick={() => onUpdateShowData('all')}
          className={classNames({ selected: filter === 'all' })}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => onUpdateShowData('active')}
          className={classNames({ selected: filter === 'active' })}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => onUpdateShowData('completed')}
          className={classNames({ selected: filter === 'completed' })}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
