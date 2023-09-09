import './header.css';

import NewTaskForm from '../new-task-form';
import PropTypes from 'prop-types';

const Header = ({ onItemAdded }) => {
  return (
    <header className="header">
      <h1>todos</h1>

      <NewTaskForm onItemAdded={onItemAdded} />
    </header>
  );
};

Header.defaultProps = {
  onItemAdded: () => {},
};

Header.propTypes = {
  onItemAdded: PropTypes.func,
};

export default Header;
