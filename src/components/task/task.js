/* eslint-disable no-unused-vars */
import './task.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import formatTime from '../../utils/formatTime'

function Task({ seconds: propSeconds, onEdited, id, label: propLabel, isActive, onDeleted, onActive, date }) {
  const [label, setLabel] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [seconds, setSeconds] = useState(propSeconds)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [timerID, setTimerID] = useState(null)

  const onEdit = () => {
    setIsEdit((prev) => !prev)
  }

  const onLabelChange = (e) => {
    clearInterval(timerID)
    setLabel(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const trimedLabel = label

    if (trimedLabel) {
      onEdited(id, trimedLabel, seconds)

      setLabel('')
      setIsEdit(false)
    }
  }

  function tick() {
    setSeconds((prevSeconds) => {
      if (prevSeconds === 0) {
        clearInterval(timerID)
        return 0
      }

      return prevSeconds - 1
    })
  }

  const launchTimer = () => {
    setTimerID(setInterval(() => tick(), 1000))

    setIsTimerOn(true)
  }

  const stopTimer = () => {
    clearInterval(timerID)

    setIsTimerOn(false)
  }

  useEffect(() => {
    clearInterval(timerID)
  }, [])

  let className = isActive ? 'active' : 'completed'

  if (isEdit) {
    className = 'editing'
  }

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onActive} defaultChecked={!isActive} />
        <label htmlFor="#">
          <span className="title">{propLabel}</span>
          <span className="description">
            {seconds && isTimerOn ? (
              <button
                type="button"
                className="icon icon-pause"
                aria-label="pause"
                onClick={stopTimer}
                // disabled={!isTimerOn}
              />
            ) : (
              <button
                type="button"
                className="icon icon-play"
                aria-label="play"
                onClick={launchTimer}
                // disabled={isTimerOn}
              />
            )}

            {` ${formatTime(seconds)}`}
          </span>
          <span className="description">{`created ${formatDistanceToNow(date)} ago`}</span>
        </label>
        <button className="icon icon-edit" type="button" aria-label="edit" onClick={onEdit} />
        <button className="icon icon-destroy" type="button" aria-label="delete" onClick={onDeleted} />
      </div>

      {className === 'editing' ? (
        <form onSubmit={onSubmit}>
          <input type="text" className="edit" defaultValue={propLabel} onChange={onLabelChange} />
        </form>
      ) : (
        ''
      )}
    </li>
  )
}

Task.defaultProps = {
  label: '',
  isActive: true,
  onDeleted: () => {},
  onActive: () => {},
  date: new Date(),
}

Task.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onDeleted: PropTypes.func,
  onActive: PropTypes.func,
  date: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number,
  }),
}

export default Task
