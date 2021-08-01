import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import MainToDo from "./components/MainToDo";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Edit todo here",
          completed: true,
          toEdit: false,
        },
      ],
    };
  }
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  toggleEdit = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.toEdit = !todo.toEdit;
        }
        return todo;
      }),
    });
  };
  addToDo = (title) => {
    const tempToCheckEmpty = title;
    if (!tempToCheckEmpty.replace(/\s/g, "").length) {
      return window.confirm("Enter a text to add please");
    }
    const newToDo = {
      id: Math.random.toString(36).substr(2, 9),
      title,
      completed: false,
      toEdit: false,
    };
    this.setState({ todos: [newToDo, ...this.state.todos] });
  };
  delToDo = (id) => {
    if (!window.confirm("Are you sure to delete this item")) return;
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };
  updateToDo = (id, title) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id && title.trim() !== "") {
          todo.title = title;
        }
        return todo;
      }),
    });
  };
  render() {
    return (
      <div>
        <Form addToDo={this.addToDo} />
        <MainToDo
          todos={this.state.todos}
          updateToDo={this.updateToDo}
          delToDo={this.delToDo}
          toggleEdit={this.toggleEdit}
          toggleComplete={this.toggleComplete}
        ></MainToDo>
      </div>
    );
  }
}

export default App;
