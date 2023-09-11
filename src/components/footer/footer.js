import './footer.css'

import PropTypes from 'prop-types'

import TasksFilter from '../tasks-filter/tasks-filter'

function Footer({ todoData, onUpdateShowData, filter, onClearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{`${todoData.filter((item) => item.isActive).length} items left`}</span>

      <TasksFilter onUpdateShowData={onUpdateShowData} filter={filter} />
      <button type="button" className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  todoData: [],
  onUpdateShowData: () => {},
  filter: '',
  onClearCompleted: () => {},
}

Footer.propTypes = {
  todoData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      isActive: PropTypes.bool,
      id: PropTypes.number,
      date: PropTypes.shape({
        year: PropTypes.number,
        month: PropTypes.number,
        day: PropTypes.number,
      }),
    }),
  ),
  onUpdateShowData: PropTypes.func,
  filter: PropTypes.string,
  onClearCompleted: PropTypes.func,
}

export default Footer
