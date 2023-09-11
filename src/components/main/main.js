import './main.css'

import PropTypes from 'prop-types'

import TaskList from '../task-list'
import Footer from '../footer'

console.log('lol')

function Main({ todoData, filter, filteredTodos, onDeleted, onActive, onUpdateShowData, onClearCompleted }) {
  return (
    <section className="main">
      <TaskList filteredTodos={filteredTodos} onDeleted={onDeleted} onActive={onActive} />

      <Footer
        todoData={todoData}
        onUpdateShowData={onUpdateShowData}
        filter={filter}
        onClearCompleted={onClearCompleted}
      />
    </section>
  )
}

Main.defaultProps = {
  todoData: [],
  filter: '',
  filteredTodos: [],
  onDeleted: () => {},
  onActive: () => {},
  onUpdateShowData: () => {},
  onClearCompleted: () => {},
}

Main.propTypes = {
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
  filter: PropTypes.string,
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
  onUpdateShowData: PropTypes.func,
  onClearCompleted: PropTypes.func,
}

export default Main
