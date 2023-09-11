import './tasks-filter.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function TasksFilter({ onUpdateShowData, filter }) {
  return (
    <ul className="filters">
      <li>
        <button
          onClick={() => onUpdateShowData('all')}
          className={classNames({ selected: filter === 'all' })}
          type="button"
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => onUpdateShowData('active')}
          className={classNames({ selected: filter === 'active' })}
          type="button"
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => onUpdateShowData('completed')}
          className={classNames({ selected: filter === 'completed' })}
          type="button"
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TasksFilter.defaultProps = {
  onUpdateShowData: () => {},
  filter: '',
}

TasksFilter.propTypes = {
  onUpdateShowData: PropTypes.func,
  filter: PropTypes.string,
}

export default TasksFilter
