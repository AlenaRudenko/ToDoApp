import React from "react";
import "./App.css";
import { AppButton } from "./components/app-button/AppButton";
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
    text: "feed cat",
    isChecked: false,
    isFavourite: true,
    id: "4",
  },
];

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
  handleChange = (event) => {
    this.setState({ todoValue: event.target.value });
  };

  changeChecked3 = (id, field, value) => {
    this.setState({
      todos: this.state.todos.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    });
  };

  changeChecked2 = (id, isChecked) => {
    this.setState({
      todos: this.state.todos.map((item) =>
        item.id === id ? { ...item, isChecked } : item
      ),
    });
  };
  changeIsFavourite = (id, isFavourite) => {
    this.setState({
      todos: this.state.todos.map((item) =>
        item.id === id ? { ...item, isFavourite } : item
      ),
    });
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
          <div className="header">
            <div className="header__container">
              <h1 className="header__logo">ToDo App</h1>
              {this.state.isPushedPlus && (
                <div className="header__search--active">
                  <div className="header__searchContainer">
                    <input
                      onChange={this.handleChange}
                      type="text"
                      className={"header__placesearch"}></input>
                    <AppButton
                      onClickButton={() => {
                        this.setState({ todoValue: this.state.todoValue });
                        console.log(this.state.todoValue);

                        this.state.todos.push({
                          text: this.state.todoValue,
                          isChecked: false,
                          isFavourite: false,
                          id: `${this.state.todos.length + 1}`,
                          isPushEdit: false,
                        });

                        console.log(this.state.todos);
                        this.setState({ isCreate: !this.state.isCreate });
                        this.setState({
                          isPushedPlus: !this.state.isPushedPlus,
                        });
                      }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-send-fill"
                        viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"
                        />
                      </svg>
                    </AppButton>
                  </div>
                </div>
              )}

              <div class="big__button">
                <AppButton
                  isPushedPlus={this.state.isPushedPlus}
                  onClickButton={() => {
                    this.setState({ isPushedPlus: !this.state.isPushedPlus });
                  }}
                  size={"large"}>
                  +
                </AppButton>
              </div>
            </div>
          </div>
          <div className="main">
            {this.state.todos.map((item) => {
              return (
                <ToDoItem
                  text={item.text}
                  isChecked={item.isChecked}
                  isFavourite={item.isFavourite}
                  id={item.id}
                  delTodo={this.deleteTodo}
                  changeChecked={this.changeChecked}
                  changeTodoValue={this.changeTodoValue}
                  changeIsFavourite={this.changeIsFavourite}
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
