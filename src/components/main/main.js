import './main.css';

import TaskList from '../task-list';
import Footer from '../footer';

const Main = () => {
  return (
    <section className="main">
      <TaskList />
      <Footer />
    </section>
  );
};

export default Main;
