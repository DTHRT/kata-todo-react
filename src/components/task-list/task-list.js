import './task-list.css';

import Task from '../task';

const TaskList = () => {
  return (
    <ul className="todo-list">
      <Task className="completed" />
      <Task className="editing" />
      <Task />
    </ul>
  );
};

export default TaskList;
