import { useState } from 'react'
import './app.css'

import Header from '../header'
import Main from '../main'

let initialId = 0

function createTodoItem(label, seconds) {
  return {
    label,
    isActive: true,
    id: initialId++,
    date: new Date(),
    seconds,
  }
}

function toggleProperty(arr, id, propName) {
  const index = arr.findIndex((todo) => todo.id === id)

  const oldItem = arr[index]
  const newItem = { ...oldItem, [propName]: !oldItem[propName] }

  return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
}

function App() {
  const [todoData, setTodoData] = useState([
    createTodoItem('Task 1', 60),
    createTodoItem('Task 2', 120),
    createTodoItem('Task 3', 300),
  ])

  const [filter, setFilter] = useState('all')

  const addItem = (string, seconds) => {
    const newItem = createTodoItem(string, seconds)

    setTodoData((prev) => [...prev, newItem])
  }

  const editItem = (id, string, seconds) => {
    setTodoData((prev) => {
      const item = prev.find((todo) => todo.id === id)
      const newItem = { ...item }
      newItem.label = string
      newItem.seconds = seconds

      const index = prev.findIndex((todo) => todo.id === id)

      return [...prev.slice(0, index), newItem, ...prev.slice(index + 1)]
    })
  }

  const deleteItem = (id) => {
    setTodoData((prev) => {
      const index = prev.findIndex((todo) => todo.id === id)

      return [...prev.slice(0, index), ...prev.slice(index + 1)]
    })
  }

  const toggleActiveItem = (id) => {
    setTodoData((prev) => toggleProperty(prev, id, 'isActive'))
  }

  const updateShowData = (string) => {
    setFilter(string)
  }

  const clearCompleted = () => {
    setTodoData((prev) => {
      const idToDelete = prev.filter((item) => !item.isActive).map((item) => item.id)

      return prev.filter((item) => !idToDelete.includes(item.id))
    })
  }

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
      <Header onItemAdded={addItem} />

      <Main
        todoData={todoData}
        onEdited={editItem}
        filter={filter}
        filteredTodos={filteredTodos}
        onClearCompleted={clearCompleted}
        onUpdateShowData={updateShowData}
        onDeleted={deleteItem}
        onActive={toggleActiveItem}
      />
    </>
  )
}

export default App
