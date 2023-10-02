import { useState } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

import containNumbersTest from '../../utils/containNumbersTest'

function NewTaskForm({ onItemAdded }) {
  const [label, setLabel] = useState('')
  const [time, setTime] = useState({
    min: '',
    sec: '',
  })

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  const onMinuteChange = (e) => {
    const inputValue = e.target.value

    if (containNumbersTest(inputValue)) {
      setTime((prev) => ({ ...prev, min: inputValue }))
    }
  }

  const onSecondChange = (e) => {
    const inputValue = e.target.value

    if (containNumbersTest(inputValue)) {
      setTime((prev) => ({ ...prev, sec: inputValue }))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const { min, sec } = time

    const trimedLabel = label.trim()

    const seconds = Number(min) * 60 + Number(sec)

    if (trimedLabel) {
      onItemAdded(trimedLabel, seconds)

      setLabel('')
      setTime({
        min: '',
        sec: '',
      })
    }
  }

  const { min, sec } = time

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={label}
        onChange={onLabelChange}
        name="label"
      />
      <input className="new-todo-form__timer" placeholder="Min" value={min} onChange={onMinuteChange} name="min" />
      <input className="new-todo-form__timer" placeholder="Sec" value={sec} onChange={onSecondChange} name="sec" />
      <button className="visually-hidden" type="submit">
        qwe
      </button>
    </form>
  )
}

NewTaskForm.defaultProps = {
  onItemAdded: () => {},
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
}

export default NewTaskForm
