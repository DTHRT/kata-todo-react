import './task.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types'
import { Component } from 'react'

import formatTime from '../../utils/formatTime'

export default class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      label: '',
      isEdit: false,
      seconds: props.seconds,
      isTimerOn: false,
    }

    this.onEdit = () => {
      this.setState(() => ({
        isEdit: !this.isEdit,
      }))
    }

    this.onLabelChange = (e) => {
      clearInterval(this.timerID)

      this.setState(() => ({
        label: e.target.value,
      }))
    }

    this.onSubmit = (e) => {
      e.preventDefault()

      const { label, seconds } = this.state
      const trimedLabel = label

      if (trimedLabel) {
        const { onEdited, id } = this.props

        onEdited(id, trimedLabel, seconds)

        this.setState(() => ({
          label: '',
          isEdit: false,
        }))
      }
    }

    this.launchTimer = () => {
      this.timerID = setInterval(() => this.tick(), 1000)
      this.setState(() => ({
        isTimerOn: true,
      }))
    }

    this.stopTimer = () => {
      clearInterval(this.timerID)
      this.setState(() => ({
        isTimerOn: false,
      }))
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState((prevState) => {
      if (prevState.seconds === 0) {
        clearInterval(this.timerID)
        return {}
      }

      return {
        seconds: prevState.seconds - 1,
      }
    })
  }

  render() {
    const { label, isActive, onDeleted, onActive, date } = this.props

    let className = isActive ? 'active' : 'completed'

    const { isEdit } = this.state

    if (isEdit) {
      className = 'editing'
    }

    const { seconds, isTimerOn } = this.state

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onActive} defaultChecked={!isActive} />
          <label htmlFor="#">
            <span className="title">{label}</span>
            <span className="description">
              <button
                type="button"
                className="icon icon-play"
                aria-label="play"
                onClick={this.launchTimer}
                disabled={isTimerOn}
              />
              <button
                type="button"
                className="icon icon-pause"
                aria-label="pause"
                onClick={this.stopTimer}
                disabled={!isTimerOn}
              />
              {` ${formatTime(seconds)}`}
            </span>
            <span className="description">{`created ${formatDistanceToNow(date)} ago`}</span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="edit" onClick={this.onEdit} />
          <button className="icon icon-destroy" type="button" aria-label="delete" onClick={onDeleted} />
        </div>

        {className === 'editing' ? (
          <form onSubmit={this.onSubmit}>
            <input type="text" className="edit" defaultValue={label} onChange={this.onLabelChange} />
          </form>
        ) : (
          ''
        )}
      </li>
    )
  }
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
