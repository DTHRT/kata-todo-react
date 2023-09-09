import './task.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

const Task = ({ label, isActive, onDeleted, onActive, date }) => {
  const className = isActive ? 'active' : 'completed';

  return (
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={onActive}
          defaultChecked={!isActive}
        />
        <label>
          <span className="description">{label}</span>
          <span className="created">
            created {formatDistanceToNow(date)} ago
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>

      {className === 'editing' ? (
        <input type="text" className="edit" defaultValue={label} />
      ) : (
        ''
      )}
    </li>
  );
};

Task.defaultProps = {
  label: '',
  isActive: true,
  onDeleted: () => {},
  onActive: () => {},
  date: new Date(),
};

Task.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onDeleted: PropTypes.func,
  onActive: PropTypes.func,
  date: PropTypes.object,
};

export default Task;
