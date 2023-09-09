import { Component } from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState(() => {
      return {
        label: e.target.value,
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState(() => {
      return {
        label: '',
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.label}
          onChange={this.onLabelChange}
        />
      </form>
    );
  }
}
