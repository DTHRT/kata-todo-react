import './main.css';

import TaskList from '../task-list';
import Footer from '../footer';
import PropTypes from 'prop-types';

const Main = ({
  todoData,
  filter,
  filteredTodos,
  onDeleted,
  onActive,
  onUpdateShowData,
  onClearCompleted,
}) => {
  return (
    <section className="main">
      <TaskList
        filteredTodos={filteredTodos}
        onDeleted={onDeleted}
        onActive={onActive}
      />

      <Footer
        todoData={todoData}
        onUpdateShowData={onUpdateShowData}
        filter={filter}
        onClearCompleted={onClearCompleted}
      />
    </section>
  );
};

Main.defaultProps = {
  todoData: [],
  filter: '',
  filteredTodos: [],
  onDeleted: () => {},
  onActive: () => {},
  onUpdateShowData: () => {},
  onClearCompleted: () => {},
};

Main.propTypes = {
  todoData: PropTypes.array,
  filter: PropTypes.string,
  filteredTodos: PropTypes.array,
  onDeleted: PropTypes.func,
  onActive: PropTypes.func,
  onUpdateShowData: PropTypes.func,
  onClearCompleted: PropTypes.func,
};

export default Main;
