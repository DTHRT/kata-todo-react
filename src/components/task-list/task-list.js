import './task-list.css';

import Task from '../task';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskList extends Component {
  static defaultProps = {
    filteredTodos: [],
    onDeleted: () => {},
    onActive: () => {},
  };

  static propTypes = {
    filteredTodos: PropTypes.array,
    onDeleted: PropTypes.func,
    onActive: PropTypes.func,
  };

  render() {
    const { filteredTodos, onDeleted, onActive } = this.props;

    return (
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Task
            label={todo.label}
            isActive={todo.isActive}
            onDeleted={() => onDeleted(todo.id)}
            onActive={() => onActive(todo.id)}
            date={todo.date}
            key={todo.id}
          />
        ))}
      </ul>
    );
  }
}
