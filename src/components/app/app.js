import './app.css';

import Header from '../header';
import Main from '../main';
import { Component } from 'react';

export default class App extends Component {
  initialId = 0;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      isActive: true,
      id: this.initialId++,
    };
  }

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((todo) => todo.id === id);

    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  addItem = (string) => {
    const newItem = this.createTodoItem(string);

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((todo) => todo.id === id);

      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  tooggleActiveItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'isActive'),
      };
    });
  };

  render() {
    return (
      <>
        <Header onItemAdded={this.addItem} />
        <Main
          todoData={this.state.todoData}
          onDeleted={this.deleteItem}
          onActive={this.tooggleActiveItem}
        />
      </>
    );
  }
}
