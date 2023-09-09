import './footer.css';

import TasksFilter from '../tasks-filter/tasks-filter';

const Footer = ({ todoData, onUpdateShowData, filter, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {todoData.filter((item) => item.isActive).length} items left
      </span>

      <TasksFilter onUpdateShowData={onUpdateShowData} filter={filter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
