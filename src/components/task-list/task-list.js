import './task-list.css'

import PropTypes from 'prop-types'

import Task from '../task'

function TaskList({ filteredTodos, onDeleted, onActive }) {
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <Task
          label={todo.label}
          isActive={todo.isActive}
          onDeleted={() => onDeleted(todo.id)}
          onActive={() => onActive(todo.id)}
          date={todo.date}
          key={`${todo.label}_${todo.id}`}
        />
      ))}
    </ul>
  )
}

TaskList.defaultProps = {
  filteredTodos: [],
  onDeleted: () => {},
  onActive: () => {},
}

TaskList.propTypes = {
  filteredTodos: PropTypes.arrayOf(
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
  onDeleted: PropTypes.func,
  onActive: PropTypes.func,
}

export default TaskList
