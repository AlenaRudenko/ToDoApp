import React from "react";
import "./App.css";
import { AppButton } from "./components/app-button/AppButton";
import Header from "./components/header/Header";
import ToDoItem from "./components/todo/ToDoItem";

const mock = [
  {
    text: "wake up",
    isChecked: true,
    isFavourite: false,
    id: "1",
  },
  {
    text: "do bed",
    isChecked: false,
    isFavourite: false,
    id: "2",
  },
  {
    text: "feed cat",
    isChecked: false,
    isFavourite: true,
    id: "3",
  },
  {
    text: "do honework",
    isChecked: false,
    isFavourite: true,
    id: "4",
  },
];
// TODO:change default changed start name input
//TODO: Make header component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: mock,
      todoValue: "",
      isCreate: false,
    };
  }
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
  createTodo = () => {
    const newTodo = {
      text: this.state.todoValue,
      isChecked: false,
      isFavourite: false,
      id: `${this.state.todos.length + 1}`,
      isPushEdit: false,
    };
    this.setState(({ todoValue, isPushedPlus, todos }) => ({
      todoValue: todoValue,
      isPushedPlus: !isPushedPlus,
      todos: [newTodo, ...todos],
    }));
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
    console.log(this.state.todos);
    return (
      <div className="app">
        <div className="container">
          <Header />
          <div className="main">
            {this.state.todos.map((item) => {
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
            ;
          </div>
        </div>
      </div>
    );
  }
}

export default App;
