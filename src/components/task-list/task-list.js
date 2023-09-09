import './task-list.css';

import Task from '../task';
import { Component } from 'react';

export default class TaskList extends Component {
  render() {
    const { todoData, onDeleted, onActive } = this.props;

    return (
      <ul className="todo-list">
        {todoData.map((todo) => (
          <Task
            label={todo.label}
            isActive={todo.isActive}
            onDeleted={() => onDeleted(todo.id)}
            onActive={() => onActive(todo.id)}
          />
        ))}
      </ul>
    );
  }
}
