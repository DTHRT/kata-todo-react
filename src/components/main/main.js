import './main.css';

import TaskList from '../task-list';
import Footer from '../footer';

const Main = ({ todoData, onDeleted, onActive }) => {
  return (
    <section className="main">
      <TaskList todoData={todoData} onDeleted={onDeleted} onActive={onActive} />
      <Footer />
    </section>
  );
};

export default Main;
