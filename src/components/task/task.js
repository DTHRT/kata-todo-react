import './task.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types'
import { Component } from 'react'

export default class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      label: '',
      isEdit: false,
    }

    this.onEdit = () => {
      this.setState(() => ({
        isEdit: !this.isEdit,
      }))
    }

    this.onLabelChange = (e) => {
      this.setState(() => ({
        label: e.target.value,
      }))
    }

    this.onSubmit = (e) => {
      e.preventDefault()

      const { label } = this.state
      const trimedLabel = label

      if (trimedLabel) {
        const { onEdited, id } = this.props

        onEdited(id, trimedLabel)

        this.setState(() => ({
          label: '',
          isEdit: false,
        }))
      }
    }
  }

  render() {
    const { label, isActive, onDeleted, onActive, date } = this.props

    let className = isActive ? 'active' : 'completed'

    const { isEdit } = this.state

    if (isEdit) {
      className = 'editing'
    }

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onActive} defaultChecked={!isActive} />
          <label htmlFor="item">
            <span className="description">{label}</span>
            <span className="created">{`created ${formatDistanceToNow(date)} ago`}</span>
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
