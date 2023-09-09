import './main.css';

import TaskList from '../task-list';
import Footer from '../footer';

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

export default Main;
