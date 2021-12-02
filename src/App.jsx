import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import EditWindow from "./components/todo/EditWindow";
import ToDoItem from "./components/todo/ToDoItem";

const mock = [
  {
    text: "wake up",
    isChecked: true,
    isFavourite: false,
    id: "1",
    isPushEdit: false,
  },
  {
    text: "do bed",
    isChecked: false,
    isFavourite: false,
    id: "2",
    isPushEdit: false,
  },
  {
    text: "feed cat",
    isChecked: false,
    isFavourite: true,
    id: "3",
    isPushEdit: false,
  },
  {
    text: "feed cat",
    isChecked: false,
    isFavourite: true,
    id: "3",
    isPushEdit: false,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: mock,
    };
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item.id !== id;
      }),
    });
  };
  render() {
    return (
      <div className="app">
        <div className="container">
          <Header />
          <div className="main">
            {this.state.todos.map((item) => {
              return (
                <ToDoItem
                  text={item.text}
                  isChecked={item.isChecked}
                  isFavourite={item.isFavourite}
                  id={item.id}
                  delTodo={this.deleteTodo}
                  isPushEdit={item.isPushEdit}
                />
              );
            })}
          </div>
          <EditWindow isPushEdit={ToDoItem.isPushEdit} />
        </div>
      </div>
    );
  }
}

export default App;
