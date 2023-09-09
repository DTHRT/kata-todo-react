import { Component } from 'react';
import './tasks-filter.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TasksFilter = ({ onUpdateShowData, filter }) => {
  return (
    <ul className="filters">
      <li>
        <button onClick={() => onUpdateShowData('all')} className={classNames({ selected: filter === 'all' })}>
          All
        </button>
      </li>
      <li>
        <button onClick={() => onUpdateShowData('active')} className={classNames({ selected: filter === 'active' })}>
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

TasksFilter.defaultProps = {
  onUpdateShowData: () => {},
  filter: '',
};

TasksFilter.propTypes = {
  onUpdateShowData: PropTypes.func,
  filter: PropTypes.string,
};

export default TasksFilter;
