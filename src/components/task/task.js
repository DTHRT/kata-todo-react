import './task.css';

const Task = ({ className }) => {
  const description =
    className === 'completed'
      ? 'Completed task'
      : className === 'editing'
      ? 'Editing task'
      : 'Active task';

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>

      {className === 'editing' ? (
        <input type="text" className="edit" value="Editing task" />
      ) : (
        ''
      )}
    </li>
  );
};

export default Task;
