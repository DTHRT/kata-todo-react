import './app.css'

import { Component } from 'react'

import Header from '../header'
import Main from '../main'

export default class App extends Component {
  constructor() {
    super()
    this.initialId = 0
    this.state = {
      todoData: [
        this.createTodoItem('Task 1', 60),
        this.createTodoItem('Task 2', 120),
        this.createTodoItem('Task 3', 300),
      ],

      filter: 'all',
    }

    this.addItem = (string, seconds) => {
      const newItem = this.createTodoItem(string, seconds)

      this.setState(({ todoData }) => ({
        todoData: [...todoData, newItem],
      }))
    }

    this.editItem = (id, string, seconds) => {
      this.setState(({ todoData }) => {
        const item = todoData.find((todo) => todo.id === id)
        const newItem = { ...item }
        newItem.label = string
        newItem.seconds = seconds

        const index = todoData.findIndex((todo) => todo.id === id)

        return {
          todoData: [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)],
        }
      })
    }

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const index = todoData.findIndex((todo) => todo.id === id)

        const newArray = [...todoData.slice(0, index), ...todoData.slice(index + 1)]

        return {
          todoData: newArray,
        }
      })
    }

    this.toggleProperty = (arr, id, propName) => {
      const index = arr.findIndex((todo) => todo.id === id)

      const oldItem = arr[index]
      const newItem = { ...oldItem, [propName]: !oldItem[propName] }

      return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
    }

    this.toggleActiveItem = (id) => {
      this.setState(({ todoData }) => ({
        todoData: this.toggleProperty(todoData, id, 'isActive'),
      }))
    }

    this.updateShowData = (string) => {
      this.setState(() => ({
        filter: string,
      }))
    }

    this.clearCompleted = () => {
      this.setState(({ todoData }) => {
        const idToDelete = todoData.filter((item) => !item.isActive).map((item) => item.id)

        const newArray = todoData.filter((item) => !idToDelete.includes(item.id))

        return {
          todoData: newArray,
        }
      })
    }
  }

  createTodoItem(label, seconds) {
    return {
      label,
      isActive: true,
      id: this.initialId++,
      date: new Date(),
      seconds,
    }
  }

  render() {
    const { todoData, filter } = this.state

    const filteredTodos = todoData.filter((item) => {
      if (filter === 'active') {
        return item.isActive === true
      }

      if (filter === 'completed') {
        return item.isActive === false
      }

      return item
    })

    return (
      <>
        <Header onItemAdded={this.addItem} />

        <Main
          todoData={todoData}
          filter={filter}
          filteredTodos={filteredTodos}
          onClearCompleted={this.clearCompleted}
          onUpdateShowData={this.updateShowData}
          onDeleted={this.deleteItem}
          onActive={this.toggleActiveItem}
          onEdited={this.editItem}
        />
      </>
    )
  }
}
