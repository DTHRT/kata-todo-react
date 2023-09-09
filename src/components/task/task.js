import { Component } from 'react';
import './task.css';

export default class Task extends Component {
  render() {
    const { label, isActive, onDeleted, onActive } = this.props;

    const className = isActive ? 'active' : 'completed';

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onActive} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created 5 minutes ago</span>
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
  }
}
