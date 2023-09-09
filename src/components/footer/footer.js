import './footer.css';

import TasksFilter from '../tasks-filter/tasks-filter';
import PropTypes from 'prop-types';

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

Footer.defaultProps = {
  todoData: [],
  onUpdateShowData: () => {},
  filter: '',
  onClearCompleted: () => {},
};

Footer.propTypes = {
  todoData: PropTypes.array,
  onUpdateShowData: PropTypes.func,
  filter: PropTypes.string,
  onClearCompleted: PropTypes.func,
};

export default Footer;
