/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable no-unused-vars */
import { Component } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

import containNumbersTest from '../../utils/containNumbersTest'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      label: '',
      min: '',
      sec: '',
    }

    this.onLabelChange = (e) => {
      this.setState(() => ({
        label: e.target.value,
      }))
    }

    this.onMinuteChange = (e) => {
      const inputValue = e.target.value

      if (containNumbersTest(inputValue)) {
        this.setState(() => ({
          min: inputValue,
        }))
      }
    }

    this.onSecondChange = (e) => {
      const inputValue = e.target.value

      if (containNumbersTest(inputValue)) {
        this.setState(() => ({
          sec: e.target.value,
        }))
      }
    }

    this.onSubmit = (e) => {
      e.preventDefault()

      const { label, min, sec } = this.state
      const trimedLabel = label.trim()

      const seconds = Number(min) * 60 + Number(sec)

      if (trimedLabel) {
        const { onItemAdded } = this.props
        onItemAdded(trimedLabel, seconds)

        this.setState(() => ({
          label: '',
          min: '',
          sec: '',
        }))
      }
    }
  }

  render() {
    const { label, min, sec } = this.state
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={label}
          onChange={this.onLabelChange}
          name="label"
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          onChange={this.onMinuteChange}
          name="min"
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          onChange={this.onSecondChange}
          name="sec "
        />
        <button className="visually-hidden" type="submit">
          qwe
        </button>
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
