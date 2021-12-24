import React from "react";
import "./App.css";
import Filter from "./components/Filter";

import MainHeader from "./components/header/MainHeader";
import ToDoItem from "./components/todo/ToDoItem";

// TODO:новое поле тудушки createdat
// TODO:изучить объект date js

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoValue: "",
      isCreate: false,
      filterValue: "",
    };
  }

  componentDidMount() {
    const todoArray = localStorage.getItem("todos");
    if (todoArray) {
      this.setState({ todos: JSON.parse(todoArray) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.todos) !== JSON.stringify(this.state.todos)) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
      console.log("стал", this.state.todos, "был", prevState.todos);
    }
  }
  compareTodo = (value) => {
    this.setState({ filterValue: value });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item.id !== id;
      }),
    });
  };
  // changeChecked3 = (id, field, value) => {
  //   this.setState({
  //     todos: this.state.todos.map((item) =>
  //       item.id === id ? { ...item, [field]: value } : item
  //     ),
  //   });
  // };

  // changeChecked2 = (id, isChecked) => {
  //   this.setState({
  //     todos: this.state.todos.map((item) =>
  //       item.id === id ? { ...item, isChecked } : item
  //     ),
  //   });
  // };

  changeIsFavourite = (id, isFavourite) => {
    this.setState({
      todos: this.state.todos.map((item) =>
        item.id === id ? { ...item, isFavourite } : item
      ),
    });
  };

  createTodo = (value) => {
    const newTodo = {
      text: value,
      isChecked: false,
      isFavourite: false,
      id: `${this.state.todos.length + 1}`,
      isPushEdit: false,
    };
    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  changeTodoValue = (id, text) => {
    this.setState({
      todos: this.state.todos.map((item) =>
        item.id === id ? { ...item, text } : item
      ),
    });
  };

  changeChecked = (id, newIsCheckedValue) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: newIsCheckedValue };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    const aaa = "helloworld";
    console.log(aaa.startsWith("h"));
    return (
      <div className="app">
        <div className="container">
          <MainHeader createTodo={this.createTodo} />
          <Filter compareTodo={this.compareTodo} />
          <div className="main">
            {this.state.todos
              .filter((item) => {
                return item.text.startsWith(this.state.filterValue);
              })
              .map((item) => {
                return (
                  <ToDoItem
                    key={item.id}
                    text={item.text}
                    isChecked={item.isChecked}
                    isFavourite={item.isFavourite}
                    id={item.id}
                    delTodo={this.deleteTodo}
                    changeChecked={this.changeChecked}
                    changeTodoValue={this.changeTodoValue}
                    changeIsFavourite={this.changeIsFavourite}
                    createTodo={item.createTodo}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
