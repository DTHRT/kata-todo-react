import './task-list.css';

import Task from '../task';
import { Component } from 'react';

export default class TaskList extends Component {
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
            key={todo.id}
          />
        ))}
      </ul>
    );
  }
}
