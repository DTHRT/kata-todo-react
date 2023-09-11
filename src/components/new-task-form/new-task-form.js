import { Component } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      label: '',
    }

    this.onLabelChange = (e) => {
      this.setState(() => ({
        label: e.target.value,
      }))
    }

    this.onSubmit = (e) => {
      e.preventDefault()

      const { label } = this.state
      const trimedLabel = label.trim()

      if (trimedLabel) {
        const { onItemAdded } = this.props
        onItemAdded(trimedLabel)

        this.setState(() => ({
          label: '',
        }))
      }
    }
  }

  render() {
    const { label } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" value={label} onChange={this.onLabelChange} />
      </form>
    )
  }
}

NewTaskForm.defaultProps = {
  onItemAdded: () => {},
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
}
