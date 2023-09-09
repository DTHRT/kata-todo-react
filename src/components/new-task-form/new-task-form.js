import { Component } from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static defaultProps = {
    onItemAdded: () => {},
  };

  static propTypes = {
    onItemAdded: PropTypes.func,
  };

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

    const trimedLabel = this.state.label.trim();

    if (trimedLabel !== '') {
      this.props.onItemAdded(trimedLabel);

      this.setState(() => {
        return {
          label: '',
        };
      });
    }
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
