import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header'
import AddTodo from './components/AddTodo';
import axios from 'axios';
// const uuid = require('uuid');

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }))

  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo =>
          todo.id !== id
        )]
      }))

  }

  addTodo = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => {
      res.data.id = Math.floor(Math.random() * 100000000);
      if (res.data.title) {
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      }
    })

  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App" >
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo} />
      </div>
    );
  }

}

export default App;
